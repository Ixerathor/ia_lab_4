import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isProd? "/ia_lab_4/" : "",
  basePath: isProd? "/ia_lab_4" : "",
  output: 'export'
};

export default nextConfig;
