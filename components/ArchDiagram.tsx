/**
 * How a project is built, as a short numbered flow (plain HTML, no diagram library).
 * The optional note describes the loop back, e.g. a retry.
 */
export function ArchDiagram({ steps, note }: { steps: string[]; note?: string }) {
  return (
    <div>
      <ol className="space-y-1.5 text-sm">
        {steps.map((step, i) => (
          <li key={step} className="flex gap-3">
            <span className="w-5 shrink-0 text-right tabular-nums text-muted">{i + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      {note && (
        <p className="mt-3 border-l border-accent/60 pl-3 text-sm italic text-muted">{note}</p>
      )}
    </div>
  );
}
