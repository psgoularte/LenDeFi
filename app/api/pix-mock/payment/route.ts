import { NextResponse } from 'next/server';
import { createWalletClient, http, isAddress, parseEther, BaseError } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';
import { Redis } from '@upstash/redis';

if (!process.env.SEPOLIA_URL || !process.env.PRIVATE_KEY || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    console.error("FATAL: Faltando uma ou mais variáveis de ambiente (SEPOLIA_URL, PRIVATE_KEY, UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN)");
    throw new Error("Configuração do servidor incompleta.");
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
    const { nome, cpf, email, enderecoEthereum, valorEth, emailCode } = body;

    const userCode = (emailCode || '').trim();
    const redisKey = `email-code:${email}`;
    
    const storedCodeFromRedis = await redis.get(redisKey);

    if (storedCodeFromRedis === null || storedCodeFromRedis === undefined) {
      return NextResponse.json({ error: "Código de verificação expirou ou não foi encontrado." }, { status: 400 });
    }

    const storedCodeAsString = String(storedCodeFromRedis);
    
    if (storedCodeAsString !== userCode) {
        return NextResponse.json({ error: "Código de verificação inválido." }, { status: 400 });
    }
    
    await redis.del(redisKey);


    console.log(`[${transactionId}] Verificação de e-mail bem-sucedida para ${nome}. Processando pagamento...`);
    const valueInWei = parseEther(valorEth);
    const txHash = await walletClient.sendTransaction({
      to: enderecoEthereum,
      value: valueInWei,
    });

    console.log(`[${transactionId}] SUCESSO! Hash da transação: ${txHash}`);
    return NextResponse.json({
        message: "Transação enviada com sucesso!",
        status: "SUBMITTED",
        transactionId: transactionId,
        transactionHash: txHash
    }, { status: 200 });

  } catch (error: unknown) {
    let errorMessage = "Ocorreu um erro desconhecido.";
    if (error instanceof BaseError) {
        errorMessage = error.shortMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    console.error(`[${transactionId}] ERRO CRÍTICO no manipulador de pagamento:`, errorMessage, error);
    return NextResponse.json({ error: `Falha ao processar a requisição: ${errorMessage}` }, { status: 500 });
  }
}