import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm tracking-tight text-accent">404</p>
      <h1 className="mt-4 max-w-md text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        This page took an{" "}
        <span className="font-serif italic text-accent">unplanned</span> detour.
      </h1>
      <p className="mt-4 max-w-sm text-ink-muted">
        The link you followed doesn&apos;t exist, but the good stuff is one click
        away.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
      >
        Back to home
      </Link>
    </main>
  );
}
