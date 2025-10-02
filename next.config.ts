import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal server output ideal for Docker images
  output: "standalone",
};

export default nextConfig;
