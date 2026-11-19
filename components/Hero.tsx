import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { Button } from "./Button";
import { ArrowDown, Download, LiveDot } from "./icons";

// Staggered entrance: each line starts a little after the one before.
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/** First screen: role, headline, short intro, two buttons and a strip of credentials. */
export function Hero() {
  return (
    <section id="top" className="relative">
      {/* Faint light from the top of the page (decorative) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_100%_at_50%_0%,rgb(255_255_255/0.06),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-20 sm:px-8 sm:pt-28">
        <p className="rise flex items-center gap-2.5 text-sm text-muted" style={delay(0)}>
          <LiveDot />
          {site.title} · {site.location}
        </p>

        <h1
          className="rise mt-6 max-w-3xl text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl"
          style={delay(0.05)}
        >
          {site.headline}
        </h1>

        <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={delay(0.1)}>
          {site.intro}
        </p>

        <div className="rise mt-9 flex flex-wrap gap-3" style={delay(0.15)}>
          <Button href="#work">
            View the work <ArrowDown />
          </Button>
          <Button href={site.cvUrl} download={site.cvFileName} variant="secondary">
            <Download /> Download CV
          </Button>
        </div>

        {/* Credentials strip */}
        {/* 1px gaps over a border-coloured background draw hairlines between the cells */}
        <dl
          className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-20 lg:grid-cols-4"
          style={delay(0.2)}
        >
          {site.highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse bg-bg px-5 py-5">
              <dt className="mt-1 text-sm text-subtle">{h.label}</dt>
              <dd className="text-lg font-semibold tracking-tight">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
