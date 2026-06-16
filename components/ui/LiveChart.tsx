"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const COUNT = 44;

// Smooth random walk so the line keeps flowing like a live feed.
function nextValue(prev: number) {
  const drift = (0.62 - prev) * 0.08; // gently pull toward an upper band
  const noise = (Math.random() - 0.5) * 0.22;
  return Math.min(0.95, Math.max(0.08, prev + drift + noise));
}

// Deterministic seed so server and client render identical first paint
// (no hydration mismatch). Randomness only kicks in after mount.
const SEED: number[] = Array.from({ length: COUNT }, (_, i) =>
  0.5 + 0.32 * Math.sin(i * 0.55) + 0.1 * Math.sin(i * 1.7)
);

export default function LiveChart() {
  const reduce = useReducedMotion();
  const [data, setData] = useState<number[]>(SEED);
  const dataRef = useRef(data);
  dataRef.current = data;

  useEffect(() => {
    if (reduce) return;
    let raf = 0;
    let last = 0;
    const tick = (t: number) => {
      if (t - last > 110) {
        last = t;
        if (!document.hidden) {
          const arr = dataRef.current;
          const next = [...arr.slice(1), nextValue(arr[arr.length - 1])];
          setData(next);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  const w = 100;
  const h = 100;
  const pts = data.map((v, i) => {
    const x = (i / (COUNT - 1)) * w;
    const y = h - v * (h - 8) - 4;
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
  const area = `0,${h} ${line} ${w},${h}`;
  const [lastX, lastY] = pts[pts.length - 1];

  // live value derived from the latest point — reads like a fluctuating KPI
  const liveValue = (2.6 + data[data.length - 1] * 2.4).toFixed(1);

  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-muted">
        <span className="inline-flex items-center gap-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Live CTR
        </span>
        <span className="font-mono text-xs font-medium normal-case tracking-tight text-accent">
          {liveValue}%
        </span>
      </div>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        preserveAspectRatio="none"
        className="mt-2 h-14 w-full overflow-visible"
      >
        <defs>
          <linearGradient id="liveFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#liveFill)" />
        <polyline
          points={line}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx={lastX} cy={lastY} r="3.5" fill="var(--accent)" />
        <circle cx={lastX} cy={lastY} r="3.5" fill="var(--accent)" opacity="0.4">
          <animate
            attributeName="r"
            values="3.5;7;3.5"
            dur="1.4s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur="1.4s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
