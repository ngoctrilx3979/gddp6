export interface Feedback {
  id: string;
  lessonId: string;
  userId: string;
  email: string;
  message: string;
  likes: number;
  dislikes: number;
  likedBy: string[];
  dislikedBy: string[];
  createdAt?: { seconds: number; nanoseconds: number };
}
