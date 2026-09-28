import { ToggleTheme } from "@/components/ui/toggle-theme";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-3xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <span className="font-serif font-semibold text-lg text-neutral-900 dark:text-white">PS</span>
        <ul className="hidden sm:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-accent dark:hover:text-accent-dark transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ToggleTheme className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:border-accent dark:hover:border-accent-dark transition-colors" />
      </div>
    </nav>
  );
}
