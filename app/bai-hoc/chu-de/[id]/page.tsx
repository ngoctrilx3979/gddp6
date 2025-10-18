"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLessonsByTopic } from "@/lib/lessonService";
import Loading from "../../../components/Loading";
import Link from "next/link";

export default function BaiHocTheoChuDePage() {
  const { id } = useParams();
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    getLessonsByTopic(id as string)
      .then(setLessons)
      .finally(() => setLoading(false));
  }, [id]);

  // 👉 Cắt 100 từ đầu tiên, loại bỏ HTML
  const getExcerpt = (html: string, wordCount: number = 100): string => {
    if (!html) return "";
    const text = html.replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/);
    return (
      words.slice(0, wordCount).join(" ") +
      (words.length > wordCount ? "..." : "")
    );
  };

  // 👉 Lấy hình đầu tiên trong HTML
  const getFirstImage = (html: string): string | null => {
    if (!html) return null;
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  };

  if (loading) return <Loading />;

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Bài học theo chủ đề
      </h1>

      {lessons.length === 0 ? (
        <p>Không có bài học nào.</p>
      ) : (
        lessons.map((lesson) => {
          const imageUrl = getFirstImage(lesson.description || "");

          return (
            <article
              key={lesson.id}
              className="flex bg-white rounded-xl shadow mb-6 border border-gray-200 overflow-hidden hover:shadow-lg transition"
              style={{ alignItems: "flex-start" }}
            >
              {/* 👇 Ảnh bên trái */}
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={lesson.title}
                  width={150}
                  height={150}
                  className="object-cover w-[200px] h-[200px] rounded-l-xl"
                />
              ) : (
                <div className="w-[150px] h-[150px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Không có ảnh
                </div>
              )}

              {/* 👇 Nội dung bên phải */}
              <div className="flex-1 p-4">
                <Link key={lesson.id} href={`/bai-hoc/${lesson.id}`}>
                <h2 className="text-xl font-semibold text-blue-600 mb-1">
                  {lesson.title}
                </h2></Link>
                <p className="text-sm text-gray-500 mb-2">
                  {lesson.createdAt?.seconds
                    ? new Date(lesson.createdAt.seconds * 1000).toLocaleDateString(
                        "vi-VN"
                      )
                    : ""}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {getExcerpt(lesson.description || "")}
                </p>
              </div>
            </article>
          );
        })
      )}
    </main>
  );
}
