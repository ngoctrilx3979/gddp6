/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.baoangiang.com.vn", // ✅ thêm domain này
      "firebasestorage.googleapis.com", // (nếu bạn dùng Firebase)
      "res.cloudinary.com", // (nếu dùng Cloudinary)
    ],
  },
};

export default nextConfig;
