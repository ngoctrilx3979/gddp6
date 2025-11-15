"use client";
import { useEffect, useState } from "react";
import { getLatestLessons } from "../..//lib/lessonService";
import Image from "next/image";
import Link from "next/link";

export default function LatestLessons() {
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestLessons(3).then((data) => {
      setLessons(data);
      setLoading(false);
    });
  }, []);

  // Helper: loại bỏ HTML, decode HTML entities và lấy tối đa `maxWords` từ text
  function htmlToPlainText(html: string | undefined | null, maxWords = 30) {
    if (!html) return "";
    // tạo element tạm để decode entities & strip tags
    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent || div.innerText || "";

    // normalize whitespace and split into words
    const words = text.trim().replace(/\s+/g, " ").split(" ");
    if (words.length <= maxWords) return words.join(" ");
    return words.slice(0, maxWords).join(" ") + "...";
  }

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Bên trái: Hình ảnh */}
        <div data-aos="fade-right">
          <Image
            src="/bai-hoc.jpg" // 👉 bạn thay hình minh họa thật
            alt="Bài học"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Bên phải: Danh sách bài học */}
        <div>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm font-medium">
            Bài học mới nhất
          </span>
          <h2
            className="text-3xl font-bold mt-4 mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Cập nhật kiến thức mỗi ngày
          </h2>

          {loading ? (
            <p>Đang tải...</p>
          ) : lessons.length === 0 ? (
            <p>Chưa có bài học nào.</p>
          ) : (
            <div className="space-y-4">
              {lessons.map((lesson, i) => (
                <div
                  key={lesson.id}
                  className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                  data-aos="fade-up"
                  data-aos-delay={i * 200}
                >
                  {/* Icon minh họa */}
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  {/* Nội dung */}
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      <Link href={`/bai-hoc/${lesson.id}`}>{lesson.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-600">
                      {htmlToPlainText(lesson.description, 30)}
                    </p>
                    <span className="text-xs text-gray-400 block mt-1">
                      {lesson.createdAt?.seconds
                        ? new Date(lesson.createdAt.seconds * 1000).toLocaleDateString(
                            "vi-VN"
                          )
                        : lesson.createdAt
                        ? new Date(lesson.createdAt).toLocaleDateString("vi-VN")
                        : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
