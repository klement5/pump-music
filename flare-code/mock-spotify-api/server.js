const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Mock data for multiple artists, keyed by artist ID
const mockArtists = {
    "the-electric-suns": {
      id: "the-electric-suns",
      name: "The Electric Suns",
      imageUrl: "https://picsum.photos/200",
      bio: "Blending vintage synthwave with modern pop, The Electric Suns light up the night with electrifying performances."
    },
    "aurora-nova": {
      id: "aurora-nova",
      name: "Aurora Nova",
      imageUrl: "https://picsum.photos/200",
      bio: "Rising from the indie scene, Aurora Nova captivates with ethereal vocals and a cosmic soundscape."
    },
    "midnight-mirage": {
      id: "midnight-mirage",
      name: "Midnight Mirage",
      imageUrl: "https://picsum.photos/200",
      bio: "Mysterious and soulful, Midnight Mirage blends deep blues with hints of modern electronic beats."
    },
    "cosmic-drift": {
      id: "cosmic-drift",
      name: "Cosmic Drift",
      imageUrl: "https://picsum.photos/200",
      bio: "Fusing futuristic synths with spacey vibes, Cosmic Drift takes listeners on an interstellar journey."
    },
    "serenade-skyline": {
      id: "serenade-skyline",
      name: "Serenade Skyline",
      imageUrl: "https://picsum.photos/200",
      bio: "Capturing the urban pulse with smooth vocals and dynamic melodies, Serenade Skyline paints the city in sound."
    },
    "crimson-harmony": {
      id: "crimson-harmony",
      name: "Crimson Harmony",
      imageUrl: "https://picsum.photos/200",
      bio: "With passionate lyrics and powerful riffs, Crimson Harmony delivers a rock experience that resonates deeply."
    },
    "velvet-echo": {
      id: "velvet-echo",
      name: "Velvet Echo",
      imageUrl: "https://picsum.photos/200",
      bio: "Velvet Echo’s soulful tone and vintage charm offer a refreshing twist on classic R&B and indie pop."
    },
    "solar-flare": {
      id: "solar-flare",
      name: "Solar Flare",
      imageUrl: "https://picsum.photos/200",
      bio: "Bursting with energy and vibrant rhythms, Solar Flare fuses funk, pop, and hip-hop influences in a dazzling display."
    },
    "lunar-bloom": {
      id: "lunar-bloom",
      name: "Lunar Bloom",
      imageUrl: "https://picsum.photos/200",
      bio: "Delicate and dreamy, Lunar Bloom creates ambient soundscapes paired with gentle vocals perfect for introspection."
    },
    "echo-reverie": {
      id: "echo-reverie",
      name: "Echo Reverie",
      imageUrl: "https://picsum.photos/200",
      bio: "With poetic lyrics and haunting melodies, Echo Reverie crafts a transcendent musical experience that lingers long after the show."
    }
  };

// Endpoint that returns artist data based on a provided artist ID
app.get("/api/artist/:id", (req, res) => {
  const id = req.params.id;
  const artist = mockArtists[id];
  if (artist) {
    res.json(artist);
  } else {
    res.status(404).json({ error: "Artist not found" });
  }
});

// Endpoint that returns an array of all artists
app.get("/api/artists", (req, res) => {
  res.json(Object.values(mockArtists));
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});