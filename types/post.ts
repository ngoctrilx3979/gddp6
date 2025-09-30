export interface Post {
  id: string;
  title: string;
  description: string;
  categoryId?: string;
  createdAt?: {
    seconds: number;
    nanoseconds: number;
  };
}
