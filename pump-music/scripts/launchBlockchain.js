// scripts/launchBlockchain.js
import { artifacts, ethers } from "hardhat";

const SpotifyArtistList = artifacts.require("SpotifyArtistList");
const FDCHub = artifacts.require("@flarenetwork/flare-periphery-contracts/coston/IFdcHub.sol:IFdcHub");

// Simple hex encoding function
export function toHex(data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    result += data.charCodeAt(i).toString(16);
  }
  return result.padEnd(64, "0");
}

const { 
  JQ_VERIFIER_URL_TESTNET, 
  JQ_API_KEY, 
  DA_LAYER_URL_COSTON2 
} = process.env;

const ARTIST_ID = "aurora-nova"; // Replace as needed
const SPOTIFY_ARTIST_LIST_ADDRESS = "0xB4366cd3F77F37937d97925711f80d9fCc4B4655"; // Your deployed contract address

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
        "X-API-KEY": JQ_API_KEY,
        "Content-Type": "application/json",
      },
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

  const artistList = await SpotifyArtistList.at(SPOTIFY_ARTIST_LIST_ADDRESS);
  const fdcHUB = await FDCHub.at(await artistList.getFdcHub());

  const tx = await fdcHUB.requestAttestation(requestData.abiEncodedRequest, {
    value: ethers.parseEther("1").toString(),
  });
  console.log("Submitted request:", tx.tx);

  const blockNumber = tx.blockNumber;
  const block = await ethers.provider.getBlock(blockNumber);
  const roundId = Math.floor(
    (block.timestamp - firstVotingRoundStartTs) / votingEpochDurationSeconds
  );
  console.log(`Round ID: ${roundId}`);
  return roundId;
}

// Retrieves the proof for a given round ID
export async function getProof(roundId) {
  const request = await prepareRequest();
  const proofAndData = await fetch(
    `${DA_LAYER_URL_COSTON2}fdc/get-proof-round-id-bytes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        votingRoundId: roundId,
        requestBytes: request.abiEncodedRequest,
      }),
    }
  );

  const data = await proofAndData.json();
  return data;
}

// Submits the proof to the contract
export async function submitProof() {
  const TARGET_ROUND_ID = 895771; // Replace with the appropriate round ID
  const dataAndProof = await getProof(TARGET_ROUND_ID);
  console.log("Proof and data:", dataAndProof);
  const artistList = await SpotifyArtistList.at(SPOTIFY_ARTIST_LIST_ADDRESS);
  const tx = await artistList.addArtist({
    merkleProof: dataAndProof.proof,
    data: dataAndProof.response,
  });
  console.log("Transaction hash:", tx.tx);
  console.log("All artists:", await artistList.getAllArtists());
}