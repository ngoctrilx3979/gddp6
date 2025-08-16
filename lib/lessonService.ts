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
} from 'firebase/firestore';

const lessonsCollection = collection(db, 'lessons');

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
