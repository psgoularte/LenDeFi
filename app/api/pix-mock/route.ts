require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Configurações Sepolia
const SEPOLIA_RPC = process.env.SEPOLIA_URL; 
const PRIVATE_KEY = process.env.PRIVATE_KEY; 

const provider = new ethers.JsonRpcProvider(SEPOLIA_RPC);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Mock Pix
app.post("/api/pagamento", async (req, res) => {
  const { nome, email, enderecoEthereum, valorEth } = req.body;

  if (!nome || !email || !enderecoEthereum || !valorEth) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  // Cria transação simulada
  const transactionId = `PIXFAKE-${Date.now()}`;
  res.json({
    transactionId,
    status: "PENDING",
  });

  console.log(`Pagamento iniciado: ${transactionId} para ${nome}`);

  // Simula confirmação após 5s
  setTimeout(async () => {
    console.log(`Pagamento confirmado: ${transactionId}`);
    try {
      const tx = await wallet.sendTransaction({
        to: enderecoEthereum,
        value: ethers.parseEther(valorEth),
      });
      await tx.wait();
      console.log(`ETH de teste enviado para ${enderecoEthereum}: ${tx.hash}`);
    } catch (err) {
      console.error("Erro ao enviar ETH:", err);
    }
  }, 5000);
});

// Test endpoint
app.get("/", (req, res) => {
  res.send("API Pix Mock + Sepolia ETH funcionando!");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
