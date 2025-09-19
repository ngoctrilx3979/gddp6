'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';
import { getTopics } from '@/lib/topicService';
import { addLesson, getLessons, updateLesson, deleteLesson } from '@/lib/lessonService';



const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"], // chữ đậm, nghiêng, gạch chân
    [{ color: [] }, { background: [] }],       // màu chữ, màu nền
    [{ align: [] }],                           // canh lề
    [{ list: "ordered" }, { list: "bullet" }], // danh sách
    ["link", "image"],                         // chèn link, ảnh
    ["clean"],
  ],
  
};

const formats = [
  "header",
  "bold", "italic", "underline", "strike",
  "color", "background",
  "align",
  "list", "bullet",
  "link", "image",
];
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

export default function BaiHocPage() {
  const [title, setTitle] = useState('');
  const [topicId, setTopicId] = useState('');
  const [description, setDescription] = useState('');
  const [topics, setTopics] = useState<any[]>([]);
  const [lessons, setLessons] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // pagination state
  const [lastDoc, setLastDoc] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 5;

  const fetchData = async (reset = false) => {
    const { data, lastDoc: newLastDoc } = await getLessons(PAGE_SIZE, reset ? null : lastDoc);
    if (reset) {
      setLessons(data);
    } else {
      setLessons((prev) => [...prev, ...data]);
    }
    setLastDoc(newLastDoc);
    setHasMore(data.length === PAGE_SIZE);
  };

  useEffect(() => {
    getTopics().then(setTopics);
    fetchData(true);
  }, []);

  const handleSubmit = async () => {
    if (!title || !topicId || !description) {
      return alert('Vui lòng điền đầy đủ thông tin');
    }

    if (editingId) {
      await updateLesson(editingId, { title, topicId, description });
      setEditingId(null);
    } else {
      await addLesson(title, topicId, description);
    }

    setTitle('');
    setTopicId('');
    setDescription('');
    fetchData(true);
  };

  const handleEdit = (lesson: any) => {
    setTitle(lesson.title);
    setTopicId(lesson.topicId);
    setDescription(lesson.description);
    setEditingId(lesson.id);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Bạn có chắc muốn xóa bài học này?')) {
      await deleteLesson(id);
      fetchData(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        {editingId ? 'Sửa Bài Học' : 'Thêm Bài Học'}
      </h1>

      {/* Form */}
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
          modules={modules}   // 👈 thêm vào
          formats={formats}   // 👈 thêm vào
         
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? 'Cập nhật' : 'Lưu bài học'}
        </button>
        {editingId && (
          <button
            onClick={() => {
              setEditingId(null);
              setTitle('');
              setTopicId('');
              setDescription('');
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Hủy
          </button>
        )}
      </div>

      {/* Danh sách */}
      <h2 className="text-xl font-semibold mb-2">Danh sách bài học</h2>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className="bg-gray-100 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="font-bold">{lesson.title}</h3>
              <p className="text-sm text-gray-600">
                {lesson.createdAt?.seconds
                  ? new Date(lesson.createdAt.seconds * 1000).toLocaleString()
                  : '---'}{' '}
                | Chủ đề: {topics.find((c) => c.id === lesson.topicId)?.name || '---'}
              </p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(lesson)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Sửa
              </button>
              <button
                onClick={() => handleDelete(lesson.id)}
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
