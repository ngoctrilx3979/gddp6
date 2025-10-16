"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Loading from "../components/Loading"; // 👈 Dùng chung component loading của em
import { FaSpinner } from "react-icons/fa";

export default function LienHePage() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false); // 👈 trạng thái khi gửi email
  const [loadingPage, setLoadingPage] = useState(true); // 👈 loading khi trang đang mở

  useEffect(() => {
    // mô phỏng thời gian tải dữ liệu (1 giây)
    const timer = setTimeout(() => setLoadingPage(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        "service_5q4hlev",
        "template_cmyjvna",
        form.current,
        "_de1cGyzEffrEsruY"
      );
      setStatus("success");
      form.current?.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  // 👇 Hiển thị loading khi trang đang tải
  if (loadingPage) return <Loading />;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Liên hệ
        </h1>

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
            disabled={sending}
            className={`flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-semibold transition ${
              sending
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {sending && (
              <FaSpinner
                className="animate-spin"
                style={{ fontSize: "1.2rem" }}
              />
            )}
            {sending ? "Đang gửi..." : "Gửi liên hệ"}
          </button>
        </form>

        {status === "success" && (
          <p className="text-green-600 mt-4 text-center font-medium">
            ✅ Gửi email thành công!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 mt-4 text-center font-medium">
            ❌ Gửi email thất bại. Vui lòng thử lại!
          </p>
        )}
      </div>
    </div>
  );
}
