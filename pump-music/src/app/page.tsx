"use client";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Image from "next/image"; // Import Next.js Image component
import metamaskLogo from "./assets/metamask_logo.png";
import arrowRight from "./assets/arrow_right.png";
import MemeCoinCard from "./components/MemeCoinCard";
import contractArtifact from "../../artifacts/contracts/SpotifyArtistList.sol/SpotifyArtistList.json";

const CONTRACT_ADDRESS = "0xbe4b4A0B8Df6964e043D28B0c8cC9749F6392458";

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadArtists() {
      setLoading(true);
      try {
        // Ensure MetaMask is available
        if (!window.ethereum) {
          console.error("MetaMask is not available");
          setLoading(false);
          return;
        }
        // Connect to the user's wallet (you might not need to request accounts if it's already connected)
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractArtifact.abi, provider);
        // Call getAllArtists() to fetch data from the contract
        const data = await contract.getAllArtists();
        console.log("Artists from contract:", data);
        // Assume that each element of data is an object with { name, imageUrl, bio }
        setArtists(data);
      } catch (error) {
        console.error("Error loading artists:", error);
      }
      setLoading(false);
    }
    loadArtists();
  }, []);

  // Example memecoins array (you can replace the image URL with your actual images)
  const memecoins = [
    { 
      name: "Memecoin A", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xab61cf57e9f1234567890abcdef51b39a00000000" 
    },
    { 
      name: "Memecoin B", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xbc72df68a0f234567890abcdef1234567890ab1c00" 
    },
    { 
      name: "Memecoin C", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xcd83ef79b1f34567890abcdef1234567890bc2d00" 
    },
    { 
      name: "Memecoin D", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xde94f087c2f4567890abcdef1234567890cd3e00" 
    },
    { 
      name: "Memecoin E", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xefa5f198d3f567890abcdef1234567890de4f00" 
    },
    { 
      name: "Memecoin F", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0xf0b6f2a9e4f67890123abcdef1234567890ef5a00" 
    },
    { 
      name: "Memecoin G", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0x1a2b3c4d5e6f78901234567890abcdef1234567800" 
    },
    { 
      name: "Memecoin H", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0x2b3c4d5e6f7a8901234567890abcdef2345678900" 
    },
    { 
      name: "Memecoin I", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0x3c4d5e6f7a8b901234567890abcdef3456789ab00" 
    },
    { 
      name: "Memecoin J", 
      imageUrl: "https://picsum.photos/200",
      contractAddress: "0x4d5e6f7a8b9c01234567890abcdef456789abcd00" 
    },
  ];

  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  useEffect(() => {
    async function checkMetaMaskConnection() {
      if (typeof window !== "undefined" && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          setIsMetaMaskConnected(accounts.length > 0);
        } catch (err) {
          console.error("Error checking MetaMask connection", err);
        }
      }
    }
    checkMetaMaskConnection();

    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setIsMetaMaskConnected(accounts.length > 0);
      });
    }
  }, []);

  const connectMetaMask = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        setIsMetaMaskConnected(accounts.length > 0);
      } catch (error) {
        console.error("Failed to connect MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it: https://metamask.io/download.html");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation Menu */}
      <header className="bg-gray-800 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center px-4">
          <div className="text-lg font-bold">bump.artist</div>
          <ul className="flex space-x-6">
            <li>
              <a href="flare" className="hover:text-gray-300">
                Launch
              </a>
            </li>
            <li>
              <a href="for-artist" className="hover:text-gray-300">
                For Artists
              </a>
            </li>
            <li>
              <a href="posts" className="hover:text-gray-300">
                Posts
              </a>
            </li>
            <li>
            <button
              onClick={connectMetaMask}
              className={`flex items-center px-3 rounded ${
                isMetaMaskConnected ? "bg-green-800" : "bg-blue-500"
              }`}
            >
              {isMetaMaskConnected ? (
                <>
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />
                  <span className="text-white">Connected</span>
                </>
              ) : (
                <>
                  <Image src={metamaskLogo} alt="MetaMask Logo" width={24} height={24} className="mr-2" />
                  <span className="text-white">Connect</span>
                  <Image src={arrowRight} alt="Arrow Right" width={16} height={16} className="ml-2" />
                </>
              )}
            </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artists.map((artist, index) => (
            <MemeCoinCard
              key={index}
              name={artist.name}
              contractAddress={"0x4d5e6f7a8b9c01234567890abcdef456789abcd00"}
              imageUrl={artist.imageUrl}
              bio={artist.bio}
            />
          ))}
          {/* {memecoins.map((coin, index) => (
            <MemeCoinCard key={index} name={coin.name} imageUrl={coin.imageUrl} contractAddress={coin.contractAddress} />
          ))} */}
        </div>
      </main>
    </div>
  );
}