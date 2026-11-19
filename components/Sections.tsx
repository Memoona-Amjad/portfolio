import { site } from "@/content/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="work"
      title="Selected work"
      intro="Three agents, all live. Each demo runs on sample data, so you don't need to upload anything, and each one shows its steps, tool calls and retries as it works."
    >
      <div className="space-y-24 sm:space-y-32">
        {site.projects.map((p) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Skills as a simple two-column list: group name on the left, tools on the right. */
export function Skills() {
  return (
    <Section id="skills" title="What I work with">
      <Reveal>
        <dl className="divide-y divide-line border-y border-line">
          {site.skills.map((group) => (
            <div key={group.title} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-10">
              <dt className="text-sm font-medium text-accent sm:pt-0.5">{group.title}</dt>
              <dd className="leading-relaxed text-muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" title="About">
      <Reveal className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {site.about.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <ol className="space-y-5 text-[15px]">
          {site.background.map((item) => (
            <li key={item.what}>
              <p className="text-sm tabular-nums text-muted">{item.when}</p>
              <p className="mt-0.5">{item.what}</p>
              <p className="text-muted">{item.where}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const { email, github, linkedin } = site.contact;
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:px-8 sm:pb-32 sm:pt-24">
      <Reveal className="border-t border-line pt-10">
        <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
          Have a process an agent could take off your team&apos;s plate?{" "}
          <em className="text-accent">Let&apos;s talk.</em>
        </h2>
        <p className="mt-8 text-lg">
          <a href={`mailto:${email}`} className="link break-all">
            {email}
          </a>
        </p>
        <p className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-muted">
          <a href={github} target="_blank" rel="noopener noreferrer" className="link">
            GitHub ↗
          </a>
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link">
              LinkedIn ↗
            </a>
          )}
          <a href={site.cvUrl} download={site.cvFileName} className="link">
            CV (PDF)
          </a>
        </p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-5 pb-10 text-sm text-muted sm:px-8">
      <p>Designed and built by {site.name}.</p>
    </footer>
  );
}
