"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ThamQuanMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 🔸 Đóng menu khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} style={{ position: "relative" }}>
      {/* 🔹 Nút mở/đóng menu */}
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
        <span>Tham Quan</span>
        {open ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
      </div>

      {/* 🔸 Menu con */}
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
            minWidth: "260px",
            zIndex: 200,
          }}
        >
          <Link
            href="/virtual-tour/ton-duc-thang"
            style={{
              display: "block",
              padding: "10px",
              textDecoration: "none",
              color: "#333",
              borderBottom: "1px solid #eee",
            }}
            onClick={() => setOpen(false)}
          >
            Không gian văn hoá Chủ tịch Tôn Đức Thắng
          </Link>

          <Link
            href="/virtual-tour/mieu-ba-chua-xu"
            style={{
              display: "block",
              padding: "10px",
              textDecoration: "none",
              color: "#333",
              borderBottom: "1px solid #eee",
            }}
            onClick={() => setOpen(false)}
          >
            Miếu Bà Chúa Xứ Núi Sam
          </Link>

          {/* 🏠 Thêm menu Nhà Bảo Khiêm */}
          <Link
            href="/bao-khiem"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "10px",
              textDecoration: "none",
              color: "#333",
            }}
            onClick={() => setOpen(false)}
          >
            Nhà Bảo Khiêm
          </Link>
        </div>
      )}
    </div>
  );
}
