"use client";
import { useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  // Đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("✅ Đăng nhập Google thành công!");
    } catch (error: any) {
      alert("❌ " + error.message);
    }
  };

  // Đăng nhập / Đăng ký bằng Email & Password
  const handleEmailPassword = async () => {
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Đăng ký thành công!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Đăng nhập thành công!");
      }
    } catch (error: any) {
      alert("❌ " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          {isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Nút Login / Register */}
        <button
          onClick={handleEmailPassword}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>

        {/* Chuyển đổi login/register */}
        <p
          className="text-sm text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}
        </p>

        {/* Google Login */}
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full gap-2 border p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FcGoogle size={24} />{" "}
            <span>{isRegister ? "Đăng ký bằng Google" : "Đăng nhập bằng Google"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
