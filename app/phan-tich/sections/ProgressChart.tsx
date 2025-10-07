"use client";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

export default function ProgressChart({ data }: any) {
  if (!data?.data) return null;

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">
          {data.title || "Xu hướng điểm luyện tập theo thời gian"}
        </h3>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data.data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="averageScore"
              stroke="#60a5fa"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
