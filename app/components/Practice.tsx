"use client";

import { useState, useEffect } from "react";
import { db, auth } from "@/lib/firebase";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { onAuthStateChanged, User } from "firebase/auth";
import { generateQuestions } from "@/lib/geminiService";

interface PracticeProps {
  lessonId: string;
  lessonContent: string;
}

export default function Practice({ lessonId, lessonContent }: PracticeProps) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [numQuestions, setNumQuestions] = useState(3);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Theo dõi user đăng nhập
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // 🔹 Load câu hỏi + kết quả gần nhất từ Firestore
  useEffect(() => {
    if (!user) return;

    const loadData = async () => {
      // 1. Lấy câu hỏi cũ (nếu có)
      const q = query(
        collection(db, "practiceQuestions"),
        where("lessonId", "==", lessonId),
        where("userId", "==", user.uid)
      );
      const snapQ = await getDocs(q);
      const qList = snapQ.docs.map((d) => ({ id: d.id, ...d.data() }));
      setQuestions(qList);

      // 2. Lấy kết quả gần nhất (nếu có)
      const r = query(
        collection(db, "practiceResults"),
        where("lessonId", "==", lessonId),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc"),
        limit(1)
      );
      const snapR = await getDocs(r);

      if (!snapR.empty) {
        const data = snapR.docs[0].data();
        setAnswers(data.answers || {});
        setScore(data.score || 0);
        setSubmitted(true);
      } else {
        setAnswers({});
        setScore(null);
        setSubmitted(false);
      }
    };

    loadData();
  }, [lessonId, user]);

  const handleAnswer = (qId: string, opt: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: opt }));
  };

  const submitPractice = async () => {
    if (!user) return;

    let count = 0;
    const resultDetails: any[] = [];

    questions.forEach((q, idx) => {
      const qId = q.id || `q${idx}`;
      const userAns = answers[qId];
      const isCorrect = userAns === q.correct;
      if (isCorrect) count++;
      resultDetails.push({
        question: q.question,
        selected: userAns || null,
        correct: q.correct,
        isCorrect,
      });
    });

    setScore(count);
    setSubmitted(true);
      // ❌ Xóa kết quả cũ của user + lesson
  const oldResults = query(
    collection(db, "practiceResults"),
    where("lessonId", "==", lessonId),
    where("userId", "==", user.uid)
  );
  const snapOld = await getDocs(oldResults);
  for (const d of snapOld.docs) {
    await deleteDoc(doc(db, "practiceResults", d.id));
  }

    // ✅ Lưu kết quả vào Firestore
    await addDoc(collection(db, "practiceResults"), {
      lessonId,
      userId: user.uid,
      answers,
      score: count,
      details: resultDetails,
      createdAt: serverTimestamp(),
    });
  };

  const createPractice = async () => {
    if (!user) {
      alert("Bạn cần đăng nhập để tạo luyện tập");
      return;
    }
    if (numQuestions < 3 || numQuestions > 10) {
      alert("Số lượng câu hỏi phải từ 3 đến 10");
      return;
    }
    setLoading(true);

    try {
      // ❌ Xóa câu hỏi cũ của user+lesson trong Firestore
      const qOld = query(
        collection(db, "practiceQuestions"),
        where("lessonId", "==", lessonId),
        where("userId", "==", user.uid)
      );
      const snapOld = await getDocs(qOld);
      for (const d of snapOld.docs) {
        await deleteDoc(doc(db, "practiceQuestions", d.id));
      }

      // 🔹 Gọi Gemini để tạo mới
      const prompt = `
Hãy tạo ${numQuestions} câu hỏi trắc nghiệm dựa trên nội dung sau:
"${lessonContent}"

Yêu cầu:
- Mỗi câu có 4 đáp án A, B, C, D
- Chỉ định rõ đáp án đúng
- Trả về JSON theo cấu trúc:
[
  {
    "question": "Câu hỏi ...",
    "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
    "correct": "B"
  }
]
      `;

      const generated = await generateQuestions(prompt);

      const savedQuestions: any[] = [];
      for (const q of generated) {
        const docRef = await addDoc(collection(db, "practiceQuestions"), {
          lessonId,
          userId: user.uid,
          question: q.question,
          options: q.options,
          correct: q.correct,
          createdAt: serverTimestamp(),
        });
        savedQuestions.push({ id: docRef.id, ...q });
      }

      setQuestions(savedQuestions);
      setAnswers({});
      setScore(null);
      setSubmitted(false);
    } catch (err) {
      console.error("Error creating practice:", err);
      alert("Lỗi khi tạo luyện tập!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Luyện tập</h1>

      {!user && <p className="text-red-500">Bạn cần đăng nhập để luyện tập.</p>}

      {user && (
        <>
          {/* Ô nhập số lượng câu hỏi */}
          <div className="flex items-center gap-2 mb-4">
            <input
              type="number"
              min={3}
              max={10}
              value={numQuestions}
              onChange={(e) => setNumQuestions(Number(e.target.value))}
              className="border p-2 w-20"
            />
            <button
              onClick={createPractice}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              {loading ? "Đang tạo..." : "Tạo luyện tập mới"}
            </button>
          </div>

          {/* Danh sách câu hỏi */}
          {questions.map((q, idx) => {
            const qId = q.id || `q${idx}`;
            const userAns = answers[qId];

            return (
              <div key={qId} className="mb-4">
                <p className="font-medium">{q.question}</p>
                <div className="flex flex-col gap-1">
                  {q.options.map((opt: string) => {
                    const optionValue = opt[0];
                    const isSelected = userAns === optionValue;

                    let optionStyle = "";
                    if (submitted) {
                      if (optionValue === q.correct) {
                        optionStyle = "text-green-600 font-bold";
                      } else if (isSelected && optionValue !== q.correct) {
                        optionStyle = "text-pink-600";
                      }
                    }

                    return (
                      <label key={opt} className={optionStyle}>
                        <input
                          type="radio"
                          name={qId}
                          value={optionValue}
                          disabled={submitted}
                          checked={isSelected}
                          onChange={() => handleAnswer(qId, optionValue)}
                        />
                        <span className="ml-2">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {questions.length > 0 && !submitted && (
            <button
              onClick={submitPractice}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Nộp bài
            </button>
          )}

          {score !== null && (
            <p className="mt-4 font-bold">
              Kết quả: Bạn đúng {score}/{questions.length} câu.
            </p>
          )}
        </>
      )}
    </div>
  );
}
