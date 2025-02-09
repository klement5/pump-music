// next.config.js
module.exports = {
    images: {
      domains: ["picsum.photos"],
    },
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = config.externals || [];
        // Exclude hardhat and ts-node so they are resolved at runtime on the server
        config.externals.push("hardhat");
        config.externals.push("ts-node/register");
        config.externals.push("ts-node/register/transpile-only");
      }
      return config;
    },
  };