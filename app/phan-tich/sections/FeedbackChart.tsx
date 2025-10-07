"use client";
import {
  PieChart, Pie, Tooltip, ResponsiveContainer, Cell,
} from "recharts";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

export default function FeedbackChart({ data }: any) {
  if (!data?.data) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">
          {data.title || "Phân bố đánh giá của học viên"}
        </h3>
      </div>
      <div className="w-full h-64 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data.data}
              dataKey="count"
              nameKey="rating"
              outerRadius={100}
              label
            >
              {data.data.map((_: any, index: number) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
