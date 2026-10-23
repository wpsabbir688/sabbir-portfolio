import { Link } from "react-router-dom";
import { ArrowUp, AtSign, CodeXml, Mail } from "lucide-react";
import { NAV_LINKS, SITE, SOCIALS } from "../utils/constants.js";

/* Lucide no longer ships brand icons; the text label carries the name and
   these glyphs stand in for the two profiles. */
const SOCIAL_ICONS = { GitHub: CodeXml, LinkedIn: AtSign };

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink-2/60">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-bold tracking-[0.14em] text-mist">
              SABBIR<span className="text-cyanic">.</span>
            </p>
            <p className="mt-4 max-w-sm leading-relaxed text-slate-text">{SITE.intro}</p>
            <p className="mt-5 text-sm text-slate-text">
              {SITE.title} · {SITE.experience} of experience
            </p>
          </div>

          <nav className="md:col-span-3" aria-label="Footer">
            <p className="type-label text-slate-text">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.hash}>
                  <Link to={link.path} className="text-slate-text transition-colors hover:text-cyanic">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/work/meyeghor" className="text-slate-text transition-colors hover:text-cyanic">
                  Case Studies
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="type-label text-slate-text">Connect</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2.5 text-slate-text transition-colors hover:text-cyanic"
                >
                  <Mail size={16} aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              {SOCIALS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label] || Mail;
                return (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 text-slate-text transition-colors hover:text-cyanic"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-slate-text transition-colors hover:border-cyanic/50 hover:text-mist"
            >
              <ArrowUp size={15} aria-hidden="true" />
              Back to top
            </button>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-sm text-slate-text/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-display tracking-wide">Neural Blue — built with precision.</p>
        </div>
      </div>
    </footer>
  );
}
