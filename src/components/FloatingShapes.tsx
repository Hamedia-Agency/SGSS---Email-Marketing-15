"use client";

import React, { useEffect, useRef } from "react";

interface Shape {
  type: "square" | "triangle" | "circle";
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRotation: number;
  color: string;
}

export default function FloatingShapes({ shapeCount = 15, theme = 'dark' }: { shapeCount?: number, theme?: 'dark' | 'light' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.getBoundingClientRect().width || 250);
    let height = (canvas.height = canvas.getBoundingClientRect().height || 800);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.getBoundingClientRect().width || 250;
      height = canvas.height = canvas.getBoundingClientRect().height || 800;
    };
    window.addEventListener("resize", handleResize);

    const shapes: Shape[] = [];
    const types: ("square" | "triangle" | "circle")[] = ["square", "triangle", "circle"];

    // Create shapes
    for (let i = 0; i < shapeCount; i++) {
      const isGold = Math.random() > 0.65;
      shapes.push({
        type: types[Math.floor(Math.random() * types.length)],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5 - 0.2, // slight upward drift
        size: Math.random() * 20 + 10,
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.02,
        color: isGold ? "254, 207, 49" : (theme === "light" ? "10, 25, 47" : "255, 255, 255"), // Gold or (Navy Blue / White)
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      shapes.forEach((s) => {
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        
        ctx.strokeStyle = `rgba(${s.color}, 0.35)`;
        ctx.lineWidth = 1.5;
        
        ctx.beginPath();
        if (s.type === "square") {
          ctx.rect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else if (s.type === "triangle") {
          ctx.moveTo(0, -s.size / 2);
          ctx.lineTo(s.size / 2, s.size / 2);
          ctx.lineTo(-s.size / 2, s.size / 2);
          ctx.closePath();
        } else if (s.type === "circle") {
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
        }
        ctx.stroke();
        
        // optional fill
        ctx.fillStyle = `rgba(${s.color}, 0.05)`;
        ctx.fill();

        ctx.restore();

        // Update positions
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.vRotation;

        // Wrap around borders smoothly
        if (s.x < -s.size * 2) s.x = width + s.size;
        if (s.x > width + s.size * 2) s.x = -s.size;
        if (s.y < -s.size * 2) s.y = height + s.size;
        if (s.y > height + s.size * 2) s.y = -s.size;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [shapeCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        background: "transparent",
      }}
    />
  );
}
