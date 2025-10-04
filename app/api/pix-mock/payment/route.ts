import { NextResponse } from 'next/server';
import { createWalletClient, http, isAddress, parseEther, BaseError } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { Redis } from '@upstash/redis';

if (!process.env.SEPOLIA_URL || !process.env.PRIVATE_KEY || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.error("FATAL: Missing one or more environment variables");
    throw new Error("Server configuration incomplete.");
}

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({ account, chain: sepolia, transport: http(process.env.SEPOLIA_URL) });

export async function POST(request: Request) {
  const transactionId = `PIX-REQ-${Date.now()}`;

  try {
    const body = await request.json();
    const { nome, telefone, enderecoEthereum, valorEth, smsCode } = body;

    const sanitizedPhone = (telefone || '').replace(/\D/g, '');
    const userCode = (smsCode || '').trim();
    const redisKey = `sms-code:${sanitizedPhone}`;
    
    const storedCodeFromRedis = await redis.get(redisKey);

    if (storedCodeFromRedis === null || storedCodeFromRedis === undefined) {
      console.error(`[${transactionId}] FAILED. No code found in Redis for key: ${redisKey}`);
      return NextResponse.json({ error: "Verification code has expired or was not found." }, { status: 400 });
    }

    const storedCodeAsString = String(storedCodeFromRedis);
    
    if (storedCodeAsString !== userCode) {
        console.error(`[${transactionId}] FAILED. Codes do not match. User: '${userCode}', Stored: '${storedCodeAsString}'`);
        return NextResponse.json({ error: "Invalid verification code." }, { status: 400 });
    }
    
    console.log(`[${transactionId}] Verification successful. Deleting code.`);
    await redis.del(redisKey);

    const valueInWei = parseEther(valorEth);
    const txHash = await walletClient.sendTransaction({ to: enderecoEthereum, value: valueInWei });

    console.log(`[${transactionId}] SUCCESS! Transaction hash: ${txHash}`);
    return NextResponse.json({
        message: "Transaction sent successfully!",
        status: "SUBMITTED",
        transactionId: transactionId,
        transactionHash: txHash
    }, { status: 200 });

  } catch (error: unknown) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof BaseError) errorMessage = error.shortMessage;
    else if (error instanceof Error) errorMessage = error.message;

    console.error(`[${transactionId}] CRITICAL ERROR in handler:`, errorMessage, error);
    return NextResponse.json({ error: `Failed to process request: ${errorMessage}` }, { status: 500 });
  }
}