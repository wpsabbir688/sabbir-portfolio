import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { PROJECT_CATEGORIES, projects } from "../data/projects.js";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const visible =
    category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <section id="work" className="relative scroll-mt-20 py-24 lg:py-32" aria-label="Selected work">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="Selected Work / 001—004"
            title={
              <>
                Design Meets <span className="text-gradient">Development.</span>
              </>
            }
            copy="A selection of digital experiences built with attention to detail, usability, and business goals."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={category === cat}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    category === cat
                      ? "bg-electric text-white shadow-[0_8px_28px_-8px_rgba(79,124,255,0.8)]"
                      : "border border-line text-slate-text hover:border-electric/50 hover:text-mist"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-16 space-y-24 lg:space-y-32">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} flip={i % 2 === 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-20">
          <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-slate-text/80">
            Preview visuals above are stylised compositions while final case-study screenshots are
            being prepared — each project page notes exactly what is shown.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
