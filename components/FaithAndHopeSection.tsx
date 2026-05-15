import Link from "next/link";
import { stages } from "@/lib/projects";

export default function FaithAndHopeSection() {
  return (
    <section
      aria-labelledby="faith-hope-heading"
      className="relative py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-72 max-w-3xl bg-radial-gold opacity-50 blur-2xl"
      />
      <div className="container-narrow text-center">
        <p className="eyebrow">Faith &amp; Hope</p>
        <h2
          id="faith-hope-heading"
          className="mt-4 font-serif text-3xl text-parchment-50 sm:text-4xl"
        >
          Faith trusts. Hope looks forward.
        </h2>
        <div className="divider-gold mt-8" />
        <div className="mt-8 space-y-5 text-pretty text-lg leading-relaxed text-parchment-200/90">
          <p>
            Faith is not vague optimism. It is personal trust in Christ —
            trust in who He is, what He has done, and what He has promised.
          </p>
          <p>
            Hope is not wishful thinking. It is confident expectation rooted
            in God&apos;s faithfulness.
          </p>
          <p>
            Together, faith and hope shape how we read Scripture, remember
            God&apos;s Word, seek wisdom, and pray for one another.
          </p>
        </div>
      </div>

      <div className="container-narrow mt-12">
        <div className="card-quiet grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Faith</p>
            <p className="mt-3 font-serif text-xl text-parchment-50">
              Trust in a Person.
            </p>
            <p className="mt-3 text-base text-parchment-200/85">
              Faith looks at Christ and says, &ldquo;I trust you&rdquo; — for
              what He has done, for who He is, and for what He has
              promised.
            </p>
          </div>
          <div className="sm:border-l sm:border-gold-400/10 sm:pl-6">
            <p className="eyebrow">Hope</p>
            <p className="mt-3 font-serif text-xl text-parchment-50">
              Faith in the future tense.
            </p>
            <p className="mt-3 text-base text-parchment-200/85">
              Hope is the forward-leaning slice of faith — confident
              expectation that God will keep every promise He has made.
            </p>
          </div>
        </div>
        <p className="mt-5 text-center text-sm text-parchment-200/70">
          <Link href="/faith-and-hope" className="link-gold">
            Read the longer reflection →
          </Link>
        </p>
      </div>

      <div className="container-prose mt-16">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s) => (
            <li key={s.name} className="card-quiet">
              <p className="eyebrow">{s.name}</p>
              <p className="mt-3 font-serif text-lg leading-snug text-parchment-50">
                {s.summary}
              </p>
              <p className="mt-3 text-xs italic text-gold-400/70">
                {s.verse}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
