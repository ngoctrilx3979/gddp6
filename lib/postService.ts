// lib/postService.ts
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

const postsCollection = collection(db, 'posts');



export async function getLatestPosts(limitNumber: number = 5) {
  const q = query(postsCollection, orderBy("createdAt", "desc"), limit(limitNumber));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export const addPost = async (
  title: string,
  categoryId: string,
  description: string
) => {
  return await addDoc(postsCollection, {
    title,
    categoryId,
    description,
    createdAt: serverTimestamp(),
  });
};

export const getPosts = async () => {
  const q = query(postsCollection, orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
// Cập nhật
export async function updatePost(id: string, data: any) {
  const ref = doc(db, 'posts', id);
  await updateDoc(ref, data);
}

// Xóa
export async function deletePost(id: string) {
  const ref = doc(db, 'posts', id);
  await deleteDoc(ref);
}