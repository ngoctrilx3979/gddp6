"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { generateAnalysis } from "@/lib/geminiService";

// 🧩 Các section hiện có
import AnalysisOverview from "./sections/AnalysisOverview";
import PracticeAnalysis from "./sections/PracticeAnalysis";
import FeedbackAnalysis from "./sections/FeedbackAnalysis";
import LearningSuggestions from "./sections/LearningSuggestions";

// 🆕 Thêm 3 section biểu đồ
import PracticeChart from "./sections/PracticeChart";
import FeedbackChart from "./sections/FeedbackChart";
import ProgressChart from "./sections/ProgressChart";

export default function PhanTichPage() {
  const [user, setUser] = useState<User | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      // 🔹 Lấy danh sách bài học
      const lessonsSnap = await getDocs(collection(db, "lessons"));
      const lessons = lessonsSnap.docs.map((d) => d.data());

      // 🔹 Lấy kết quả luyện tập của user
      const practiceSnap = await getDocs(
        query(collection(db, "practiceResults"), where("userId", "==", user.uid))
      );
      const practices = practiceSnap.docs.map((d) => d.data());

      // 🔹 Lấy feedback của user
      const feedbackSnap = await getDocs(
        query(collection(db, "feedbacks"), where("userId", "==", user.uid))
      );
      const feedbacks = feedbackSnap.docs.map((d) => d.data());

      // 🔹 Gọi AI phân tích
      const result = await generateAnalysis(lessons, practices, feedbacks);
      setAnalysis(result);
    };

    loadData();
  }, [user]);

  if (!user) {
    return <p className="p-4">Bạn cần đăng nhập để xem phân tích</p>;
  }

  if (!analysis) {
    return <p className="p-4">Đang phân tích dữ liệu học tập...</p>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Phân tích năng lực học tập</h1>

      {/* 🧠 Phân tích tổng quan */}
      <AnalysisOverview overview={analysis.overview} />

      {/* 📊 Phân tích luyện tập */}
      <PracticeAnalysis practice={analysis.practiceAnalysis} />

      {/* 💬 Phân tích phản hồi */}
      <FeedbackAnalysis feedback={analysis.feedbackAnalysis} />

      {/* 💡 Gợi ý học tập */}
      <LearningSuggestions suggestions={analysis.suggestions} />

      {/* 🆕 KHU VỰC BIỂU ĐỒ TRỰC QUAN */}
      <div className="pt-8 space-y-6 border-t">
        <h2 className="text-xl font-semibold mb-4">Thống kê trực quan</h2>

        {/* 🟦 Biểu đồ luyện tập */}
        <PracticeChart data={analysis.charts?.practiceChart} />

        {/* 🟩 Biểu đồ phản hồi */}
        <FeedbackChart data={analysis.charts?.feedbackChart} />

        {/* 🟨 Biểu đồ tiến trình */}
        <ProgressChart data={analysis.charts?.progressChart} />
      </div>
    </div>
  );
}