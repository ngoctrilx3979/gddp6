import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

const summariesCollection = collection(db, "summaries");

export async function addSummary(
  lessonId: string,
  title: string,
  content: string,
  userId: string,
  email: string
) {
  await addDoc(summariesCollection, {
    lessonId,
    title,
    content,
    userId,
    email,
    createdAt: serverTimestamp(),
  });
}

export async function getSummariesByLesson(lessonId: string) {
  const q = query(summariesCollection, where("lessonId", "==", lessonId));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function deleteSummary(id: string) {
  await deleteDoc(doc(db, "summaries", id));
}
