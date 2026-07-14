import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { skillCategories } from "@/config/skills";
import { useRef } from "react";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";

type GalleryItem = 
  | { type: 'header', cat: string, index: number }
  | { type: 'skill', cat: string, label: string, index: number };

const galleryItems: GalleryItem[] = [];
let globalIndex = 0;
skillCategories.forEach((c) => {
  galleryItems.push({ type: 'header', cat: c.label, index: globalIndex++ });
  c.items.forEach((label) => {
    galleryItems.push({ type: 'skill', cat: c.label, label, index: globalIndex++ });
  });
});

export function SkillsHighlightScroll() {
  const rig = useHorizontalScrollRig(galleryItems.length, { travelPerItem: 220 });
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "paper");

  return (
    <section ref={ref} className="relative" style={{ backgroundColor: "var(--paper)" }}>
      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="flex shrink-0 items-end justify-between px-6 pb-8 pt-24 lg:px-24">
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>Boîte à outils</p>
              <h2 className="display-section" style={{ color: "var(--ink)" }}>Compétences</h2>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <button onClick={rig.scrollPrev} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-[color:var(--ink)] transition-colors hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:text-[color:var(--paper)]" aria-label="Défiler à gauche">
                  <ArrowLeft size={16} />
                </button>
                <button onClick={rig.scrollNext} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-[color:var(--ink)] transition-colors hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:text-[color:var(--paper)]" aria-label="Défiler à droite">
                  <ArrowRight size={16} />
                </button>
              </div>

              <Link 
                to="/about" 
                hash="competences" 
                className="group hidden items-center gap-2 text-xs uppercase tracking-[0.2em] md:flex transition-colors hover:text-[color:var(--ember)]" 
                style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}
              >
                Tout voir <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-center">
            <div className="absolute left-0 right-0 top-0 h-px" style={{ backgroundColor: "rgba(10,10,10,0.1)" }}>
              <motion.div className="h-full origin-left" style={{ backgroundColor: "var(--ember)", scaleX: rig.progress }} />
            </div>
            <motion.div
              ref={rig.trackRef}
              className={rig.isPinned ? "flex items-center gap-3 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-16"}
              style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
            >
            {galleryItems.map((it) => (
              it.type === 'header' 
                ? (
                  <div
                    key={it.index}
                    className="group relative flex h-40 w-80 shrink-0 flex-col justify-end overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--lime)] hover:shadow-xl"
                    style={{ backgroundColor: "var(--ink)", borderColor: "transparent", color: "var(--paper)", padding: "1.25rem" }}
                  >
                    <div className="absolute left-5 top-5">
                      <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}>
                        Section {String(it.index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="z-10 overflow-hidden">
                      <h3 
                        className="text-3xl transition-all duration-500 group-hover:tracking-wider group-hover:text-[color:var(--lime)]" 
                        style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em" }}
                      >
                        {it.cat}
                      </h3>
                    </div>
                    <div className="absolute inset-0 z-0 bg-[color:var(--lime)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
                  </div>
                )
                : (
                  <div
                    key={it.index}
                    className="group flex h-40 w-56 shrink-0 flex-col justify-between border border-ink/15 p-5 transition-all duration-300 hover:border-[color:var(--ember)] hover:bg-[color:var(--ember)] hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span 
                      className="text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 group-hover:text-[color:var(--paper)] group-hover:opacity-90" 
                      style={{ color: "var(--ember)", fontFamily: "var(--font-mono)", fontWeight: 600 }}
                    >
                      {it.cat}
                    </span>
                    <p 
                      className="text-2xl transition-colors duration-300 group-hover:text-[color:var(--paper)]" 
                      style={{ color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em" }}
                    >
                      {it.label}
                    </p>
                  </div>
                )
            ))}
            <Link
              to="/about"
              hash="competences"
              className="group flex h-40 w-56 shrink-0 flex-col justify-between border border-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: "var(--ink)" }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45" style={{ backgroundColor: "rgba(247,246,243,0.1)" }}>
                <ArrowUpRight size={20} strokeWidth={1.5} style={{ color: "var(--ember)" }} />
              </div>
              <p className="text-lg" style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 900 }}>
                Voir toutes les compétences
              </p>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
