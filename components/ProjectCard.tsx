import type { Project } from "@/content/site";
import { ArchDiagram } from "./ArchDiagram";
import { ProjectMedia } from "./ProjectMedia";

/**
 * One project, laid out like a magazine entry:
 * name and pitch, a large screenshot, then three short columns
 * (the problem, what the agent does, how it's built) and two links.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article>
      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">
          {project.name}
        </h3>
        <p className="text-sm text-muted">{project.kind}</p>
      </header>

      <p className="mt-4 max-w-3xl text-lg leading-relaxed sm:text-xl">{project.pitch}</p>

      <div className="mt-8">
        <ProjectMedia media={project.media} />
      </div>

      <div className="mt-8 grid gap-8 text-[15px] leading-relaxed md:grid-cols-3 md:gap-10">
        <div>
          <h4 className="text-sm font-medium text-accent">The problem</h4>
          <p className="mt-2 text-muted">{project.problem}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-accent">What the agent does</h4>
          <ul className="mt-2 space-y-2 text-muted">
            {project.agentSteps.map((step) => (
              <li key={step} className="flex gap-2">
                <span aria-hidden className="text-muted/60">–</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-accent">How it&apos;s built</h4>
          <div className="mt-2">
            <ArchDiagram steps={project.diagram} note={project.diagramNote} />
          </div>
          <p className="mt-4 text-sm text-muted">{project.stack.join(" · ")}</p>
        </div>
      </div>

      <p className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            aria-label={`Try the ${project.name} live demo (opens in a new tab)`}
          >
            Try the live demo ↗
          </a>
        ) : (
          <span className="text-muted">Live demo coming soon</span>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          aria-label={`${project.name} source code on GitHub (opens in a new tab)`}
        >
          Read the code ↗
        </a>
      </p>
    </article>
  );
}
