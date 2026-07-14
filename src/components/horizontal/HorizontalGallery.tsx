import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { useHorizontalScrollRig } from "./useHorizontalScrollRig";
import { projects, type Project, type ProjectTag } from "@/config/projects";
import { ArrowUpRight } from "lucide-react";

const TAGS: (ProjectTag | "Tous")[] = ["Tous", "Web", "Mobile", "Branding"];

export function HorizontalGallery() {
  const [filter, setFilter] = useState<ProjectTag | "Tous">("Tous");
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.tags.includes(filter));
  const rig = useHorizontalScrollRig(filtered.length, { travelPerItem: 420 });

  return (
    <section className="relative" style={{ backgroundColor: "var(--ink)" }}>
      <div className="border-b border-white/10 px-6 pb-6 pt-32 lg:px-24">
        <p className="eyebrow mb-6" style={{ color: "var(--lime)" }}>
          Projets — 01 à {String(projects.length).padStart(2, "0")}
        </p>
        <h1 className="display-hero" style={{ color: "var(--paper)" }}>
          Travaux
        </h1>
        <div className="mt-10 flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="border px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                borderColor: filter === t ? "var(--lime)" : "rgba(247,246,243,0.2)",
                color: filter === t ? "var(--lime)" : "var(--paper)",
                backgroundColor: filter === t ? "rgba(212,255,63,0.08)" : "transparent",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-px" style={{ backgroundColor: "rgba(247,246,243,0.1)" }}>
            <motion.div
              className="h-full origin-left"
              style={{ backgroundColor: "var(--lime)", scaleX: rig.progress }}
            />
          </div>

          <motion.div
            ref={rig.trackRef}
            className={rig.isPinned ? "flex h-full items-center gap-8 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-16"}
            style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
          >
            {filtered.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
            <SeeAllCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projets/$slug"
      params={{ slug: project.slug }}
      className="group relative block h-[70vh] w-[70vw] shrink-0 overflow-hidden md:w-[52vw] lg:w-[38vw]"
    >
      <img
        src={project.cover}
        alt={project.title}
        loading="lazy"
        className="bw-hover-ember h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em]" style={{ fontFamily: "var(--font-mono)", color: "var(--paper)" }}>
          <span style={{ color: "var(--lime)" }}>{project.index}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="display-section" style={{ color: "var(--paper)", fontSize: "clamp(1.8rem, 3vw, 3rem)" }}>
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-mono)",
                backgroundColor: "var(--ember)",
                color: "var(--ink)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function SeeAllCard() {
  return (
    <Link
      to="/projets"
      className="group flex h-[70vh] w-[50vw] shrink-0 flex-col items-start justify-end gap-6 border border-white/15 p-8 md:w-[36vw] lg:w-[26vw]"
    >
      <span className="eyebrow" style={{ color: "var(--lime)" }}>→ Voir</span>
      <h3 className="display-section" style={{ color: "var(--paper)", fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)" }}>
        Tous les projets
      </h3>
      <ArrowUpRight size={40} strokeWidth={1.5} style={{ color: "var(--paper)" }} />
    </Link>
  );
}
