'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function LienHePage() {
  const form = useRef<HTMLFormElement>(null);
const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_5q4hlev',
      'template_cmyjvna',
      form.current,
      '_de1cGyzEffrEsruY'
    )
    .then(() => {
        setStatus('success');
        form.current?.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Liên hệ</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">      
        
          <input
            type="text"
            name="name"
            placeholder="Mời bạn nhập tên"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Nội dung liên hệ..."
            required
            rows={5}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Gửi liên hệ
          </button>
        </form>

        {status === 'success' && (
          <p className="text-green-600 mt-4 text-center font-medium">
            ✅ Gửi email thành công!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-4 text-center font-medium">
            ❌ Gửi email thất bại. Vui lòng thử lại!
          </p>
        )}

      </div>
    </div>
  );
}
