"use client";
import { useEffect, useState } from "react";
import { getLatestLessons } from "@/lib/lessonService";

export default function LatestLessons() {
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestLessons(6).then((data) => {
      setLessons(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-8 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Bài học mới nhất</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : lessons.length === 0 ? (
        <p>Chưa có bài học nào.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {lessons.map((lesson) => (
            <div key={lesson.id} className="p-4 border rounded hover:shadow transition">
              <h3 className="font-semibold text-lg">{lesson.title}</h3>
              <p className="text-sm text-gray-600">{lesson.description}</p>
              <span className="text-xs text-gray-400 block mt-2">
                {new Date(lesson.createdAt?.seconds * 1000).toLocaleDateString("vi-VN")}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
