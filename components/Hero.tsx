import type { CSSProperties } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { HeroAgentCard } from "./HeroAgentCard";
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
        className="pointer-events-none absolute -top-60 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(45_212_191/0.22),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-10 h-[480px] w-[620px] bg-[radial-gradient(closest-side,rgb(124_58_237/0.12),transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-32 lg:grid-cols-[1fr_auto]">
        {/* Left: name, title, value statement and buttons */}
        <div className="flex flex-col">
          <p
            className="fade-up inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted card-shadow"
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
          <p className="rise text-gradient mt-3 w-fit text-xl font-semibold sm:text-2xl" style={delay(0.12)}>
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
            <ButtonLink href={site.cvUrl} download={site.cvFileName} pendingLabel="CV coming soon">
              <DownloadIcon /> Download CV
            </ButtonLink>
            <ButtonLink href="#contact">
              <MailIcon /> Contact
            </ButtonLink>
          </div>
        </div>

        {/* Right side on desktop: a sample agent run (hidden on phones) */}
        <HeroAgentCard />
      </div>
    </section>
  );
}
