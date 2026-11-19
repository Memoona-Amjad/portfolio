import { site } from "@/content/site";
import { Button } from "./Button";
import { Download } from "./icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

/** Sticky top bar: name and role on the left, links and a CV button on the right. */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2 text-sm">
          <span className="font-semibold tracking-tight">{site.name}</span>
          <span className="hidden text-subtle md:inline">{site.title}</span>
        </a>
        <div className="flex items-center gap-5">
          <ul className="flex items-center gap-5 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href} className={l.href === "#work" ? "" : "hidden sm:block"}>
                <a href={l.href} className="transition-colors hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={site.cvUrl} download={site.cvFileName} variant="secondary" size="sm">
            <Download /> CV
          </Button>
        </div>
      </nav>
    </header>
  );
}
