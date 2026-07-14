import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionReveal({
  children,
  delay = 0,
  y = 30,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word masked reveal. Uses animate-on-mount by default so it
 * plays reliably even under Lenis smooth-scroll where whileInView can
 * miss its first trigger.
 */
export function SplitReveal({
  text,
  className,
  style,
  onMount = true,
  delayBase = 0,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onMount?: boolean;
  delayBase?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.25em] align-baseline" style={{ lineHeight: 0.95 }}>
          <motion.span
            initial={{ y: "110%" }}
            {...(onMount
              ? { animate: { y: "0%" } }
              : { whileInView: { y: "0%" }, viewport: { once: true, margin: "-10%" } })}
            transition={{ duration: 0.75, delay: delayBase + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
