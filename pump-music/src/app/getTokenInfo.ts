import { ethers } from "hardhat";

async function main() {
  const memecoinAddress = "0x..."; // Replace with the memecoin contract address

  const Memecoin = await ethers.getContractFactory("BnbMemecoin");
  const memecoin = Memecoin.attach(memecoinAddress);

  console.log("Fetching token info...");
  const info = await memecoin.getTokenInfo();

  console.log("Token Info:", {
    name: info.name,
    symbol: info.symbol,
    totalSupply: info.totalSupply.toString(),
    maxSupply: info.maxSupply.toString(),
    tokenPrice: info.tokenPrice.toString(),
    artistSpotifyId: info.artistSpotifyId,
    artistFees: info.artistFees.toString(),
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
