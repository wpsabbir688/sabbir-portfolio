import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Decorative cursor ring for precise pointers. The native cursor is kept
 * (usability first); the ring simply adds a layer of polish. It never
 * renders on touch devices or when reduced motion is preferred.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return undefined;
    setEnabled(true);

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target;
      const interactive =
        target instanceof Element &&
        target.closest("a, button, input, select, textarea, [role='button']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="custom-cursor-ring"
      style={{ x: ringX, y: ringY }}
      animate={{ scale: hovering ? 1.7 : 1, opacity: hovering ? 0.9 : 0.55 }}
      transition={{ duration: 0.25 }}
    />
  );
}
