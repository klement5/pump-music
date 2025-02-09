import { ethers } from "hardhat";

async function main() {
  const artistRegistryAddress = "0x..."; // Replace with the ArtistRegistry contract address
  const spotifyId = "12345"; // Replace with the artist's Spotify ID

  const [artist] = await ethers.getSigners();

  const ArtistRegistry = await ethers.getContractFactory("ArtistRegistry");
  const artistRegistry = ArtistRegistry.attach(artistRegistryAddress);

  console.log("Withdrawing fees...");
  const tx = await artistRegistry.withdrawFees(spotifyId);
  await tx.wait();

  console.log("Fees withdrawn! Transaction hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
