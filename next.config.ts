import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Optimisation avec SWC
  output: "export", // Permet d'utiliser `next export`
  images: {
    unoptimized: true, // Netlify ne supporte pas nativement l'optimisation Next.js des images
  },
};

export default nextConfig;