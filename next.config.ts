import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: "anonymous",
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://i.pinimg.com/**')],
  },
  experimental: {
    optimizePackageImports: [
      "gsap",
      "babel-plugin-react-compiler",
      "react-icons",
      "next-seo",
    ],
  }
};  

export default nextConfig;
