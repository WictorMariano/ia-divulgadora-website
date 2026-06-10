"use client";

import { useEffect, useRef } from "react";

type WaveDatum = {
  value: number;
  targetValue: number;
  speed: number;
};

export function ResourcesWaveBackground() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    let animationFrameId = 0;
    const waveData: WaveDatum[] = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const resizeCanvas = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updateWaveData = () => {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        data.value += (data.targetValue - data.value) * data.speed;
      });
    };

    const draw = () => {
      const width = wrap.clientWidth;
      const height = wrap.clientHeight;

      ctx.fillStyle = "rgb(3 5 8 / 0.92)";
      ctx.fillRect(0, 0, width, height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const nx = (x / width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py = Math.sin(px * 10 + time) * Math.cos(px * 2) * freq * 0.1 * ((i + 1) / 8);
          const y = ((py + 1) * height) / 2;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const intensity = Math.min(1, freq * 0.3);
        const r = 56 + intensity * 80;
        const g = 120 + intensity * 100;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.45)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.35)`;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    };

    const animate = () => {
      time += 0.02;
      updateWaveData();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(wrap);
    resizeCanvas();
    animate();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={wrapRef} className="resources-wave-bg pointer-events-none absolute inset-0" aria-hidden>
      <canvas ref={canvasRef} className="block h-full w-full" />
      <div className="resources-wave-bg__fade absolute inset-0" />
    </div>
  );
}
