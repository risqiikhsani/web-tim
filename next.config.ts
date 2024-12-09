import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shadcnblocks.com',
      },
      {
        protocol:"https",
        hostname:"lh3.googleusercontent.com"
      },
      {
        protocol:"https",
        hostname:"avatars.githubusercontent.com"
      }

    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
};

export default nextConfig;
