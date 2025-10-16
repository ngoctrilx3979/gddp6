"use client";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1rem",
        color: "var(--color-primary)",
      }}
    >
      <FaSpinner
        size={80}
        style={{
          animation: "spin 1s linear infinite",
          marginBottom: "1rem",
        }}
      />
      <p style={{ fontSize: "1.1rem", fontWeight: "500" }}>Đang tải dữ liệu...</p>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
