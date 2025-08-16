// lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDH6_zclviM6KZ0VfL7jRZQwtOOMqQYj0",
  authDomain: "gddp6-34b1d.firebaseapp.com",
  projectId: "gddp6-34b1d",
  storageBucket: "gddp6-34b1d.firebasestorage.app",
  messagingSenderId: "510838318611",
  appId: "1:510838318611:web:39e268e0336a06b463c1e6",
  measurementId: "G-0EE3D187E0"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
