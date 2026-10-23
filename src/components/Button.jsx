import { Link } from "react-router-dom";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none";

const variants = {
  primary:
    "bg-electric text-white shadow-[0_10px_36px_-10px_rgba(79,124,255,0.75)] hover:bg-[#628dff] hover:shadow-[0_14px_44px_-10px_rgba(79,124,255,0.9)] active:scale-[0.98]",
  ghost:
    "border border-line bg-white/[0.03] text-mist backdrop-blur hover:border-cyanic/50 hover:bg-white/[0.06] active:scale-[0.98]",
};

/** Button rendered as a router Link, an anchor, or a <button>. */
export default function Button({ children, variant = "primary", to, href, className = "", ...rest }) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
