import type { ReactNode } from "react";

type Props = {
  href: string; // "" means "not available yet": the button is shown greyed out
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: string; // file name to save as (turns the link into a download)
  pendingLabel?: string; // text shown when href is empty, e.g. "Demo coming soon"
  ariaLabel?: string;
};

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
  primary: "bg-linear-to-r from-[#0f766e] to-[#7c3aed] text-white shadow-md shadow-teal-900/10 hover:brightness-110",
  secondary: "border border-line bg-surface text-fg card-shadow hover:border-accent/50 hover:text-accent",
  pending: "cursor-not-allowed border border-dashed border-line text-muted",
};

/** A link styled as a button. If the link is not known yet, it renders a disabled "coming soon" state. */
export function ButtonLink({
  href,
  children,
  variant = "secondary",
  external,
  download,
  pendingLabel,
  ariaLabel,
}: Props) {
  if (!href) {
    return (
      <span className={`${styles.base} ${styles.pending}`} aria-disabled="true">
        {pendingLabel ?? children}
      </span>
    );
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${styles.base} ${styles[variant]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
    >
      {children}
    </a>
  );
}
