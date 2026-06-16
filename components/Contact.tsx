import { ArrowUpRight, Mail, Download } from "lucide-react";
import { profile } from "@/lib/content";
import Reveal from "./ui/Reveal";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-24 md:py-36"
    >
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-accent">
          Contact
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Let&apos;s talk{" "}
          <span className="font-serif italic text-accent">retention</span>.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Always up for a conversation about CRM, lifecycle, customer journeys,
          tooling, or experimentation frameworks.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={`mailto:${profile.email}`}
          className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface px-6 py-5 transition-colors hover:border-ink"
        >
          <span className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-accent" />
            <span className="font-mono text-sm text-ink">{profile.email}</span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface px-6 py-5 transition-colors hover:border-ink"
        >
          <span className="flex items-center gap-3">
            <LinkedinIcon className="h-5 w-5 text-accent" />
            <span className="font-mono text-sm text-ink">
              {profile.linkedin}
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={profile.resumeUrl}
          download={profile.resumeName}
          className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-surface px-6 py-5 transition-colors hover:border-ink"
        >
          <span className="flex items-center gap-3">
            <Download className="h-5 w-5 text-accent" />
            <span className="font-mono text-sm text-ink">Download CV</span>
          </span>
          <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </Reveal>

      <footer className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-ink-muted">
          {profile.name} · {profile.location}
        </p>
        <p className="font-mono text-xs text-ink-muted">
          Press{" "}
          <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] text-ink">
            ⌘
          </kbd>{" "}
          <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 text-[10px] text-ink">
            K
          </kbd>{" "}
          for the terminal
        </p>
      </footer>
    </section>
  );
}
