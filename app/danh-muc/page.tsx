'use client';
import { useEffect, useState } from 'react';
import {
  addCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} from '@/lib/categoryService';
import Loading from '../components/Loading'; // 👈 import component

export default function DanhMucPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // 👈 thêm state loading
  const [name, setName] = useState('');
  const [order, setOrder] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [editData, setEditData] = useState({ name: '', order: '', description: '' });

  const fetchData = async () => {
    setLoading(true);
    const data = await getCategories();
    data.sort((a: any, b: any) => a.order - b.order);
    setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = async () => {
    if (!name || !order) return alert('Vui lòng điền đầy đủ thông tin');
    await addCategory(name, Number(order), description);
    setName('');
    setOrder('');
    setDescription('');
    fetchData();
  };

  const handleDelete = async (id: string) => {
    await deleteCategory(id);
    fetchData();
  };

  const handleUpdate = async () => {
    if (!editData.name || !editData.order) return alert('Thiếu thông tin');
    await updateCategory(
      editId!,
      editData.name,
      Number(editData.order),
      editData.description
    );
    setEditId(null);
    setEditData({ name: '', order: '', description: '' });
    fetchData();
  };

  // 👇 Khi đang tải
  if (loading) return <Loading />;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Quản lý danh mục</h1>

      {/* Form thêm mới */}
      <div className="bg-white shadow p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Tên danh mục"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded"
        />
        <input
          type="number"
          placeholder="Thứ tự"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          className="border p-3 rounded"
        />
        <textarea
          placeholder="Diễn giải"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded md:col-span-2"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Thêm danh mục
        </button>
      </div>

      {/* Danh sách danh mục */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto text-sm">
          <thead className="bg-blue-50 text-left">
            <tr>
              <th className="p-3">Thứ tự</th>
              <th className="p-3">Tên danh mục</th>
              <th className="p-3">Diễn giải</th>
              <th className="p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t">
                {editId === cat.id ? (
                  <>
                    <td className="p-3">
                      <input
                        type="number"
                        value={editData.order}
                        onChange={(e) =>
                          setEditData({ ...editData, order: e.target.value })
                        }
                        className="border p-1 rounded w-16"
                      />
                    </td>
                    <td className="p-3">
                      <input
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="border p-1 rounded w-full"
                      />
                    </td>
                    <td className="p-3">
                      <textarea
                        value={editData.description}
                        onChange={(e) =>
                          setEditData({ ...editData, description: e.target.value })
                        }
                        className="border p-1 rounded w-full resize-none h-20"
                      />
                    </td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={handleUpdate}
                        className="text-green-600 hover:underline"
                      >
                        Lưu
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="text-gray-600 hover:underline"
                      >
                        Hủy
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-3">{cat.order}</td>
                    <td className="p-3">{cat.name}</td>
                    <td className="p-3">{cat.description}</td>
                    <td className="p-3 space-x-2">
                      <button
                        onClick={() => {
                          setEditId(cat.id);
                          setEditData({
                            name: cat.name,
                            order: cat.order,
                            description: cat.description,
                          });
                        }}
                        className="text-blue-600 hover:underline"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="text-red-600 hover:underline"
                      >
                        Xóa
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
