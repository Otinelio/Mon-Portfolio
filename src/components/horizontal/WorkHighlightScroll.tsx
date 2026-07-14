import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { projects } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";

export function WorkHighlightScroll() {
  const rig = useHorizontalScrollRig(projects.length, { travelPerItem: 280 });

  return (
    <section className="relative" style={{ backgroundColor: "var(--ink)" }}>
      <div className="flex items-end justify-between px-6 pb-10 pt-24 lg:px-24">
        <div>
          <p className="eyebrow mb-4" style={{ color: "var(--lime)" }}>
            Sélection — {String(projects.length).padStart(2, "0")}
          </p>
          <h2 className="display-section" style={{ color: "var(--paper)" }}>
            Projets sélectionnés
          </h2>
        </div>
        <Link
          to="/projets"
          className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] md:flex"
          style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}
        >
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
            className={rig.isPinned ? "flex h-full items-center gap-6 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-16"}
            style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
          >
            {projects.map((p) => (
              <Link
                key={p.slug}
                to="/projets/$slug"
                params={{ slug: p.slug }}
                className="group relative block h-[52vh] w-[62vw] shrink-0 overflow-hidden md:w-[36vw] lg:w-[26vw]"
              >
                <img src={p.cover} alt={p.title} loading="lazy" className="bw-hover-ember h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 flex items-baseline justify-between p-4">
                  <h3 className="text-xl font-black tracking-tight" style={{ color: "var(--paper)", fontFamily: "var(--font-display)" }}>
                    {p.title}
                  </h3>
                  <span className="text-xs" style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}>{p.index}</span>
                </div>
              </Link>
            ))}
            <Link
              to="/projets"
              className="flex h-[52vh] w-[46vw] shrink-0 flex-col items-start justify-end gap-4 border border-white/15 p-6 md:w-[28vw] lg:w-[20vw]"
            >
              <ArrowUpRight size={32} strokeWidth={1.5} style={{ color: "var(--lime)" }} />
              <h3 className="text-2xl" style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Voir tous les projets →
              </h3>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
