"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  serverTimestamp,
  query,
  where,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Feedback } from "@/types/feedback";

export default function FeedbackSection({ lessonId }: { lessonId: string }) {
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  // Theo dõi user đăng nhập
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // Lấy danh sách feedback từ Firestore
  useEffect(() => {
    const q = query(collection(db, "feedbacks"), where("lessonId", "==", lessonId));
    const unsub = onSnapshot(q, (snap) => {
       const data = snap.docs.map(
        (d) => ({ id: d.id, ...d.data() } as Feedback) // 👈 ép kiểu
      );
      setFeedbacks(data.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)));
    });
    return () => unsub();
  }, [lessonId]);

  // Gửi feedback
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("Bạn cần đăng nhập để gửi feedback");
    if (!message.trim()) return;

    try {
      setLoading(true);
      await addDoc(collection(db, "feedbacks"), {
        lessonId,
        userId: user.uid,
        email: user.email,
        message,
        likes: 0,
        dislikes: 0,
        likedBy: [],
        dislikedBy: [],
        createdAt: serverTimestamp(),
      });
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Gửi feedback thất bại!");
    } finally {
      setLoading(false);
    }
  };

  // Like / Dislike chỉ 1 lần
  const handleVote = async (fb: any, type: "likes" | "dislikes") => {
    if (!user) return alert("Bạn cần đăng nhập để vote");

    const ref = doc(db, "feedbacks", fb.id);

    if (type === "likes") {
      if (fb.likedBy?.includes(user.uid)) {
        return alert("Bạn đã like feedback này rồi");
      }
      await updateDoc(ref, {
        likes: (fb.likes || 0) + 1,
        likedBy: [...(fb.likedBy || []), user.uid],
      });
    }

    if (type === "dislikes") {
      if (fb.dislikedBy?.includes(user.uid)) {
        return alert("Bạn đã dislike feedback này rồi");
      }
      await updateDoc(ref, {
        dislikes: (fb.dislikes || 0) + 1,
        dislikedBy: [...(fb.dislikedBy || []), user.uid],
      });
    }
  };

  // Xóa feedback (chỉ chủ sở hữu mới thấy nút này)
  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa feedback này?")) return;
    try {
      await deleteDoc(doc(db, "feedbacks", id));
    } catch (err) {
      console.error(err);
      alert("Xóa thất bại!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Gửi Feedback</h2>

      {user ? (
        <form onSubmit={handleSubmit} className="space-y-3 mb-6">
          <textarea
            className="w-full border rounded-md p-2 text-sm"
            rows={3}
            placeholder="Nhập góp ý của bạn..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Đang gửi..." : "Gửi feedback"}
          </button>
        </form>
      ) : (
        <p className="text-gray-600 text-sm mb-6">
          Bạn cần đăng nhập để gửi feedback.
        </p>
      )}

      <h3 className="text-lg font-semibold mb-3">Danh sách feedback</h3>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {feedbacks.length === 0 && (
          <p className="text-sm text-gray-500">Chưa có feedback nào.</p>
        )}
        {feedbacks.map((fb) => (
          <div key={fb.id} className="bg-white p-3 rounded-md shadow-sm">
            <p className="text-sm text-gray-800">{fb.message}</p>
            <p className="text-xs text-gray-400 mt-1">
              {fb.email} •{" "}
              {fb.createdAt?.seconds
                ? new Date(fb.createdAt.seconds * 1000).toLocaleString("vi-VN")
                : "Chưa rõ"}
            </p>
            <div className="flex items-center gap-3 mt-2 text-sm">
              <button
                onClick={() => handleVote(fb, "likes")}
                className="text-green-600 hover:underline"
              >
                👍 {fb.likes || 0}
              </button>
              <button
                onClick={() => handleVote(fb, "dislikes")}
                className="text-red-600 hover:underline"
              >
                👎 {fb.dislikes || 0}
              </button>

              {user?.uid === fb.userId && (
                <button
                  onClick={() => handleDelete(fb.id)}
                  className="text-gray-500 hover:text-red-600 ml-auto"
                >
                  🗑 Xóa
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}