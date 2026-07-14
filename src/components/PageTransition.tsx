import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* shutter wipe on enter */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.55, ease: [0.85, 0, 0.15, 1] }}
          style={{
            transformOrigin: "top",
            backgroundColor: "var(--ink)",
            position: "fixed",
            inset: 0,
            zIndex: 40,
            pointerEvents: "none",
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
