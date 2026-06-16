"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { useEffect } from "react";

type Blob = {
  color: string;
  size: number; // vmax
  top: string;
  left: string;
  anim: string;
  duration: number;
  depth: number; // parallax strength in px
};

const blobs: Blob[] = [
  { color: "rgba(44, 95, 138, 0.50)", size: 48, top: "-10%", left: "4%", anim: "meshDriftA", duration: 22, depth: 38 },
  { color: "rgba(122, 170, 210, 0.55)", size: 42, top: "10%", left: "58%", anim: "meshDriftB", duration: 26, depth: 65 },
  { color: "rgba(232, 201, 168, 0.65)", size: 36, top: "46%", left: "20%", anim: "meshDriftC", duration: 30, depth: 26 },
  { color: "rgba(44, 95, 138, 0.34)", size: 32, top: "36%", left: "72%", anim: "meshDriftA", duration: 28, depth: 85 },
];

export default function GradientMesh() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 blur-[64px] sm:blur-[90px]">
        {blobs.map((b, i) => (
          <MeshBlob key={i} blob={b} sx={sx} sy={sy} reduce={!!reduce} />
        ))}
      </div>
      {/* gentle wash so hero text stays crisp over the mesh */}
      <div className="absolute inset-0 bg-bg/20" />
    </div>
  );
}

function MeshBlob({
  blob: b,
  sx,
  sy,
  reduce,
}: {
  blob: Blob;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  reduce: boolean;
}) {
  const x = useTransform(sx, (v) => v * b.depth);
  const y = useTransform(sy, (v) => v * b.depth);

  return (
    <motion.div
      className="absolute"
      style={{
        top: b.top,
        left: b.left,
        width: `${b.size}vmax`,
        height: `${b.size}vmax`,
        x,
        y,
      }}
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${b.color}, transparent 68%)`,
          animation: reduce ? undefined : `${b.anim} ${b.duration}s ease-in-out infinite`,
          willChange: "transform",
        }}
      />
    </motion.div>
  );
}
