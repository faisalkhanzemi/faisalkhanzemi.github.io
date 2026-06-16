"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/content";

type Line = { type: "in" | "out"; text: string };

const facts: Record<string, string[]> = {
  help: [
    "Available commands:",
    "  whoami     who is Faisal",
    "  stack      tools of the trade",
    "  stats      career numbers",
    "  contact    how to reach me",
    "  clear      clear the screen",
    "  exit       close the terminal",
  ],
  whoami: [
    `${profile.name}`,
    "CRM & Lifecycle Marketing Specialist, Dubai.",
    "Data-driven but human. Precise but warm. Entrepreneurial.",
    "Turns drop-off points into re-engagement, one journey at a time.",
  ],
  stack: [
    "CRM       CleverTap · MoEngage · WebEngage · Braze",
    "Channels  Push · Email · WhatsApp API · In-App · SMS · Web",
    "Analytics GA · SEOmonitor · Semrush · Excel",
  ],
  stats: [
    "8+    years in CRM",
    "5     brands scaled (Justlife, Loblaw, Gaana, Zomato, Shopguinea)",
    "3.4%  push CTR achieved at Justlife",
    "+18%  retention lift at Loblaw",
    "50M+  user base orchestrated at Gaana",
  ],
  contact: [
    `email     ${profile.email}`,
    `linkedin  ${profile.linkedin}`,
    `location  ${profile.location}`,
  ],
};

const banner: Line[] = [
  { type: "out", text: "faisal@portfolio ~ % welcome 👋" },
  { type: "out", text: "Type `help` to see what I can show you." },
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<Line[]>(banner);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    const next: Line[] = [...lines, { type: "in", text: raw.trim() }];

    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "exit") {
      setOpen(false);
      return;
    }
    if (facts[cmd]) {
      facts[cmd].forEach((t) => next.push({ type: "out", text: t }));
    } else {
      next.push({
        type: "out",
        text: `command not found: ${cmd} — try \`help\``,
      });
    }
    setLines(next);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/30 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mt-16 w-full max-w-xl overflow-hidden rounded-xl border border-border bg-[#111] shadow-2xl sm:mt-0"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-white/40">
                faisal — zsh
              </span>
            </div>

            <div
              ref={bodyRef}
              className="max-h-[60vh] overflow-y-auto p-4 font-mono text-[13px] leading-relaxed"
              onClick={() => inputRef.current?.focus()}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === "in" ? "text-[#27c93f]" : "text-white/80"
                  }
                >
                  {line.type === "in" ? (
                    <span>
                      <span className="text-white/40">faisal@portfolio ~ %</span>{" "}
                      {line.text}
                    </span>
                  ) : (
                    <span className="whitespace-pre-wrap">{line.text}</span>
                  )}
                </div>
              ))}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  run(value);
                  setValue("");
                }}
                className="mt-1 flex items-center gap-2"
              >
                <span className="text-white/40">faisal@portfolio ~ %</span>
                <input
                  ref={inputRef}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  className="flex-1 bg-transparent text-white caret-[#27c93f] outline-none"
                />
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
