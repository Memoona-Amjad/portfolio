/**
 * How a project is built, as a left-to-right pipeline of steps (plain HTML, no diagram library).
 * The optional note describes the loop back, e.g. a retry.
 */
export function ArchDiagram({ steps, note }: { steps: string[]; note?: string }) {
  return (
    <div>
      <ol className="flex flex-wrap items-center gap-y-2 font-mono text-[12px] text-muted">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center">
            <span className="rounded-md border border-line bg-surface-2 px-2 py-1 text-fg/90">{step}</span>
            {i < steps.length - 1 && (
              <span className="px-1.5 text-subtle" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-3 flex gap-2 text-[13px] text-subtle">
          <span aria-hidden>↻</span>
          {note}
        </p>
      )}
    </div>
  );
}
