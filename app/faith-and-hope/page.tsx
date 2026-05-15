import type { Metadata } from "next";
import Link from "next/link";
import { stages } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Faith & Hope",
  description:
    "What's the difference between faith and hope? Faith is personal trust in Christ — past, present, and future. Hope is faith in the future tense: confident expectation in God's coming grace.",
};

export default function FaithAndHopePage() {
  return (
    <>
      <section className="border-b border-gold-400/10 py-20">
        <div className="container-narrow text-center">
          <p className="eyebrow">Reflection</p>
          <h1 className="mt-4 font-serif text-4xl text-parchment-50 sm:text-5xl">
            Faith trusts. Hope looks forward.
          </h1>
          <div className="divider-gold mt-7" />
          <p className="mt-7 font-serif text-lg italic text-parchment-200/80">
            &ldquo;Now faith is the assurance of things hoped for, the
            conviction of things not seen.&rdquo;{" "}
            <span className="not-italic text-gold-400/70">
              — Hebrews 11:1
            </span>
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-narrow space-y-8 text-pretty text-lg leading-relaxed text-parchment-200/90">
          <p>
            One of the quiet aims of this site is to help people see the
            difference between two words the Bible refuses to let us blur:
            <span className="text-parchment-50"> faith</span> and{" "}
            <span className="text-parchment-50">hope</span>. They overlap. They
            depend on each other. But they are not the same — and seeing the
            difference changes how we read Scripture, how we pray, and how
            we wait.
          </p>

          <div className="card relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl"
            />
            <p className="eyebrow">The Distinction</p>
            <h2 className="mt-3 font-serif text-2xl text-parchment-50 sm:text-3xl">
              What&apos;s the difference between faith and hope?
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-serif text-xl text-gold-300">Faith</p>
                <p className="mt-2 text-base text-parchment-200/90">
                  Faith is personal trust in Christ. It is relational. It
                  looks at a Person and says,{" "}
                  <span className="italic">&ldquo;I trust you.&rdquo;</span>{" "}
                  Faith reaches back to what Christ has already done at the
                  cross, rests in who He is right now, and leans into what
                  He has promised to do.
                </p>
              </div>
              <div>
                <p className="font-serif text-xl text-gold-300">Hope</p>
                <p className="mt-2 text-base text-parchment-200/90">
                  Hope is confident expectation in God&apos;s future grace.
                  It is not wishful thinking or finger-crossing. It is
                  rock-solid trust that what God has promised will come to
                  pass.{" "}
                  <span className="italic">
                    Hope is faith in the future tense.
                  </span>
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-gold-400/10 pt-6 text-base text-parchment-200/85">
              <p>
                That&apos;s why faith is the larger word. Everything we say
                about biblical hope is true of faith, but faith is more —
                faith is trust in a Person, and that trust has a backward
                dimension (what Christ has done) as well as a forward one
                (what He has promised). Hope is the forward-leaning slice of
                faith.
              </p>
              <p className="mt-3 text-sm italic text-parchment-200/60">
                Shaped in part by John Piper&apos;s reflection on 1 Peter
                1:21 and Hebrews 11:1.
              </p>
            </div>
          </div>

          <p>
            Faith is not vague optimism. It is not a mood. It is trust in a
            real Person — trust in who Jesus is, in what He has already
            done, and in what He has promised still to do.
          </p>
          <p>
            Hope is not wishful thinking. It is confident expectation
            grounded in God&apos;s character. Because God is faithful, hope
            is reasonable. Because Christ is risen, hope is unshakable.
          </p>
          <p>
            These two together — faith and hope — shape an entire way of
            living. They shape how we read the Bible, how we carry it with
            us, how we make decisions, and how we pray for people we love.
          </p>

          <div className="card-quiet">
            <p className="eyebrow">Four practices</p>
            <p className="mt-4 text-base text-parchment-200/85">
              Faith &amp; Hope Lab is organized around four practices.
              They&apos;re not steps you complete and leave behind — they
              are rhythms a believer returns to throughout life.
            </p>
            <ul className="mt-6 space-y-4 text-base">
              {stages.map((s) => (
                <li key={s.name} className="border-l-2 border-gold-400/30 pl-4">
                  <p className="font-serif text-lg text-parchment-50">
                    {s.name}
                  </p>
                  <p className="text-parchment-200/80">{s.summary}</p>
                  <p className="mt-1 text-xs italic text-gold-400/70">
                    {s.verse}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-parchment-200/85">
              Faith carries the first three.{" "}
              <span className="text-parchment-50">Understanding</span>{" "}
              Scripture, <span className="text-parchment-50">remembering</span>{" "}
              it, and <span className="text-parchment-50">discerning</span>{" "}
              God&apos;s will all begin with trusting Christ. Hope then turns
              that trust outward —{" "}
              <span className="text-parchment-50">interceding</span> for
              others with confident expectation that God hears and answers.
            </p>
          </div>

          <p>
            None of these projects is the point. The point is the Lord they
            point to. If a tool here helps you see Christ more clearly,
            carry His Word more faithfully, seek His will more honestly, or
            pray for someone more steadily — then it has done its work.
          </p>

          <div>
            <Link href="/projects" className="btn-primary text-sm">
              See the projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
