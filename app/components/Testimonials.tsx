"use client";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  // Lấy feedback từ Firestore
  useEffect(() => {
    AOS.init({ duration: 800 });
    const unsub = onSnapshot(collection(db, "feedbacks"), (snap) => {
      const data = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sắp xếp theo thời gian mới nhất
      setFeedbacks(
        data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
      );
      // 🎯 In ra terminal (console trình duyệt)
      console.log("📢 FEEDBACK THẬT:", data);
    });
    return () => unsub();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mb-8" data-aos="fade-up">
        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded text-sm font-medium">
          Feedback Thật
        </span>
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Cảm nhận từ người dùng
        </h2>
        <p className="text-gray-600 mt-2">
          Những chia sẻ chân thật từ học sinh sử dụng website của chúng ta.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2" data-aos="fade-up">
        {feedbacks.length === 0 && (
          <p className="text-gray-500 text-center col-span-2">
            Chưa có feedback nào được gửi.
          </p>
        )}

        {feedbacks.map((fb) => (
          <div
            key={fb.id}
            className="p-6 bg-white shadow-md rounded-xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/avatar1.png"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-800">{fb.email}</p>
                <p className="text-xs text-gray-400">
                  {fb.createdAt?.seconds
                    ? new Date(fb.createdAt.seconds * 1000).toLocaleString("vi-VN")
                    : "Chưa rõ thời gian"}
                </p>
              </div>
            </div>
            <p className="text-gray-700 italic mb-3">“{fb.message}”</p>
            <div className="flex gap-4 text-sm">
              <span className="text-green-600">👍 {fb.likes || 0}</span>
              <span className="text-red-600">👎 {fb.dislikes || 0}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
