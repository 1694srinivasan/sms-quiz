"use client";

import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
  color: string;
}

export default function FloatingHearts() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const symbols = ["❤️", "💖", "✨", "💕", "⭐", "🌸", "🍯", "🍨"];
    const colors = [
      "#EC4899",
      "#F472B6",
      "#F59E0B",
      "#FBBF24",
      "#FB7185",
      "#E11D48",
    ];

    const generated: Particle[] = Array.from({ length: 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 96 + 2, // percentage
      size: Math.random() * 16 + 14, // px
      duration: Math.random() * 8 + 8, // seconds
      delay: Math.random() * 6, // seconds
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute opacity-0 select-none animate-float-particle"
          style={{
            left: `${p.x}%`,
            bottom: "-30px",
            fontSize: `${p.size}px`,
            color: p.color,
            animation: `floatUp ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </div>
      ))}

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.7;
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-105vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
