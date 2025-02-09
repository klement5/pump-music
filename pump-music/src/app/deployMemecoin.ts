import { ethers } from "hardhat";
import fs from "fs";
import path from "path";

async function main() {
  // Load the ArtistRegistry contract address
  const artistRegistryAddress = "0x..."; // Replace with the deployed ArtistRegistry address

  // Load the ArtistRegistry ABI
  const artistRegistryPath = path.resolve(
    __dirname,
    "../artifacts/contracts/ArtistRegistry.sol/ArtistRegistry.json"
  );
  const artistRegistryAbi = JSON.parse(
    fs.readFileSync(artistRegistryPath, "utf-8")
  ).abi;

  // Connect to the ArtistRegistry contract
  const [deployer] = await ethers.getSigners();
  const artistRegistry = new ethers.Contract(
    artistRegistryAddress,
    artistRegistryAbi,
    deployer
  );

  // Artist details
  const spotifyId = "12345"; // Replace with the artist's Spotify ID
  const name = "ArianaCoin"; // Replace with the memecoin name
  const ticker = "ARIA"; // Replace with the memecoin symbol

  // Check if the artist already exists
  const artistInfo = await artistRegistry.artists(spotifyId);
  if (artistInfo.memecoinAddress !== ethers.ZeroAddress) {
    // Updated for ethers@6.x
    console.log(
      "Artist already registered with memecoin address:",
      artistInfo.memecoinAddress
    );
    return;
  }

  // Register the artist and deploy the memecoin contract
  console.log("Registering artist and deploying memecoin...");
  const tx = await artistRegistry.registerArtist(spotifyId, name, ticker);
  await tx.wait();

  // Fetch the memecoin address from the event logs
  const receipt = await ethers.provider.getTransactionReceipt(tx.hash);
  if (!receipt) {
    throw new Error("Transaction receipt not found");
  }

  const event = artistRegistry.interface.parseLog(receipt.logs[0]);
  if (!event) {
    throw new Error("Event not found in transaction logs");
  }

  const memecoinAddress = event.args.memecoinAddress;
  console.log("Memecoin deployed to:", memecoinAddress);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
