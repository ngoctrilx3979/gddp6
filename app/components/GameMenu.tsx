"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaGamepad, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function GameMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔸 Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      {/* 🔹 Nút Game */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "white",
        }}
      >
        <FaGamepad />
        <span>Trò chơi</span>
        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>

      {/* 🔻 Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "120%",
            left: 0,
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            minWidth: "220px",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {/* 🃏 Lật thẻ */}
          <Link
            href="/games/lat-the"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "12px 16px",
              textDecoration: "none",
              color: "#333",
              fontWeight: 500,
            }}
          >
            🃏 Lật thẻ ký ức
          </Link>

          {/* ⚡ Flow Free */}
          <Link
            href="/game/flow-free"
            onClick={() => setOpen(false)}
            style={{
              display: "block",
              padding: "12px 16px",
              textDecoration: "none",
              color: "#333",
              fontWeight: 500,
              borderTop: "1px solid #eee",
            }}
          >
            ⚡ Flow Free
          </Link>
        </div>
      )}
    </div>
  );
}
