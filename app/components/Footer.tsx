"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#0B1623] text-white pt-12">

      {/* Phần dưới */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Logo + mô tả */}
        <div data-aos="fade-up">
          <h3 className="text-xl font-bold mb-2 text-orange-500">Giáo Dục Địa Phương</h3>
          <p className="text-gray-300 mb-4">
            Mục tiêu của chúng tôi là hỗ trợ học sinh với kiến thức về giáo dục địa phương,
            cung cấp tài liệu tham khảo và giúp các em tự tin hơn trong học tập.
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        {/* Liên kết nhanh */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-semibold text-lg mb-4">Liên kết nhanh</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Tài liệu học tập</a></li>
            <li><a href="#" className="hover:text-white">Bài giảng</a></li>
            <li><a href="#" className="hover:text-white">Hoạt động ngoại khóa</a></li>
            <li><a href="#" className="hover:text-white">Tin tức giáo dục</a></li>
            <li><a href="#" className="hover:text-white">Blog học tập</a></li>
          </ul>
        </div>

        {/* Khám phá */}
        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="font-semibold text-lg mb-4">Khám phá</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Trang chủ</a></li>
            <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
            <li><a href="#" className="hover:text-white">Dịch vụ</a></li>
            <li><a href="#" className="hover:text-white">Đánh giá</a></li>
            <li><a href="#" className="hover:text-white">Liên hệ</a></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div data-aos="fade-up" data-aos-delay="600">
          <h4 className="font-semibold text-lg mb-4">Liên hệ</h4>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={18} /> +84 123 456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> hotro@giaoducdia.phuong
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 Đường Học Tập, Quận Giáo Dục, Việt Nam
            </li>
          </ul>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="text-center py-4 border-t border-gray-700 text-gray-400 text-sm">
        © Bản quyền 2025 - Giáo Dục Địa Phương. Giữ toàn quyền.
      </div>
    </footer>
  );
}
