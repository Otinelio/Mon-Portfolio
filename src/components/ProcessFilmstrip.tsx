import { SectionReveal } from "@/components/SectionReveal";
import { useHorizontalScrollRig } from "@/components/horizontal/useHorizontalScrollRig";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { motion } from "framer-motion";

interface ProcessFilmstripProps {
  images: string[];
  title: string;
  layout?: "desktop" | "mobile";
}

export function ProcessFilmstrip({ images, title, layout = "desktop" }: ProcessFilmstripProps) {
  const isMobile = layout === "mobile";
  const rig = useHorizontalScrollRig(images.length, { travelPerItem: isMobile ? 320 : 420 });

  return (
    <section className="relative" style={{ backgroundColor: "var(--ink)" }}>
      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mb-6 px-6 lg:px-24">
            <SectionReveal delay={0.1}>
              <p className="eyebrow" style={{ color: "var(--lime)" }}>
                {isMobile ? "Aperçu de l'Application Mobile" : "Process & Galeries"}
              </p>
            </SectionReveal>
          </div>

          <div className="relative">
            <motion.div
              ref={rig.trackRef}
              className={
                rig.isPinned
                  ? "flex items-center gap-8 px-6 lg:px-24"
                  : "no-scrollbar flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-8 lg:px-24"
              }
              style={rig.isPinned ? { x: rig.x, willChange: "transform" } : { cursor: "grab" }}
            >
              {images.map((src, i) => (
                <div key={i} className="relative shrink-0 snap-center">
                  {isMobile ? (
                    <div className="group relative">
                      <PhoneMockup
                        src={src}
                        alt={`${title} — écran ${i + 1}`}
                        heightCss="min(520px, 66vh)"
                      />
                      {/* Counter Badge */}
                      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full border border-white/15 bg-black/80 px-3 py-1 backdrop-blur-md">
                        <span className="text-[10px] tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>
                          <span style={{ color: "var(--lime)" }}>{String(i + 1).padStart(2, "0")}</span>
                          <span style={{ color: "var(--paper)", opacity: 0.5 }}> / {String(images.length).padStart(2, "0")}</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-[60vh] w-[80vw] overflow-hidden md:w-[52vw] lg:w-[42vw]">
                      <img
                        src={src}
                        alt={`${title} — image ${i + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <span className="text-[10px] tracking-[0.2em]" style={{ fontFamily: "var(--font-mono)" }}>
                          <span style={{ color: "var(--lime)" }}>{String(i + 1).padStart(2, "0")}</span>
                          <span style={{ color: "var(--paper)", opacity: 0.6 }}>
                            {" "}
                            / {String(images.length).padStart(2, "0")}
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
