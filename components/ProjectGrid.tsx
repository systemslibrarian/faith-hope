import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  expanded = false,
}: {
  expanded?: boolean;
}) {
  return (
    <section aria-labelledby="projects-heading" className="py-24">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Projects</p>
          <h2
            id="projects-heading"
            className="mt-4 font-serif text-3xl text-parchment-50 sm:text-4xl"
          >
            Four projects. One purpose.
          </h2>
          <p className="mt-5 text-parchment-200/80">
            Each is built to serve a specific practice of faithful Christian
            life — and each is meant to fit alongside the others.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              expanded={expanded}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
