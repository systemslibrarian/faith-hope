import type { Project } from "@/lib/projects";
import { ExternalLinkIcon, GithubIcon, ProjectIcon } from "./icons/Icons";

export default function ProjectCard({
  project,
  expanded = false,
}: {
  project: Project;
  expanded?: boolean;
}) {
  return (
    <article id={project.slug} className="card flex h-full flex-col">
      <header className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-full border border-gold-400/30 bg-gold-400/5 text-gold-300">
          <ProjectIcon name={project.icon} className="h-6 w-6" />
        </span>
        <div className="text-right">
          <p className="eyebrow">{project.stage}</p>
          <p className="mt-1 text-xs text-parchment-200/60">
            {project.status === "live" ? "Live" : "In development"}
          </p>
        </div>
      </header>

      <h3 className="mt-5 font-serif text-2xl text-parchment-50">
        {project.name}
      </h3>
      <p className="mt-2 font-serif text-base italic text-gold-300/90">
        {project.tagline}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-parchment-200/80">
        {expanded ? project.longDescription : project.description}
      </p>

      {expanded && project.scripture && (
        <blockquote className="mt-5 border-l-2 border-gold-400/40 pl-4 text-sm italic text-parchment-200/80">
          &ldquo;{project.scripture.text}&rdquo;
          <footer className="mt-1 not-italic text-xs text-gold-400/70">
            — {project.scripture.reference}
          </footer>
        </blockquote>
      )}

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="tag">
            {tag}
          </li>
        ))}
      </ul>

      <footer className="mt-auto flex items-center gap-3 pt-6">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm"
          >
            Visit
            <ExternalLinkIcon className="h-4 w-4" />
          </a>
        ) : (
          <span className="btn-secondary cursor-default text-sm opacity-70">
            Coming soon
          </span>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost text-sm"
            aria-label={`${project.name} on GitHub`}
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        )}
      </footer>
    </article>
  );
}
