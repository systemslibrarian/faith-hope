import Link from "next/link";

export default function BuilderStatement() {
  return (
    <section
      aria-labelledby="builder-heading"
      className="py-24"
    >
      <div className="container-narrow">
        <div className="card relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl"
          />
          <p className="eyebrow">Builder</p>
          <h2
            id="builder-heading"
            className="mt-4 font-serif text-3xl text-parchment-50 sm:text-4xl"
          >
            Built with discipline. Offered for ministry.
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-parchment-200/90">
            I build public-interest technology at the intersection of
            Scripture, learning design, information architecture, security,
            and long-term stewardship. These projects are not separate
            experiments. They form one path: helping people know God&apos;s
            Word, carry it in their hearts, seek His will, and pray for one
            another.
          </p>
          <div className="mt-8">
            <Link href="/about" className="btn-secondary">
              About Paul Clark
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
