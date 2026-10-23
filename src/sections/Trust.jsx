import {
  MessagesSquare,
  ScanEye,
  Smartphone,
  Target,
  Workflow,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { expectations } from "../data/skills.js";

const ICONS = { MessagesSquare, ScanEye, Smartphone, Target, Workflow };

/**
 * Trust section. No testimonials are shown because none have been
 * supplied — instead, this sets out exactly what clients can expect.
 */
export default function Trust() {
  return (
    <section id="trust" className="relative scroll-mt-20 bg-ink-2/45 py-24 lg:py-32" aria-label="What you can expect">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8%] top-16 h-80 w-80 rounded-full bg-violetic/8 blur-[110px]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          label="Working With Me"
          title={
            <>
              What You Can <span className="text-gradient">Expect</span>
            </>
          }
          copy="No inflated claims — just the working standards every project is held to."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expectations.map((entry, i) => {
            const Icon = ICONS[entry.icon] || Target;
            return (
              <Reveal
                key={entry.title}
                delay={(i % 3) * 0.08}
                className={i === expectations.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="glow-card h-full rounded-3xl p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-cyanic">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-mist">{entry.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">{entry.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
