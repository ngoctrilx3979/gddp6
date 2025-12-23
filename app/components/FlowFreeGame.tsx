"use client";
import { useState, useRef, useEffect } from "react";

/* ===== CONFIG ===== */
const SIZE = 7;
const CELL = 70;
const DOT = 46;

type Dot = { x: number; y: number; id: number; img: string };
type Point = { x: number; y: number };

const BASE_DOTS = [
  { id: 1, img: "../games/flipcard/trasu.jpg" },
  { id: 2, img: "../games/flipcard/nuisam.jpg" },
  { id: 3, img: "../games/flipcard/mieuba.jpg" },
  { id: 4, img: "../games/flipcard/tapa.jpg" },
];

const COLORS = ["#ef4444", "#22c55e", "#3b82f6", "#eab308"];

/* ===== RANDOM LEVEL ===== */
function generateLevel(): Dot[] {
  const positions: { x: number; y: number }[] = [];
  for (let x = 0; x < SIZE; x++)
    for (let y = 0; y < SIZE; y++) positions.push({ x, y });

  positions.sort(() => Math.random() - 0.5);

  return BASE_DOTS.flatMap(dot => {
    const p1 = positions.pop()!;
    const p2 = positions.pop()!;
    return [
      { ...p1, id: dot.id, img: dot.img },
      { ...p2, id: dot.id, img: dot.img },
    ];
  });
}

/* ===== PARTICLE ===== */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
};

export default function FlowFreeGame() {
  const boardRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [level, setLevel] = useState<Dot[]>(generateLevel);
  const [paths, setPaths] = useState<Record<number, Point[]>>({});
  const [current, setCurrent] =
    useState<{ id: number; path: Point[] } | null>(null);
  const [done, setDone] = useState(false);

  const particles = useRef<Particle[]>([]);
  const soundRef = useRef<HTMLAudioElement | null>(null);

  /* ===== SOUND ===== */
  useEffect(() => {
    soundRef.current = new Audio("/sound/connect.mp3");
  }, []);

  /* ===== FIREWORK LOOP ===== */
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = SIZE * CELL;
    canvas.height = SIZE * CELL;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1;
        p.life -= 1;

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life / 40;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();

        if (p.life <= 0) particles.current.splice(i, 1);
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  /* ===== HELPERS ===== */
  const occupiedByOther = (id: number, x: number, y: number) =>
    Object.entries(paths).some(
      ([k, p]) => Number(k) !== id && p.some(pt => pt.x === x && pt.y === y)
    );

  const start = (d: Dot) => {
    setCurrent({ id: d.id, path: [{ x: d.x, y: d.y }] });
    setDone(false);
  };

  const move = (clientX: number, clientY: number) => {
    if (!current || !boardRef.current) return;
    const rect = boardRef.current.getBoundingClientRect();
    const x = Math.floor((clientX - rect.left) / CELL);
    const y = Math.floor((clientY - rect.top) / CELL);
    if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return;

    const last = current.path.at(-1)!;
    if (Math.abs(last.x - x) + Math.abs(last.y - y) !== 1) return;
    if (occupiedByOther(current.id, x, y)) return;

    setCurrent(c => c && ({ ...c, path: [...c.path, { x, y }] }));
  };

  const end = () => {
    if (!current) return;
    const ends = level.filter(d => d.id === current.id);
    const last = current.path.at(-1)!;

    if (ends.some(d => d.x === last.x && d.y === last.y)) {
      soundRef.current?.play(); // 🔊 SOUND

      setPaths(p => {
        const next = { ...p, [current.id]: current.path };

        if (Object.keys(next).length === BASE_DOTS.length) {
          setDone(true);
          launchFirework(); // 🎆
          setTimeout(() => {
            setDone(false);
            setPaths({});
            setLevel(generateLevel());
          }, 1500);
        }
        return next;
      });
    }
    setCurrent(null);
  };

  const launchFirework = () => {
    for (let i = 0; i < 120; i++) {
      particles.current.push({
        x: SIZE * CELL / 2,
        y: SIZE * CELL / 2,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8,
        life: 40,
        color: `hsl(${Math.random() * 360},100%,60%)`,
      });
    }
  };

  const toXY = (p: Point) => ({
    x: p.x * CELL + CELL / 2,
    y: p.y * CELL + CELL / 2,
  });

  /* ===== RENDER ===== */
  return (
    <div className="flex flex-col items-center mt-6">
      <h2 className="font-bold mb-3">⚡ Flow Free – An Giang</h2>

      <div
        ref={boardRef}
        style={{ width: SIZE * CELL, height: SIZE * CELL, position: "relative", userSelect: "none" }}
        onMouseMove={e => move(e.clientX, e.clientY)}
        onMouseUp={end}
        onMouseLeave={end}
      >
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 20 }}
        />

        {/* GRID */}
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${SIZE}, ${CELL}px)` }}>
          {[...Array(SIZE * SIZE)].map((_, i) => (
            <div key={i} style={{ width: CELL, height: CELL, border: "1px solid #e5e7eb" }} />
          ))}
        </div>

        {/* PATH */}
        <svg width={SIZE * CELL} height={SIZE * CELL} style={{ position: "absolute", inset: 0 }}>
          {[...Object.entries(paths), ...(current ? [[String(current.id), current.path]] : [])].map(
            ([id, pts]) => (
              <path
                key={`${id}-${pts.length}`}
                d={(pts as Point[]).map((p, i) => {
                  const { x, y } = toXY(p);
                  return `${i === 0 ? "M" : "L"} ${x} ${y}`;
                }).join(" ")}
                stroke={COLORS[Number(id) - 1]}
                strokeWidth={CELL / 2.5}
                fill="none"
                strokeLinecap="round"
              />
            )
          )}
        </svg>

        {/* DOT */}
        {level.map(d => (
          <div
            key={`${d.id}-${d.x}-${d.y}`}
            onMouseDown={() => start(d)}
            onDragStart={e => e.preventDefault()}
            style={{
              position: "absolute",
              left: d.x * CELL + CELL / 2 - DOT / 2,
              top: d.y * CELL + CELL / 2 - DOT / 2,
              width: DOT,
              height: DOT,
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(0,0,0,.35)",
            }}
          >
            <img src={d.img} draggable={false} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
