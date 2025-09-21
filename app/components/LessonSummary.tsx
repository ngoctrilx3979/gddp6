"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addSummary, getSummariesByLesson, deleteSummary } from "@/lib/summaryService";
import { generateSummary } from "@/lib/geminiService";

interface Summary {
  id: string;
  lessonId: string;
  title: string;
  content: string;
  userId: string;
  email: string;
  createdAt?: { seconds: number; nanoseconds: number };
}

export default function LessonSummary({ lessonId, lessonContent }: { lessonId: string; lessonContent: string }) {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [inputContent, setInputContent] = useState(""); // nội dung do user nhập

  async function loadSummaries() {
    const data = await getSummariesByLesson(lessonId);
    setSummaries(data);
  }

  useEffect(() => {
    loadSummaries();
  }, [lessonId]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  async function handleGenerateSummary() {
    if (!user) return alert("Bạn cần đăng nhập để tạo tóm tắt!");

    setLoading(true);
    try {
      const data = await generateSummary(inputContent,lessonContent);
      if (data.title && data.summary) {
        await addSummary(lessonId, data.title, data.summary, user.uid, user.email);
        await loadSummaries();
        setInputContent("");
      }
    } catch (e) {
      console.error(e);
      alert("Tạo tóm tắt thất bại!");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Bạn có chắc muốn xoá tóm tắt này?")) return;
    try {
      await deleteSummary(id);
      await loadSummaries();
    } catch (err) {
      console.error(err);
      alert("Xoá thất bại!");
    }
  }

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold mb-2">Tóm tắt bài học</h2>

      {/* Ô nhập gợi ý */}
      <textarea
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        className="w-full border rounded p-2 text-sm mb-2"
        rows={3}
        placeholder="Nhập nội dung muốn tóm tắt (hoặc để trống để tóm tắt toàn bộ bài học)..."
      />

      <button
        onClick={handleGenerateSummary}
        disabled={loading}
        className="px-3 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Đang tạo..." : "Tạo tóm tắt"}
      </button>

      <ul className="mt-4 space-y-3">
        {summaries.length === 0 && <p className="text-sm text-gray-500">Chưa có tóm tắt nào.</p>}
        {summaries.map((s) => (
          <li key={s.id} className="border rounded p-3 bg-gray-50">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-gray-700">{s.content}</p>

            {/* Info nhỏ mờ */}
            <p className="text-xs text-gray-400 mt-1">
              {s.email} •{" "}
              {s.createdAt?.seconds
                ? new Date(s.createdAt.seconds * 1000).toLocaleString("vi-VN")
                : "Chưa rõ"}
            </p>

            {/* Nút xoá nếu là chủ sở hữu */}
            {user?.uid === s.userId && (
              <button
                onClick={() => handleDelete(s.id)}
                className="text-xs text-red-600 hover:underline mt-1"
              >
                🗑 Xoá
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
