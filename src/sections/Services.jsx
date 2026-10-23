import SectionHeading from "../components/SectionHeading.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { coreServices, services } from "../data/services.js";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-ink-2/45 py-24 lg:py-32" aria-label="Services">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[720px] -translate-x-1/2 rounded-full bg-electric/8 blur-[110px]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <SectionHeading
          label="Services"
          title={
            <>
              From Design Files to <span className="text-gradient">Digital Reality.</span>
            </>
          }
          copy="Six focused services covering the full journey from a design file or an idea to a finished, responsive WordPress website."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 0.09} className="h-full">
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12} className="mt-14">
          <div className="rounded-3xl border border-line bg-card/60 p-7 sm:p-8">
            <p className="type-label text-slate-text">Also included in my practice</p>
            <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
              {coreServices.map((service) => (
                <li key={service} className="flex items-center gap-2.5 text-[0.95rem] text-slate-text">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyanic" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
