"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        padding: "1rem 2rem",
        backgroundColor: "var(--color-primary)", // Xanh dương chủ đạo
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* Menu điều hướng */}
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>Trang chủ</Link>
        <Link href="/gioi-thieu" style={{ color: "white", textDecoration: "none" }}>Giới thiệu</Link>
        <Link href="/lien-he" style={{ color: "white", textDecoration: "none" }}>Liên hệ</Link>
        <Link href="/danh-muc" style={{ color: "white", textDecoration: "none" }}>Danh mục</Link>
        <Link href="/bai-viet" style={{ color: "white", textDecoration: "none" }}>Bài viết</Link>
        <Link href="/chu-de" style={{ color: "white", textDecoration: "none" }}>Chủ đề</Link>
        <Link href="/bai-hoc" style={{ color: "white", textDecoration: "none" }}>Bài Học</Link>
      </nav>

      {/* User menu */}
      <div style={{ position: "relative" }}>
        {user ? (
          <>
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                cursor: "pointer",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  style={{ width: 32, height: 32, borderRadius: "50%" }}
                />
              ) : (
                <FaUserCircle size={32} />
              )}
              <span>{user.displayName || user.email}</span>
            </div>

            {menuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  marginTop: "0.5rem",
                  backgroundColor: "white",
                  color: "#333",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  minWidth: "180px",
                  zIndex: 100,
                }}
              >
                <div style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
                  <p style={{ margin: 0, fontWeight: "bold" }}>{user.displayName || "Người dùng"}</p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#555" }}>{user.email}</p>
                </div>
                 {/* 🔹 Thêm menu Phân tích */}
                <Link
                  href="/phan-tich"
                  style={{
                    display: "block",
                    padding: "10px",
                    textDecoration: "none",
                    color: "#333",
                    borderBottom: "1px solid #eee",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Phân tích
                </Link>
                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "10px",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-accent)", // Cam
                    fontWeight: "bold",
                  }}
                >
                  Đăng xuất
                </button>
              </div>
            )}
          </>
        ) : (
          <Link href="/dang-nhap" style={{ color: "white", textDecoration: "none" }}>
            Đăng Nhập
          </Link>
        )}
      </div>
    </header>
  );
}
