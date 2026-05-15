import Link from "next/link";
import { CrossIcon } from "./icons/Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/faith-and-hope", label: "Faith & Hope" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold-400/10 bg-ink-950/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Faith & Hope Lab home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-gold-400/30 text-gold-300 transition-colors group-hover:border-gold-400/60 group-hover:text-gold-200">
            <CrossIcon className="h-4 w-4" />
          </span>
          <span className="font-serif text-lg tracking-wide text-parchment-50">
            Faith <span className="text-gold-400">&amp;</span> Hope Lab
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm text-parchment-200 transition-colors hover:text-gold-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
