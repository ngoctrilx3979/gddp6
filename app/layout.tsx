"use client";
import { useEffect } from "react";
import "./globals.css";
import Link from 'next/link'
import AOS from "aos";
import "aos/dist/aos.css";

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
        <header style={{
          padding: '1rem',
          backgroundColor: '#333',    // nền tối
        }}>
          <nav style={{
            display: 'flex',
            gap: '1.5rem',
          }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Trang chủ</Link>
            <Link href="/gioi-thieu" style={{ color: 'white', textDecoration: 'none' }}>Giới thiệu</Link>
            <Link href="/lien-he" style={{ color: 'white', textDecoration: 'none' }}>Liên hệ</Link>
            <Link href="/danh-muc" style={{ color: 'white', textDecoration: 'none' }}>Danh mục</Link>
            <Link href="/bai-viet" style={{ color: 'white', textDecoration: 'none' }}>Bài viết</Link>
            <Link href="/chu-de" style={{ color: 'white', textDecoration: 'none' }}>Chủ đề</Link>
            <Link href="/bai-hoc" style={{ color: 'white', textDecoration: 'none' }}>Bài Học</Link>
          </nav>
        </header>
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
        </main>
      </body>
    </html>
  );
}
