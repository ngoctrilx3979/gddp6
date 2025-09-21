// types/lesson.ts
export interface Lesson {
  id: string;
  title: string;
  description: string;
  createdAt?: { seconds: number; nanoseconds: number };
}
