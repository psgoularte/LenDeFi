import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { BaseError, createPublicClient, http, parseEther } from 'viem';
import { sepolia } from 'viem/chains';

// --- Environment Variable Checks ---
if (
    !process.env.UPSTASH_REDIS_REST_URL || 
    !process.env.UPSTASH_REDIS_REST_TOKEN ||
    !process.env.SEPOLIA_URL ||      
    !process.env.NEXT_PUBLIC_PLATFORM_WALLET_ADDRESS
    
) {
    console.error("FATAL: Missing required environment variables");
    throw new Error("Incomplete server configuration.");
}

// --- Redis Client Initialization ---
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// --- Viem Public Client for Blockchain Interaction ---
const viemClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_SEPOLIA_URL),
});

// --- Server-side constant for security check ---
const SERVER_PLATFORM_WALLET_ADDRESS = process.env.NEXT_PUBLIC_PLATFORM_WALLET_ADDRESS

export async function POST(request: Request) {
  const withdrawalId = `PIX-WITHDRAW-${Date.now()}`;

  try {
    const body = await request.json();
    const { 
        nome, 
        cpf, 
        email, 
        valorEth, 
        emailCode, 
        pixKey, 
        pixKeyType, 
        userTxHash 
    } = body;

    // --- Initial Validation ---
    if (!nome || !cpf || !email || !valorEth || !emailCode || !pixKey || !pixKeyType || !userTxHash) {
        return NextResponse.json({ error: "Incomplete data in the request." }, { status: 400 });
    }

    // 1. Email Code Validation (Lógica mantida)
    const userCode = (emailCode || '').trim();
    const redisKey = `email-code:${email}`;
    const storedCodeFromRedis = await redis.get(redisKey);

    if (!storedCodeFromRedis) {
      return NextResponse.json({ error: "Verification code has expired or was not found." }, { status: 400 });
    }
    if (String(storedCodeFromRedis) !== userCode) {
        return NextResponse.json({ error: "Invalid verification code." }, { status: 400 });
    }
    await redis.del(redisKey);

    try {
        console.log(`[${withdrawalId}] Verifying transaction hash: ${userTxHash}`);
        const transaction = await viemClient.getTransaction({ hash: userTxHash });

        // Verificação #1: O destino da transação é a nossa carteira
        const isDestinationCorrect = transaction.to?.toLowerCase() === SERVER_PLATFORM_WALLET_ADDRESS.toLowerCase();
        
        // Verificação #2: O valor enviado é o mesmo que o usuário declarou?
        const isAmountCorrect = transaction.value === parseEther(valorEth);

        if (!isDestinationCorrect) {
            console.error(`[SECURITY] Transaction ${userTxHash} destination mismatch. Expected ${SERVER_PLATFORM_WALLET_ADDRESS}, got ${transaction.to}`);
            throw new Error("Transaction destination address is incorrect.");
        }
        if (!isAmountCorrect) {
            console.error(`[SECURITY] Transaction ${userTxHash} amount mismatch. Expected ${parseEther(valorEth)}, got ${transaction.value}`);
            throw new Error("Transaction amount is incorrect.");
        }
        
        console.log(`[${withdrawalId}] Transaction ${userTxHash} successfully verified on-chain.`);

    } catch (e) {
        // Este bloco captura erros tanto da busca da transação (ex: hash inválido) quanto das nossas verificações.
        const errorMessage = e instanceof Error ? e.message : "Could not find or verify transaction hash.";
        return NextResponse.json({ error: errorMessage }, { status: 400 });
    }
    
    // 3. Logging and Final Response
    // Se chegamos aqui, a transação foi verificada com sucesso.
    console.log(`[${withdrawalId}] SUCCESS! Verified withdrawal request received.`);
    console.log(`  - User: ${nome} (CPF: ${cpf})`);
    console.log(`  - Amount: ${valorEth} ETH`);
    console.log(`  - PIX Key: ${pixKey} (Type: ${pixKeyType})`);
    console.log(`  - User's transaction hash (ETH sent): ${userTxHash}`);
    console.log(`  - ACTION: Queue PIX payment to the user.`);

    return NextResponse.json({
        message: "Withdrawal request received and verified! The PIX will be processed shortly.",
        status: "VERIFIED",
        withdrawalId: withdrawalId,
    }, { status: 200 });

  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof BaseError) {
        errorMessage = error.shortMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error(`[${withdrawalId}] CRITICAL ERROR in withdrawal handler:`, errorMessage, error);
    return NextResponse.json({ error: `Failed to process the request: ${errorMessage}` }, { status: 500 });
  }
}