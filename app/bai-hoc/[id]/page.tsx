import { getLessonById } from "@/lib/lessonService";
import { notFound } from "next/navigation";
import FeedbackSection from "./FeedbackSection";

interface LessonDetailPageProps {
  params: {
    id: string;
  };
}

export default async function BaiHocDetailPage({ params }: LessonDetailPageProps) {
  const lesson = await getLessonById(params.id);

  if (!lesson) return notFound();

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Bên trái: Nội dung bài học */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-4">{lesson.title}</h1>
        <p className="text-gray-600 mb-6">{lesson.description}</p>
        <span className="text-sm text-gray-400 block mb-8">
          Ngày tạo:{" "}
          {lesson.createdAt?.seconds
            ? new Date(lesson.createdAt.seconds * 1000).toLocaleDateString("vi-VN")
            : "Chưa có"}
        </span>

        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: lesson.content || "<p>Chưa có nội dung chi tiết.</p>",
          }}
        />
      </div>

      {/* Bên phải: Feedback */}
      <div className="bg-gray-50 p-6 rounded-xl shadow h-fit">
        <FeedbackSection lessonId={params.id} />
      </div>
    </div>
  );
}
