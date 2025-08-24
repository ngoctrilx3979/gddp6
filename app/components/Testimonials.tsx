"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    grade: "Lớp 6",
    content:
      "Website rất hữu ích, giúp em học môn Giáo Dục Địa Phương dễ hiểu và thú vị hơn.",
    avatar: "/avatar1.png",
    stars: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    grade: "Lớp 5",
    content:
      "Bài học minh họa trực quan, dễ nhớ. Em rất thích phần luyện tập!",
    avatar: "/avatar2.png",
    stars: 4,
  },
  {
    id: 3,
    name: "Lê Minh C",
    grade: "Lớp 7",
    content:
      "Nhờ website mà em có thể tự học thêm kiến thức ngoài lớp học.",
    avatar: "/avatar3.png",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-8" data-aos="fade-up">
        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded text-sm font-medium">
          Testimonial
        </span>
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Câu chuyện thật – Kết quả thật
        </h2>
        <p className="text-gray-600 mt-2">
          Lắng nghe cảm nhận của các bạn học sinh khi sử dụng website hỗ trợ
          học tập Giáo Dục Địa Phương.
        </p>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto relative flex items-center gap-6">
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-orange-50 p-2 rounded hover:bg-orange-100 transition"
        >
          ←
        </button>

        <div
          className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-up"
        >
          {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
            (t) => (
              <div
                key={t.id}
                className="p-6 bg-white shadow rounded-xl flex items-center gap-4"
              >
                {/* Avatar */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                {/* Content */}
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-orange-500 fill-orange-500"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-3">“{t.content}”</p>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.grade}</p>
                </div>
              </div>
            )
          )}
        </div>

        <button
          onClick={next}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-orange-50 p-2 rounded hover:bg-orange-100 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}
