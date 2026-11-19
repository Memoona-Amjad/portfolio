import type { Project } from "@/content/site";
import { ArchDiagram } from "./ArchDiagram";
import { Button } from "./Button";
import { ProjectMedia } from "./ProjectMedia";
import { ArrowUpRight, GitHub } from "./icons";

/**
 * One project card.
 * Top: the story (kind, name, pitch, three numbers, what the agent does, buttons)
 * next to the live demo in a browser frame. Bottom: the problem and how it's built.
 * `flip` swaps the two columns on desktop so the page has some rhythm.
 */
export function ProjectCard({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
      <div
        className={`grid gap-10 p-6 sm:p-10 lg:items-center lg:gap-12 [&>*]:min-w-0 ${
          flip ? "lg:grid-cols-[1.25fr_1fr]" : "lg:grid-cols-[1fr_1.25fr]"
        }`}
      >
        {/* Story */}
        <div className={flip ? "lg:order-2" : ""}>
          <p className="text-sm text-subtle">{project.kind}</p>
          <h3 className="mt-1.5 text-3xl font-semibold tracking-[-0.03em]">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.pitch}</p>

          {/* Three hard numbers */}
          <dl className="mt-7 grid grid-cols-3 gap-4 border-y border-line py-5">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-xs leading-snug text-subtle">{m.label}</dt>
                <dd className="text-xl font-semibold tracking-tight sm:text-2xl">{m.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 space-y-2.5 text-[15px] leading-relaxed text-muted">
            {project.agentSteps.map((step) => (
              <li key={step} className="flex gap-3">
                <svg viewBox="0 0 16 16" className="mt-1 h-4 w-4 shrink-0 text-fg/70" aria-hidden>
                  <path d="m4 8.5 2.5 2.5L12 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{step}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} external ariaLabel={`Open the ${project.name} live demo (new tab)`}>
                Open live demo <ArrowUpRight />
              </Button>
            )}
            <Button
              href={project.githubUrl}
              variant="secondary"
              external
              ariaLabel={`${project.name} source code on GitHub (new tab)`}
            >
              <GitHub /> View code
            </Button>
          </div>
        </div>

        {/* Live demo in a browser frame */}
        <div className={flip ? "lg:order-1" : ""}>
          <ProjectMedia media={project.media} url={project.liveUrl} />
        </div>
      </div>

      {/* Footer: problem + architecture */}
      <div className="grid gap-8 border-t border-line bg-bg/40 p-6 sm:px-10 sm:py-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 [&>*]:min-w-0">
        <div>
          <h4 className="text-sm font-medium">The problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium">How it&apos;s built</h4>
          <div className="mt-3">
            <ArchDiagram steps={project.diagram} note={project.diagramNote} />
          </div>
          <p className="mt-4 text-[13px] text-subtle">{project.stack.join(" · ")}</p>
        </div>
      </div>
    </article>
  );
}
