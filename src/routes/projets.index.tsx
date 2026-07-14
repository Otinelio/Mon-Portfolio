import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { HorizontalGallery } from "@/components/horizontal/HorizontalGallery";
import { Footer } from "@/routes/index";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";

export const Route = createFileRoute("/projets/")({
  head: () => ({
    meta: [
      { title: "Projets — Kengbo Othnelio Raphaëlo · DigitalVision" },
      { name: "description", content: "Sélection de projets web et mobile signés DigitalVision — hospitalité, restauration et commerce à Lomé." },
      { property: "og:title", content: "Projets — DigitalVision" },
      { property: "og:description", content: "Sélection de projets web et mobile signés DigitalVision." },
      { property: "og:url", content: "/projets" },
    ],
    links: [{ rel: "canonical", href: "/projets" }],
  }),
  component: ProjetsIndex,
});

function ProjetsIndex() {
  const ref = useRef<HTMLDivElement>(null);
  useDeclareSectionTheme(ref, "ink");
  return (
    <div ref={ref}>
      <HorizontalGallery />
      <Footer />
    </div>
  );
}
