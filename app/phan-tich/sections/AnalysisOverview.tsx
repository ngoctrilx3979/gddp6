export default function AnalysisOverview({ overview }: { overview: string }) {
  return (
    <section className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-2">Tổng quan</h2>
      <p>{overview}</p>
    </section>
  );
}
