"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLessonById } from "@/lib/lessonService";
import LessonRightPanel from "./LessonRightPanel";
import Loading from "../../components/Loading";

export default function BaiHocDetailPage() {
  const { id } = useParams();
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getLessonById(id as string)
      .then(setLesson)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />; // 👈 Hiển thị vòng quay khi đang tải

  if (!lesson)
    return (
      <div className="text-center py-20 text-gray-600">
        Không tìm thấy bài học.
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Bên trái: Nội dung bài học */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
        <span className="text-sm text-gray-400 block mb-8">
          Ngày tạo:{" "}
          {lesson.createdAt?.seconds
            ? new Date(lesson.createdAt.seconds * 1000).toLocaleDateString("vi-VN")
            : "Chưa có"}
        </span>

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: lesson.description || "<p>Chưa có nội dung chi tiết.</p>",
          }}
        />
      </div>

      {/* Bên phải: Tabs hoặc nội dung phụ */}
      <LessonRightPanel
        lessonId={id as string}
        lessonContent={lesson.description || ""}
      />
    </div>
  );
}
