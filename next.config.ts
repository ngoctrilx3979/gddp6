import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.baoangiang.com.vn",
      "firebasestorage.googleapis.com",
      "res.cloudinary.com",
    ],
  },
   eslint: {
    ignoreDuringBuilds: true, // ⬅️ Tắt ESLint khi build
  },
};

export default nextConfig;
