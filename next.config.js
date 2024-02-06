/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_module/,
      type: "javascript/auto",
    });

    return config;
  },
};

module.exports = nextConfig;
