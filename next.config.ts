import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (served at the root of faisalkhanzemi.github.io)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
