import Reveal from "./ui/Reveal";

export default function SectionLabel({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <Reveal className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 translate-y-[-2px] bg-border" />
    </Reveal>
  );
}
