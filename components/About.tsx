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
            Currently <span className="text-ink">CRM Manager at Traininpink</span>,
            where I own lifecycle automation in Klaviyo across the subscription
            journey, from onboarding and trials to payment recovery, renewals
            and win-back, in Italian and English.
          </p>
          <p>
            Before that, at <span className="text-ink">Justlife</span> in Dubai,
            I ran the full CRM function on CleverTap and built an in-house SEO
            function. I also build AI tools in the open, like{" "}
            <a
              href="https://faisalkhanzemi.github.io/insta-edits-for-claude/"
              className="text-ink underline decoration-border underline-offset-4 hover:text-accent"
            >
              Insta Edits for Claude
            </a>
            , a free plugin that lets Claude edit Reels in Instagram&apos;s Edits for Mac.
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
