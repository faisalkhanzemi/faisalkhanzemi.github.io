"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { caseStudies } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionLabel from "./SectionLabel";
import CompanyLogo from "./ui/CompanyLogo";
import AnimatedNumber from "./ui/AnimatedNumber";

export default function CaseStudies() {
  const [open, setOpen] = useState<string | null>(caseStudies[0].index);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel index="04" title="Case Studies" />

      <div className="overflow-hidden rounded-2xl border border-border bg-surface">
        {caseStudies.map((cs, i) => {
          const isOpen = open === cs.index;
          return (
            <Reveal key={cs.index} delay={i * 0.05} as="div">
              <div
                className={`border-b border-border last:border-b-0 ${
                  isOpen ? "bg-accent-light/30" : ""
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : cs.index)}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-accent-light/20 md:px-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-xs text-accent">
                    {cs.index}
                  </span>
                  <CompanyLogo name={cs.tag} logo={cs.logo} size={36} />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium tracking-tight text-ink md:text-xl">
                      {cs.title}
                    </h3>
                    <span className="font-mono text-xs text-ink-muted">
                      {cs.tag}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-none text-ink-muted"
                  >
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 md:px-8 md:pl-[3.25rem]">
                        <p className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                          {cs.description}
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
                          {cs.metrics.map((m) => (
                            <div key={m.label} className="bg-surface p-4">
                              <div className="font-mono text-2xl font-medium tracking-tight text-accent">
                                <AnimatedNumber value={m.value} />
                              </div>
                              <div className="mt-1 text-xs text-ink-muted">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
