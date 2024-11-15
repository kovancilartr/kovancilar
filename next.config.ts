import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.clerk.com",
      "picsum.photos",
    ], // Dış alan adını buraya ekleyin
  },
};

export default nextConfig;
