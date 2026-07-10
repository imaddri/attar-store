import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  allowedDevOrigins: ["172.20.10.3"],

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;