import { motion, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { skillCategories } from "@/config/skills";
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

export function SkillsGallery() {
  const rig = useHorizontalScrollRig(galleryItems.length, { travelPerItem: 220 });
  const sectionRef = useRef<HTMLElement>(null);
  useDeclareSectionTheme(sectionRef, "paper");

  // sticky category label: derive index from progress
  const catLabel = useTransform(rig.progress, (v) => {
    const idx = Math.min(galleryItems.length - 1, Math.floor(v * galleryItems.length));
    return galleryItems[idx]?.cat ?? galleryItems[0].cat;
  });

  return (
    <section ref={sectionRef} id="competences" className="relative scroll-mt-20" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          
          <div className="flex shrink-0 items-end justify-between px-6 pb-8 pt-24 lg:px-24">
            <div>
              <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>Compétences</p>
              <h2 className="display-hero" style={{ color: "var(--ink)" }}>Ce que je fais.</h2>
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
            </div>
          </div>

          <div className="relative flex flex-1 flex-col justify-center">
            <div className="absolute left-0 right-0 top-0 h-px" style={{ backgroundColor: "rgba(10,10,10,0.1)" }}>
              <motion.div className="h-full origin-left" style={{ backgroundColor: "var(--lime)", scaleX: rig.progress }} />
            </div>

          <motion.div
            ref={rig.trackRef}
            className={rig.isPinned ? "flex items-center gap-3 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-16"}
            style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
          >
            {galleryItems.map((it) => (
              it.type === 'header' 
                ? <CategoryHeaderCapsule key={it.index} category={it.cat} index={it.index} />
                : <SkillCapsule key={it.index} label={it.label} category={it.cat} index={it.index} />
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}

function SkillCapsule({ label, category, index }: { label: string; category: string; index: number }) {
  return (
    <div
      className="group flex h-40 w-56 shrink-0 flex-col justify-between border border-ink/15 p-5 transition-colors hover:border-[color:var(--lime)]"
      style={{ backgroundColor: "var(--paper)" }}
    >
      <div className="flex items-start justify-between">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ember)", fontFamily: "var(--font-mono)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--ink)", opacity: 0.5, fontFamily: "var(--font-mono)" }}>
          {category}
        </span>
      </div>
      <p className="display-section" style={{ color: "var(--ink)", fontSize: "clamp(1.2rem, 1.8vw, 1.6rem)" }}>
        {label}
      </p>
    </div>
  );
}

function CategoryHeaderCapsule({ category, index }: { category: string; index: number }) {
  return (
    <div
      className="group relative flex h-40 w-80 shrink-0 flex-col justify-end overflow-hidden border transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--lime)] hover:shadow-[0_20px_40px_-15px_rgba(212,255,63,0.3)]"
      style={{ backgroundColor: "var(--ink)", borderColor: "transparent", color: "var(--paper)", padding: "1.25rem" }}
    >
      <div className="absolute left-5 top-5">
        <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}>
          Section {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="z-10 overflow-hidden">
        <h3 
          className="text-3xl transition-all duration-500 group-hover:tracking-wider group-hover:text-[color:var(--lime)]" 
          style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em" }}
        >
          {category}
        </h3>
      </div>
      <div className="absolute inset-0 z-0 bg-[color:var(--lime)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20" />
    </div>
  );
}
