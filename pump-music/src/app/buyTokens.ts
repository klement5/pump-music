import { ethers } from "hardhat";

async function main() {
  const memecoinAddress = "0x..."; // Replace with the memecoin contract address
  const bnbAmount = "0.001"; // Amount of BNB to send

  const [user] = await ethers.getSigners();

  const Memecoin = await ethers.getContractFactory("BnbMemecoin");
  const memecoin = await Memecoin.attach(memecoinAddress); // Updated for ethers@6.x
  
  console.log("Buying tokens...");
  const tx = await memecoin.buyTokens({
      value: ethers.parseEther(bnbAmount), // Updated for ethers@6.x
  });
  await tx.wait(); // Wait for the transaction to be mined
  
  console.log("Tokens purchased! Transaction hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
