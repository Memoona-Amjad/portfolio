import { site } from "@/content/site";
import { Button } from "./Button";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { GitHub, LinkedIn, Mail } from "./icons";

export function Projects() {
  return (
    <Section
      id="work"
      label="Selected work"
      title="Three agents, live and open source"
      intro="Each demo runs on sample data, so there is nothing to upload. Every one shows its plan, tool calls and retries on screen as it works."
    >
      <div className="space-y-8">
        {site.projects.map((p, i) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Skills in a hairline grid: one cell per group, tools as a quiet list. */
export function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {site.skills.map((group) => (
            <div key={group.title} className="bg-bg p-6">
              <h3 className="text-sm font-medium">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-x-1.5 gap-y-1 text-sm leading-relaxed text-muted">
                {group.items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < group.items.length - 1 && <span className="text-subtle/60">,</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" label="About" title="A bit about me">
      <Reveal className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div className="space-y-5 text-[17px] leading-relaxed text-muted">
          {site.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <div className="rounded-2xl border border-line bg-surface p-6">
          <h3 className="text-sm font-medium">Experience &amp; education</h3>
          <ol className="mt-5 space-y-5">
            {site.background.map((item) => (
              <li key={item.what} className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm">
                <span className="tabular-nums text-subtle">{item.when}</span>
                <span>
                  <span className="block font-medium">{item.what}</span>
                  <span className="block text-muted">{item.where}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const { email, github, linkedin } = site.contact;
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 text-center sm:px-10 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(50%_100%_at_50%_0%,rgb(255_255_255/0.07),transparent)]"
        />
        <h2 className="relative text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Have a process an agent could take on?
        </h2>
        <p className="relative mx-auto mt-4 max-w-md leading-relaxed text-muted">
          I&apos;m open to Agentic AI roles and projects. Email is the fastest way to reach me.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${email}`}>
            <Mail /> {email}
          </Button>
          <Button href={github} variant="secondary" external ariaLabel="GitHub profile (new tab)">
            <GitHub /> GitHub
          </Button>
          {linkedin && (
            <Button href={linkedin} variant="secondary" external ariaLabel="LinkedIn profile (new tab)">
              <LinkedIn /> LinkedIn
            </Button>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-subtle sm:flex-row sm:justify-between sm:px-8">
        <p>© {site.name}</p>
        <p>
          <a href={site.cvUrl} download={site.cvFileName} className="transition-colors hover:text-fg">
            CV
          </a>
          <span className="mx-2">·</span>
          <a href={site.contact.github} className="transition-colors hover:text-fg">
            GitHub
          </a>
          <span className="mx-2">·</span>
          <a href={site.contact.linkedin} className="transition-colors hover:text-fg">
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
