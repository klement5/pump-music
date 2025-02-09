const express = require("express");
const { exec } = require("child_process");
const path = require("path");
const cors = require("cors");

const app = express();

// ✅ Fix CORS by explicitly allowing localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000", // Allow frontend requests
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true, // Allow cookies if needed
  })
);

app.use(express.json()); // Middleware to parse JSON requests

// ✅ Handle CORS preflight requests properly
app.options("*", cors());

app.post("/deploy", async (req, res) => {
  const { spotifyId, name, ticker, signerAddress } = req.body;

  if (!spotifyId || !name || !ticker || !signerAddress) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  try {
    const hardhatScriptPath = path.resolve(__dirname, "scripts/deploy.ts");
    const command = `npx hardhat run ${hardhatScriptPath} --network localhost --spotifyId "${spotifyId}" --name "${name}" --ticker "${ticker}" --signerAddress "${signerAddress}"`;

    console.log(`Executing command: ${command}`);

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Hardhat script: ${error.message}`);
        return res.status(500).json({ error: "Failed to deploy memecoin" });
      }
      if (stderr) {
        console.error(`Hardhat Stderr: ${stderr}`);
        return res.status(500).json({ error: "Deployment script error" });
      }

      const outputLines = stdout.trim().split("\n");
      const memecoinAddress = outputLines.pop();

      console.log("Memecoin deployed to:", memecoinAddress);

      if (!memecoinAddress.startsWith("0x") || memecoinAddress.length !== 42) {
        return res
          .status(500)
          .json({ error: "Invalid contract address returned" });
      }

      res.json({ memecoinAddress });
    });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ error: "Unexpected server error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
