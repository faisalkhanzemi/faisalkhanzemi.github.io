"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animates every numeric substring inside a metric string (e.g. "18→26%",
// "+15%", "50M+", "12.8K") from zero to its value when scrolled into view.
// Non-numeric characters (symbols, units, arrows) are preserved verbatim.
type Part =
  | { kind: "text"; value: string }
  | { kind: "num"; value: number; decimals: number };

function parse(input: string): Part[] {
  const parts: Part[] = [];
  const re = /\d+(?:\.\d+)?/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(input))) {
    if (m.index > last) {
      parts.push({ kind: "text", value: input.slice(last, m.index) });
    }
    const raw = m[0];
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    parts.push({ kind: "num", value: parseFloat(raw), decimals });
    last = m.index + raw.length;
  }
  if (last < input.length) {
    parts.push({ kind: "text", value: input.slice(last) });
  }
  return parts;
}

export default function AnimatedNumber({
  value,
  duration = 1.4,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const parts = parse(value);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setProgress(1);
      return;
    }
    const controls = animate(0, 1, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setProgress,
    });
    return () => controls.stop();
  }, [inView, duration, reduce]);

  return (
    <span ref={ref}>
      {parts.map((p, i) =>
        p.kind === "text" ? (
          <span key={i}>{p.value}</span>
        ) : (
          <span key={i}>{(p.value * progress).toFixed(p.decimals)}</span>
        )
      )}
    </span>
  );
}
