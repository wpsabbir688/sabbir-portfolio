import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CodeXml,
  Gauge,
  Layers,
  LayoutTemplate,
  PenTool,
  ShoppingBag,
} from "lucide-react";

const ICONS = {
  LayoutTemplate,
  PenTool,
  Layers,
  ShoppingBag,
  CodeXml,
  Gauge,
};

export default function ServiceCard({ service, index = 0 }) {
  const Icon = ICONS[service.icon] || LayoutTemplate;

  const handlePointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <article
      className="glow-card group flex h-full flex-col rounded-3xl p-7 sm:p-8"
      onPointerMove={handlePointer}
      style={{ transitionDelay: `${index * 20}ms` }}
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-electric/30 bg-electric/10 text-cyanic transition-colors duration-300 group-hover:border-cyanic/50 group-hover:bg-electric/20">
          <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="font-display text-sm font-semibold tracking-[0.25em] text-slate-text/70">
          {service.number}
        </span>
      </div>

      <h3 className="type-h3 mt-6 font-display text-mist">{service.title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-slate-text">{service.description}</p>

      <Link
        to="/#contact"
        className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-cyanic transition-colors hover:text-mist"
        aria-label={`Discuss ${service.title}`}
      >
        Start with this
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </article>
  );
}
