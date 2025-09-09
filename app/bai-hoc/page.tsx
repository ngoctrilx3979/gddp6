'use client';

import { useEffect, useState } from 'react';
import { getTopics } from '@/lib/topicService';
import { addlesson, getLessons } from '@/lib/lessonService';


export default function BaiHocPage() {
  const [title, setTitle] = useState('');
  const [topicId, setTopicId] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);

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
    await addlesson(title, topicId, description);
    setTitle('');
    setTopicId('');
    setDescription('');
    fetchData();
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Thêm Bài học</h1>

      {/* Form thêm bài học */}
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
          <option value="">-- Chọn bài học </option>
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>

        <textarea
          value={description}
           onChange={(e) => setDescription(e.target.value)}
          placeholder="Nhập nội dung bài học..."
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Lưu bài học </button>
      </div>

      {/* Danh sách bài học */}
      <h2 className="text-xl font-semibold mb-2">Danh sách bài học</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="bg-gray-100 p-4 rounded">
            <h3 className="font-bold">{lesson.title}</h3>
            <p className="text-sm text-gray-600">
              {new Date(lesson.createdAt?.seconds * 1000).toLocaleString()} | Bài học: {
                topics.find((c) => c.id === lesson.categoryId)?.name || '---'
              }
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
