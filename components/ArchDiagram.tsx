/**
 * A small architecture diagram drawn with plain HTML boxes and arrows.
 * (Lighter and faster than loading a diagram library in the browser.)
 */
export function ArchDiagram({ steps, note }: { steps: string[]; note?: string }) {
  return (
    <figure className="rounded-xl border border-line bg-surface-2/60 p-4">
      <figcaption className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
        Architecture
      </figcaption>
      <ol className="flex flex-wrap items-center gap-y-2 text-xs sm:text-[13px]">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            <span className="rounded-md border border-line bg-bg px-2.5 py-1.5 leading-tight text-fg">
              {step}
            </span>
            {i < steps.length - 1 && (
              <span className="px-1.5 text-accent" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-3 flex items-start gap-2 text-xs text-muted">
          <span className="text-accent" aria-hidden>
            ↺
          </span>
          {note}
        </p>
      )}
    </figure>
  );
}
