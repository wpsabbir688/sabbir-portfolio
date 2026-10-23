/** Small, elegant technology label. */
export default function SkillBadge({ children, tone = "default" }) {
  const tones = {
    default:
      "border-line bg-white/[0.03] text-slate-text hover:border-electric/50 hover:text-mist",
    accent: "border-electric/40 bg-electric/10 text-mist",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${tones[tone] || tones.default}`}
    >
      {children}
    </span>
  );
}
