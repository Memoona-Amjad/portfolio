import { site } from "@/content/site";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/** Sticky top bar with the name and in-page links. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-semibold tracking-tight">
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>
        <ul className="flex items-center gap-4 text-sm text-muted sm:gap-7">
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
