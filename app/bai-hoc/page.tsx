'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

import { getTopics } from '@/lib/topicService';
import { addlesson, getLessons, deleteLesson, updateLesson } from '@/lib/lessonService';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function BaiHocPage() {
  const [title, setTitle] = useState('');
  const [topicId, setTopicId] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);
  const [editId, setEditId] = useState<string | null>(null);

  const fetchData = async () => {
    const [topicList, lessonList] = await Promise.all([getTopics(), getLessons()]);
    setTopics(topicList);
    setLessons(lessonList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async () => {
    if (!title || !topicId || !description) {
      return alert('Vui lòng điền đầy đủ thông tin');
    }

    if (editId) {
      await updateLesson(editId, { title, categoryId: topicId, description });
      setEditId(null);
    } else {
      await addlesson(title, topicId, description);
    }

    setTitle('');
    setTopicId('');
    setDescription('');
    fetchData();
  };

  const handleEdit = (lesson: any) => {
    setEditId(lesson.id);
    setTitle(lesson.title);
    setTopicId(lesson.categoryId);
    setDescription(lesson.description);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa bài học này không?')) {
      await deleteLesson(id);
      fetchData();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Thêm Bài học</h1>

      {/* Form thêm/sửa bài học */}
      <div className="bg-white p-6 rounded-lg shadow space-y-4 mb-8">
        <input
          type="text"
          placeholder="Tiêu đề bài học"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded"
        />

        <select
          value={topicId}
          onChange={(e) => setTopicId(e.target.value)}
          className="border p-3 w-full rounded"
        >
          <option value="">-- Chọn chủ đề --</option>
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>

        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          placeholder="Nhập nội dung bài học..."
          className="bg-white"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? 'Cập nhật bài học' : 'Lưu bài học'}
        </button>
      </div>

      {/* Danh sách bài học */}
      <h2 className="text-xl font-semibold mb-2">Danh sách bài học</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold">{lesson.title}</h3>
            <p className="text-sm text-gray-600">
              {lesson.createdAt?.seconds
                ? new Date(lesson.createdAt.seconds * 1000).toLocaleString()
                : '---'}{' '}
              | Chủ đề:{' '}
              {topics.find((c) => c.id === lesson.categoryId)?.name || '---'}
            </p>
            <div
              className="prose prose-sm max-w-none mt-2"
              dangerouslySetInnerHTML={{ __html: lesson.description }}
            />

            {/* Nút sửa / xóa */}
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => handleEdit(lesson)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(lesson.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
