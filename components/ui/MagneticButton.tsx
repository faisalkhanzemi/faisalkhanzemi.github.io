"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "ghost";
  className?: string;
  external?: boolean;
  download?: boolean | string;
};

export default function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  external = false,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ink text-bg hover:bg-accent"
      : "border border-border bg-surface text-ink hover:border-ink";

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
