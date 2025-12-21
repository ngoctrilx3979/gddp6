"use client";
import { useEffect, useRef, useState } from "react";

/* 🖼️ DANH SÁCH ẢNH (8 CẶP = 16 THẺ) */
const images = [
  "../games/flipcard/nuicam.jpg",
  "../games/flipcard/trasu.jpg",
  "../games/flipcard/mieuba.jpg",
  "../games/flipcard/chonoi.jpg",
  "../games/flipcard/tapa.jpg",
  "../games/flipcard/langcham.jpg",
  "../games/flipcard/nuisam.jpg",
  "../games/flipcard/thotnot.jpg",

  "../games/flipcard/nuicam.jpg",
  "../games/flipcard/trasu.jpg",
  "../games/flipcard/mieuba.jpg",
  "../games/flipcard/chonoi.jpg",
  "../games/flipcard/tapa.jpg",
  "../games/flipcard/langcham.jpg",
  "../games/flipcard/nuisam.jpg",
  "../games/flipcard/thotnot.jpg",
];

type Card = {
  img: string;
  flipped: boolean;
  matched: boolean;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
};

export default function FlipCardFireworkGame() {
  const [cards, setCards] = useState<Card[]>(
    images.sort(() => Math.random() - 0.5).map((img) => ({
      img,
      flipped: false,
      matched: false,
    }))
  );
  const [first, setFirst] = useState<number | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  /* 🎆 TẠO PHÁO BÔNG */
  const createFirework = (x: number, y: number) => {
    for (let i = 0; i < 36; i++) {
      const angle = (Math.PI * 2 * i) / 36;
      const speed = Math.random() * 4 + 2;
      particles.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      });
    }
  };

  /* 🎨 VẼ PHÁO BÔNG */
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  /* 🃏 LẬT THẺ */
  const flip = (index: number, e: React.MouseEvent) => {
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    if (first === null) {
      setFirst(index);
    } else {
      if (cards[first].img === cards[index].img) {
        newCards[first].matched = true;
        newCards[index].matched = true;
        setCards([...newCards]);

        // 🎆 Pháo bông tại vị trí thẻ
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        createFirework(rect.left + rect.width / 2, rect.top + rect.height / 2);
      } else {
        setTimeout(() => {
          newCards[first].flipped = false;
          newCards[index].flipped = false;
          setCards([...newCards]);
        }, 800);
      }
      setFirst(null);
    }
  };

  const win = cards.every((c) => c.matched);

  return (
    <div style={{ position: "relative" }}>
      {/* 🎆 CANVAS PHÁO BÔNG */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 50,
        }}
      />

      {win && (
        <h2 style={{ color: "#16a34a", marginBottom: "12px" }}>
          🎉 HOÀN THÀNH! 🎉
        </h2>
      )}

      {/* 🃏 BÀN CỜ 4×4 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 120px)",
          gap: "18px",
          justifyContent: "center",
        }}
      >
        {cards.map((c, i) => (
          <div
            key={i}
            onClick={(e) => flip(i, e)}
            style={{
              width: 120,
              height: 120,
              borderRadius: "18px",
              background: c.flipped || c.matched ? "#fde68a" : "#0284c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              overflow: "hidden",
            }}
          >
            {c.flipped || c.matched ? (
              <img
                src={c.img}
                alt="An Giang"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <span style={{ fontSize: "2.5rem", color: "white" }}>❓</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
