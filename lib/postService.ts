import { db } from "./firebase";
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
  where,
} from "firebase/firestore";
import { Post } from "@/types/post";

const postsCollection = collection(db, "posts");

// 🔹 Lấy bài viết mới nhất
export async function getLatestPosts(limitNumber: number = 5): Promise<Post[]> {
  const q = query(postsCollection, orderBy("createdAt", "desc"), limit(limitNumber));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => {
    const data = d.data() as Omit<Post, "id">;
    return { id: d.id, ...data };
  });
}

// 🔹 Lấy danh sách bài viết có phân trang
export async function getPosts(
  pageSize = 5,
  lastDoc: any = null
): Promise<{ data: Post[]; lastDoc: any }> {
  let q = query(postsCollection, orderBy("createdAt", "desc"), limit(pageSize));
  if (lastDoc) {
    q = query(postsCollection, orderBy("createdAt", "desc"), startAfter(lastDoc), limit(pageSize));
  }
  const snapshot = await getDocs(q);
  return {
    data: snapshot.docs.map((d) => {
      const data = d.data() as Omit<Post, "id">;
      return { id: d.id, ...data };
    }),
    lastDoc: snapshot.docs.length > 0 ? snapshot.docs[snapshot.docs.length - 1] : null,
  };
}

// 🔹 Thêm bài viết
export async function addPost(
  title: string,
  categoryId: string,
  description: string,
) {
  await addDoc(postsCollection, {
    title,
    categoryId,
    description,
    createdAt: serverTimestamp(),
  });
}

// 🔹 Cập nhật bài viết
export async function updatePost(id: string, data: Partial<Post>) {
  await updateDoc(doc(db, "posts", id), data);
}

// 🔹 Xóa bài viết
export async function deletePost(id: string) {
  await deleteDoc(doc(db, "posts", id));
}

// 🔹 Lấy 1 bài viết theo id
export async function getPostById(id: string): Promise<Post | null> {
  const ref = doc(db, "posts", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;

  const data = snap.data() as Omit<Post, "id">;
  return { id: snap.id, ...data };
}

// 🔹 Lấy danh sách bài viết cùng category (trừ bài hiện tại)
export async function getPostsByCategory(
  categoryId: string,
  excludeId?: string
): Promise<Post[]> {
  if (!categoryId) return [];

  const q = query(
    postsCollection,
    where("categoryId", "==", categoryId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs
    .map((d) => {
      const data = d.data() as Omit<Post, "id">;
      return { id: d.id, ...data };
    })
    .filter((post) => post.id !== excludeId);
}
