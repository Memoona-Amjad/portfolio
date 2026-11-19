import { site } from "@/content/site";
import { ButtonLink } from "./ButtonLink";
import { ArrowRightIcon, DownloadIcon, MailIcon } from "./icons";

/** First screen: name, title, value statement and the three main buttons. */
export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-32"
    >
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
        {site.projects.length} live agent projects below
      </p>

      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">{site.name}</h1>
      <p className="mt-3 text-xl font-medium text-accent sm:text-2xl">{site.title}</p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
        {site.valueStatement}
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
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
    </section>
  );
}
