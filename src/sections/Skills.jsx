import SectionHeading from "../components/SectionHeading.jsx";
import SkillBadge from "../components/SkillBadge.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 bg-ink-2/45 py-24 lg:py-32" aria-label="Skills and technologies">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Skills & Technologies"
          title={
            <>
              A Focused, Proven <span className="text-gradient">Toolkit.</span>
            </>
          }
          copy="The platforms, languages and disciplines behind every build — grouped by how they are actually used in a project."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.08} className="h-full">
              <article className="glow-card flex h-full flex-col rounded-3xl p-7">
                <p className="type-label text-cyanic/85">{group.title}</p>
                <p className="mt-2.5 text-sm text-slate-text">{group.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <SkillBadge>{skill}</SkillBadge>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
