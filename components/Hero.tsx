import type { CSSProperties } from "react";
import { site } from "@/content/site";

// Staggered entrance: each line starts a little after the one before.
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/** First screen: a plain, first-person introduction and three text links. */
export function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-28">
      <p className="rise text-sm text-muted" style={delay(0)}>
        {site.title} · {site.currently}
      </p>

      <h1
        className="rise mt-6 max-w-4xl font-serif text-[2.75rem] leading-[1.05] tracking-tight sm:text-7xl"
        style={delay(0.05)}
      >
        {site.headline} <em className="text-accent">{site.headlineItalic}</em>
      </h1>

      <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted" style={delay(0.12)}>
        {site.intro}
      </p>

      <ul className="rise mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base" style={delay(0.2)}>
        <li>
          <a href="#work" className="link">
            See the work ↓
          </a>
        </li>
        <li>
          <a href={site.cvUrl} download={site.cvFileName} className="link">
            Download my CV
          </a>
        </li>
        <li>
          <a href={`mailto:${site.contact.email}`} className="link">
            Email me
          </a>
        </li>
      </ul>
    </section>
  );
}
