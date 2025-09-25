require("dotenv").config();
import express, { Request, Response } from 'express';
import cors from 'cors';
import { createPublicClient, createWalletClient, http, isAddress, parseEther, Hex } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

const app = express();
app.use(cors());
app.use(express.json());

interface PagamentoRequestBody {
  enderecoEthereum: string;
  valorEth: string;
}

const SEPOLIA_RPC = process.env.SEPOLIA_URL as string;
const PRIVATE_KEY = process.env.PRIVATE_KEY as Hex;

const account = privateKeyToAccount(PRIVATE_KEY);

const walletClient = createWalletClient({
  account,
  chain: sepolia,
  transport: http(SEPOLIA_RPC),
});

const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(SEPOLIA_RPC),
});

app.post("/api/pagamento", async (
    req: Request<Record<string, never>, Record<string, never>, PagamentoRequestBody>, 
    res: Response
) => {
  const { enderecoEthereum, valorEth } = req.body;

  if (!enderecoEthereum || !valorEth) {
    return res.status(400).json({ error: "Endereço Ethereum e valor são obrigatórios." });
  }

  if (!isAddress(enderecoEthereum)) {
    return res.status(400).json({ error: "O endereço Ethereum fornecido é inválido." });
  }

  let valorEmWei: bigint;
  try {
    valorEmWei = parseEther(valorEth);
  } catch { 
    return res.status(400).json({ error: "O valor em ETH fornecido é inválido." });
  }

  const transactionId = `PIX-${Date.now()}`;
  res.json({
    message: "Pagamento recebido, o ETH será enviado em breve.",
    transactionId,
    status: "PENDING",
  });

  console.log(`[${transactionId}] Pagamento recebido para ${enderecoEthereum}. Processando...`);

  setTimeout(async () => {
    try {
      console.log(`[${transactionId}] Enviando ${valorEth} ETH para ${enderecoEthereum}...`);
      
      const txHash = await walletClient.sendTransaction({
        to: enderecoEthereum,
        value: valorEmWei,
      });

      console.log(`[${transactionId}] Transação enviada. Hash: ${txHash}. Aguardando confirmação...`);

      const receipt = await publicClient.waitForTransactionReceipt({ hash: txHash });

      console.log(`[${transactionId}] SUCESSO! ETH enviado. Confirmado no bloco: ${receipt.blockNumber}`);

    } catch (err: unknown) { 
      let errorMessage = "Ocorreu uma falha desconhecida.";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.error(`[${transactionId}] FALHA ao enviar ETH para ${enderecoEthereum}:`, errorMessage);
    }
  }, 5000);
});

app.get("/", (req: Request, res: Response) => {
  res.send("API Pix Mock + Sepolia ETH funcionando com VIEM!");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});