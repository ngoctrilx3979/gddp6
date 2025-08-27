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

// Hàm lưu user
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
    { merge: true } // merge để không ghi đè khi user login lại
  );
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
const router = useRouter();
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    await saveUserToFirestore(user);

    toast.success("✅ Đăng nhập Google thành công!");
    router.push("/");
  } catch (error: any) {
    toast.error("❌ " + error.message);
  }
};

const handleEmailPassword = async () => {
  try {
    if (isRegister) {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;
      await saveUserToFirestore(user);

      toast.success("✅ Đăng ký thành công!");
    } else {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      await saveUserToFirestore(user);

      toast.success("✅ Đăng nhập thành công!");
    }
    router.push("/");
  } catch (error: any) {
    toast.error("❌ " + error.message);
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
