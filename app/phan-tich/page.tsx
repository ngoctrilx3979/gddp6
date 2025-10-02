"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { generateAnalysis } from "@/lib/geminiService";
import AnalysisOverview from "./sections/AnalysisOverview";
import PracticeAnalysis from "./sections/PracticeAnalysis";
import FeedbackAnalysis from "./sections/FeedbackAnalysis";
import LearningSuggestions from "./sections/LearningSuggestions";

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
      <AnalysisOverview overview={analysis.overview} />
      <PracticeAnalysis practice={analysis.practiceAnalysis} />
      <FeedbackAnalysis feedback={analysis.feedbackAnalysis} />
      <LearningSuggestions suggestions={analysis.suggestions} />
    </div>
  );
}
