// scripts/extract-abi.cjs
const fs = require("fs");
const path = require("path");

async function generateLoanABI() {
  try {
    // Caminho do artifact do contrato LoanMarket
    const artifactPath = path.join(
      __dirname,
      "../artifacts/contracts/Loan.sol/LoanMarket.json"
    );

    if (!fs.existsSync(artifactPath)) {
      throw new Error(`Artifact não encontrado em: ${artifactPath}`);
    }

    const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));
    if (!artifact.abi) {
      throw new Error("ABI não encontrado no artifact!");
    }

    // Conteúdo do arquivo gerado
    const fileContent = `// Arquivo gerado automaticamente - não edite manualmente
// Data: ${new Date().toISOString()}

export const LoanMarketABI = ${JSON.stringify(artifact.abi, null, 2)} as const;

// ⚠️ ATUALIZE ESTE ENDEREÇO APÓS O DEPLOY
export const LOAN_MARKET_ADDRESS = "0x0000000000000000000000000000000000000000" as const;

export const CONTRACTS = {
  LoanMarket: {
    abi: LoanMarketABI,
    address: LOAN_MARKET_ADDRESS
  }
} as const;
`;

    // Cria diretório se não existir
    const outputDir = path.join(__dirname, "../app/lib");
    fs.mkdirSync(outputDir, { recursive: true });

    // Escreve o arquivo
    const outputPath = path.join(outputDir, "contracts.ts");
    fs.writeFileSync(outputPath, fileContent, "utf8");

    console.log(`✅ ABI extraído com sucesso!`);
    console.log(`📁 Arquivo gerado em: ${outputPath}`);
    console.log(
      "⚠️ Não esqueça de atualizar LOAN_MARKET_ADDRESS após o deploy!"
    );
  } catch (error) {
    console.error("❌ Erro ao extrair ABI:", error.message);
    process.exit(1);
  }
}

generateLoanABI();
