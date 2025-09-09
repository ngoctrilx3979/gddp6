'use client';

import { useEffect, useState } from 'react';
import { getCategories } from '@/lib/categoryService';
import { addPost, getPosts } from '@/lib/postService';




export default function BaiVietPage() {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);

  const fetchData = async () => {
    const [cats, postList] = await Promise.all([getCategories(), getPosts()]);
    setCategories(cats);
    setPosts(postList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!title || !categoryId || !description) {
      return alert('Vui lòng điền đầy đủ thông tin');
    }
    await addPost(title, categoryId, description);
    setTitle('');
    setCategoryId('');
    setDescription('');
    fetchData();
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Thêm Bài Viết</h1>

      {/* Form thêm bài viết */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4 mb-8">
        <input
          type="text"
          placeholder="Tiêu đề bài viết"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded"
        />

        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          className="border p-3 w-full rounded"
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <textarea
          value={description}
           onChange={(e) => setDescription(e.target.value)}
          placeholder="Nhập nội dung bài viết..."
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lưu bài viết
        </button>
      </div>

      {/* Danh sách bài viết */}
      <h2 className="text-xl font-semibold mb-2">Danh sách bài viết</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id} className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold">{post.title}</h3>
            <p className="text-sm text-gray-600">
              {new Date(post.createdAt?.seconds * 1000).toLocaleString()} | Danh mục: {
                categories.find((c) => c.id === post.categoryId)?.name || '---'
              }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
