import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SECTION_ROUTES } from "../utils/constants.js";

const SECTION_PATHS = new Set(SECTION_ROUTES.map((route) => route.path));

/**
 * On route change: scroll to top. Two exceptions:
 * - Clean section routes (/contact, /work, ...) — SectionRoute scrolls to
 *   its section instead.
 * - Legacy hash URLs (/#services) — scroll to the hash target.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (SECTION_PATHS.has(pathname)) return undefined;
    if (hash) {
      const id = hash.replace("#", "");
      // Wait a tick so the target page has rendered.
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
        window.scrollTo({ top: 0 });
      }, 60);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0 });
    return undefined;
  }, [pathname, hash]);

  return null;
}
