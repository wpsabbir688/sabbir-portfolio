import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import { SECTION_ROUTES } from "./utils/constants.js";

/**
 * Clean section route (e.g. /contact): renders the one-page Home scrolled
 * to the named section. In-app navigation (router state `fromNav`) scrolls
 * smoothly; a direct load or refresh jumps straight to the section.
 */
function SectionRoute({ sectionId }) {
  const location = useLocation();

  useEffect(() => {
    const behavior = location.state?.fromNav ? "smooth" : "auto";
    const timer = window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior, block: "start" });
    }, 50);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionId, location.key]);

  return <Home />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <CustomCursor />
        <div className="neural-bg min-h-screen">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-electric focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <div id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              {SECTION_ROUTES.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<SectionRoute sectionId={route.sectionId} />}
                />
              ))}
              <Route path="/work/:slug" element={<ProjectDetails />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MotionConfig>
  );
}
