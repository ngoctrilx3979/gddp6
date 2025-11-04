"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Bên trái: Thống kê */}
        <div className="flex flex-col gap-6" data-aos="fade-right">
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">98%</h3>
            <p className="text-gray-600 mt-2">Học viên hài lòng</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">79%</h3>
            <p className="text-gray-600 mt-2">Giảng viên giàu kinh nghiệm</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-blue-700">12+</h3>
            <p className="text-gray-600 mt-2">Năm hoạt động và phát triển</p>
          </div>
        </div>

        {/* Ảnh giữa */}
              <div className="relative w-full h-[400px]" data-aos="zoom-in">
          <Image
            src="/images/32385-1536x1373.jpg"   // ✅ đúng cú pháp
            alt="Tại sao chọn chúng tôi"
            fill
            className="object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Bên phải: Nội dung */}
        <div className="flex flex-col gap-4" data-aos="fade-left">
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded text-sm font-medium w-fit">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Lý do bạn nên lựa chọn <br /> dịch vụ của chúng tôi
          </h2>
          <p className="text-gray-600">
            Chúng tôi luôn đặt chất lượng học tập và trải nghiệm của học viên
            lên hàng đầu. Với đội ngũ giảng viên tận tâm, tài nguyên học tập đa
            dạng và phương pháp giảng dạy hiện đại, chúng tôi mang đến cho bạn
            hành trình học tập hiệu quả, thú vị và tràn đầy cảm hứng.
          </p>

          {/* Các lý do nổi bật */}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Chất lượng giảng dạy cao
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Đội ngũ chuyên nghiệp
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Tài liệu phong phú
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Hỗ trợ tận tình
            </div>
          </div>

          {/* Nút xem trang giới thiệu */}
          <Link
            href="/gioi-thieu"
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition w-fit"
          >
            Giới thiệu →
          </Link>
        </div>
      </div>
    </section>
  );
}
