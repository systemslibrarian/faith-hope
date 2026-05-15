import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Scripture Journey, Hide in Heart, HisWillGuide, and PrayerWarriors — four Scripture-centered tools that form one discipleship path.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-gold-400/10 py-20">
        <div className="container-narrow text-center">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-4 font-serif text-4xl text-parchment-50 sm:text-5xl">
            Projects
          </h1>
          <div className="divider-gold mt-7" />
          <p className="mt-7 text-pretty text-lg leading-relaxed text-parchment-200/90">
            Four projects, each built for a specific practice of Christian
            life — and meant to be used together. Click through to the live
            apps or to the source on GitHub.
          </p>
        </div>
      </section>
      <ProjectGrid expanded />
    </>
  );
}
