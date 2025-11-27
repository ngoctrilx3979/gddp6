import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.baoangiang.com.vn",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
