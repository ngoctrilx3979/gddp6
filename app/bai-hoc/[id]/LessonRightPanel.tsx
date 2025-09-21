"use client";

import { useState } from "react";
import LessonSummary from "@/app/components/LessonSummary";
import FeedbackSection from "./FeedbackSection";

interface LessonRightPanelProps {
  lessonId: string;
  lessonContent: string;
}

export default function LessonRightPanel({ lessonId, lessonContent }: LessonRightPanelProps) {
  const [activeTab, setActiveTab] = useState<"summary" | "feedback">("summary");

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
      </div>

      {/* Tab content */}
      <div className="p-4">
        {activeTab === "summary" && (
          <LessonSummary lessonId={lessonId} lessonContent={lessonContent} />
        )}
        {activeTab === "feedback" && <FeedbackSection lessonId={lessonId} />}
      </div>
    </div>
  );
}
