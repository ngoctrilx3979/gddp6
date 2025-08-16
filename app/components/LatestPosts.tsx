"use client";
import { useEffect, useState } from "react";
import { getLatestPosts } from "@/lib/postService";

export default function LatestPosts() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestPosts(6).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="py-8 bg-white shadow-sm rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Bài viết mới nhất</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : posts.length === 0 ? (
        <p>Chưa có bài viết nào.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 border rounded hover:shadow transition">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <span className="text-xs text-gray-400 block mt-2">
                {new Date(post.createdAt?.seconds * 1000).toLocaleDateString("vi-VN")}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
