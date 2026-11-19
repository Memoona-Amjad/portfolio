import type { CSSProperties } from "react";

// A decorative "agent run" card for the hero: the kind of steps every project
// shows on screen (plan, tool calls, an error, a retry, a check, the result).
// The lines appear one by one with plain CSS, no JavaScript needed.
type Step = { kind: "plan" | "tool" | "error" | "retry" | "check" | "done"; label: string; detail: string };

const steps: Step[] = [
  { kind: "plan", label: "Plan", detail: "Break the task into 4 steps" },
  { kind: "tool", label: "Tool call", detail: "get_order_status(#1042)" },
  { kind: "error", label: "Code error", detail: "KeyError: 'city'" },
  { kind: "retry", label: "Retry 2", detail: "Read the error, fixed the column" },
  { kind: "check", label: "Critic", detail: "Score 86/100, approved" },
  { kind: "done", label: "Done", detail: "Answer + chart, every step shown" },
];

const dot: Record<Step["kind"], string> = {
  plan: "bg-violet-500",
  tool: "bg-sky-500",
  error: "bg-rose-500",
  retry: "bg-amber-500",
  check: "bg-teal-600",
  done: "bg-emerald-500",
};

export function HeroAgentCard() {
  return (
    <div
      aria-hidden
      className="fade-up hidden w-full max-w-sm rounded-2xl border border-line bg-surface/90 p-5 card-shadow backdrop-blur lg:block"
      style={{ animationDelay: "0.35s" }}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Agent run</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[11px] text-accent">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
          sample
        </span>
      </div>
      <ol className="mt-4 space-y-3">
        {steps.map((s, i) => (
          <li
            key={s.label}
            className="fade-up flex items-start gap-3"
            style={{ animationDelay: `${0.6 + i * 0.35}s` } as CSSProperties}
          >
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dot[s.kind]}`} />
            <div className="min-w-0">
              <p className="text-sm font-medium">{s.label}</p>
              <p className="truncate font-mono text-xs text-muted">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
