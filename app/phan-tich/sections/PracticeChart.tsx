"use client";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from "recharts";

export default function PracticeChart({ data }: any) {
  if (!data?.data) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">
          {data.title || "Điểm trung bình theo bài học"}
        </h3>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="lessonTitle" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="averageScore" barSize={40} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
