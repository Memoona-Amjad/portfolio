import { site } from "@/content/site";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      title="Agents that do real work"
      intro="Each project has a live demo with sample data, so you can try it in a minute without uploading anything. Every demo shows the agent's steps, tool calls and retries on screen."
    >
      <div className="space-y-8">
        {site.projects.map((p, i) => (
          <Reveal key={p.name}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {site.skills.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 0.08}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            <h3 className="font-medium">{group.title}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about" label="About" title="About me">
      <Reveal className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
        {site.about.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const { email, github, githubHandle, linkedin } = site.contact;
  const items = [
    { label: "Email", value: email, href: `mailto:${email}`, icon: MailIcon },
    { label: "GitHub", value: githubHandle, href: github, icon: GitHubIcon },
    {
      label: "LinkedIn",
      value: linkedin ? "View profile" : "Coming soon", // TODO: LinkedIn URL in content/site.ts
      href: linkedin,
      icon: LinkedInIcon,
    },
  ];

  return (
    <Section
      id="contact"
      label="Contact"
      title="Let's talk"
      intro="Open to Agentic AI roles and projects. The fastest way to reach me is email."
    >
      <Reveal>
      <ul className="grid gap-4 sm:grid-cols-3">
        {items.map(({ label, value, href, icon: Icon }) => {
          const inner = (
            <>
              <Icon className="h-5 w-5 text-accent" />
              <span className="mt-4 block text-sm text-muted">{label}</span>
              <span className="mt-1 block break-all font-medium">{value}</span>
            </>
          );
          const card = "block h-full rounded-2xl border border-line bg-surface p-6";
          return (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  className={`${card} transition-colors hover:border-accent/60`}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div className={`${card} border-dashed`}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {site.name}
        </p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
