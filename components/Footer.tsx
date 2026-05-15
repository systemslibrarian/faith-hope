import Link from "next/link";
import { projects } from "@/lib/projects";
import { GithubIcon } from "./icons/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gold-400/10 bg-ink-950/60">
      <div className="container-prose grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="font-serif text-lg text-parchment-50">
            Faith <span className="text-gold-400">&amp;</span> Hope
          </p>
          <p className="text-sm text-parchment-200/80">
            Scripture-centered tools for understanding, remembering,
            discerning, and interceding.
          </p>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Site</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-parchment-200 hover:text-gold-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-parchment-200 hover:text-gold-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/faith-and-hope"
                className="text-parchment-200 hover:text-gold-300"
              >
                Faith &amp; Hope
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-parchment-200 hover:text-gold-300"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Projects</p>
          <ul className="space-y-2 text-sm">
            {projects.map((p) => (
              <li key={p.slug}>
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-parchment-200 hover:text-gold-300"
                  >
                    {p.name}
                  </a>
                ) : (
                  <span className="text-parchment-200/60">
                    {p.name} <span className="text-xs">(in development)</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Builder</p>
          <p className="text-sm text-parchment-200/80">
            Built by Paul Clark
            <br />
            <span className="text-parchment-200/60">/ Systems Librarian</span>
          </p>
          <a
            href="https://github.com/systemslibrarian"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-parchment-200 hover:text-gold-300"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/systemslibrarian
          </a>
        </div>
      </div>

      <div className="border-t border-gold-400/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-6 text-xs text-parchment-200/60 sm:flex-row">
          <p>
            &copy; {year} Faith &amp; Hope. Built for ministry, offered in
            hope.
          </p>
          <p className="font-serif italic text-gold-400/70">
            Soli Deo gloria.
          </p>
        </div>
      </div>
    </footer>
  );
}
