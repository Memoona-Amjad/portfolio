import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A page section with a small label, a heading and consistent spacing. */
export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{label}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}
