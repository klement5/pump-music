// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ContractRegistry} from "@flarenetwork/flare-periphery-contracts/coston2/ContractRegistry.sol";
import {IJsonApiVerification} from "@flarenetwork/flare-periphery-contracts/coston2/IJsonApiVerification.sol";
import {IJsonApi} from "@flarenetwork/flare-periphery-contracts/coston2/IJsonApi.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// Data structure for storing verified Spotify artist info
struct SpotifyArtist {
    string name;
    string imageUrl;
    string bio;
}

// This structure must match the off-chain data that’s returned (after postprocessing)
struct DataTransportObject {
    string name;
    string imageUrl;
    string artistId;
    string bio;
}

contract SpotifyArtistList {
    // Mapping keyed by the artistId (as a string)
    mapping(string => SpotifyArtist) public artists;
    string[] public artistIds;

    // Verifies the JSON API attestation proof
    function isJsonApiProofValid(IJsonApi.Proof calldata _proof) public view returns (bool) {
        return ContractRegistry.auxiliaryGetIJsonApiVerification().verifyJsonApi(_proof);
    }

    // Adds an artist if the attestation proof is valid
    function addArtist(IJsonApi.Proof calldata data) public {
        require(isJsonApiProofValid(data), "Invalid proof");

        // Decode the attested data to get our artist details
        DataTransportObject memory dto = abi.decode(
            data.data.responseBody.abi_encoded_data,
            (DataTransportObject)
        );

        // Prevent duplicate entries using the artistId
        // require(Strings.equal(artists[dto.artistId].name, ""), "Artist already exists");

        SpotifyArtist memory artist = SpotifyArtist({
            name: dto.name,
            imageUrl: dto.imageUrl,
            bio: dto.bio
        });

        artists[dto.artistId] = artist;
        artistIds.push(dto.artistId);
    }

    // Returns all stored artists
    function getAllArtists() public view returns (SpotifyArtist[] memory) {
        SpotifyArtist[] memory result = new SpotifyArtist[](artistIds.length);
        for (uint256 i = 0; i < artistIds.length; i++) {
            result[i] = artists[artistIds[i]];
        }
        return result;
    }

    // Returns the FDCHub address from the ContractRegistry
    function getFdcHub() external view returns (address) {
        return address(ContractRegistry.getFdcHub());
    }

    function empty(DataTransportObject calldata x) public {}
}