import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { CvViewer } from "@/components/cv/CvViewer";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Kengbo Othnelio Raphaëlo · DigitalVision" },
      { name: "description", content: "Curriculum vitae de Kengbo Othnelio Raphaëlo, développeur web & mobile full-stack." },
      { property: "og:title", content: "CV — Kengbo Othnelio Raphaëlo" },
      { property: "og:description", content: "Curriculum vitae, à télécharger ou consulter en ligne." },
      { property: "og:url", content: "/cv" },
    ],
    links: [{ rel: "canonical", href: "/cv" }],
  }),
  component: CvPage,
});

function CvPage() {
  const ref = useRef<HTMLDivElement>(null);
  useDeclareSectionTheme(ref, "paper");
  return (
    <div ref={ref}>
      <CvViewer />
    </div>
  );
}
