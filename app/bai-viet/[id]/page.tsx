'use client';

import { notFound, useParams } from "next/navigation";
import { getPostById, getPostsByCategory } from "../../../lib/postService";
import { Post } from "../../../types/post";
import Link from "next/link";
import { getExcerpt } from "../../../lib/textUtils";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";


export default async function PostDetailPage() {

 const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;

    setLoading(true);
    getPostById(id as string)
      .then(setPost)
      .finally(() => setLoading(false));
  }, [id]);


  if (loading) return <Loading />; // 👈 Hiển thị vòng quay khi đang tải

  if (!post)
    return (
      <div className="text-center py-20 text-gray-600">
        Không tìm thấy bài học.
      </div>
    );

  const relatedPosts: Post[] = await getPostsByCategory(post.categoryId || "", post.id);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nội dung bên trái */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
         <article
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: post.description || "<p>Chưa có nội dung chi tiết.</p>",
                }}
              />
        <span className="text-sm text-gray-400 block mb-8">
          Ngày tạo:{" "}
          {post.createdAt?.seconds
            ? new Date(post.createdAt.seconds * 1000).toLocaleDateString("vi-VN")
            : "Chưa có ngày"}
        </span>

      
       
      </div>

      {/* Bài viết cùng chủ đề bên phải */}
      <aside className="md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Bài viết cùng chủ đề</h2>
        {relatedPosts.length === 0 ? (
          <p className="text-gray-500">Chưa có bài viết nào cùng chủ đề.</p>
        ) : (
          <ul className="space-y-3">
            {relatedPosts.map((p) => (
  <li key={p.id} className="border-b pb-2">
    <Link
      href={`/bai-viet/${p.id}`}
      className="text-blue-600 hover:underline font-medium"
    >
      {p.title}
    </Link>
    <p className="text-sm text-gray-600">
      {getExcerpt(p.description || "", 30)}
    </p>
  </li>
))}
          </ul>
        )}
      </aside>
    </div>
  );
}
