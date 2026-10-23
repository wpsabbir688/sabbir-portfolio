import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { processSteps } from "../data/skills.js";

export default function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative scroll-mt-20 py-24 lg:py-32" aria-label="Working process">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Working Process"
          title={
            <>
              Clear Process. <span className="text-gradient">Better Outcomes.</span>
            </>
          }
          copy="Four stages, followed on every project — so you always know what happens next."
        />

        <div className="relative mt-16">
          {/* animated connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-white/8 lg:block" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-electric via-cyanic to-violetic lg:block"
            initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* animated connecting line (mobile, vertical) */}
          <div className="absolute bottom-4 left-7 top-4 w-px bg-white/8 lg:hidden" aria-hidden="true" />
          <motion.div
            aria-hidden="true"
            className="absolute bottom-4 left-7 top-4 w-px origin-top bg-gradient-to-b from-electric via-cyanic to-violetic lg:hidden"
            initial={reduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.14}>
                <li className="relative flex gap-6 lg:block">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-electric/40 bg-ink font-display text-base font-bold text-cyanic shadow-[0_0_0_6px_#070910]">
                    {step.number}
                  </span>
                  <div className="lg:mt-7">
                    <h3 className="type-h3 font-display text-mist">{step.title}</h3>
                    <p className="mt-2.5 max-w-xs leading-relaxed text-slate-text">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
