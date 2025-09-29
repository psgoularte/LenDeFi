import "@nomicfoundation/hardhat-toolbox";

/** @type import("hardhat/config").HardhatUserConfig */
const config = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },

  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/86e855d001ac4393a579b7b233080ad8",
      accounts: [
        "6592baa77ec36152b7c45d24c526a92277c910f706e746ffacb37caffaab2341",
      ],
    },
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },
  },

  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
  },
};

export default config;
