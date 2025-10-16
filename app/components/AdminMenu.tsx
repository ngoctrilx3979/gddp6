"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FaChevronDown } from "react-icons/fa"; // icon mũi tên

export default function AdminMenu() {
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const [open, setOpen] = useState(false); // trạng thái dropdown

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);
        if (snap.exists() && snap.data().role === "superadmin") {
          setIsSuperAdmin(true);
        } else {
          setIsSuperAdmin(false);
        }
      } else {
        setIsSuperAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (!isSuperAdmin) return null;

  return (
    <div style={{ position: "relative" }}>
      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "1rem",
        }}
      >
        Quản trị
        <FaChevronDown
          size={12}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            backgroundColor: "white",
            color: "#333",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            minWidth: "180px",
            overflow: "hidden",
            zIndex: 100,
          }}
        >
          {[
            { href: "/danh-muc", label: "Danh mục" },
            { href: "/bai-viet", label: "Bài viết" },
            { href: "/chu-de", label: "Chủ đề" },
            { href: "/bai-hoc", label: "Bài học" },//

          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "10px 14px",
                textDecoration: "none",
                color: "#333",
                fontSize: "0.95rem",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
