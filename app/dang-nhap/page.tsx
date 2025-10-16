"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, googleProvider, db } from "@/lib/firebase";
import Loading from "../components/Loading"; // 👈 thêm component loading

// 🔹 Lưu user vào Firestore
const saveUserToFirestore = async (user: any) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(
    userRef,
    {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || "",
      photoURL: user.photoURL || "",
      providerId: user.providerData[0]?.providerId || "password",
      createdAt: serverTimestamp(),
    },
    { merge: true } // tránh ghi đè khi user đăng nhập lại
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false); // 👈 trạng thái loading
  const router = useRouter();

  // 🔹 Đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      await saveUserToFirestore(result.user);
      toast.success("✅ Đăng nhập Google thành công!");
      router.push("/");
    } catch (error: any) {
      toast.error("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Đăng nhập / Đăng ký bằng email & password
  const handleEmailPassword = async () => {
    try {
      setLoading(true);
      if (isRegister) {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await saveUserToFirestore(result.user);
        toast.success("✅ Đăng ký thành công!");
      } else {
        const result = await signInWithEmailAndPassword(auth, email, password);
        await saveUserToFirestore(result.user);
        toast.success("✅ Đăng nhập thành công!");
      }
      router.push("/");
    } catch (error: any) {
      toast.error("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Nếu đang loading, hiển thị spinner
  if (loading) return <Loading />;

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
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isRegister ? "Đăng ký" : "Đăng nhập"}
        </button>

        {/* Chuyển đổi login/register */}
        <p
          className="text-sm text-center mt-4 text-blue-500 cursor-pointer"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Đã có tài khoản? Đăng nhập"
            : "Chưa có tài khoản? Đăng ký"}
        </p>

        {/* Google Login */}
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className={`flex items-center justify-center w-full gap-2 border p-2 rounded-lg transition ${
              loading ? "bg-gray-100 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            <FcGoogle size={24} />{" "}
            <span>
              {isRegister ? "Đăng ký bằng Google" : "Đăng nhập bằng Google"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
