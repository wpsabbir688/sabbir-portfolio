import { motion, useReducedMotion } from "framer-motion";

/**
 * Shared scroll-reveal wrapper. Content is fully visible when JavaScript
 * animation is reduced or unavailable — motion only enhances.
 */
export default function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
