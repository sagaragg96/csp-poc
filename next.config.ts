import type { NextConfig } from "next";

const { generateNonce } = require("./utils/nonce");

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    const nonce = generateNonce();
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self'; style-src 'self' 'nonce-${nonce}';`,
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

export default nextConfig;
