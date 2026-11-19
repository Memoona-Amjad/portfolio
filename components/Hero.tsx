import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { ArrowRightIcon, DownloadIcon, MailIcon } from "./icons";

// Staggered entrance: each line starts a little after the one before.
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/** First screen: name, title, value statement and the three main buttons. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft accent glow in the background (decorative only) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(45_212_191/0.13),transparent)]"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-32">
        <p
          className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted"
          style={delay(0)}
        >
          <span className="relative flex h-1.5 w-1.5" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {site.projects.length} live agent demos below
        </p>

        <h1 className="rise mt-6 text-5xl font-semibold tracking-tight sm:text-7xl" style={delay(0.05)}>
          {site.name}
        </h1>
        <p className="rise mt-3 text-xl font-medium text-accent sm:text-2xl" style={delay(0.12)}>
          {site.title}
        </p>
        <p
          className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          style={delay(0.2)}
        >
          {site.valueStatement}
        </p>

        <div className="fade-up mt-10 flex flex-wrap gap-3" style={delay(0.28)}>
          <ButtonLink href="#projects" variant="primary">
            See projects <ArrowRightIcon />
          </ButtonLink>
          <ButtonLink href={site.cvUrl} download pendingLabel="CV coming soon">
            <DownloadIcon /> Download CV
          </ButtonLink>
          <ButtonLink href="#contact">
            <MailIcon /> Contact
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
