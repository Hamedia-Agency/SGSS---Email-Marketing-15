"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

export default function ParticleMesh({ particleCount = 20, theme = 'dark' }: { particleCount?: number, theme?: 'dark' | 'light' }) {
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

    const particles: Particle[] = [];

    // Create particles (blend of dark blue and gold nodes)
    for (let i = 0; i < particleCount; i++) {
      const isGold = Math.random() > 0.65;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + (isGold ? 2 : 1.5),
        color: isGold ? "254, 207, 49" : (theme === "light" ? "10, 25, 47" : "255, 255, 255"), // Gold or (Navy Blue / White)
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            // Gradient connection line
            const grad = ctx.createLinearGradient(
              particles[i].x,
              particles[i].y,
              particles[j].x,
              particles[j].y
            );
            const alpha = (1 - dist / 85) * 0.15;
            grad.addColorStop(0, `rgba(${particles[i].color}, ${alpha})`);
            grad.addColorStop(1, `rgba(${particles[j].color}, ${alpha})`);
            ctx.strokeStyle = grad;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, 0.5)`;
        ctx.fill();

        // Subtle glow for gold particles
        if (p.color === "254, 207, 49") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, 0.15)`;
          ctx.fill();
        }

        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount]);

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
