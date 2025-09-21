// lib/lessonService.ts
import { Lesson } from '@/types/lesson';
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp,
  limit,
  startAfter,
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

const lessonsCollection = collection(db, 'lessons');

export async function getLessonById(id: string): Promise<Lesson | null> {
  const ref = doc(db, "lessons", id);
  const snap = await getDoc(ref);

  if (!snap.exists()) return null;

  const data = snap.data();

  return {
    id: snap.id,
    title: data.title || "",
    description: data.description || "",
    createdAt: data.createdAt,
  };
}

export async function getLatestLessons(limitNumber: number = 5) {
  const q = query(lessonsCollection, orderBy("createdAt", "desc"), limit(limitNumber));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
export async function getLessons(pageSize = 5, lastDoc: any = null) {
  let q = query(lessonsCollection, orderBy('createdAt', 'desc'), limit(pageSize));
  if (lastDoc) {
    q = query(lessonsCollection, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(pageSize));
  }
  const snapshot = await getDocs(q);
  return {
    data: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    lastDoc: snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null,
  };
}

export async function addLesson(title: string, topicId: string, description: string) {
  await addDoc(lessonsCollection, {
    title,
    topicId,
    description,
    createdAt: serverTimestamp(),
  });
}

export async function updateLesson(id: string, data: any) {
  await updateDoc(doc(db, 'lessons', id), data);
}

export async function deleteLesson(id: string) {
  await deleteDoc(doc(db, 'lessons', id));
}
