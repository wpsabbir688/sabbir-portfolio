import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On route change: scroll to top — or to the hash target when the URL
 * carries one (e.g. navigating to "/#services" from a project page).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
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
