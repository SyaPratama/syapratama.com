import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: "anonymous",
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "gsap",
      "babel-plugin-react-compiler",
      "react-icons",
    ],
  },

};

export default nextConfig;
