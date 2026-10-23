import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CircleCheck, Info } from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects.js";
import { ProjectVisual } from "../components/ProjectCard.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import Reveal from "../components/Reveal.jsx";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = projects.findIndex((entry) => entry.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="pt-[72px]">
      <article className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
        <Reveal>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-text transition-colors hover:text-cyanic"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to selected work
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="type-label text-cyanic">
                {project.index} — {project.type}
              </p>
              <h1 className="type-display mt-5 font-display text-mist">{project.title}</h1>
              <p className="type-body-lg mt-6 max-w-2xl text-slate-text">{project.description}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="group relative mt-10 overflow-hidden rounded-3xl border border-line">
                <div className="aspect-[16/10]">
                  <ProjectVisual project={project} large />
                </div>
              </div>
              {project.placeholder && (
                <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-slate-text/85">
                  <Info size={16} className="mt-0.5 shrink-0 text-cyanic" aria-hidden="true" />
                  This preview is a stylised composition, not a screenshot. Final case-study
                  imagery and confirmed project details will replace it — nothing here claims
                  results that have not been verified.
                </p>
              )}
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12 space-y-5">
                <h2 className="type-h3 font-display text-mist">About this project</h2>
                {project.overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="type-body-lg text-slate-text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="glow-card rounded-3xl p-8 lg:sticky lg:top-24">
                <p className="type-label text-slate-text">Scope of work</p>
                <ul className="mt-5 space-y-3.5">
                  {project.scope.map((entry) => (
                    <li key={entry} className="flex items-start gap-3 text-slate-text">
                      <CircleCheck size={17} className="mt-0.5 shrink-0 text-cyanic" aria-hidden="true" />
                      {entry}
                    </li>
                  ))}
                </ul>

                <p className="type-label mt-9 text-slate-text">Technologies</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <SkillBadge>{tag}</SkillBadge>
                    </li>
                  ))}
                </ul>

                <div className="mt-9 border-t border-line pt-7">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#628dff]"
                    >
                      Visit Live Website
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-text">
                      A public live link has not been added for this project yet.{" "}
                      <Link to="/#contact" className="font-medium text-cyanic hover:text-mist">
                        Ask about this project
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          </aside>
        </div>

        <Reveal className="mt-24">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-line bg-card/60 px-8 py-8">
            <div>
              <p className="type-label text-slate-text">Next project</p>
              <p className="mt-2 font-display text-2xl font-semibold text-mist">{nextProject.title}</p>
            </div>
            <Link
              to={`/work/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-mist transition-all hover:border-cyanic/50 hover:bg-white/[0.04]"
            >
              View Case Study
              <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
