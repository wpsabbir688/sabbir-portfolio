import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, PenTool, Rocket } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import Reveal from "../components/Reveal.jsx";
import { SITE } from "../utils/constants.js";

const PILLARS = [
  {
    icon: PenTool,
    title: "Design-led",
    text: "Layouts are composed with intent — hierarchy, spacing and typography first, decoration last.",
  },
  {
    icon: Compass,
    title: "Detail-driven",
    text: "Every breakpoint gets the same care as the desktop view your clients judge you by.",
  },
  {
    icon: Rocket,
    title: "Goal-focused",
    text: "A website is a business tool. Structure and content decisions serve the goal behind the project.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 lg:py-32" aria-label="About Sabbir Hossain">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionHeading
              label="The Developer"
              title={
                <>
                  Thoughtful Design.
                  <br />
                  Precise <span className="text-gradient">Development.</span>
                </>
              }
            />
            <Reveal delay={0.15}>
              <div className="type-body-lg mt-7 space-y-5 text-slate-text">
                <p>
                  I&apos;m {SITE.name}, a {SITE.title.toLowerCase()} with {SITE.experience} of
                  experience designing and building websites for businesses, entrepreneurs and
                  online stores.
                </p>
                <p>
                  My work centres on WordPress: custom website builds, Figma-to-WordPress
                  conversions, Elementor and Divi development, and WooCommerce stores. Whatever
                  the toolset, the standard stays the same — responsive implementation that looks
                  composed on every screen, and a structure the site owner can actually manage.
                </p>
                <p>
                  My philosophy is simple: understand the goal first, design with restraint, then
                  build precisely. A polished website is not the one with the most effects — it is
                  the one where every detail earns its place.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <Link
                to="/#contact"
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-mist transition-all duration-300 hover:border-cyanic/50 hover:bg-white/[0.06]"
              >
                Let&apos;s Work Together
                <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-5">
              <Reveal delay={0.1}>
                <div className="glow-card rounded-3xl p-8">
                  <p className="font-display text-5xl font-bold text-mist">
                    3<span className="text-cyanic">+</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-text">
                    Years of WordPress web design &amp; development experience
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
                    <div>
                      <p className="font-display text-lg font-semibold text-mist">WordPress</p>
                      <p className="mt-1 text-slate-text">Primary platform</p>
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-mist">Remote</p>
                      <p className="mt-1 text-slate-text">Clients worldwide</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={0.16 + i * 0.08}>
                  <div className="flex gap-5 rounded-3xl border border-line bg-card/60 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-cyanic">
                      <pillar.icon size={20} strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-mist">{pillar.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-text">{pillar.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
