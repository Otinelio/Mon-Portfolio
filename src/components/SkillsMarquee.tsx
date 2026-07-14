import { marqueeSkills } from "@/config/skills";

export function SkillsMarquee() {
  const row = [...marqueeSkills, ...marqueeSkills];
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-10" style={{ backgroundColor: "var(--ink)" }}>
      <div className="marquee-track-left flex shrink-0 gap-12 whitespace-nowrap">
        {row.map((s, i) => (
          <MarqueeItem key={`a${i}`} label={s} />
        ))}
      </div>
      <div className="marquee-track-right mt-6 flex shrink-0 gap-12 whitespace-nowrap">
        {[...row].reverse().map((s, i) => (
          <MarqueeItem key={`b${i}`} label={s} muted />
        ))}
      </div>
    </section>
  );
}

function MarqueeItem({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-3 text-4xl transition-colors hover:text-[color:var(--ember)] md:text-6xl"
      style={{
        color: muted ? "rgba(247,246,243,0.35)" : "var(--paper)",
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        letterSpacing: "-0.03em",
      }}
    >
      {label}
      <span style={{ color: "var(--lime)" }}>·</span>
    </span>
  );
}
