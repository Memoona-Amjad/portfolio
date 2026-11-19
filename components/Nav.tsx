import { site } from "@/content/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/** Sticky top bar: name on the left, in-page links on the right. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight">
          {site.name}
        </a>
        <ul className="flex items-center gap-4 text-sm text-muted sm:gap-6">
          {links.map((l) => (
            <li key={l.href} className={l.href === "#skills" ? "hidden sm:block" : ""}>
              <a href={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
