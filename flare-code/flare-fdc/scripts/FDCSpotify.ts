// scripts/FDCSpotify.ts
import { artifacts, ethers, run } from "hardhat";

// We'll use a loose type for the contract instances.
const SpotifyArtistList = artifacts.require("SpotifyArtistList");
const FDCHub = artifacts.require("@flarenetwork/flare-periphery-contracts/coston/IFdcHub.sol:IFdcHub");

// Simple hex encoding function
export function toHex(data: string): string {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    result += data.charCodeAt(i).toString(16);
  }
  return result.padEnd(64, "0");
}

const { 
  JQ_VERIFIER_URL_TESTNET, 
  JQ_API_KEY, 
  DA_LAYER_URL_COSTON2, 
  SPOTIFY_BEARER_TOKEN 
} = process.env;

const ARTIST_ID = process.env.ARTIST_ID || "aurora-nova";

const SPOTIFY_ARTIST_LIST_ADDRESS = "0xbe4b4A0B8Df6964e043D28B0c8cC9749F6392458"; // Your deployed contract address

// Prepares the attestation request and returns the data
export async function prepareRequest() {
  const attestationType = "0x" + toHex("IJsonApi");
  const sourceType = "0x" + toHex("WEB2");
  const requestData = {
    attestationType,
    sourceId: sourceType,
    requestBody: {
      url: `https://fake-spotify-ap-2ff1a43470ab.herokuapp.com/api/artist/${ARTIST_ID}`,
      postprocessJq: `{
                name: .name,
                imageUrl: .imageUrl,
                artistId: .id,
                bio: .bio
            }`,
      abi_signature: "{\"components\": [{\"internalType\": \"string\",\"name\": \"name\",\"type\": \"string\"},{\"internalType\": \"string\",\"name\": \"imageUrl\",\"type\": \"string\"},{\"internalType\": \"string\",\"name\": \"artistId\",\"type\": \"string\"},{\"internalType\": \"string\",\"name\": \"bio\",\"type\": \"string\"}],\"name\": \"task\",\"type\": \"tuple\", \"internalType\": \"struct DataTransportObject\"}"
    }
  };

  const response = await fetch(
    `${JQ_VERIFIER_URL_TESTNET}JsonApi/prepareRequest`,
    {
      method: "POST",
      headers: {
        "X-API-KEY": JQ_API_KEY || "",
        "Content-Type": "application/json"
      } as HeadersInit,
      body: JSON.stringify(requestData),
    }
  );
  const data = await response.json();
  console.log("Prepared request:", data);
  return data;
}

const firstVotingRoundStartTs = 1658429955 + 45;
const votingEpochDurationSeconds = 90;

// Submits the attestation request and returns the round ID
export async function submitRequest() {
  const requestData = await prepareRequest();

  const artistList: any = await SpotifyArtistList.at(SPOTIFY_ARTIST_LIST_ADDRESS);
  const fdcHUB = await FDCHub.at(await artistList.getFdcHub());

  const tx = await fdcHUB.requestAttestation(requestData.abiEncodedRequest, {
    value: ethers.parseEther("1").toString(),
  });
  console.log("Submitted request:", tx.tx);

  const blockNumber = tx.blockNumber;
  const block = await ethers.provider.getBlock(blockNumber);
  if (!block) {
    throw new Error("Block not found");
  }
  const roundId = Math.floor(
    (block.timestamp - firstVotingRoundStartTs) / votingEpochDurationSeconds
  );
  console.log(`Round ID: ${roundId}`);
  return roundId;
}

// Retrieves the proof for a given round ID
export async function getProof(roundId: number) {
  const request = await prepareRequest();
  const proofAndData = await fetch(
    `${DA_LAYER_URL_COSTON2}fdc/get-proof-round-id-bytes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      } as HeadersInit,
      body: JSON.stringify({
        votingRoundId: roundId,
        requestBytes: request.abiEncodedRequest,
      }),
    }
  );
  const data = await proofAndData.json();
  return data;
}

// Submits the proof to the contract using the provided roundId
export async function submitProof(roundId: number) {
  const dataAndProof = await getProof(roundId);
  console.log("Proof and data:", dataAndProof);

  // Quick fix: If proof is undefined, log a warning and substitute with an empty array.
  // (This is only for testing; ensure a valid proof is provided in production.)
  const proof = dataAndProof.proof || [];
  if (proof.length === 0) {
    console.warn("No proof returned from DA Layer API; using an empty array as fallback.");
  }

  const artistList: any = await SpotifyArtistList.at(SPOTIFY_ARTIST_LIST_ADDRESS);
  const tx = await artistList.addArtist({
    merkleProof: proof,
    data: dataAndProof.response,
  });
  console.log("Transaction hash:", tx.tx);
  console.log("All artists:", await artistList.getAllArtists());
}

// Main function: submit request, wait 90 seconds, then submit proof.
async function main() {
  try {
    console.log(ARTIST_ID);
    const roundId = await submitRequest();
    console.log("Request submitted. Round ID:", roundId);
    console.log("Waiting for 90 seconds for consensus...");
    await new Promise((resolve) => setTimeout(resolve, 90 * 1000));
    await submitProof(roundId);
    process.exit(0);
  } catch (error) {
    console.error("Error in main:", error);
    process.exit(1);
  }
}

main();