import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A page section: small label, heading, optional lead text, then the content. */
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
      <Reveal className="max-w-2xl">
        <p className="text-sm font-medium text-subtle">{label}</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 leading-relaxed text-muted">{intro}</p>}
      </Reveal>
      <div className="mt-12 sm:mt-14">{children}</div>
    </section>
  );
}
