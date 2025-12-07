"use client";

import React, { useEffect, useState } from "react";
import Loading from "../components/Loading"; // 👈 nhớ đúng path

export default function GioiThieuPage() {
  const [loading, setLoading] = useState(true);

  // Fake load 0.8s cho mượt (có thể bỏ nếu không cần)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // 👇 Khi đang tải, trả về Loading trước
  if (loading) return <Loading />;

  return (
    <main className="max-w-5xl mx-auto py-10 px-6 space-y-12 text-gray-800">
      {/* 🟦 SECTION 1: GIỚI THIỆU VỀ MÔN HỌC */}
      <section>
        <h1 className="text-3xl font-bold text-blue-700 mb-4">
          Giới thiệu về môn học
        </h1>
        <p className="mb-4 leading-relaxed">
          Môn học này giúp học sinh hiểu biết sâu hơn về quê hương An Giang —
          một vùng đất giàu truyền thống văn hóa, lịch sử và thiên nhiên phong
          phú. Nội dung môn học gồm 6 chủ đề chính:
        </p>

        <ul className="space-y-3 bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100">
          <li>
            <strong>CHỦ ĐỀ 1:</strong> Vị trí địa lí —{" "}
            <span className="text-gray-700">
              Vị trí địa lí, phạm vi lãnh thổ, điều kiện tự nhiên và tài nguyên
              thiên nhiên tỉnh An Giang.
            </span>
          </li>
          <li>
            <strong>CHỦ ĐỀ 2:</strong> Truyện cổ dân gian —{" "}
            <span className="text-gray-700">
              Truyện cổ dân gian tỉnh An Giang.
            </span>
          </li>
          <li>
            <strong>CHỦ ĐỀ 3:</strong> An Giang thời nguyên thủy và cổ đại —{" "}
            <span className="text-gray-700">
              Khám phá lịch sử và dấu tích thời cổ đại của vùng đất An Giang.
            </span>
          </li>
          <li>
            <strong>CHỦ ĐỀ 4:</strong> Đặc sản An Giang —{" "}
            <span className="text-gray-700">
              Đặc sản, ẩm thực địa phương, đường thốt nốt tỉnh An Giang.
            </span>
          </li>
          <li>
            <strong>CHỦ ĐỀ 5:</strong> Giai điệu quê hương —{" "}
            <span className="text-gray-700">
              Những giai điệu ngọt ngào, tự hào về quê hương An Giang.
            </span>
          </li>
          <li>
            <strong>CHỦ ĐỀ 6:</strong> Tác phẩm mĩ thuật tiêu biểu —{" "}
            <span className="text-gray-700">
              Giới thiệu một số tác phẩm mĩ thuật tiêu biểu của tỉnh An Giang.
            </span>
          </li>
        </ul>
      </section>

      {/* 🟩 SECTION 2: GIỚI THIỆU VỀ TRANG WEB */}
      <section>
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Giới thiệu về trang web
        </h2>
        <p className="mb-4 leading-relaxed">
          Trang web này được xây dựng nhằm giúp học sinh học tập, khám phá và
          tương tác với nội dung môn học một cách sinh động, trực quan và thông
          minh. Trang web bao gồm các mục chính:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Trang chủ</li>
          <li>Giới thiệu</li>
          <li>Liên hệ</li>
          <li>Xem bài học theo chủ đề</li>
          <li>Các bài viết khác theo chủ đề</li>
          <li>Cho người học tóm tắt nội dung bằng AI</li>
          <li>Tạo câu hỏi và luyện tập bằng AI</li>
          <li>Tham quan thực tế qua thực tế ảo (VR)</li>
          <li>Trợ lý AI để hỏi đáp về môn học</li>
          <li>Trang quản trị nội dung bài học và bài viết</li>
        </ul>
      </section>

      {/* 🟥 SECTION 3: GIỚI THIỆU TÁC GIẢ */}
      <section>
        <h2 className="text-3xl font-bold text-red-700 mb-4">
          Giới thiệu về tác giả
        </h2>
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <p className="mb-2">
            <strong>Họ và tên:</strong> Bùi Đức Trí
          </p>
          <p className="mb-2">
            <strong>Trường:</strong> THCS Lý Thường Kiệt
          </p>
          <p className="mb-2">
            <strong>Lớp:</strong> 6A1
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ngoctrilx3979@gmail.com"
              className="text-blue-600 hover:underline"
            >
              ngoctrilx3979@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
