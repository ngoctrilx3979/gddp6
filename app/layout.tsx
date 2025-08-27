"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "./globals.css";
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
      <body>
        <Header/>
        <main style={{
          padding: '2rem',
          backgroundColor: '#FFB3BA',
          boxShadow: '#F8AFCF',
          borderRadius: '8px',
          margin: '2rem auto',
           width: 'calc(100vw - 60px)',

        }}
          >
          {children}
          {/* Toastify Container */}
        <ToastContainer
          position="top-right"
          autoClose={3000} // tự động đóng sau 3s
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored" // "light" | "dark" | "colored"
        />
        </main>
      </body>
    </html>
  );
}
