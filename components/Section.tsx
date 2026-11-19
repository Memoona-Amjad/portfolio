import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** A page section: a thin rule, a serif heading with an optional note beside it, then the content. */
export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2>
        {intro && <p className="max-w-xl text-muted sm:pt-3">{intro}</p>}
      </Reveal>
      <div className="mt-12 sm:mt-16">{children}</div>
    </section>
  );
}
