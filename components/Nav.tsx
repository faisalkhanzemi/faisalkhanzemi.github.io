"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          FK<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumeUrl}
            download={profile.resumeName}
            className="hidden items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-ink sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </a>
        </div>
      </nav>

      <motion.div
        className="h-px origin-left bg-accent"
        style={{ scaleX: progress }}
      />
    </header>
  );
}
