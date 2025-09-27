import { getLessonById } from "@/lib/lessonService";
import { notFound } from "next/navigation";
import LessonRightPanel from "./LessonRightPanel";

interface LessonDetailPageProps {
  params: { id: string };
}

export default async function BaiHocDetailPage({ params }: LessonDetailPageProps) {
  const { id } = await params; // 👈 phải await
  const lesson = await getLessonById(id);

  if (!lesson) return notFound();

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

      {/* Bên phải: Tabs bằng CSS */}
      <LessonRightPanel lessonId={id} lessonContent={lesson.description || ""} />
    </div>
  );
}
