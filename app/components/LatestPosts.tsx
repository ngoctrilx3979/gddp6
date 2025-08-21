"use client";
import { useEffect, useState } from "react";
import { getLatestPosts } from "@/lib/postService";
import Image from "next/image";

export default function LatestPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestPosts(3).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-16 bg-white rounded-lg">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm font-medium">
          Bài viết mới nhất
        </span>
        <h2 className="text-3xl font-bold mt-4 mb-2 text-gray-800">
          Khám phá những chia sẻ mới
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cập nhật tin tức, tài liệu và kiến thức học tập giúp bạn học tập hiệu quả hơn mỗi ngày.
        </p>
      </div>

      {loading ? (
        <p className="text-center">Đang tải...</p>
      ) : posts.length === 0 ? (
        <p className="text-center">Chưa có bài viết nào.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, i) => (
            <div
              key={post.id}
              className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition group"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              {/* Hình ảnh */}
              <div className="relative w-full h-64">
                <Image
                  src={post.imageUrl || "/images/default-post.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Overlay nội dung */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left">
                <h3 className="text-lg font-semibold text-white">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-200 line-clamp-2">
                  {post.description}
                </p>
                <span className="text-xs text-gray-300 block mt-1">
                  {new Date(post.createdAt?.seconds * 1000).toLocaleDateString(
                    "vi-VN"
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
