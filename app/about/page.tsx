import type { Metadata } from "next";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Paul Clark / Systems Librarian — an IT librarian, data analyst, and ministry-focused technologist building Scripture-centered tools.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gold-400/10 py-20">
        <div className="container-narrow text-center">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 font-serif text-4xl text-parchment-50 sm:text-5xl">
            Paul Clark
          </h1>
          <p className="mt-3 font-serif text-lg italic text-gold-300">
            / Systems Librarian
          </p>
          <div className="divider-gold mt-7" />
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow space-y-8 text-pretty text-lg leading-relaxed text-parchment-200/90">
          <p>
            I&apos;m an IT librarian, data analyst, AI project builder, and
            ministry-focused technologist. My day-to-day work sits at the
            intersection of information systems, learning design, and
            stewardship of long-lived digital collections — the same
            disciplines that shape the projects gathered here.
          </p>
          <p>
            Faith &amp; Hope is where I bring that work into ministry.
            Each project is built with care for accuracy, clarity, and the
            people who will use it. Scripture is not a marketing layer on top
            of a tech demo. It is the reason these tools exist.
          </p>

          <div className="card-quiet">
            <p className="eyebrow">How I build</p>
            <ul className="mt-4 space-y-3 text-base text-parchment-200/85">
              <li>
                <span className="text-gold-300">Scripture first.</span>{" "}
                Features serve faithful reading, remembering, discerning, and
                praying — not the other way around.
              </li>
              <li>
                <span className="text-gold-300">Learning design.</span>{" "}
                Borrowing from librarianship and instructional design to make
                hard things approachable.
              </li>
              <li>
                <span className="text-gold-300">Information architecture.</span>{" "}
                Clear structure so people can find what they need and trust
                what they see.
              </li>
              <li>
                <span className="text-gold-300">Security &amp; privacy.</span>{" "}
                Especially for prayer and devotional data, which deserves
                care.
              </li>
              <li>
                <span className="text-gold-300">Stewardship.</span> Code, copy,
                and content meant to last — not to chase trends.
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Find me</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/systemslibrarian"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm"
              >
                <GithubIcon className="h-4 w-4" />
                github.com/systemslibrarian
              </a>
              <Link href="/projects" className="btn-ghost text-sm">
                See the projects →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
