import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Website Hỗ Trợ Môn Học Giáo Dục Địa Phương 6",
  description: "Website được thiết kế bởi Bùi Đức Trí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
