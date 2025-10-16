"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { getTopics } from "@/lib/topicService";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function LessonMenu() {
  const [topics, setTopics] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTopics().then(setTopics);
  }, []);

  // 👇 Click ra ngoài để đóng menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!topics.length) return null;

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      {/* 🔹 Nút mở/đóng */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span>Bài học</span>
        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>

      {/* 🔸 Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "120%",
            left: 0,
            background: "white",
            color: "#333",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            minWidth: "200px",
            zIndex: 200,
          }}
        >
          {topics.map((t) => (
            <Link
              key={t.id}
              href={`/bai-hoc/chu-de/${t.id}`}
              style={{
                display: "block",
                padding: "10px",
                textDecoration: "none",
                color: "#333",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => setOpen(false)} // khi click item thì đóng luôn
            >
              {t.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
