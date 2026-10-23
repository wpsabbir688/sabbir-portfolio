import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AVAILABILITY, NAV_LINKS, SECTION_ROUTES, SITE } from "../utils/constants.js";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();
  /* The one-page sections live on "/" and on the clean section routes
     (/work, /services, /about, /contact) — all render the same Home page. */
  const onHomeFamily =
    location.pathname === "/" || SECTION_ROUTES.some((route) => route.path === location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track the section currently in view (home + section routes). */
  useEffect(() => {
    if (!onHomeFamily) {
      setActive("");
      return undefined;
    }
    const sections = NAV_LINKS.map((link) => document.getElementById(link.hash)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHomeFamily, location.pathname]);

  /* Close the mobile menu on route change and on Escape. */
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open ]);

  /* Navigate to the clean section route (/contact, /work, ...). The
     SectionRoute component scrolls to the section — smoothly when the
     click started on the home family, instantly from other pages. */
  const goToSection = (event, link) => {
    event.preventDefault();
    setOpen(false);
    navigate(link.path, { state: onHomeFamily ? { fromNav: true } : undefined });
  };

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line bg-[#070910]/82 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8"
        aria-label="Primary"
      >
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-[1.35rem] font-bold tracking-[0.14em] text-mist">
            SABBIR<span className="text-cyanic">.</span>
          </span>
          <span className="mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-slate-text">
            {SITE.brandLabel}
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={link.path}
                onClick={(e) => goToSection(e, link)}
                aria-current={active === link.hash ? "true" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.hash ? "text-mist" : "text-slate-text hover:text-mist"
                }`}
              >
                {link.label}
                {active === link.hash && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-electric to-cyanic"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <span className="flex items-center gap-2.5 text-xs font-medium text-slate-text">
            <span
              className={`h-2 w-2 rounded-full ${AVAILABILITY.available ? "animate-pulse-dot bg-green-400" : "bg-amber-400"}`}
              aria-hidden="true"
            />
            {AVAILABILITY.label}
          </span>
          <NavLink
            to="/contact"
            state={{ fromNav: true }}
            className="group inline-flex items-center gap-1.5 rounded-full bg-mist px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-cyanic active:scale-[0.97]"
          >
            Let&apos;s Talk
            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </NavLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-line bg-[#070910]/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-5">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => goToSection(e, link)}
                    className={`block rounded-xl px-4 py-3 font-display text-lg font-medium ${
                      active === link.hash ? "bg-white/[0.05] text-mist" : "text-slate-text"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="px-4 pt-4">
                <span className="flex items-center gap-2.5 text-xs font-medium text-slate-text">
                  <span
                    className={`h-2 w-2 rounded-full ${AVAILABILITY.available ? "bg-green-400" : "bg-amber-400"}`}
                    aria-hidden="true"
                  />
                  {AVAILABILITY.label}
                </span>
                <Link
                  to="/contact"
                  state={{ fromNav: true }}
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-electric px-5 py-3.5 text-sm font-semibold text-white"
                >
                  Let&apos;s Talk
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
