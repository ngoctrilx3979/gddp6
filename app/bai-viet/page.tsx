'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { getCategories } from '@/lib/categoryService';
import { addPost, getPosts, updatePost, deletePost } from '@/lib/postService';

// Import ReactQuill bằng dynamic để tránh lỗi SSR
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });
import 'react-quill-new/dist/quill.snow.css';

export default function BaiVietPage() {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

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

    if (editingId) {
      // cập nhật
      await updatePost(editingId, { title, categoryId, description });
      setEditingId(null);
    } else {
      // thêm mới
      await addPost(title, categoryId, description);
    }

    setTitle('');
    setCategoryId('');
    setDescription('');
    fetchData();
  };

  const handleEdit = (post: any) => {
    setTitle(post.title);
    setCategoryId(post.categoryId);
    setDescription(post.description);
    setEditingId(post.id);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
      await deletePost(id);
      fetchData();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {editingId ? 'Sửa Bài Viết' : 'Thêm Bài Viết'}
      </h1>

      {/* Form */}
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

        {/* Editor thay cho textarea */}
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className="bg-white"
        />

        <div className="space-x-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {editingId ? 'Cập nhật' : 'Lưu bài viết'}
          </button>
          {editingId && (
            <button
              onClick={() => {
                setEditingId(null);
                setTitle('');
                setCategoryId('');
                setDescription('');
              }}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
              Hủy
            </button>
          )}
        </div>
      </div>

      {/* Danh sách */}
      <h2 className="text-xl font-semibold mb-2">Danh sách bài viết</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-gray-100 p-4 rounded"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  {post.createdAt?.seconds
                    ? new Date(post.createdAt.seconds * 1000).toLocaleString()
                    : '---'}{' '}
                  | Danh mục: {categories.find((c) => c.id === post.categoryId)?.name || '---'}
                </p>
                {/* Render nội dung HTML */}
                <div
                  className="prose mt-2"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Sửa
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Xóa
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
