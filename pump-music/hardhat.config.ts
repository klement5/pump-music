import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers"; // Updated import
import "@nomicfoundation/hardhat-chai-matchers"; // Updated import
import "@typechain/hardhat";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC_URL,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v6", // Use ethers-v5
  },
};

export default config;
