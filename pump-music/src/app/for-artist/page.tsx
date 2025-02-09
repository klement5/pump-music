"use client";

import { useState } from "react";

export default function LaunchArtistMemecoin() {
  const [artistId, setArtistId] = useState("");

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gradient-to-r from-black to-gray-1000 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Verify Artist Identity
        </h1>
        <input
          type="text"
          placeholder="Enter Spotify Artist ID"
          value={artistId}
          onChange={(e) => setArtistId(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
        />
        <div className="w-full p-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full">
          <button
            className="w-full bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Verify
          </button>
        </div>
        <div className="w-full mt-5 p-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 rounded-full">
          <button
            className="w-full bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Claim Fees
          </button>
        </div>
      </div>
    </div>
  );
}