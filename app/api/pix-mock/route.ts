import 'dotenv/config'; 
import express from 'express';
import cors from 'cors';
import { createPublicClient, createWalletClient, http, isAddress, parseEther } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { sepolia } from 'viem/chains';

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// --- Environment Variable Check ---
if (!process.env.SEPOLIA_URL || !process.env.PRIVATE_KEY) {
  console.error("❌ FATAL ERROR: SEPOLIA_URL and PRIVATE_KEY must be set in your .env file");
  process.exit(1); 
}

const SEPOLIA_RPC = process.env.SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;

let walletClient;
let publicClient;

// --- Viem Client Initialization ---
try {
  const account = privateKeyToAccount(PRIVATE_KEY);
  walletClient = createWalletClient({ account, chain: sepolia, transport: http(SEPOLIA_RPC) });
  publicClient = createPublicClient({ chain: sepolia, transport: http(SEPOLIA_RPC) });
  console.log("✅ Successfully connected to Sepolia and loaded wallet.");
} catch (error: unknown) { 
    let errorMessage = "Failed to initialize Viem clients.";
    if (error instanceof Error) {
        
        errorMessage = `Failed to initialize Viem clients: ${error.message}`;
    }
    console.error("❌ FATAL ERROR:", errorMessage);
    process.exit(1);
}

// --- API Endpoint ---
app.post("/api/pagamento", async (req, res) => {
  console.log("Request body received:", req.body); 

  const { nome, cpf, enderecoEthereum, valorEth } = req.body;

  if (!nome || !cpf || !enderecoEthereum || !valorEth) {
    console.error("Validation failed. Missing fields:", { nome, cpf, enderecoEthereum, valorEth });
    return res.status(400).json({ error: "All fields are required" });
  }
  
  if (!isAddress(enderecoEthereum)) {
      return res.status(400).json({ error: "Invalid Ethereum address provided." });
  }

  const transactionId = `PIX-${Date.now()}`;
  res.json({
    message: "Payment received, ETH will be sent shortly.",
    transactionId,
    status: "PENDING",
  });

  console.log(`[${transactionId}] Payment received for ${nome} (CPF: ${cpf}). Processing...`);


  setTimeout(async () => {
    try {
      const valueInWei = parseEther(valorEth);
      console.log(`[${transactionId}] Sending ${valorEth} ETH to ${enderecoEthereum}...`);
      
      const txHash = await walletClient.sendTransaction({
        to: enderecoEthereum,
        value: valueInWei,
      });

      console.log(`[${transactionId}] Transaction sent. Hash: ${txHash}. Awaiting confirmation...`);
      await publicClient.waitForTransactionReceipt({ hash: txHash });
      console.log(`✅ [${transactionId}] SUCCESS! Test ETH sent.`);
    } catch (err: unknown) {
      let errorMessage = "An unknown error occurred during the transaction.";
      
      if (err instanceof Error) {
        if ('shortMessage' in err) {
            errorMessage = err.shortMessage as string;
        } else {
            errorMessage = err.message;
        }
      }
      
      console.error(`❌ [${transactionId}] FAILED to send ETH:`, errorMessage);
    }
  }, 5000);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});