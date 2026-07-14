import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const items = [
  { n: "01", to: "/", label: "Accueil", match: "/" },
  { n: "02", to: "/projets", label: "Projets", match: "/projets" },
  { n: "03", to: "/about", label: "À propos", match: "/about" },
  { n: "04", to: "/about", hash: "competences", label: "Compétences", match: "/about" },
  { n: "05", to: "/contact", label: "Contact", match: "/contact" },
  { n: "06", to: "/cv", label: "CV", match: "/cv", detached: true },
];

export function MobileNavButton() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="active:scale-95 fixed bottom-6 left-1/2 z-[60] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full backdrop-blur-md transition-transform lg:hidden"
        style={{
          backgroundColor: open ? "var(--paper)" : "rgba(10,10,10,0.85)",
          border: "1.5px solid var(--lime)",
        }}
      >
        <MorphIcon open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ clipPath: "circle(0% at 50% 100%)" }}
            animate={{ clipPath: "circle(150% at 50% 100%)" }}
            exit={{ clipPath: "circle(0% at 50% 100%)" }}
            transition={{ duration: 0.55, ease: [0.85, 0, 0.15, 1] }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(_, info) => info.offset.y > 100 && setOpen(false)}
            className="fixed inset-0 z-[55] flex flex-col justify-center lg:hidden"
            style={{ backgroundColor: "var(--ink)" }}
          >
            <ul className="flex flex-col gap-2 px-8">
              {items.map((it, i) => {
                const active =
                  it.match === "/"
                    ? location.pathname === "/"
                    : location.pathname === it.match || location.pathname.startsWith(it.match + "/");
                return (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, type: "spring", stiffness: 220, damping: 24 }}
                    className={it.detached ? "mt-6" : ""}
                  >
                    <Link
                      to={it.to as "/"}
                      hash={it.hash}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4"
                    >
                      <span
                        className="text-xs"
                        style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}
                      >
                        {it.n}
                      </span>
                      <span
                        className="display-section"
                        style={{
                          color: "var(--paper)",
                          fontSize: "clamp(2.5rem, 12vw, 4rem)",
                          padding: it.detached ? "0.25rem 0.75rem" : 0,
                          outline: it.detached ? "1.5px solid var(--lime)" : "none",
                        }}
                      >
                        {it.label}
                      </span>
                      {active && (
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: "var(--lime)" }}
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <p
              className="absolute bottom-28 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--paper)", opacity: 0.5, fontFamily: "var(--font-mono)" }}
            >
              Glisser vers le bas pour fermer
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MorphIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <motion.circle
        cx="4" cy="11" r="1.6"
        fill={open ? "var(--ink)" : "var(--paper)"}
        animate={{ opacity: open ? 0 : 1, cx: open ? 11 : 4 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="4" y1="4" x2="18" y2="18"
        stroke={open ? "var(--ink)" : "var(--paper)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        animate={{ pathLength: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.line
        x1="18" y1="4" x2="4" y2="18"
        stroke={open ? "var(--ink)" : "var(--paper)"}
        strokeWidth="1.8"
        strokeLinecap="round"
        animate={{ pathLength: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.circle
        cx="11" cy="11" r="1.6"
        fill={open ? "var(--ink)" : "var(--paper)"}
        animate={{ opacity: open ? 0 : 1 }}
      />
      <motion.circle
        cx="18" cy="11" r="1.6"
        fill={open ? "var(--ink)" : "var(--paper)"}
        animate={{ opacity: open ? 0 : 1, cx: open ? 11 : 18 }}
        transition={{ duration: 0.3 }}
      />
    </svg>
  );
}
