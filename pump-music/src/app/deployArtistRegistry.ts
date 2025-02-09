import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying ArtistRegistry contract with the account:",
    deployer.address
  );

  const ArtistRegistry = await ethers.getContractFactory("ArtistRegistry");
  const artistRegistry = await ArtistRegistry.deploy();

  console.log("Waiting for deployment...");
  const deploymentReceipt = await artistRegistry.waitForDeployment(); // Correct way in Ethers v6

  const contractAddress = await artistRegistry.getAddress(); // Correct way to get contract address in Ethers v6

  console.log("ArtistRegistry deployed to:", contractAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
