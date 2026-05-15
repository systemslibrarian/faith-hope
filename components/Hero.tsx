import Link from "next/link";
import { ArrowRightIcon } from "./icons/Icons";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-[600px] max-w-5xl bg-radial-gold blur-2xl" />
        <div className="absolute inset-0 bg-subtle-grid bg-[length:48px_48px] opacity-30 mask-fade-bottom" />
      </div>

      <div className="container-prose pb-24 pt-20 sm:pt-28 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Faith &amp; Hope</p>
          <h1
            id="hero-heading"
            className="mt-6 text-balance font-serif text-4xl leading-[1.1] text-parchment-50 sm:text-5xl md:text-6xl"
          >
            Building tools that help{" "}
            <span className="text-gold-300">faith take root</span> and{" "}
            <span className="text-gold-300">hope move forward</span>.
          </h1>
          <p className="mt-7 text-pretty text-lg leading-relaxed text-parchment-200/90 sm:text-xl">
            A portfolio of ministry-focused projects designed to help people
            see Christ in Scripture, hide God&apos;s Word in their hearts,
            seek His will with wisdom, and pray faithfully for one another.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="#path" className="btn-primary">
              Explore the Path
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Projects
            </Link>
          </div>

          <p className="mt-10 font-serif text-base italic text-parchment-200/70 sm:text-lg">
            Scripture-centered tools for understanding, remembering,
            discerning, and interceding.
          </p>
        </div>
      </div>
    </section>
  );
}
