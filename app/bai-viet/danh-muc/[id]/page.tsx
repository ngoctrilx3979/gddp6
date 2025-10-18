"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPostsByCategory } from "@/lib/postService";
import Loading from "../../../components/Loading";
import Link from "next/link";

export default function BaiVietTheoDanhMucPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    getPostsByCategory(id as string)
      .then(setPosts)
      .catch((err) => console.error("Lỗi khi tải bài viết:", err))
      .finally(() => setLoading(false));
  }, [id]);

  // 👉 Hàm cắt 100 từ đầu tiên (bỏ HTML)
  const getExcerpt = (html: string, wordCount: number = 100): string => {
    if (!html) return "";
    const text = html.replace(/<[^>]+>/g, " ");
    const words = text.trim().split(/\s+/);
    return (
      words.slice(0, wordCount).join(" ") +
      (words.length > wordCount ? "..." : "")
    );
  };

  // 👉 Lấy ảnh đầu tiên trong bài viết (nếu có)
  const getFirstImage = (html: string): string | null => {
    if (!html) return null;
    const match = html.match(/<img[^>]+src="([^">]+)"/i);
    return match ? match[1] : null;
  };

  // 👇 Hiển thị loading khi đang tải dữ liệu
  if (loading) return <Loading />;

  return (
    <main className="max-w-5xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Bài viết theo danh mục
      </h1>

      {posts.length === 0 ? (
        <p>Không có bài viết nào.</p>
      ) : (
        posts.map((post) => {
          const imageUrl = getFirstImage(post.description || "");

          return (
            <article
              key={post.id}
              className="flex bg-white rounded-xl shadow mb-6 border border-gray-200 overflow-hidden hover:shadow-lg transition"
              style={{ alignItems: "flex-start" }}
            >
              {/* 👇 Ảnh bên trái */}
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="object-cover w-[200px] h-[200px] rounded-l-xl"
                />
              ) : (
                <div className="w-[200px] h-[200px] bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  Không có ảnh
                </div>
              )}

              {/* 👇 Nội dung bên phải */}
              <div className="flex-1 p-4">
                <Link key={post.id} href={`/bai-viet/${post.id}`}>
                  <h2 className="text-xl font-semibold text-blue-600 mb-1 hover:underline">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-gray-500 mb-2">
                  {post.createdAt?.seconds
                    ? new Date(post.createdAt.seconds * 1000).toLocaleDateString(
                        "vi-VN"
                      )
                    : ""}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {getExcerpt(post.description || "")}
                </p>
              </div>
            </article>
          );
        })
      )}
    </main>
  );
}
