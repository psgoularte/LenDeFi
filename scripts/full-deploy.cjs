// scripts/full-deploy.cjs
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Iniciando processo completo de deploy...");

try {
  // 1. Compilar
  console.log("📦 Compilando contratos...");
  execSync("npx hardhat compile", { stdio: "inherit" });

  // 2. Extrair ABI
  console.log("📄 Extraindo ABI...");
  execSync("node scripts/extract-abi.cjs", { stdio: "inherit" });

  // 3. Deploy na Sepolia
  console.log("🌐 Fazendo deploy na Sepolia...");
  execSync("npx hardhat run scripts/deploy-sepolia.cjs --network sepolia", {
    stdio: "inherit",
  });

  console.log("🎉 Processo completo concluído!");
} catch (error) {
  console.error("❌ Erro no processo:", error.message);
  process.exit(1);
}
