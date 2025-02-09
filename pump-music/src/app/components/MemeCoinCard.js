"use client";

import React from "react";
import Image from "next/image";

function shortenAddress(address) {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

export default function MemeCoinCard({ name, imageUrl, bio, contractAddress }) {
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
          <p className="text-sm text-gray-300 mt-1">{shortenAddress(contractAddress)}</p>
        )}
        {bio && (
          <p className="text-sm text-gray-400 mt-1">{bio}</p>
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