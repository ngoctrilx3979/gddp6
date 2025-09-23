"use client";

import { useState } from "react";
import LessonSummary from "@/app/components/LessonSummary";
import FeedbackSection from "./FeedbackSection";
import Practice from "@/app/components/Practice"; // 👈 import thêm

interface LessonRightPanelProps {
  lessonId: string;
  lessonContent: string;
}

export default function LessonRightPanel({ lessonId, lessonContent }: LessonRightPanelProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "feedback" | "practice">("summary");

  return (
    <div className="bg-white rounded-xl shadow">
      {/* Tab header */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("summary")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === "summary"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Tóm tắt
        </button>
        <button
          onClick={() => setActiveTab("feedback")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === "feedback"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Feedback
        </button>
        <button
          onClick={() => setActiveTab("practice")}
          className={`flex-1 px-4 py-2 text-sm font-medium ${
            activeTab === "practice"
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-blue-500"
          }`}
        >
          Luyện tập
        </button>
      </div>

      {/* Tab content */}
      <div className="p-4">
        {activeTab === "summary" && (
          <LessonSummary lessonId={lessonId} lessonContent={lessonContent} />
        )}
        {activeTab === "feedback" && <FeedbackSection lessonId={lessonId} />}
        {activeTab === "practice" && <Practice lessonId={lessonId} lessonContent={lessonContent}/>}
        
        
      </div>
    </div>
  );
}
