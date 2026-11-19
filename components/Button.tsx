import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  external?: boolean; // opens in a new tab
  download?: string; // file name to save as (turns the link into a download)
  ariaLabel?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const variants = {
  primary: "bg-fg text-bg hover:bg-white/85",
  secondary: "border border-line-strong bg-surface-2 text-fg hover:bg-white/10",
  ghost: "text-muted hover:text-fg",
};

const sizes = { md: "h-10 px-4 text-sm", sm: "h-8 px-3 text-[13px]" };

/** A link styled as a button (white primary, outlined secondary, or plain ghost). */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  download,
  ariaLabel,
}: Props) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...(download ? { download } : {})}
    >
      {children}
    </a>
  );
}
