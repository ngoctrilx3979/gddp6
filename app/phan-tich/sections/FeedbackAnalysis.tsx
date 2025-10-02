export default function FeedbackAnalysis({ feedback }: { feedback: string }) {
  return (
    <section className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Phân tích phản hồi</h2>
      <p>{feedback}</p>
    </section>
  );
}
