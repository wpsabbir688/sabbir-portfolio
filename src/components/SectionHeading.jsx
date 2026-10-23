import Reveal from "./Reveal.jsx";

/** Consistent section intro: compact uppercase label + editorial headline. */
export default function SectionHeading({ label, title, copy, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className={`type-label flex items-center gap-3 text-cyanic/90 ${centered ? "justify-center" : ""}`}>
          <span className="inline-block h-px w-10 bg-gradient-to-r from-electric to-cyanic" aria-hidden="true" />
          {label}
          {centered && (
            <span className="inline-block h-px w-10 bg-gradient-to-l from-electric to-cyanic" aria-hidden="true" />
          )}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="type-h2 mt-5 font-display text-mist">{title}</h2>
      </Reveal>
      {copy && (
        <Reveal delay={0.16}>
          <p className="type-body-lg mt-5 text-slate-text">{copy}</p>
        </Reveal>
      )}
    </div>
  );
}
