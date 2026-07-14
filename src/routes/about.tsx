import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { HorizontalTimeline } from "@/components/HorizontalTimeline";
import { SkillsGallery } from "@/components/horizontal/SkillsGallery";
import { SectionReveal, SplitReveal } from "@/components/SectionReveal";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";
import { Footer } from "@/routes/index";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Kengbo Othnelio Raphaëlo · DigitalVision" },
      { name: "description", content: "Développeur web & mobile full-stack basé à Lomé, fondateur de DigitalVision. Trois ans d'expérience, dix projets livrés." },
      { property: "og:title", content: "À propos — Kengbo Othnelio Raphaëlo" },
      { property: "og:description", content: "L'histoire du studio DigitalVision et de son fondateur." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const paperRef = useRef<HTMLElement>(null);
  useDeclareSectionTheme(paperRef, "paper");
  return (
    <main>
      <section ref={paperRef} className="relative min-h-screen py-24 lg:py-32" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
        <div className="grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80"
                alt="Portrait de Kengbo Othnelio Raphaëlo — visuel à remplacer"
                className="bw-image h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink)", opacity: 0.55, fontFamily: "var(--font-mono)" }}>
              <span>Portrait — à remplacer</span>
              <span>01 / 01</span>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6" style={{ color: "var(--ember)" }}>À propos</p>
            <h1 className="display-hero mb-10" style={{ color: "var(--ink)" }}>
              <SplitReveal text="Kengbo" />
              <br />
              <SplitReveal text="Othnelio." />
            </h1>
            <SectionReveal>
              <p className="max-w-2xl text-xl leading-relaxed" style={{ color: "var(--ink)", opacity: 0.85 }}>
                Développeur web & mobile full-stack, fondateur de DigitalVision (Dvision) à Lomé. Maîtrise React, React Router, Tailwind, Framer Motion, Supabase.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed" style={{ color: "var(--ink)", opacity: 0.7 }}>
                Connu pour traduire l'identité d'une marque en une présence numérique entièrement sur-mesure plutôt qu'en template générique. Trois ans d'expérience, déjà prolifique — du concept au déploiement rapide sur des projets clients réels.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <Stat value="3" label="Années" />
                <Stat value="10+" label="Projets livrés" />
                <Stat value="100%" label="Clients satisfaits" />
                <Stat value="Lomé" label="Basé à" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <HorizontalTimeline />
      <SkillsGallery />
      <Footer />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-t border-ink/20 pt-4">
      <div className="text-5xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.04em" }}>{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink)", opacity: 0.6, fontFamily: "var(--font-mono)" }}>{label}</div>
    </div>
  );
}
