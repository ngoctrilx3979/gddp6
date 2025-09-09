import { getLessonById } from "@/lib/lessonService";
import { notFound } from "next/navigation";

interface LessonDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BaiHocDetailPage({ params }: LessonDetailPageProps) {
  const lesson = await getLessonById(params.id);

  if (!lesson) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
      <p className="text-gray-600 mb-6">{lesson.description}</p>
      <span className="text-sm text-gray-400 block mb-8">
        Ngày tạo:{" "}
        {new Date(lesson.createdAt?.seconds * 1000).toLocaleDateString("vi-VN")}
      </span>

      {/* Nội dung chi tiết bài học */}
      <article className="prose">
        {lesson.content || "Chưa có nội dung chi tiết."}
      </article>
    </div>
  );
}
