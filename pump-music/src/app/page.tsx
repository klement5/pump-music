"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import metamaskLogo from "./assets/metamask_logo.png";
import arrowRight from "./assets/arrow_right.png";

function shortenAddress(address) {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

// Reusable component for a memecoin card
function MemeCoinCard({ name, imageUrl, contractAddress }) {
  const shortAddress = shortenAddress(contractAddress);
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md flex items-center">
      {/* Left side: smaller image */}
      <div className="flex-shrink-0">
        <img
          src={imageUrl}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg"
        />
      </div>
      {/* Right side: text and buttons */}
      <div className="ml-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white">{name}</h2>
        {contractAddress && (
          <p className="text-sm text-gray-300 mt-1">{shortAddress}</p>
        )}
        {/* Buttons container */}
        <div className="mt-auto flex gap-2">
          <button className="w-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Buy
          </button>
          <button className="w-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Sell
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
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
          {memecoins.map((coin, index) => (
            <MemeCoinCard key={index} name={coin.name} imageUrl={coin.imageUrl} contractAddress={coin.contractAddress} />
          ))}
        </div>
      </main>
    </div>
  );
}