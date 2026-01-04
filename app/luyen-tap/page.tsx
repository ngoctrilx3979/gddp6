"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
} from "firebase/firestore";
import Link from "next/link";
import { getLessonById } from "@/lib/lessonService";

/* =====================
   TYPES
===================== */
type PracticeResult = {
  id: string;
  lessonId: string;
  lessonTitle: string;
  score: number;
  createdAt: any;
};

/* =====================
   PAGE
===================== */
export default function LuyenTapPage() {
  const [results, setResults] = useState<PracticeResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }

      const q = query(
        collection(db, "practiceResults"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snap = await getDocs(q);

      const data: PracticeResult[] = await Promise.all(
        snap.docs.map(async (docSnap) => {
          const d = docSnap.data();
          const lesson = await getLessonById(d.lessonId);

          return {
            id: docSnap.id,
            lessonId: d.lessonId,
            lessonTitle: lesson?.title || "Không xác định",
            score: d.score || 0,
            createdAt: d.createdAt,
          };
        })
      );

      setResults(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) {
    return <p style={{ padding: "2rem" }}>⏳ Đang tải dữ liệu...</p>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📝 Các bài luyện tập của tôi</h1>

      {results.length === 0 && (
        <p>Bạn chưa thực hiện bài luyện tập nào.</p>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {results.map((item) => (
          <li
            key={item.id}
            style={{
              marginBottom: "16px",
              padding: "14px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "#fafafa",
            }}
          >
            <Link
              href={`/luyen-tap/${item.id}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <div style={{ fontWeight: 600, fontSize: "1.05rem" }}>
                📘 {item.lessonTitle}
              </div>

              <div style={{ marginTop: "6px", color: "#555" }}>
                🎯 Điểm: <b>{item.score}</b>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
