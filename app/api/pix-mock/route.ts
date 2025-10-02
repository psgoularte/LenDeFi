import { NextResponse } from 'next/server';
import { createPublicClient, createWalletClient, http, isAddress, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';


const SEPOLIA_RPC = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;

if (!SEPOLIA_RPC || !PRIVATE_KEY) {
  console.error("ERRO CRÍTICO: As variáveis de ambiente SEPOLIA_URL e PRIVATE_KEY devem estar definidas.");
  throw new Error("Configuração do servidor incompleta: Faltam variáveis de ambiente.");
}

const account = privateKeyToAccount(PRIVATE_KEY);
const walletClient = createWalletClient({ account, chain: sepolia, transport: http(SEPOLIA_RPC) });



export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, cpf, telefone, enderecoEthereum, valorEth } = body;
    
    if (!nome || !cpf || !telefone || !enderecoEthereum || !valorEth) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 });
    }
    if (!isAddress(enderecoEthereum)) {
      return NextResponse.json({ error: "Endereço Ethereum inválido" }, { status: 400 });
    }

    const transactionId = `PIX-${Date.now()}`;
    console.log(`[${transactionId}] A processar pagamento para ${nome} (CPF: ${cpf})...`);

    // TENTA ENVIAR A TRANSAÇÃO (A PARTE RÁPIDA)
    try {
      const valueInWei = parseEther(valorEth);
      console.log(`[${transactionId}] A enviar ${valorEth} ETH para ${enderecoEthereum}...`);
      
      // **MUDANÇA PRINCIPAL AQUI**
      // 1. Usamos 'await' para esperar o envio e obter o hash.
      const txHash = await walletClient.sendTransaction({
        to: enderecoEthereum,
        value: valueInWei,
      });

      // 2. REMOVEMOS a espera pela confirmação (a parte lenta).
      // await publicClient.waitForTransactionReceipt({ hash: txHash });

      console.log(`[${transactionId}] SUCESSO! Transação enviada com hash: ${txHash}`);
      
      // 3. Retornamos o sucesso com o hash da transação.
      return NextResponse.json({
        message: "Transação enviada com sucesso! A confirmação pode levar alguns instantes na rede.",
        status: "SUBMITTED",
        transactionId: transactionId,
        transactionHash: txHash, // Devolve o hash para o frontend!
      }, { status: 200 }); // 200 OK

    } catch (err: any) {
      const errorMessage = err.shortMessage || err.message || "Erro desconhecido.";
      console.error(`[${transactionId}] FALHA ao enviar ETH:`, errorMessage);
      return NextResponse.json({ error: `Falha ao enviar transação: ${errorMessage}` }, { status: 500 });
    }

  } catch (error: any) {
    console.error("Erro no handler POST da API de pagamento:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}