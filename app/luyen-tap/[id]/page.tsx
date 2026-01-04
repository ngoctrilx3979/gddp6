"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import { getLessonById } from "@/lib/lessonService";

/* =====================
   TYPES (ĐÚNG THEO DATA)
===================== */
type QuestionDetail = {
  question: string;
  selected: string | null;
  correct: string;
  isCorrect: boolean;
};

type PracticeResult = {
  lessonId: string;
  score: number;
  details?: QuestionDetail[];
};

export default function ChiTietLuyenTapPage() {
  const { id } = useParams();
  const [data, setData] = useState<PracticeResult | null>(null);
  const [lessonTitle, setLessonTitle] = useState("");

  useEffect(() => {
    const load = async () => {
      if (!id) return;

      const ref = doc(db, "practiceResults", id as string);
      const snap = await getDoc(ref);
      if (!snap.exists()) return;

      const resultData = snap.data() as PracticeResult;
      setData(resultData);

      if (resultData.lessonId) {
        const lesson = await getLessonById(resultData.lessonId);
        setLessonTitle(lesson?.title || "Không xác định");
      }
    };

    load();
  }, [id]);

  if (!data) {
    return <p style={{ padding: "2rem" }}>⏳ Đang tải chi tiết...</p>;
  }

  const details = Array.isArray(data.details) ? data.details : [];

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>📘 Chi tiết luyện tập</h2>

      {/* THÔNG TIN CHUNG */}
      <div
        style={{
          marginBottom: "20px",
          padding: "14px",
          borderRadius: "10px",
          background: "#f5f7fa",
          border: "1px solid #ddd",
        }}
      >
        <p>
          <b>Bài học:</b> {lessonTitle}
        </p>
        <p>
          <b>Điểm:</b>{" "}
          <span style={{ color: "#0a7", fontWeight: 600 }}>
            {data.score}
          </span>
        </p>
      </div>

      <h3>📋 Chi tiết câu trả lời</h3>

      {details.length === 0 && (
        <p>⚠️ Không có dữ liệu chi tiết cho bài luyện tập này.</p>
      )}

      {details.map((q, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            background: q.isCorrect ? "#e9fff1" : "#fff1f1",
          }}
        >
          {/* CÂU HỎI */}
          <p style={{ fontWeight: 600 }}>
            Câu {index + 1}: {q.question}
          </p>

          {/* TRẢ LỜI CỦA BẠN */}
          <p>
            👉 Câu trả lời của bạn:{" "}
            <b style={{ color: q.isCorrect ? "#0a7" : "#c00" }}>
              {q.selected ?? "Chưa trả lời"}
            </b>
          </p>

          {/* ĐÁP ÁN ĐÚNG */}
          {!q.isCorrect && (
            <p>
              ✅ Đáp án đúng:{" "}
              <b style={{ color: "#0a7" }}>{q.correct}</b>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
