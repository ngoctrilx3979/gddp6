'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

import { getCategories } from '@/lib/categoryService';
import {
  addPost,
  getPosts,
  updatePost,
  deletePost,
} from '@/lib/postService';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function BaiVietPage() {
  const [title, setTitle] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<any[]>([]);
  const [posts, setPosts] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // pagination state
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 5;

  const fetchData = async (reset = false) => {
    const { data, lastDoc: newLastDoc } = await getPosts(
      PAGE_SIZE,
      reset ? null : lastDoc
    );

    if (reset) {
      setPosts(data);
    } else {
      setPosts((prev) => [...prev, ...data]);
    }

    setLastDoc(newLastDoc);
    setHasMore(data.length === PAGE_SIZE);
  };

  useEffect(() => {
    getCategories().then(setCategories);
    fetchData(true);
  }, []);

  const handleSubmit = async () => {
    if (!title || !categoryId || !description) {
      return alert('Vui lòng điền đầy đủ thông tin');
    }

    if (editingId) {
      await updatePost(editingId, { title, categoryId, description });
      setEditingId(null);
    } else {
      await addPost(title, categoryId, description);
    }

    setTitle('');
    setCategoryId('');
    setDescription('');
    fetchData(true);
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
      fetchData(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
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

        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Nhập nội dung bài viết..."
          className="bg-white"
        />

        <div>
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
              className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
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
            className="bg-gray-100 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{post.title}</h3>
              <p className="text-sm text-gray-600">
                {post.createdAt?.seconds
                  ? new Date(post.createdAt.seconds * 1000).toLocaleString(
                      'vi-VN'
                    )
                  : '---'}{' '}
                | Danh mục:{' '}
                {categories.find((c) => c.id === post.categoryId)?.name ||
                  '---'}
              </p>
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
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-4 text-center">
          <button
            onClick={() => fetchData(false)}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Tải thêm
          </button>
        </div>
      )}
    </div>
  );
}
