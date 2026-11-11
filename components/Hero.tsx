"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { heroMetrics, profile } from "@/lib/content";
import CountUp from "./ui/CountUp";
import MagneticButton from "./ui/MagneticButton";
import GradientMesh from "./ui/GradientMesh";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-16"
    >
      <GradientMesh />
      <div className="mx-auto w-full max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="mb-6 inline-flex items-center gap-2 font-mono text-xs tracking-tight text-ink-muted"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Dubai, UAE · CRM & Lifecycle Marketing
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.05, ease }}
        className="max-w-4xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
      >
        CRM &amp; Lifecycle marketing that{" "}
        <span className="font-serif italic text-accent">moves</span> the
        retention needle.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-ink-muted sm:text-lg"
      >
        8+ years building customer journeys, automation stacks, and data-driven
        campaigns across subscription apps, home services, consumer tech, food delivery, and
        retail, in UAE, India, and Canada.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease }}
        className="mt-9 flex flex-wrap items-center gap-3"
      >
        <MagneticButton href="#contact" variant="primary">
          Get in touch <ArrowUpRight className="h-4 w-4" />
        </MagneticButton>
        <MagneticButton
          href={profile.resumeUrl}
          variant="ghost"
          download={profile.resumeName}
        >
          <Download className="h-4 w-4" /> Download CV
        </MagneticButton>
        <MagneticButton href="#work" variant="ghost">
          View case studies
        </MagneticButton>
      </motion.div>

      {/* Live metrics dashboard strip */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4"
      >
        {heroMetrics.map((m) => (
          <div key={m.label} className="bg-surface p-5">
            <div className="font-mono text-3xl font-medium tracking-tight text-ink">
              <CountUp
                value={m.value}
                from={m.from ?? 0}
                decimals={m.decimals ?? 0}
                prefix={m.prefix ?? ""}
                suffix={m.suffix ?? ""}
              />
            </div>
            <div className="mt-1 text-xs text-ink-muted">{m.label}</div>
          </div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
