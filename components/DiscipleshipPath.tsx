import Link from "next/link";
import { projects, stages } from "@/lib/projects";
import { ArrowRightIcon, ExternalLinkIcon, ProjectIcon } from "./icons/Icons";

export default function DiscipleshipPath() {
  return (
    <section
      id="path"
      aria-labelledby="path-heading"
      className="relative scroll-mt-20 py-24"
    >
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Path</p>
          <h2
            id="path-heading"
            className="mt-4 font-serif text-3xl text-parchment-50 sm:text-4xl"
          >
            A single path, four practices.
          </h2>
          <p className="mt-5 text-parchment-200/80">
            Each project is a stage in the same discipleship rhythm —
            understanding Scripture, remembering it, seeking God&apos;s will,
            and praying for one another.
          </p>
          <ol
            aria-label="Stages of the path"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-xs uppercase tracking-wider2 text-gold-400/80"
          >
            {stages.map((s, i) => (
              <li key={s.name} className="flex items-center gap-2">
                <span>{s.name}</span>
                {i < stages.length - 1 && (
                  <ArrowRightIcon className="h-3 w-3 text-gold-400/50" />
                )}
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <li key={project.slug} className="card group flex flex-col">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-300 transition-colors group-hover:border-gold-400/60">
                  <ProjectIcon name={project.icon} className="h-5 w-5" />
                </span>
                <span className="font-serif text-sm text-gold-400/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 eyebrow">{project.stage}</p>
              <h3 className="mt-2 font-serif text-2xl text-parchment-50">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-parchment-200/80">
                {project.description}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-300 hover:text-gold-200"
                  >
                    Visit
                    <ExternalLinkIcon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-parchment-200/50">In development</span>
                )}
                <Link
                  href={`/projects#${project.slug}`}
                  className="text-parchment-200/80 hover:text-gold-300"
                >
                  Details
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
