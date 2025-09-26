import { NextResponse } from 'next/server';
import { createPublicClient, createWalletClient, http, isAddress, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

const SEPOLIA_RPC = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;

if (!SEPOLIA_RPC || !PRIVATE_KEY) {
  console.error("❌ ERRO CRÍTICO: As variáveis de ambiente SEPOLIA_URL e PRIVATE_KEY devem estar definidas.");
  throw new Error("Configuração do servidor incompleta: Faltam variáveis de ambiente.");
}

const account = privateKeyToAccount(PRIVATE_KEY);
const walletClient = createWalletClient({ account, chain: sepolia, transport: http(SEPOLIA_RPC) });
const publicClient = createPublicClient({ chain: sepolia, transport: http(SEPOLIA_RPC) });

async function processPixPayment(
  transactionId: string, 
  details: { nome: string; cpf: string; enderecoEthereum: `0x${string}`; valorEth: string }
) {
  const { nome, cpf, enderecoEthereum, valorEth } = details;
  console.log(`[${transactionId}] A processar pagamento para ${nome} (CPF: ${cpf})...`);

  try {
    const valueInWei = parseEther(valorEth);
    console.log(`[${transactionId}] A enviar ${valorEth} ETH para ${enderecoEthereum}...`);
    
    const txHash = await walletClient.sendTransaction({
      to: enderecoEthereum,
      value: valueInWei,
    });

    console.log(`[${transactionId}] Transação enviada. Hash: ${txHash}. A aguardar confirmação...`);
    await publicClient.waitForTransactionReceipt({ hash: txHash });
    console.log(`✅ [${transactionId}] SUCESSO! ETH de teste enviado.`);

  } catch (err: unknown) {
    let errorMessage = "Ocorreu um erro desconhecido durante a transação.";
    if (err instanceof Error) {
        if ('shortMessage' in err) {
            errorMessage = err.shortMessage as string;
        } else {
            errorMessage = err.message;
        }
    }
    console.error(`❌ [${transactionId}] FALHA ao enviar ETH:`, errorMessage);
  }
}


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, cpf, enderecoEthereum, valorEth } = body;
    
    if (!nome || !cpf || !enderecoEthereum || !valorEth) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }
    if (!isAddress(enderecoEthereum)) {
      return NextResponse.json({ error: "Endereço Ethereum inválido" }, { status: 400 });
    }

    const transactionId = `PIX-${Date.now()}`;

    processPixPayment(transactionId, { nome, cpf, enderecoEthereum, valorEth });

    return NextResponse.json({
      message: "Pagamento recebido, o ETH será enviado em breve.",
      transactionId: transactionId,
      status: "PENDING",
    }, { status: 202 });

  } catch (error: unknown) {
    let errorMessage = "Falha ao processar o pedido.";
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    console.error("Erro no handler POST da API de pagamento:", errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}