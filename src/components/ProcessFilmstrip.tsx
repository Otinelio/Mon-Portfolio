import { SectionReveal } from "@/components/SectionReveal";
import { useHorizontalScrollRig } from "@/components/horizontal/useHorizontalScrollRig";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

interface ProcessFilmstripProps {
  images: string[];
  title: string;
  layout?: "desktop" | "mobile";
}

export function ProcessFilmstrip({ images, title, layout = "desktop" }: ProcessFilmstripProps) {
  const isMobile = layout === "mobile";
  const rig = useHorizontalScrollRig(images.length, { travelPerItem: isMobile ? 320 : 420 });
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="relative" style={{ backgroundColor: "var(--ink)" }}>
      <div ref={rig.wrapperRef} style={{ height: rig.wrapperHeight }} className="relative">
        <div className={rig.isPinned ? "sticky top-0 flex h-screen flex-col justify-center overflow-hidden" : "flex flex-col"}>
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
                  : "flex flex-col items-center gap-16 px-6 pb-16 pt-8 w-full"
              }
              style={rig.isPinned ? { x: rig.x, willChange: "transform" } : undefined}
            >
              {images.map((src, i) => (
                <div key={i} className="relative shrink-0 snap-center cursor-pointer transition-transform hover:scale-[1.02] active:scale-95" onClick={() => setSelectedIndex(i)}>
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
                    <div className={`relative overflow-hidden ${rig.isPinned ? 'h-[60vh] w-[80vw] md:w-[52vw] lg:w-[42vw]' : 'h-[50vh] w-full'}`}>
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

      <AnimatePresence>
        {selectedIndex !== null && (
          <Lightbox 
            images={images} 
            initialIndex={selectedIndex} 
            onClose={() => setSelectedIndex(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function Lightbox({ images, initialIndex, onClose }: { images: string[]; initialIndex: number; onClose: () => void }) {
  const [index, setIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    setZoom(1);
  }, [index]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === "+" || e.key === "=") setZoom(z => Math.min(z + 0.5, 4));
      if (e.key === "-") setZoom(z => Math.max(z - 0.5, 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-10 w-10 md:right-8 md:top-8 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--ember)]"
        title="Fermer (Échap)"
      >
        <X size={24} />
      </button>

      <div className="absolute top-4 left-4 z-50 flex items-center gap-2 md:left-8 md:top-8">
        <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(z + 0.5, 4)); }} className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" title="Zoom In (+)">
          <ZoomIn size={20} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(z - 0.5, 1)); }} className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20" title="Zoom Out (-)">
          <ZoomOut size={20} />
        </button>
        {zoom !== 1 && (
          <button onClick={(e) => { e.stopPropagation(); setZoom(1); }} className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-[color:var(--lime)] text-[color:var(--ink)] font-bold transition-colors hover:opacity-80 text-xs" title="Réinitialiser le zoom">
            1x
          </button>
        )}
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev - 1 + images.length) % images.length); }}
        className="absolute left-4 top-1/2 z-50 flex h-10 w-10 md:left-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setIndex((prev) => (prev + 1) % images.length); }}
        className="absolute right-4 top-1/2 z-50 flex h-10 w-10 md:right-8 md:h-12 md:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]"
      >
        <ChevronRight size={24} />
      </button>

      <div className="relative h-[85vh] w-[100vw] md:w-[90vw] max-w-7xl p-4 md:p-12 overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <motion.div
          key={`container-${index}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: zoom }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full w-full ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : ''}`}
          drag={zoom > 1}
          dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
          dragElastic={0.1}
          onDoubleClick={() => setZoom(z => z > 1 ? 1 : 2)}
        >
          <img
            src={images[index]}
            alt={`Image ${index + 1}`}
            className="h-full w-full object-contain pointer-events-none"
          />
        </motion.div>
        <div className="absolute bottom-0 md:bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-xs tracking-[0.2em] text-white backdrop-blur-md" style={{ fontFamily: "var(--font-mono)" }}>
          <span style={{ color: "var(--lime)" }}>{String(index + 1).padStart(2, "0")}</span>
          <span className="opacity-50"> / {String(images.length).padStart(2, "0")}</span>
        </div>
      </div>
    </motion.div>
  );
}
