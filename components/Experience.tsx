"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionLabel from "./SectionLabel";
import CompanyLogo from "./ui/CompanyLogo";

const ease = [0.22, 1, 0.36, 1] as const;
const n = experience.length;

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel index="02" title="Experience" />
      {/* Desktop: scroll-pinned story. Mobile: stacked timeline. */}
      <PinnedExperience />
      <StackedExperience />
    </section>
  );
}

/* ---------- Desktop: pinned, scroll-driven ---------- */

function PinnedExperience() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const fillScale = useTransform(fill, [0, 1], [0, 1]);

  const [active, setActive] = useState(0);
  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      const idx = Math.min(n - 1, Math.max(0, Math.floor(v * n * 0.9999)));
      setActive(idx);
    });
  }, [scrollYProgress]);

  const job = experience[active];

  return (
    <div
      ref={wrapRef}
      className="relative hidden md:block"
      style={{ height: `${n * 90}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="grid w-full grid-cols-[15rem_1fr] gap-12">
          {/* Left rail: companies + progress spine */}
          <div className="relative border-l border-border pl-8">
            <motion.div
              className="absolute left-[-1px] top-0 w-[2px] origin-top bg-accent"
              style={{ scaleY: fillScale, height: "100%" }}
            />
            <div className="flex flex-col gap-7">
              {experience.map((e, i) => {
                const isActive = i === active;
                return (
                  <div
                    key={e.company}
                    className="flex items-center gap-3 transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0.4 }}
                  >
                    <CompanyLogo
                      name={e.company}
                      logo={e.logo}
                      size={isActive ? 38 : 30}
                      className="transition-all duration-300"
                    />
                    <div className="min-w-0">
                      <div
                        className={`truncate text-sm font-medium tracking-tight transition-colors ${
                          isActive ? "text-ink" : "text-ink-muted"
                        }`}
                      >
                        {e.company}
                      </div>
                      <div className="font-mono text-[10px] text-ink-muted">
                        {e.period}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: active role detail */}
          <div className="relative min-h-[60vh]">
            <div className="mb-6 font-mono text-xs text-ink-muted">
              <span className="text-accent">
                {String(active + 1).padStart(2, "0")}
              </span>{" "}
              / {String(n).padStart(2, "0")}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="flex items-center gap-4">
                  <CompanyLogo name={job.company} logo={job.logo} size={56} />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="text-3xl font-medium tracking-tight text-ink">
                        {job.company}
                      </h3>
                      <span className="font-mono text-xs text-ink-muted">
                        {job.location}
                      </span>
                    </div>
                    <p className="mt-1 font-serif text-lg italic text-accent">
                      {job.role}
                    </p>
                  </div>
                  {job.current && (
                    <span className="ml-auto rounded-full bg-accent-light px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Current
                    </span>
                  )}
                </div>

                <ul className="mt-8 space-y-3.5">
                  {job.points.map((point, pi) => (
                    <motion.li
                      key={pi}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.12 + pi * 0.07, ease }}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent/60" />
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Mobile: stacked timeline ---------- */

function StackedExperience() {
  return (
    <div className="relative md:hidden">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
      <div className="space-y-12">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05} as="div">
            <div className="relative pl-8">
              <span
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                  job.current ? "border-accent bg-accent" : "border-border bg-bg"
                }`}
              />
              <div className="font-mono text-xs text-ink-muted">
                {job.period}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <CompanyLogo name={job.company} logo={job.logo} size={36} />
                <div>
                  <h3 className="text-lg font-medium tracking-tight text-ink">
                    {job.company}
                  </h3>
                  <p className="font-serif text-sm italic text-accent">
                    {job.role}
                  </p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, pi) => (
                  <li
                    key={pi}
                    className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
