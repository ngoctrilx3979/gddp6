"use client";
import { useRef, useState } from "react";

/* ===== CONFIG ===== */
const SIZE = 7;
const CELL = 70;
const DOT = 38;

type Dot = { x: number; y: number; id: number; color: string };
type Point = { x: number; y: number };

const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#eab308"];

const LEVEL: Dot[] = [
  { x: 1, y: 1, id: 1, color: COLORS[0] },
  { x: 5, y: 3, id: 1, color: COLORS[0] },

  { x: 0, y: 5, id: 2, color: COLORS[1] },
  { x: 3, y: 6, id: 2, color: COLORS[1] },

  { x: 4, y: 0, id: 3, color: COLORS[2] },
  { x: 6, y: 2, id: 3, color: COLORS[2] },

  { x: 2, y: 3, id: 4, color: COLORS[3] },
  { x: 6, y: 6, id: 4, color: COLORS[3] },
];

export default function FlowFreeGame() {
  const boardRef = useRef<HTMLDivElement>(null);

  const [paths, setPaths] = useState<Record<number, Point[]>>({});
  const [current, setCurrent] =
    useState<{ id: number; path: Point[] } | null>(null);
  const [done, setDone] = useState(false);

  /* ===== HELPERS ===== */
  const occupiedByOther = (id: number, x: number, y: number) =>
    Object.entries(paths).some(
      ([k, p]) => Number(k) !== id && p.some(pt => pt.x === x && pt.y === y)
    );

  const start = (d: Dot) => {
    setCurrent({ id: d.id, path: [{ x: d.x, y: d.y }] });
    setDone(false);
  };

  const move = (x: number, y: number) => {
    if (!current) return;

    const last = current.path[current.path.length - 1];
    if (Math.abs(last.x - x) + Math.abs(last.y - y) !== 1) return;
    if (occupiedByOther(current.id, x, y)) return;

    setCurrent(c =>
      c ? { ...c, path: [...c.path, { x, y }] } : c
    );
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!current || !boardRef.current) return;

    const rect = boardRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / CELL);
    const y = Math.floor((e.clientY - rect.top) / CELL);

    if (x >= 0 && y >= 0 && x < SIZE && y < SIZE) {
      move(x, y);
    }
  };

  const end = () => {
    if (!current) return;

    const ends = LEVEL.filter(d => d.id === current.id);
    const last = current.path[current.path.length - 1];

    if (ends.some(d => d.x === last.x && d.y === last.y)) {
      setPaths(p => {
        const next = { ...p, [current.id]: current.path };
        if (Object.keys(next).length === COLORS.length) {
          setDone(true);
        }
        return next;
      });
    }

    setCurrent(null);
  };

  const toXY = (p: Point) => ({
    x: p.x * CELL + CELL / 2,
    y: p.y * CELL + CELL / 2,
  });

  /* ===== RENDER ===== */
  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="font-bold mb-2">⚡ Flow Free</h2>

      <div
        ref={boardRef}
        style={{ width: SIZE * CELL, height: SIZE * CELL, position: "relative" }}
        onMouseMove={handleMouseMove}
        onMouseUp={end}
        onMouseLeave={end}
      >
        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${SIZE}, ${CELL}px)`,
          }}
        >
          {[...Array(SIZE * SIZE)].map((_, i) => (
            <div
              key={i}
              style={{
                width: CELL,
                height: CELL,
                border: "1px solid #ddd",
                background: "#fafafa",
              }}
            />
          ))}
        </div>

        {/* PATH */}
        <svg
          width={SIZE * CELL}
          height={SIZE * CELL}
          style={{ position: "absolute", inset: 0 }}
        >
          {[
            ...Object.entries(paths),
            ...(current ? [[String(current.id), current.path]] : []),
          ].map(([id, pts], index) => (
            <path
              key={`${id}-${index}`}
              d={(pts as Point[])
                .map((p, i) => {
                  const { x, y } = toXY(p);
                  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                })
                .join(" ")}
              stroke={COLORS[Number(id) - 1]}
              strokeWidth={CELL / 2.6}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </svg>

        {/* DOT */}
        {LEVEL.map(d => (
          <div
            key={`${d.id}-${d.x}-${d.y}`}
            onMouseDown={() => start(d)}
            style={{
              position: "absolute",
              left: d.x * CELL + CELL / 2 - DOT / 2,
              top: d.y * CELL + CELL / 2 - DOT / 2,
              width: DOT,
              height: DOT,
              borderRadius: "50%",
              background: d.color,
              color: "#fff",
              fontWeight: "bold",
              boxShadow: "0 6px 12px rgba(0,0,0,.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {d.id}
          </div>
        ))}

        {/* 🎆 WIN */}
        {done && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: "bold",
              color: "#16a34a",
            }}
          >
            🎉 HOÀN THÀNH!
          </div>
        )}
      </div>
    </div>
  );
}
