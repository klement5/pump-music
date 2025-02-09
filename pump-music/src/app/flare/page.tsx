"use client";

import { useState } from "react";
import { BrowserProvider, ContractFactory } from "ethers"; // Updated import
import memecoinArtifact from "./../../../artifacts/contracts/BnbMemecoin.sol/BnbMemecoin.json";

export default function LaunchArtistMemecoin() {
  const [artistId, setArtistId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [ticker, setTicker] = useState<string>("");

  interface ContractArtifact {
    abi: any[]; // ABI is an array of objects
    bytecode: string; // Bytecode is a string
  }
  
  // Use `unknown` first, and then cast to `ContractArtifact` to ensure TypeScript accepts it
  const artifact = memecoinArtifact as ContractArtifact;

  async function handleLaunch() {
    // Validate input...
    setLoading(true);
    setMessage("Launching artist memecoin. Please wait...");
  
    try {
      const response = await fetch("http://localhost:3000/launch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // You might pass additional data if needed, e.g., the artistId.
        body: JSON.stringify({ artistId }),
      });
      const result = await response.json();
      if (result.success) {
        var spotifyId = artistId;
        if (!spotifyId  || !ticker) {
          // setError("Please fill out all fields.");
          setLoading(false);
          return;
        }
    
        try {
          if (!(window as any).ethereum) {
            throw new Error("MetaMask is not installed. Please install it to continue.");
          }

          const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
          console.log("Connected accounts:", accounts);
          
          // Request accounts directly – this should trigger a pop-up if needed.
          await (window as any).ethereum.request({ method: "eth_requestAccounts" });
          
          // Now wrap the provider for ethers usage.
          const provider = new BrowserProvider((window as any).ethereum);
          const signer = await provider.getSigner();
    
          // Deploy the memecoin contract
          const memecoinFactory = new ContractFactory(
            artifact.abi, // Use the typed ABI
            artifact.bytecode, // Use the typed bytecode
            signer
          );
          console.log("deploying")
          const memecoin = await memecoinFactory.deploy(
              ticker,
              ticker,
              signer.address,
              spotifyId
            );
    
          console.log("Deploying memecoin contract...");
          await memecoin.waitForDeployment();
    
          const memecoinAddress = await memecoin.getAddress();
          console.log("Memecoin deployed to:", memecoinAddress);
    
          // setSuccess(`Memecoin deployed! Contract address: ${memecoinAddress}`);
        } catch (err: any) {
          // setError(err.message || "An error occurred");
        } finally {
          setLoading(false);
        }
        setMessage("Artist memecoin launched successfully!");
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred while launching the memecoin.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gradient-to-r from-black to-gray-1000 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Launch Artist Token
        </h1>
        <input
          type="text"
          placeholder="Enter Spotify Artist ID"
          value={artistId}
          onChange={(e) => setArtistId(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="Enter Ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        />
        <div className="w-full p-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full">
          <button
            onClick={handleLaunch}
            className="w-full bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? "Processing..." : "Launch"}
          </button>
        </div>
        {message && (
          <div className="mt-4 text-center text-white">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}