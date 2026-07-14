import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { skillCategories } from "@/config/skills";

const flat = skillCategories.flatMap((c) => c.items.map((label) => ({ cat: c.label, label })));

export function SkillsHighlightScroll() {
  const rig = useHorizontalScrollRig(flat.length, { travelPerItem: 160 });

  return (
    <section className="relative" style={{ backgroundColor: "var(--ink)" }}>
      <div className="flex items-end justify-between px-6 pb-8 pt-24 lg:px-24">
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--lime)" }}>Boîte à outils</p>
          <h2 className="display-section" style={{ color: "var(--paper)" }}>Compétences</h2>
        </div>
        <Link to="/about" hash="competences" className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] md:flex" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
          Tout voir <ArrowUpRight size={16} strokeWidth={1.5} />
        </Link>
      </div>

      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-px" style={{ backgroundColor: "rgba(247,246,243,0.1)" }}>
            <motion.div className="h-full origin-left" style={{ backgroundColor: "var(--lime)", scaleX: rig.progress }} />
          </div>
          <motion.div
            ref={rig.trackRef}
            className={rig.isPinned ? "flex h-full items-center gap-3 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-16"}
            style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
          >
            {flat.map((it, i) => (
              <div
                key={i}
                className="flex h-40 w-56 shrink-0 flex-col justify-between border border-white/15 p-4 transition-colors hover:border-[color:var(--lime)]"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--paper)", opacity: 0.55, fontFamily: "var(--font-mono)" }}>
                  {it.cat}
                </span>
                <p className="text-2xl" style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em" }}>
                  {it.label}
                </p>
              </div>
            ))}
            <Link
              to="/about"
              hash="competences"
              className="flex h-40 w-56 shrink-0 flex-col justify-between border border-white/15 p-4"
              style={{ backgroundColor: "rgba(212,255,63,0.05)" }}
            >
              <ArrowUpRight size={24} strokeWidth={1.5} style={{ color: "var(--lime)" }} />
              <p className="text-lg" style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Voir toutes les compétences →
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
