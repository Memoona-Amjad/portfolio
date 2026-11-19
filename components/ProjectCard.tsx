import type { Project } from "@/content/site";
import { ArchDiagram } from "./ArchDiagram";
import { ButtonLink } from "./ButtonLink";
import { ProjectMedia } from "./ProjectMedia";
import { ExternalIcon, GitHubIcon } from "./icons";

/** One rich card per project: story on the left, demo + diagram on the right. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="grid gap-8 rounded-2xl border border-line bg-surface p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
      {/* Left: the story */}
      <div className="flex flex-col">
        <p className="font-mono text-xs text-accent">{number}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
        <p className="mt-2 text-lg text-fg/90">{project.pitch}</p>

        <p className="mt-5 text-sm leading-relaxed text-muted">
          <span className="font-medium text-fg">The problem: </span>
          {project.problem}
        </p>

        <h4 className="mt-6 text-sm font-medium">What the agent does</h4>
        <ul className="mt-3 space-y-2.5">
          {project.agentSteps.map((step) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
          <ButtonLink
            href={project.liveUrl}
            variant="primary"
            external
            pendingLabel="Live demo coming soon"
            ariaLabel={`${project.name} live demo`}
          >
            Live demo <ExternalIcon />
          </ButtonLink>
          <ButtonLink href={project.githubUrl} external ariaLabel={`${project.name} on GitHub`}>
            <GitHubIcon /> GitHub
          </ButtonLink>
        </div>
      </div>

      {/* Right: demo + architecture */}
      <div className="flex flex-col gap-4">
        <ProjectMedia media={project.media} />
        <ArchDiagram steps={project.diagram} note={project.diagramNote} />
      </div>
    </article>
  );
}
