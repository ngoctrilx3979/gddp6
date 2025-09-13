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
  startAfter,
  doc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

const postsCollection = collection(db, 'posts');

export async function getPosts(pageSize = 5, lastDoc: any = null) {
  let q = query(postsCollection, orderBy('createdAt', 'desc'), limit(pageSize));
  if (lastDoc) {
    q = query(postsCollection, orderBy('createdAt', 'desc'), startAfter(lastDoc), limit(pageSize));
  }
  const snapshot = await getDocs(q);
  return {
    data: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    lastDoc: snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null,
  };
}

export async function addPost(title: string, categoryId: string, description: string) {
  await addDoc(postsCollection, {
    title,
    categoryId,
    description,
    createdAt: serverTimestamp(),
  });
}

export async function updatePost(id: string, data: any) {
  await updateDoc(doc(db, 'posts', id), data);
}

export async function deletePost(id: string) {
  await deleteDoc(doc(db, 'posts', id));
}
