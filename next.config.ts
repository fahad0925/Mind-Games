import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This will skip ESLint checks during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
