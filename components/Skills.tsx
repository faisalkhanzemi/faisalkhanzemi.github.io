import { skills } from "@/lib/content";
import Reveal from "./ui/Reveal";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionLabel index="03" title="Skills" />

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <Reveal key={skill.name} delay={(i % 3) * 0.06} as="div">
            <div className="group h-full bg-surface p-7 transition-colors hover:bg-accent-light/40">
              <div className="mb-4 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-tight text-ink">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {skill.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
