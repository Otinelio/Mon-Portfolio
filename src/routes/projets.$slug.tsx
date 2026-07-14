import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useRef } from "react";
import { getProject, getNextProject } from "@/config/projects";
import { ProcessFilmstrip } from "@/components/ProcessFilmstrip";
import { SectionReveal, SplitReveal } from "@/components/SectionReveal";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";
import { Footer } from "@/routes/index";

export const Route = createFileRoute("/projets/$slug")({
  loader: ({ params }) => {
    const p = getProject(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Étude de cas · DigitalVision` },
          { name: "description", content: loaderData.intro },
          { property: "og:title", content: `${loaderData.title} — DigitalVision` },
          { property: "og:description", content: loaderData.intro },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/projets/${params.slug}` },
          { property: "og:image", content: loaderData.cover },
          { name: "twitter:image", content: loaderData.cover },
        ]
      : [{ title: "Projet introuvable" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/projets/${params.slug}` }],
  }),
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      <div className="text-center">
        <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>404</p>
        <h1 className="display-section mb-6">Projet introuvable</h1>
        <Link to="/projets" className="text-xs uppercase tracking-[0.2em] underline" style={{ fontFamily: "var(--font-mono)" }}>
          ← Retour aux projets
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const project = Route.useLoaderData();
  const next = getNextProject(project.slug);
  const ref = useRef<HTMLDivElement>(null);
  useDeclareSectionTheme(ref, "ink");

  return (
    <div ref={ref} style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      {/* Cover */}
      <section className="relative h-[100vh] overflow-hidden">
        <motion.img
          src={project.cover}
          alt={project.title}
          className="bw-image h-full w-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.35), rgba(10,10,10,0.9))" }} />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-16 lg:px-24">
          <p className="eyebrow mb-6" style={{ color: "var(--lime)" }}>
            {project.index} — {project.client} · {project.year}
          </p>
          <h1 className="display-hero" style={{ color: "var(--paper)" }}>
            <SplitReveal text={project.title} />
          </h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((t: string) => (
              <span key={t} className="px-3 py-1 text-[10px] uppercase tracking-[0.2em]" style={{ backgroundColor: "var(--ember)", color: "var(--ink)", fontFamily: "var(--font-mono)" }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + meta */}
      <section className="grid grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-12 lg:px-24">
        <SectionReveal className="lg:col-span-8">
          <p className="max-w-3xl text-2xl leading-snug md:text-3xl" style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
            {project.intro}
          </p>
        </SectionReveal>
        <div className="flex flex-col gap-8 lg:col-span-4">
          <MetaBlock label="Stack" items={project.stack} />
          <MetaBlock label="Client" items={[project.client]} />
          <MetaBlock label="Année" items={[project.year]} />
        </div>
      </section>

      {/* Problem / Solution / Outcome */}
      <section className="grid grid-cols-1 gap-16 border-t border-white/10 px-6 py-24 lg:grid-cols-3 lg:px-24">
        <Block eyebrow="Problème" title="Le point de départ." body={project.problem} />
        <Block eyebrow="Solution" title="La réponse." body={project.solution} />
        <Block eyebrow="Résultat" title="Ce qui est livré." body={project.outcome} />
      </section>

      <ProcessFilmstrip images={project.gallery} title={project.title} />

      {/* Live + Repo */}
      {(project.liveUrl || project.repoUrl) && (
        <section className="flex flex-wrap gap-4 border-t border-white/10 px-6 py-16 lg:px-24">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
              <ExternalLink size={14} strokeWidth={1.5} /> Voir le projet en ligne
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
              <Github size={14} strokeWidth={1.5} /> Code source
            </a>
          )}
        </section>
      )}

      {/* Next project */}
      <section className="border-t border-white/10 px-6 py-32 lg:px-24">
        <p className="eyebrow mb-4" style={{ color: "var(--lime)" }}>Projet suivant</p>
        <Link to="/projets/$slug" params={{ slug: next.slug }} className="group flex items-center gap-6">
          <h2 className="display-hero transition-colors group-hover:text-[color:var(--ember)]" style={{ color: "var(--paper)" }}>
            {next.title}
          </h2>
          <ArrowRight size={48} strokeWidth={1.5} className="transition-transform group-hover:translate-x-2" style={{ color: "var(--lime)" }} />
        </Link>
      </section>

      <Footer />
    </div>
  );
}

function MetaBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="border-t border-white/15 pt-4">
      <p className="eyebrow mb-3" style={{ color: "var(--lime)" }}>{label}</p>
      <ul className="flex flex-col gap-1">
        {items.map((i) => (
          <li key={i} className="text-sm" style={{ color: "var(--paper)", opacity: 0.85 }}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function Block({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <SectionReveal>
      <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>{eyebrow}</p>
      <h3 className="mb-6 text-3xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-0.02em" }}>
        {title}
      </h3>
      <p className="text-base leading-relaxed" style={{ color: "var(--paper)", opacity: 0.8 }}>{body}</p>
      <ArrowUpRight size={20} strokeWidth={1.5} className="mt-6" style={{ color: "var(--lime)" }} />
    </SectionReveal>
  );
}
