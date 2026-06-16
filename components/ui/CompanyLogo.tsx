import Image from "next/image";

type CompanyLogoProps = {
  name: string;
  logo?: string;
  size?: number;
  className?: string;
};

// Renders a self-hosted company logo on a clean white tile, or a tasteful
// monogram fallback when no logo asset exists (e.g. Shopguinea).
export default function CompanyLogo({
  name,
  logo,
  size = 40,
  className = "",
}: CompanyLogoProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <span
      className={`inline-flex flex-none items-center justify-center overflow-hidden rounded-xl border border-border bg-surface ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="h-full w-full object-contain p-1.5"
        />
      ) : (
        <span
          className="font-serif italic text-ink-muted"
          style={{ fontSize: size * 0.42 }}
        >
          {initial}
        </span>
      )}
    </span>
  );
}
