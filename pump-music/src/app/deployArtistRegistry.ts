import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying ArtistRegistry contract with the account:",
    deployer.address
  );

  const ArtistRegistry = await ethers.getContractFactory("ArtistRegistry");
  const artistRegistry = await ArtistRegistry.deploy();

  await artistRegistry.deployed();

  console.log("ArtistRegistry deployed to:", artistRegistry.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
