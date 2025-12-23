"use client";
import FlowFreeGame from "../../components/FlowFreeGame";

export default function Page() {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>⚡ Flow Free</h1>
      <p>Nối các cặp màu giống nhau</p>
      <FlowFreeGame />
    </div>
  );
}