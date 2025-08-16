// lib/categoryService.ts
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const categoriesCollection = collection(db, 'categories');

export const addCategory = async (name: string, order: number, description: string) => {
  return await addDoc(categoriesCollection, { name, order, description });
};

export const getCategories = async () => {
  const snapshot = await getDocs(categoriesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteCategory = async (id: string) => {
  return await deleteDoc(doc(db, 'categories', id));
};

export const updateCategory = async (
  id: string,
  name: string,
  order: number,
  description: string
) => {
  return await updateDoc(doc(db, 'categories', id), { name, order, description });
};
