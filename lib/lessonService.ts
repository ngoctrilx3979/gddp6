// lib/lessonService.ts
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  limit,
  deleteDoc,
  updateDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

const lessonsCollection = collection(db, 'lessons');

export async function getLessonById(id: string) {
  try {
    const ref = doc(db, "lessons", id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return null;
    }

    return {
      id: snap.id,
      ...snap.data(),
    };
  } catch (error) {
    console.error("Lỗi khi lấy bài học:", error);
    return null;
  }
}

export async function getLatestLessons(limitNumber: number = 5) {
  const q = query(lessonsCollection, orderBy("createdAt", "desc"), limit(limitNumber));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const addlesson  = async (
  title: string,
  topicId: string,
  description: string
) => {
  return await addDoc(lessonsCollection, {
    title,
    topicId,
    description,
    createdAt: serverTimestamp(),
  });
};

export const getLessons = async () => {
  const q = query(lessonsCollection, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((lesson) => ({ id: lesson.id, ...lesson.data() }));
};

// Cập nhật
export async function updateLesson(id: string, data: any) {
  const ref = doc(db, 'lessons', id);
  await updateDoc(ref, data);
}

// Xóa
export async function deleteLesson(id: string) {
  const ref = doc(db, 'lessons', id);
  await deleteDoc(ref);
}
