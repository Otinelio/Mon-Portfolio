import { motion, useScroll } from "framer-motion";
import { experiences, formations } from "@/config/skills";
import { useRef } from "react";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";

export function ResumeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useDeclareSectionTheme(sectionRef, "ink");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32 lg:py-48" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-24">
        
        {/* LIGNE TEMPORELLE GLOBALE */}
        <div className="absolute bottom-12 left-6 top-12 w-px lg:left-1/2 lg:-translate-x-1/2" style={{ backgroundColor: "color-mix(in oklab, var(--paper) 10%, transparent)" }}>
          <motion.div 
            className="w-full origin-top" 
            style={{ backgroundColor: "var(--lime)", height: "100%", scaleY: scrollYProgress }} 
          />
        </div>

        {/* --- SECTION EXPERIENCES --- */}
        <div className="relative mb-48">
          <div className="mb-24 flex flex-col items-start lg:items-center">
            <p className="eyebrow mb-4" style={{ color: "var(--lime)" }}>Parcours professionnel</p>
            <h2 className="display-section" style={{ color: "var(--paper)" }}>Expériences</h2>
          </div>

          <div className="flex flex-col gap-32 lg:gap-64">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex w-full flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center gap-12 lg:gap-32`}>
                  
                  {/* TEXTE GÉANT EN FILIGRANE */}
                  <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none mix-blend-overlay" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(6rem, 15vw, 15rem)", letterSpacing: "-0.04em", color: "var(--paper)" }}>
                    {exp.company}
                  </div>

                  {/* NOEUD SUR LA LIGNE */}
                  <div className="absolute left-0 top-6 h-4 w-4 -translate-x-[7.5px] rounded-full lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2" style={{ backgroundColor: "var(--ink)", border: "3px solid var(--lime)" }} />

                  {/* MOITIÉ GAUCHE / DROITE : PÉRIODE STICKY */}
                  <div className={`w-full lg:w-1/2 pl-8 lg:pl-0 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="sticky top-1/2 text-5xl md:text-7xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--paper)", letterSpacing: "-0.04em" }}>
                      {exp.period}
                    </div>
                  </div>

                  {/* MOITIÉ DROITE / GAUCHE : DÉTAILS */}
                  <div className={`relative z-10 flex w-full flex-col pl-8 lg:pl-0 lg:w-1/2 ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                    <h3 className="text-3xl lg:text-4xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--lime)", letterSpacing: "-0.02em" }}>
                      {exp.role}
                    </h3>
                    <p className="mt-2 text-xl font-medium" style={{ color: "var(--paper)", opacity: 0.8 }}>
                      chez {exp.company}
                    </p>
                    <ul className={`mt-8 flex flex-col gap-5 ${isEven ? 'lg:items-start' : 'lg:items-end'}`}>
                      {exp.tasks.map((task, j) => (
                        <li key={j} className={`group flex max-w-md items-start gap-4 text-lg transition-transform duration-500 hover:-translate-y-1 ${isEven ? 'hover:translate-x-2' : 'hover:-translate-x-2'}`}>
                          <span className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 group-hover:bg-[color:var(--lime)] ${!isEven && 'lg:hidden'}`} style={{ backgroundColor: "color-mix(in oklab, var(--paper) 30%, transparent)" }} />
                          <span style={{ color: "var(--paper)", opacity: 0.85 }}>{task}</span>
                          <span className={`mt-2.5 hidden h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 group-hover:bg-[color:var(--lime)] ${!isEven && 'lg:block'}`} style={{ backgroundColor: "color-mix(in oklab, var(--paper) 30%, transparent)" }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

        {/* --- SECTION FORMATIONS --- */}
        <div className="relative">
          <div className="mb-24 flex flex-col items-start lg:items-center pl-8 lg:pl-0">
            <p className="eyebrow mb-4" style={{ color: "var(--lime)" }}>Parcours académique</p>
            <h2 className="display-section" style={{ color: "var(--paper)" }}>Formation</h2>
          </div>

          <div className="flex flex-col gap-32 lg:gap-64">
            {formations.map((form, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex w-full flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start lg:items-center gap-12 lg:gap-32`}>
                  
                  {/* TEXTE GÉANT EN FILIGRANE */}
                  <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-[0.03] select-none mix-blend-overlay" style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(6rem, 15vw, 15rem)", letterSpacing: "-0.04em", color: "var(--paper)" }}>
                    {form.year}
                  </div>

                  {/* NOEUD SUR LA LIGNE */}
                  <div className="absolute left-0 top-6 h-4 w-4 -translate-x-[7.5px] rounded-full lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2" style={{ backgroundColor: "var(--ink)", border: "3px solid var(--lime)" }} />

                  {/* MOITIÉ GAUCHE / DROITE : ANNÉE STICKY */}
                  <div className={`w-full lg:w-1/2 pl-8 lg:pl-0 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className="sticky top-1/2 text-6xl md:text-8xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--lime)", letterSpacing: "-0.04em" }}>
                      {form.year}
                    </div>
                  </div>

                  {/* MOITIÉ DROITE / GAUCHE : DÉTAILS */}
                  <div className={`relative z-10 flex w-full flex-col pl-8 lg:pl-0 lg:w-1/2 ${isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>
                    <h3 className="text-3xl lg:text-4xl leading-tight" style={{ fontFamily: "var(--font-sans)", fontWeight: 800, color: "var(--paper)" }}>
                      {form.title}
                    </h3>
                    <p className="mt-4 text-xl font-semibold" style={{ color: "var(--lime)", opacity: 0.9 }}>
                      {form.institution}
                    </p>
                    {form.details && (
                      <p className="mt-4 max-w-md text-lg leading-relaxed" style={{ color: "var(--paper)", opacity: 0.7 }}>
                        {form.details}
                      </p>
                    )}
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
