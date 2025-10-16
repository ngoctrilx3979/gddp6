"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLessonsByTopic } from "@/lib/lessonService";
import Loading from "../../../components/Loading";

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

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Bài học theo chủ đề
      </h2>

      {loading ? (
        <Loading />
      ) : lessons.length === 0 ? (
        <p>Không có bài học nào.</p>
      ) : (
        lessons.map((lesson) => (
          <div
            key={lesson.id}
            style={{
              marginBottom: "1.5rem",
              borderBottom: "1px solid #ddd",
              paddingBottom: "1rem",
            }}
          >
            <h3>{lesson.title}</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>
              {lesson.createdAt?.seconds
                ? new Date(lesson.createdAt.seconds * 1000).toLocaleDateString("vi-VN")
                : ""}
            </p>
            <p>{lesson.description?.slice(0, 100)}...</p>
          </div>
        ))
      )}
    </div>
  );
}
