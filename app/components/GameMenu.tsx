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
      {/* 🎮 Nút Game */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "white",
          fontWeight: 500,
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
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            minWidth: "240px",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {/* 🃏 Lật thẻ ký ức */}
          <Link
            href="/games/lat-the"
            onClick={() => setOpen(false)}
            style={menuItemStyle}
          >
            🃏 Lật thẻ ký ức
            <span style={subText}>Ghi nhớ hình ảnh</span>
          </Link>

          {/* ⚡ Flow Free */}
          <Link
            href="/games/flow-free"
            onClick={() => setOpen(false)}
            style={{
              ...menuItemStyle,
              borderTop: "1px solid #eee",
            }}
          >
            ⚡ Flow Free
            <span style={subText}>Nối điện thông minh</span>
          </Link>
        </div>
      )}
    </div>
  );
}

/* 🎨 STYLE DÙNG CHUNG */
const menuItemStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  padding: "14px 18px",
  textDecoration: "none",
  color: "#111",
  fontWeight: 600,
};

const subText: React.CSSProperties = {
  fontSize: "0.8rem",
  fontWeight: 400,
  color: "#666",
  marginTop: "4px",
};
