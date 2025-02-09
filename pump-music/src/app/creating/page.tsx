"use client"; // Add this directive to mark this file as a client component

import React, { useState } from "react";
import { BrowserProvider, ContractFactory } from "ethers"; // Updated import
import memecoinArtifact from "./../../../artifacts/contracts/BnbMemecoin.sol/BnbMemecoin.json";

// Adjust the type definition for the contract artifact
interface ContractArtifact {
  abi: any[]; // ABI is an array of objects
  bytecode: string; // Bytecode is a string
}

// Use `unknown` first, and then cast to `ContractArtifact` to ensure TypeScript accepts it
const artifact = memecoinArtifact as unknown as ContractArtifact;

const App: React.FC = () => {
  const [spotifyId, setSpotifyId] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [ticker, setTicker] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate input fields
    if (!spotifyId || !name || !ticker) {
      setError("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      // Check if MetaMask is installed
      if (!(window as any).ethereum) {
        throw new Error(
          "MetaMask is not installed. Please install it to continue."
        );
      }
      // Connect to the user's wallet (MetaMask)
      const provider = new BrowserProvider((window as any).ethereum); // Updated for ethers@6.x

      await provider.send("eth_requestAccounts", []);

      const signer = await provider.getSigner(); // Updated for ethers@6.x

      // Deploy the memecoin contract
      const memecoinFactory = new ContractFactory(
        artifact.abi, // Use the typed ABI
        artifact.bytecode, // Use the typed bytecode
        signer
      );

      console.log("Deploying memecoin contract...");
      const memecoin = await memecoinFactory.deploy(
        name,
        ticker,
        signer.address,
        spotifyId
      );
      await memecoin.waitForDeployment();

      const memecoinAddress = await memecoin.getAddress();
      console.log("Memecoin deployed to:", memecoinAddress);

      setSuccess(`Memecoin deployed! Contract address: ${memecoinAddress}`);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Memecoin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Spotify ID:</label>
          <input
            type="text"
            value={spotifyId}
            onChange={(e) => setSpotifyId(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Symbol:</label>
          <input
            type="text"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Creating..." : "Create Memecoin"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
};

export default App;
