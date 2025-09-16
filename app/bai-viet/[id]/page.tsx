import { notFound } from "next/navigation";
import { getPostById, getPosts } from "@/lib/postService";
import Link from "next/link";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const post = await getPostById(params.id);

  if (!post) return notFound();

  // 🔹 Lấy bài viết cùng chủ đề (trừ bài hiện tại)
  const related = await getPosts(5);
  const relatedPosts = related.data.filter(
    (p: any) => p.categoryId === post.categoryId && p.id !== post.id
  );

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Nội dung bên trái */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.description}</p>
        <span className="text-sm text-gray-400 block mb-8">
          Ngày tạo:{" "}
          {post.createdAt?.seconds
            ? new Date(post.createdAt.seconds * 1000).toLocaleDateString("vi-VN")
            : "Chưa có ngày"}
        </span>

        <article className="prose max-w-none">
          {post.content || "Chưa có nội dung chi tiết."}
        </article>
      </div>

      {/* Bài viết cùng chủ đề bên phải */}
      <aside className="md:col-span-1">
        <h2 className="text-xl font-semibold mb-4">Bài viết cùng chủ đề</h2>
        {relatedPosts.length === 0 ? (
          <p className="text-gray-500">Chưa có bài viết nào cùng chủ đề.</p>
        ) : (
          <ul className="space-y-3">
            {relatedPosts.map((p: any) => (
              <li key={p.id} className="border-b pb-2">
                <Link
                  href={`/bai-viet/${p.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-gray-500 line-clamp-2">{p.description}</p>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
