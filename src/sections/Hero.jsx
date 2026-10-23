import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, MousePointer2 } from "lucide-react";
import { AVAILABILITY } from "../utils/constants.js";

const TECH_LABELS = ["WordPress", "Elementor", "WooCommerce", "Figma to WordPress"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

/** Stylised browser mockup showing a miniature website UI preview. */
function BrowserMockup() {
  return (
    <div className="relative rounded-2xl border border-white/12 bg-[#0B1020]/90 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.85)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" aria-hidden="true" />
        <span className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white/[0.06] px-3 text-[0.62rem] tracking-wide text-slate-text">
          yourwebsite.com
        </span>
      </div>
      <div className="p-6 sm:p-7" aria-hidden="true">
        <div className="flex items-center justify-between">
          <span className="h-3.5 w-20 rounded bg-gradient-to-r from-electric to-cyanic" />
          <span className="hidden gap-3 sm:flex">
            <span className="h-2 w-10 rounded bg-white/25" />
            <span className="h-2 w-10 rounded bg-white/25" />
            <span className="h-2 w-10 rounded bg-white/25" />
          </span>
          <span className="h-6 w-16 rounded-full bg-electric/80" />
        </div>
        <div className="pt-7">
          <span className="block h-2 w-24 rounded bg-cyanic/60" />
          <span className="mt-4 block h-5 w-11/12 rounded bg-white/45" />
          <span className="mt-2.5 block h-5 w-3/5 rounded bg-white/35" />
          <span className="mt-4 block h-2.5 w-2/3 rounded bg-white/20" />
          <span className="mt-1.5 block h-2.5 w-1/2 rounded bg-white/15" />
          <span className="mt-6 flex gap-3">
            <span className="h-8 w-24 rounded-full bg-electric" />
            <span className="h-8 w-24 rounded-full border border-white/25" />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-8">
          {["#4F7CFF", "#48E5FF", "#8B5CF6"].map((color) => (
            <div key={color} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <span
                className="block h-10 rounded-lg opacity-80"
                style={{ background: `linear-gradient(135deg, ${color}59, transparent)` }}
              />
              <span className="mt-3 block h-2 w-4/5 rounded bg-white/30" />
              <span className="mt-1.5 block h-2 w-3/5 rounded bg-white/18" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Small smartphone mockup overlapping the browser window. */
function PhoneMockup() {
  return (
    <div
      className="absolute -bottom-10 -left-4 w-28 rounded-[1.4rem] border border-white/15 bg-[#0B1020] p-2 shadow-[0_36px_60px_-18px_rgba(0,0,0,0.85)] sm:-left-10 sm:w-36"
      aria-hidden="true"
    >
      <div className="rounded-[1.05rem] border border-white/8 bg-[#0E1424] p-3">
        <span className="mx-auto block h-1 w-8 rounded bg-white/25" />
        <span className="mt-4 block h-2.5 w-3/4 rounded bg-gradient-to-r from-electric to-cyanic" />
        <span className="mt-2.5 block h-2 w-full rounded bg-white/35" />
        <span className="mt-1.5 block h-2 w-2/3 rounded bg-white/25" />
        <span className="mt-4 block h-14 rounded-lg bg-gradient-to-br from-electric/40 to-violetic/30" />
        <span className="mt-3 block h-2 w-5/6 rounded bg-white/20" />
        <span className="mt-1.5 block h-2 w-4/6 rounded bg-white/15" />
        <span className="mt-4 block h-6 w-full rounded-full bg-electric/85" />
      </div>
    </div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-6, 6]), { stiffness: 120, damping: 18 });
  const glowX = useTransform(pointerX, (v) => `${v * 100}%`);
  const glowY = useTransform(pointerY, (v) => `${v * 100}%`);

  const handlePointer = (event) => {
    if (reduceMotion) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={handlePointer}
      className="relative overflow-hidden pt-[72px]"
      aria-label="Introduction"
    >
      {/* pointer-responsive ambient light (desktop, motion-safe) */}
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([gx, gy]) =>
                `radial-gradient(560px circle at ${gx} ${gy}, rgba(79,124,255,0.13), transparent 65%)`,
            ),
          }}
        />
      )}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-violetic/10 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:pb-36 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="type-label flex items-center gap-3 text-cyanic">
            <span className="h-px w-10 bg-gradient-to-r from-electric to-cyanic" aria-hidden="true" />
            Independent WordPress Developer
          </motion.p>

          <motion.h1 variants={item} className="type-display mt-7 font-display text-mist">
            Digital Experiences.
            <br />
            Built to Move
            <br />
            Your <span className="text-gradient">Business Forward.</span>
          </motion.h1>

          <motion.p variants={item} className="type-body-lg mt-7 max-w-xl text-slate-text">
            I design and develop modern WordPress websites that transform ideas into polished,
            responsive digital experiences.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              state={{ fromNav: true }}
              className="group inline-flex items-center gap-2.5 rounded-full bg-electric px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_36px_-10px_rgba(79,124,255,0.75)] transition-all duration-300 hover:bg-[#628dff] active:scale-[0.98]"
            >
              Explore My Work
              <ArrowDown size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
            <Link
              to="/contact"
              state={{ fromNav: true }}
              className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-mist backdrop-blur transition-all duration-300 hover:border-cyanic/50 hover:bg-white/[0.06] active:scale-[0.98]"
            >
              Start a Project
              <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-11">
            <p className="flex items-center gap-2.5 text-xs font-medium text-slate-text">
              <span
                className={`h-2 w-2 rounded-full ${AVAILABILITY.available ? "animate-pulse-dot bg-green-400" : "bg-amber-400"}`}
                aria-hidden="true"
              />
              {AVAILABILITY.label}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2.5" aria-label="Core technologies">
              {TECH_LABELS.map((label) => (
                <li
                  key={label}
                  className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-[0.8rem] font-medium tracking-wide text-slate-text"
                >
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Mockup composition */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 44, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[540px] [perspective:1200px]"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-electric/18 via-transparent to-violetic/14 blur-2xl"
          />
          <motion.div
            style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            <BrowserMockup />
            <PhoneMockup />
            <div className="absolute -right-3 top-8 hidden items-center gap-2 rounded-full border border-white/12 bg-[#0B1020]/90 px-4 py-2 text-xs font-medium text-slate-text shadow-xl backdrop-blur sm:flex">
              <MousePointer2 size={13} className="text-cyanic" aria-hidden="true" />
              Responsive by design
            </div>
            <div className="absolute -left-3 bottom-24 hidden items-center gap-2 rounded-full border border-white/12 bg-[#0B1020]/90 px-4 py-2 text-xs font-medium text-slate-text shadow-xl backdrop-blur lg:flex">
              <ArrowRight size={13} className="text-cyanic" aria-hidden="true" />
              WordPress · WooCommerce
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative flex justify-center pb-10" aria-hidden="true">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-2">
          <span className="animate-scroll-hint h-2 w-1 rounded-full bg-cyanic" />
        </div>
      </div>
    </section>
  );
}
