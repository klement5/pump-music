"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import metamaskLogo from "../assets/metamask_logo.png";
import arrowRight from "../assets/arrow_right.png";

// Helper function to shorten a contract address.
function shortenAddress(address) {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

// Reusable component for a community post card
function CommunityPostCard({ title, content, artist, avatarUrl, contractAddress }) {
  const [likes, setLikes] = useState(0);
  const shortAddress = shortenAddress(contractAddress);

  return (
    <div className="bg-gradient-to-r from-black to-gray-900 p-4 rounded-lg shadow-lg w-full max-w-md">
      {/* Author info */}
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={artist}
            width={48}
            height={48}
            className="rounded-full"
          />
        </div>
        <div className="ml-3">
          <h2 className="text-lg font-bold text-white">{artist}</h2>
          {contractAddress && (
            <p className="text-sm text-gray-300">{shortAddress}</p>
          )}
        </div>
      </div>
      {/* Post details */}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{content}</p>
      {/* Like button and counter */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setLikes(likes + 1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Like
        </button>
        <span className="text-white">{likes} Likes</span>
      </div>
    </div>
  );
}

export default function CommunityPostsPage() {
  // Example posts array representing artists who need funds to produce music.
  const posts = [
    {
      title: "Need Funding for My New Album",
      content: "I'm an independent artist working on my new album. I need funds for studio time and production. Your support can make this project a reality!",
      artist: "Alice",
      avatarUrl: "https://picsum.photos/seed/alice/48",
      contractAddress: "0xab61cf57e9f1234567890abcdef51b39a00000000",
    },
    {
      title: "Support Our Tour!",
      content: "Our band is gearing up for a tour and we need funds for travel and venue bookings. Help us bring our music to more fans!",
      artist: "Bob Band",
      avatarUrl: "https://picsum.photos/seed/bob/48",
      contractAddress: "0xbc72df68a0f234567890abcdef1234567890ab1c00",
    },
    {
      title: "EP Recording Funding Needed",
      content: "I'm recording an EP and need financial support to secure a studio and a producer. Every bit helps and makes a huge difference.",
      artist: "Charlie",
      avatarUrl: "https://picsum.photos/seed/charlie/48",
      contractAddress: "0xcd83ef79b1f34567890abcdef1234567890bc2d00",
    },
    // Add additional posts as desired...
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
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Community Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {posts.map((post, index) => (
            <CommunityPostCard
              key={index}
              title={post.title}
              content={post.content}
              artist={post.artist}
              avatarUrl={post.avatarUrl}
              contractAddress={post.contractAddress}
            />
          ))}
        </div>
      </main>
    </div>
  );
}