"use client";

import React from "react";
import type { JSX } from "react";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { askGemini } from "@/lib/geminiService";
import { useRouter } from "next/navigation"; // 🧭 thêm dòng này

interface Lesson {
  id: string;
  title: string;
  topic: string;
  description: string;
}

export default function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [topics, setTopics] = useState<{ id: string; name: string }[]>([]);
  const router = useRouter(); // 🧭 dùng để chuyển trang

  // 🔹 Lấy dữ liệu Firestore (bài học + chủ đề)
  useEffect(() => {
    const fetchData = async () => {
      const lessonSnap = await getDocs(collection(db, "lessons"));
      const topicSnap = await getDocs(collection(db, "topics"));
      setLessons(
        lessonSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Lesson[]
      );
      setTopics(
        topicSnap.docs.map((doc) => ({
          id: doc.id,
          name: (doc.data() as any).name,
        }))
      );
    };
    fetchData();
  }, []);

  // 🔹 Gửi tin nhắn tới Gemini
  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askGemini(userMessage, {
        links: {
          "Giới thiệu": "/gioi-thieu",
          "Liên hệ": "/lien-he",
          "Phân tích người học": "/phan-tich",
          "Bài học theo chủ đề": "/bai-hoc/chu-de/<id>",
          "Bài học chi tiết": "/bai-hoc/<id>",
        },
      });
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "⚠️ Có lỗi khi gọi Gemini API." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🔗 Hàm xử lý tin nhắn có link markdown ([text](link))
  const renderMessage = (text: string) => {
    const regex = /\[([^\]]+)\]\((\/[^\)]+)\)/g; // tìm các link dạng [text](/duong-dan)
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [full, label, url] = match;
      parts.push(text.slice(lastIndex, match.index)); // phần trước link
      parts.push(
        <button
          key={match.index}
          onClick={() => router.push(url)} // 👉 chuyển trang khi click
          className="text-blue-600 underline hover:text-blue-800 transition-colors"
        >
          {label}
        </button>
      );
      lastIndex = regex.lastIndex;
    }

    parts.push(text.slice(lastIndex)); // phần sau link
    return parts;
  };

  return (
    <>
      {/* 🟢 Nút Chat trôi nổi */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* 💬 Hộp thoại Chat */}
      {open && (
        <div className="fixed bottom-5 right-5 h-100 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-2">
            <h3 className="font-semibold">Chat Assistant 🤖</h3>
            <button onClick={() => setOpen(false)} className="hover:opacity-80">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  m.role === "user" ? "text-right text-blue-700" : "text-left text-gray-800"
                }`}
              >
                <span className="inline-block bg-white px-3 py-2 rounded-lg shadow-sm whitespace-pre-line max-w-[90%] break-words">
                  {renderMessage(m.text)} {/* 👉 xử lý link */}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-sm animate-pulse">Đang suy nghĩ...</div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-2 flex items-center gap-2">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg disabled:opacity-50"
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}
