import { ethers } from "hardhat";

async function main() {
  const memecoinAddress = "0x..."; // Replace with the memecoin contract address
  const tokenAmount = ethers.parseUnits("100", 18); // Updated for ethers@6.x

  const [user] = await ethers.getSigners();

  const Memecoin = await ethers.getContractFactory("BnbMemecoin");
  const memecoin = await Memecoin.attach(memecoinAddress); // Updated for ethers@6.x

  console.log("Selling tokens...");
  const tx = await memecoin.sellTokens(tokenAmount);
  await tx.wait(); // Wait for the transaction to be mined

  console.log("Tokens sold! Transaction hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
