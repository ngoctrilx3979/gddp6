export default function PracticeAnalysis({ practice }: { practice: string }) {
  return (
    <section className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Phân tích luyện tập</h2>
      <p>{practice}</p>
    </section>
  );
}
