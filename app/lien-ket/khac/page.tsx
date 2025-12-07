"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const categories = [
  { title: "Chat gpt", img: "/images (2).png", link: "https://chatgpt.com/" },
  { title: "Gemini", img: "/gemini-color.png", link: "https://gemini.google.com/" },
  { title: "Grock", img: "/images.jpg", link: "https://grok.com/" },
  { title: "Deepseek", img: "/tải xuống.png", link: "https://chat.deepseek.com/" },
];

export default function KhacPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div style={{ padding: "20px" }}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              target="_blank"
              className="
                bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center
                hover:shadow-xl hover:-translate-y-1 transition-all duration-200
              "
            >
              <div className="w-16 h-16 relative mb-3">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-full"
                />
              </div>

              <p className="text-sm text-gray-800 font-medium">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
