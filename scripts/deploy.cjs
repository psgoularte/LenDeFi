const hre = require("hardhat");

async function main() {
  console.log("🚀 Fazendo deploy do contrato LoanMarket...");

  // ✅ Use o nome do contrato (não do arquivo)
  const LoanMarket = await hre.ethers.getContractFactory("LoanMarket");
  const loanMarket = await LoanMarket.deploy();

  await loanMarket.waitForDeployment();
  console.log(`✅ LoanMarket deployed para: ${await loanMarket.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
