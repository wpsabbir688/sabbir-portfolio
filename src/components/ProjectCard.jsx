import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SkillBadge from "./SkillBadge.jsx";

/**
 * CSS-composed project preview. This is a stylised interface composition —
 * NOT a real screenshot. It stands in until genuine project screenshots
 * are added (see the `placeholder` flag in src/data/projects.js).
 */
export function ProjectVisual({ project, large = false }) {
  const { visual, title } = project;
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: visual.gradient }}
      role="img"
      aria-label={`Stylised preview composition for ${title}`}
    >
      {/* ambient glow */}
      <div
        className="absolute -top-1/4 right-0 h-3/4 w-2/3 rounded-full opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-110"
        style={{ background: `radial-gradient(circle, ${visual.accent}55, transparent 65%)` }}
        aria-hidden="true"
      />
      {/* mini browser window */}
      <div
        className={`absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-[#0B1020]/85 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur transition-transform duration-700 group-hover:scale-[1.04] ${large ? "p-5" : "p-4"}`}
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="ml-3 h-3.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="flex items-center justify-between pt-3.5">
          <span className="h-3 w-16 rounded" style={{ background: visual.accent }} />
          <span className="flex gap-2">
            <span className="h-2 w-8 rounded bg-white/20" />
            <span className="h-2 w-8 rounded bg-white/20" />
            <span className="h-2 w-8 rounded bg-white/20" />
          </span>
        </div>
        <div className="pt-4">
          <span className="block h-3.5 w-3/4 rounded bg-white/35" />
          <span className="mt-2 block h-3.5 w-1/2 rounded bg-white/25" />
          <span className="mt-3 block h-2 w-2/3 rounded bg-white/15" />
          <span
            className="mt-4 block h-6 w-20 rounded-full"
            style={{ background: visual.accent }}
          />
        </div>
        <div className="grid grid-cols-3 gap-2.5 pt-5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
              <span
                className="block h-8 rounded-md opacity-70"
                style={{
                  background: `linear-gradient(135deg, ${visual.accent}66, transparent)`,
                }}
              />
              <span className="mt-2 block h-1.5 w-4/5 rounded bg-white/25" />
              <span className="mt-1.5 block h-1.5 w-3/5 rounded bg-white/15" />
            </div>
          ))}
        </div>
      </div>
      {/* oversized index watermark */}
      <span
        className="pointer-events-none absolute bottom-2 right-4 font-display text-[5.5rem] font-bold leading-none text-white/[0.05] select-none"
        aria-hidden="true"
      >
        {project.index}
      </span>
    </div>
  );
}

/** Editorial project card — large visual, alternating layout handled by parent. */
export default function ProjectCard({ project, flip = false }) {
  return (
    <article className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      <Link
        to={`/work/${project.slug}`}
        className={`relative block overflow-hidden rounded-3xl border border-line focus-visible:outline-none lg:col-span-7 ${flip ? "lg:order-2" : ""}`}
        aria-label={`View the ${project.title} case study`}
      >
        <div className="aspect-[16/10]">
          <ProjectVisual project={project} />
        </div>
        <span className="absolute inset-0 bg-gradient-to-t from-[#070910]/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      </Link>

      <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <p className="type-label text-slate-text">
          {project.index} — {project.type}
        </p>
        <h3 className="type-h2 mt-4 font-display text-mist">
          <Link to={`/work/${project.slug}`} className="transition-colors hover:text-cyanic">
            {project.title}
          </Link>
        </h3>
        <p className="type-body-lg mt-4 text-slate-text">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>
              <SkillBadge>{tag}</SkillBadge>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-mist transition-colors hover:text-cyanic"
          >
            View Case Study
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-text transition-colors hover:text-mist"
            >
              Live Website
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-text/60">
              Case study in preparation
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
