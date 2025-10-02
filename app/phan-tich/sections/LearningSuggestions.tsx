export default function LearningSuggestions({ suggestions }: { suggestions: string[] }) {
  return (
    <section className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Gợi ý học tập</h2>
      <ul className="list-disc pl-6 space-y-1">
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
