// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./BnbMemecoin.sol"; // Import the memecoin contract

contract ArtistRegistry {
    struct ArtistInfo {
        address memecoinAddress; // Address of the artist's memecoin contract
        uint256 accumulatedFees; // Fees earned by the artist (in BNB)
    }

    // Mapping from Spotify ID to ArtistInfo
    mapping(string => ArtistInfo) public artists;

    // Event to log new artist registration
    event ArtistRegistered(string indexed spotifyId, address memecoinAddress);

    // Function to register a new artist and deploy their memecoin contract
    function registerArtist(string memory spotifyId, string memory name, string memory symbol) public {
        require(artists[spotifyId].memecoinAddress == address(0), "Artist already registered");

        // Deploy a new memecoin contract for the artist
        BnbMemecoin memecoin = new BnbMemecoin(name, symbol, address(this), spotifyId);

        // Store the artist info
        artists[spotifyId] = ArtistInfo({
            memecoinAddress: address(memecoin),
            accumulatedFees: 0
        });

        // Emit an event
        emit ArtistRegistered(spotifyId, address(memecoin));
    }

    // Function to accumulate fees for an artist
    function addFees(string memory spotifyId) public payable {
        require(artists[spotifyId].memecoinAddress != address(0), "Artist not registered");
        artists[spotifyId].accumulatedFees += msg.value;
    }

    // Function to get artist fees
    function getArtistFees(string memory spotifyId) public view returns (uint256) {
        return artists[spotifyId].accumulatedFees;
    }

    // Function for the artist to withdraw their accumulated fees
    function withdrawFees(string memory spotifyId) public {
        uint256 fees = artists[spotifyId].accumulatedFees;
        require(fees > 0, "No fees to withdraw");

        // Reset the accumulated fees
        artists[spotifyId].accumulatedFees = 0;

        // Send the fees to the caller (artist) TODO This code just gives the money to the sender??
        payable(msg.sender).transfer(fees);
    }
}