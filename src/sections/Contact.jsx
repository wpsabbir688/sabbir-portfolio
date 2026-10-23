import { Clock3, Mail, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import ContactForm from "../components/ContactForm.jsx";
import Reveal from "../components/Reveal.jsx";
import { AVAILABILITY, SITE } from "../utils/constants.js";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden py-24 lg:py-32" aria-label="Contact">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-96 w-[820px] -translate-x-1/2 rounded-full bg-electric/9 blur-[130px]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              label="Contact"
              title={
                <>
                  Have a Vision?
                  <br />
                  Let&apos;s <span className="text-gradient">Build It.</span>
                </>
              }
              copy="Tell me about your website idea, Figma design, or existing WordPress project."
            />

            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-5 text-slate-text">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-cyanic">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-mist">Email</span>
                    <a href={`mailto:${SITE.email}`} className="mt-0.5 block transition-colors hover:text-cyanic">
                      {SITE.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-cyanic">
                    <Clock3 size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-mist">Availability</span>
                    <span className="mt-0.5 block">{AVAILABILITY.label}</span>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-cyanic">
                    <MapPin size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-mist">Working</span>
                    <span className="mt-0.5 block">{SITE.location}</span>
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
