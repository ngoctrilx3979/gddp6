// lib/Topics.ts
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';

const topicsCollection = collection(db, 'topics');

export const addTopic = async (name: string, order: number, description: string) => {
  return await addDoc(topicsCollection, { name, order, description });
};

export const getTopics = async () => {
  const snapshot = await getDocs(topicsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteTopic = async (id: string) => {
  return await deleteDoc(doc(db, 'topics', id));
};

export const updateTopic = async (
  id: string,
  name: string,
  order: number,
  description: string
) => {
  return await updateDoc(doc(db, 'topics', id), { name, order, description });
};
