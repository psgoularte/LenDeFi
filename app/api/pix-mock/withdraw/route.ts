import { NextResponse } from 'next/server';
import { createPublicClient, http, Hash } from 'viem';
import { sepolia } from 'viem/chains';

if (!process.env.SEPOLIA_URL || !process.env.PLATFORM_WALLET_ADDRESS) {
  console.error("FATAL: Faltando uma ou mais variáveis de ambiente (SEPOLIA_RPC_URL, PLATFORM_WALLET_ADDRESS)");
  throw new Error("Configuração do servidor incompleta para verificação de transação.");
}

const publicClient = createPublicClient({
  chain: sepolia,
  transport: http(process.env.SEPOLIA_RPC_URL),
});

const PLATFORM_WALLET = process.env.PLATFORM_WALLET_ADDRESS.toLowerCase();

export async function POST(request: Request) {
  const withdrawalId = `PIX-WITHDRAW-${Date.now()}`;

  try {
    const body = await request.json();
    const { nome, cpf, chavePix, valorEth, blockchainTxHash } = body;

    if (!nome || !cpf || !chavePix || !valorEth || !blockchainTxHash) {
      return NextResponse.json({ error: "Dados incompletos para processar o saque." }, { status: 400 });
    }

    console.log(`[${withdrawalId}] Recebida nova solicitação de saque PIX para ${nome}.`);
    console.log(` > Hash da Transação: ${blockchainTxHash}`);
    
    // --- INÍCIO DA LÓGICA DE VERIFICAÇÃO ---
    console.log(`[${withdrawalId}] Verificando transação no blockchain...`);

    const txHash = blockchainTxHash as Hash;
    const transaction = await publicClient.getTransaction({
      hash: txHash,
    });

    // Se a transação não for encontrada (ou ainda não minerada)
    if (!transaction) {
      console.error(`[${withdrawalId}] ERRO: Transação não encontrada no blockchain.`);
      return NextResponse.json({ error: "Falha na verificação: Transação não encontrada." }, { status: 400 });
    }
    
    // A VERIFICAÇÃO MAIS IMPORTANTE: O ETH foi enviado para o endereço correto?
    if (!transaction.to || transaction.to.toLowerCase() !== PLATFORM_WALLET) {
      console.error(`[${withdrawalId}] ALERTA DE SEGURANÇA: A transação foi enviada para o endereço errado!`);
      console.error(` > Esperado: ${PLATFORM_WALLET}`);
      console.error(` > Recebido: ${transaction.to?.toLowerCase()}`);
      return NextResponse.json({ error: "Falha na verificação: O destinatário da transação é inválido." }, { status: 400 });
    }

    console.log(`[${withdrawalId}] SUCESSO: Verificação da transação concluída. Destinatário é válido.`);
    // --- FIM DA LÓGICA DE VERIFICAÇÃO ---

    console.log(`[${withdrawalId}] SIMULAÇÃO: Iniciando transferência PIX para a chave ${chavePix}.`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula processamento

    console.log(`[${withdrawalId}] SUCESSO! Saque PIX para ${nome} processado.`);

    return NextResponse.json({
      message: "Saque PIX processado com sucesso!",
      status: "COMPLETED",
      withdrawalId: withdrawalId,
    }, { status: 200 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro desconhecido.";
    console.error(`[${withdrawalId}] ERRO CRÍTICO no manipulador de saque:`, errorMessage, error);
    return NextResponse.json({ error: `Falha ao processar a requisição: ${errorMessage}` }, { status: 500 });
  }
}