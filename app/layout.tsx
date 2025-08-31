"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <html lang="vi">
      <body className="bg-gray-60 text-gray-800 font-sans">
        <Header />
        <main
          className="p-8 bg-white rounded-xl shadow-lg max-w-7xl w-[calc(100vw-60px)] mx-auto my-8"
        >
          {children}

          {/* Toastify Container */}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
        </main>
      </body>
    </html>
  );
}
