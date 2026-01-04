"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";

import AdminMenu from "./AdminMenu";
import PostMenu from "./PostMenu";
import LessonMenu from "./LessonMenu";
import ThamQuanMenu from "./ThamQuanMenu";
import Linkmenu from "./LinkMenu";
import GameMenu from "./GameMenu";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUserMenuOpen(false);
  };

  return (
    <header
      style={{
        padding: "1rem 2rem",
        backgroundColor: "var(--color-primary)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "relative",
        zIndex: 50,
      }}
    >
      {/* 🔹 MENU TRÁI */}
      <nav
        style={{
          display: "flex",
          gap: "1.5rem",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ color: "white", textDecoration: "none" }}>
          Trang chủ
        </Link>

        <Link href="/gioi-thieu" style={{ color: "white", textDecoration: "none" }}>
          Giới thiệu
        </Link>

        <PostMenu />
        <LessonMenu />
        <ThamQuanMenu />

        {/* 🎮 GAME MENU */}
        <GameMenu />

        <Linkmenu />

        <Link href="/lien-he" style={{ color: "white", textDecoration: "none" }}>
          Liên hệ
        </Link>

        <AdminMenu />
      </nav>

      {/* 🔸 USER MENU PHẢI */}
      <div style={{ position: "relative" }}>
        {user ? (
          <>
            <div
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              style={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="avatar"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                  }}
                />
              ) : (
                <FaUserCircle size={32} />
              )}
              <span>{user.displayName || user.email}</span>
            </div>

            {userMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "120%",
                  background: "white",
                  color: "#333",
                  borderRadius: "10px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  minWidth: "200px",
                  zIndex: 100,
                }}
              >
                <div style={{ padding: "12px", borderBottom: "1px solid #eee" }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>
                    {user.displayName || "Người dùng"}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.85rem", color: "#666" }}>
                    {user.email}
                  </p>
                </div>

                <Link
                  href="/phan-tich"
                  onClick={() => setUserMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px",
                    textDecoration: "none",
                    color: "#333",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  📊 Phân tích
                </Link>

                
                <Link
                  href="/luyen-tap"
                  onClick={() => setUserMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px",
                    textDecoration: "none",
                    color: "#333",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  📝 Đã luyện tập
                </Link>


                <button
                  onClick={handleLogout}
                  style={{
                    width: "100%",
                    padding: "12px",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-accent)",
                    fontWeight: 600,
                  }}
                >
                  🚪 Đăng xuất
                </button>
              </div>
            )}
          </>
        ) : (
          <Link href="/dang-nhap" style={{ color: "white", textDecoration: "none" }}>
            Đăng nhập
          </Link>
        )}
      </div>
    </header>
  );
}
