import { motion } from "framer-motion";
import { timeline } from "@/config/skills";

export function HorizontalTimeline() {
  return (
    <section className="relative py-24" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <div className="px-6 lg:px-24">
        <p className="eyebrow mb-4" style={{ color: "var(--ember)" }}>Parcours</p>
        <h2 className="display-section mb-16" style={{ color: "var(--ink)" }}>De 2022 à aujourd'hui.</h2>
      </div>
      <div className="no-scrollbar relative flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-12 lg:px-24">
        {/* connecting line */}
        <div
          className="pointer-events-none absolute left-0 right-0 top-[42%] h-px"
          style={{
            background: "linear-gradient(90deg, transparent, var(--lime) 6%, var(--lime) 94%, transparent)",
          }}
        />
        {timeline.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: i * 0.08 }}
            className="relative flex w-72 shrink-0 snap-center flex-col gap-3"
          >
            <div className="text-6xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink)", letterSpacing: "-0.04em" }}>
              {m.year}
            </div>
            <div className="relative h-3 w-3 rounded-full" style={{ backgroundColor: "var(--lime)" }} />
            <h3 className="text-xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--ink)" }}>{m.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink)", opacity: 0.7 }}>{m.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
