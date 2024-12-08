import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProd? "https://ixerathor.github.io/ia_lab_4/" : "http://localhost:3000",
  basePath: isProd? "https://ixerathor.github.io/ia_lab_4/" : "http://localhost:3000",
  output: 'export'
};

export default nextConfig;
