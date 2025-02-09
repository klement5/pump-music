// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BnbMemecoin is ERC20, Ownable {
    uint256 public constant TOKEN_PRICE = 1e15; // 0.001 BNB per token
    uint256 public constant MAX_SUPPLY = 1_000_000 * 1e18; // 1,000,000 tokens
    uint256 public constant FEE_PERCENTAGE = 5; // 5% fee

    address public artistRegistry; // Address of the ArtistRegistry contract
    string public spotifyId; // Spotify ID of the artist

constructor(
    string memory name, // Name of the memecoin (e.g., "ArianaCoin")
    string memory symbol, // Symbol of the memecoin (e.g., "ARIA")
    address _artistRegistry, // Address of the ArtistRegistry contract
    string memory _spotifyId // Spotify ID of the artist
) ERC20(name, symbol) Ownable(msg.sender) { // Pass msg.sender to Ownable
    artistRegistry = _artistRegistry;
    spotifyId = _spotifyId;
}

    // Function to buy tokens with BNB
    function buyTokens() public payable {
        require(msg.value > 0, "You must send BNB to buy tokens");

        // Calculate the fee and the amount of BNB for tokens
        uint256 fee = (msg.value * FEE_PERCENTAGE) / 100;
        uint256 bnbForTokens = msg.value - fee;

        // Mint tokens to the buyer
        uint256 tokensToMint = bnbForTokens / TOKEN_PRICE;
        require(totalSupply() + tokensToMint <= MAX_SUPPLY, "Max supply reached");
        _mint(msg.sender, tokensToMint);

        // Send the fee to the ArtistRegistry
        (bool success, ) = artistRegistry.call{value: fee}(
            abi.encodeWithSignature("addFees(string)", spotifyId)
        );
        require(success, "Fee transfer failed");
    }

    // Function to sell tokens for BNB
    function sellTokens(uint256 tokenAmount) public {
        require(tokenAmount > 0, "You must sell at least 1 token");
        require(balanceOf(msg.sender) >= tokenAmount, "Insufficient balance");

        // Calculate the BNB value of the tokens
        uint256 bnbValue = tokenAmount * TOKEN_PRICE;

        // Calculate the fee and the amount of BNB to send to the user
        uint256 fee = (bnbValue * FEE_PERCENTAGE) / 100;
        uint256 bnbForUser = bnbValue - fee;

        // Burn the tokens
        _burn(msg.sender, tokenAmount);

        // Send the BNB to the user
        payable(msg.sender).transfer(bnbForUser);

        // Send the fee to the ArtistRegistry
        (bool success, ) = artistRegistry.call{value: fee}(
            abi.encodeWithSignature("addFees(string)", spotifyId)
        );
        require(success, "Fee transfer failed");
    }

    // Function to get token info
function getTokenInfo() public view returns (
    string memory tokenName,  // Renamed to avoid conflict
    string memory tokenSymbol, // Renamed to avoid conflict
    uint256 tokenTotalSupply,
    uint256 maxSupply,
    uint256 tokenPrice,
    string memory artistSpotifyId,
    uint256 artistFees
) {
    // Fetch artist fees from the ArtistRegistry contract
    (bool success, bytes memory data) = artistRegistry.staticcall(
        abi.encodeWithSignature("getArtistFees(string)", spotifyId)
    );
    require(success, "Failed to fetch artist fees");
    uint256 fees = abi.decode(data, (uint256));

    return (
        name(), // Token name
        symbol(), // Token symbol
        totalSupply(), // Total supply
        MAX_SUPPLY, // Max supply
        TOKEN_PRICE, // Token price
        spotifyId, // Artist's Spotify ID
        fees // Artist's accumulated fees
    );
}


    // Function to withdraw BNB from the contract (only owner)
    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}