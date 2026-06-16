import { toolStack } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel index="01" title="About" />

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <Reveal className="space-y-6 text-lg leading-relaxed text-ink-muted">
          <p>
            I&apos;m a CRM and lifecycle marketing specialist who sits at the
            intersection of{" "}
            <span className="text-ink">
              data, automation, and user psychology
            </span>
            . My work is about understanding where users drop off, and building
            the right message, at the right time, through the right channel to
            bring them back.
          </p>
          <p>
            Currently at <span className="text-ink">Justlife</span> in Dubai,
            where I own the full CRM function, from weekly campaign execution to
            CleverTap journey architecture, A/B testing frameworks, and
            incremental lift analysis.
          </p>
          <p>
            Beyond CRM, I&apos;ve been building an{" "}
            <span className="text-ink">in-house SEO function</span> at Justlife,
            taking content operations from agency-dependent to structured,
            keyword-targeted, and measurable.
          </p>
        </Reveal>

        <div className="space-y-8">
          {toolStack.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.08}>
              <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-muted">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
