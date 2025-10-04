const hre = require("hardhat");

async function main() {
  console.log("🚀 Fazendo deploy do contrato LoanMarket...");

  // --- Parâmetros necessários para o deploy ---
  const feeWalletAddress = "0x0fadE5b267b572dc1F002d1b9148976cCCE9C8C8";
  const constructorArgs = [
    feeWalletAddress,                                // _feeWallet
    hre.ethers.parseEther("0.5"),                    // _bronzeLoanLimit (0.5 ETH)
    hre.ethers.parseEther("2"),                      // _silverLoanLimit (2 ETH)
    5,                                               // _silverReqRepaid
    75,                                              // _silverReqAvgScore
    10,                                              // _goldReqRepaid
    90                                               // _goldReqAvgScore
  ];

  const LoanMarket = await hre.ethers.getContractFactory("LoanMarket");

  const loanMarket = await LoanMarket.deploy(...constructorArgs);

  await loanMarket.waitForDeployment();
  console.log(`✅ LoanMarket deployed para: ${await loanMarket.getAddress()}`);
  console.log("Parâmetros de deploy:", constructorArgs);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});