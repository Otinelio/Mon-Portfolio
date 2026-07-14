import { motion, useTransform } from "framer-motion";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { skillCategories } from "@/config/skills";

// Flatten categories into ordered items keeping category metadata.
interface FlatItem { cat: string; label: string; catIndex: number; }
const flat: FlatItem[] = skillCategories.flatMap((c, i) => c.items.map((label) => ({ cat: c.label, label, catIndex: i })));

export function SkillsGallery() {
  const rig = useHorizontalScrollRig(flat.length, { travelPerItem: 220 });

  // sticky category label: derive index from progress
  const catLabel = useTransform(rig.progress, (v) => {
    const idx = Math.min(flat.length - 1, Math.floor(v * flat.length));
    return flat[idx]?.cat ?? flat[0].cat;
  });

  return (
    <section id="competences" className="relative scroll-mt-20" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <div
        className="relative px-6 pb-10 pt-32 lg:px-24"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--ember) 12%, var(--paper)) 0%, var(--paper) 90%)",
        }}
      >
        <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>Compétences</p>
        <h2 className="display-hero" style={{ color: "var(--ink)" }}>Ce que je fais.</h2>
      </div>

      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-px" style={{ backgroundColor: "rgba(10,10,10,0.1)" }}>
            <motion.div className="h-full origin-left" style={{ backgroundColor: "var(--lime)", scaleX: rig.progress }} />
          </div>

          <motion.p
            className="eyebrow absolute left-6 top-6 lg:left-24"
            style={{ color: "var(--ink)", opacity: 0.55 }}
          >
            <motion.span>{catLabel}</motion.span>
          </motion.p>

          <motion.div
            ref={rig.trackRef}
            className={rig.isPinned ? "flex h-full items-center gap-4 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 py-16"}
            style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
          >
            {flat.map((it, i) => (
              <SkillCapsule key={i} label={it.label} category={it.cat} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCapsule({ label, category, index }: { label: string; category: string; index: number }) {
  return (
    <div
      className="group flex h-64 w-72 shrink-0 flex-col justify-between border border-ink/15 p-6 transition-colors hover:border-[color:var(--lime)]"
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
      <p className="display-section" style={{ color: "var(--ink)", fontSize: "clamp(1.4rem, 2vw, 2rem)" }}>
        {label}
      </p>
    </div>
  );
}
