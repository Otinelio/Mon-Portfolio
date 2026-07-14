import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MapPin, Mail, Phone, MessageCircle, Linkedin, Github } from "lucide-react";
import { WorkHighlightScroll } from "@/components/horizontal/WorkHighlightScroll";
import { SkillsHighlightScroll } from "@/components/horizontal/SkillsHighlightScroll";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { SectionReveal, SplitReveal } from "@/components/SectionReveal";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";
import { stats } from "@/config/skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kengbo Othnelio Raphaëlo — Développeur Web et Mobile Full Stack · DigitalVision" },
      { name: "description", content: "Portfolio du développeur full-stack Kengbo Othnelio Raphaëlo, cofondateur de DigitalVision à Lomé." },
      { property: "og:title", content: "Kengbo Othnelio Raphaëlo — DigitalVision" },
      { property: "og:description", content: "Expériences web et mobile sur-mesure pour l'hôtellerie, la restauration et le commerce." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main style={{ backgroundColor: "var(--ink)" }}>
      <Hero />
      <WorkHighlightScroll />
      <StatsStrip />
      <SkillsHighlightScroll />
      <SkillsMarquee />
      <AboutPreview />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "ink");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-end overflow-hidden pt-20 pb-20 lg:pt-12 lg:pb-32">
      <motion.div
        className="absolute inset-0 grain"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=80"
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.2) brightness(0.3)" }}
        />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%)" }} />

      <div className="relative z-10 w-full px-6 lg:px-24">
        <h1 className="display-hero max-w-6xl" style={{ color: "var(--paper)" }}>
          <SplitReveal text="Kengbo Othnelio" />
          <br />
          <SplitReveal text="Raphaëlo." style={{ color: "var(--paper)" }} />
        </h1>

        <motion.div
          className="mt-10 border-l-2 pl-5"
          style={{ borderColor: "var(--lime)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-2xl md:text-3xl italic tracking-tight leading-snug"
            style={{ color: "var(--paper)", fontFamily: "var(--font-display)", fontWeight: 400 }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            Développeur Web et Mobile{" "}
            <span className="relative inline-block" style={{ color: "var(--ember)", fontWeight: 700 }}>
              Full Stack
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
                style={{ backgroundColor: "var(--ember)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </span>
          </motion.p>
          <motion.p
            className="mt-2 text-xs md:text-sm font-medium tracking-[0.3em] uppercase"
            style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0, ease: "easeOut" }}
          >
            DigitalVision
          </motion.p>
        </motion.div>

        <SectionReveal delay={0.4}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed md:text-xl" style={{ color: "var(--paper)", opacity: 0.75 }}>
            Conçoit des expériences web et mobile sur-mesure pour des marques d'hôtellerie et de commerce à Lomé.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticLink to="/projets">Voir mes projets</MagneticLink>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em]"
              style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}
            >
              Me contacter
              <ArrowUpRight size={16} strokeWidth={1.5} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </SectionReveal>

        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--paper)", opacity: 0.5, fontFamily: "var(--font-mono)" }}>
          <MapPin size={14} strokeWidth={1.5} /> Lomé — Togo · 08°N
        </div>
      </div>
    </section>
  );
}

function MagneticLink({ to, children }: { to: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      to={to as "/"}
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.25;
        const y = (e.clientY - r.top - r.height / 2) * 0.25;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
      }}
      className="magnetic-btn inline-flex items-center gap-3 border px-6 py-4 text-sm uppercase tracking-[0.2em]"
      style={{
        color: "var(--ink)",
        backgroundColor: "var(--lime)",
        borderColor: "var(--lime)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </Link>
  );
}

function StatsStrip() {
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "ink");
  return (
    <section ref={ref} className="relative border-y border-white/10 py-24" style={{ backgroundColor: "var(--ink)" }}>
      <div className="grid grid-cols-1 gap-12 px-6 md:grid-cols-3 lg:px-24">
        {stats.map((s, i) => (
          <SectionReveal key={i} delay={i * 0.1}>
            <div className="flex flex-col gap-3">
              <div className="text-8xl md:text-9xl" style={{ fontFamily: "var(--font-display)", fontWeight: 900, color: "var(--paper)", letterSpacing: "-0.05em", lineHeight: 0.85 }}>
                {s.value}{s.suffix}
              </div>
              <div className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--lime)", fontFamily: "var(--font-mono)" }}>
                {s.label}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "paper");
  return (
    <section ref={ref} className="relative py-32" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <div className="grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="/profil.jpeg"
              alt="Portrait de Kengbo Othnelio Raphaëlo"
              className="bw-image h-full w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 h-40 w-32 border-l-2 border-t-2" style={{ borderColor: "var(--lime)" }} />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink)", opacity: 0.5, fontFamily: "var(--font-mono)" }}>
            Portrait de Kengbo Othnelio Raphaëlo
          </p>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6" style={{ color: "var(--ember)" }}>À propos</p>
          <h2 className="display-section mb-8" style={{ color: "var(--ink)" }}>
            <SplitReveal text="Trois ans," />
            <br />
            <SplitReveal text="déjà prolifique." />
          </h2>
          <p className="max-w-xl text-lg leading-relaxed" style={{ color: "var(--ink)", opacity: 0.75 }}>
            Cofondateur de DigitalVision (Dvision), je traduis l'identité d'une marque en présence digitale entièrement sur-mesure — jamais un template. React, Supabase, Framer Motion : mes outils pour livrer, du concept au déploiement.
          </p>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 border-b pb-1 text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--ink)", borderColor: "var(--ink)", fontFamily: "var(--font-mono)" }}
          >
            Lire l'histoire complète <ArrowUpRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

const contactLinks = [
  { icon: Mail, label: "Email", value: "kengboothnelioraphaelo@gmail.com", href: "mailto:kengboothnelioraphaelo@gmail.com" },
  { icon: Phone, label: "Téléphone", value: "+228 98 47 27 01 / +228 72 95 75 62", href: "tel:+22898472701" },
  { icon: MessageCircle, label: "WhatsApp", value: "Cliquez ici", href: "https://wa.me/qr/R4TYNXD7NT2WP1" },
  { icon: Linkedin, label: "LinkedIn", value: "Othnelio Kengbo", href: "https://www.linkedin.com/in/othnelio-kengbo?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { icon: Github, label: "GitHub", value: "otinelio", href: "https://github.com/otinelio" },
];

function FooterContactLink({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 py-2"
    >
      <Icon size={15} strokeWidth={1.5} style={{ color: "var(--paper)", opacity: 0.4 }} />
      <span
        className="relative text-xs tracking-[0.18em] uppercase"
        style={{ color: "var(--paper)", opacity: 0.6, fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
      <span
        className="relative text-xs tracking-[0.12em] uppercase transition-colors group-hover:text-[color:var(--ember)]"
        style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}
      >
        {value}
        <span
          className="absolute bottom-0 left-0 h-[1px] w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          style={{ backgroundColor: "var(--ember)" }}
        />
      </span>
    </a>
  );
}

export function Footer() {
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "ink");
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <footer
      ref={ref}
      className="relative flex min-h-[90vh] flex-col justify-between overflow-hidden"
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="flex flex-1 flex-col lg:flex-row w-full max-w-[1800px] mx-auto">
        {/* ── Zone 1 : Geste principal ── */}
        <div className="flex flex-1 flex-col justify-center px-6 pt-32 pb-16 lg:pb-24 lg:px-24">
          <h2 className="display-hero max-w-4xl" style={{ color: "var(--paper)" }}>
            <SplitReveal text="Construisons" />
            <br />
            <SplitReveal text="quelque chose." />
          </h2>
          <div className="mt-14">
            <Link
              to="/contact"
              ref={linkRef}
              onMouseMove={(e) => {
                const el = linkRef.current;
                if (!el) return;
                const r = el.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.2;
                const y = (e.clientY - r.top - r.height / 2) * 0.2;
                el.style.transform = `translate(${x}px, ${y}px)`;
              }}
              onMouseLeave={() => {
                if (linkRef.current) linkRef.current.style.transform = "translate(0,0)";
              }}
              className="group inline-flex items-center gap-3 border-b-2 pb-1 text-lg md:text-xl transition-colors"
              style={{
                color: "var(--ember)",
                borderColor: "var(--ember)",
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.05em",
              }}
            >
              Discutons
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ── Zone 2 : Contact liste ── */}
        <div className="flex flex-1 flex-col justify-center border-t border-white/8 lg:border-t-0 lg:border-l px-6 py-16 lg:pl-12 lg:pr-6 xl:pl-20">
          <nav className="flex flex-col gap-2 w-full max-w-2xl mx-auto lg:mx-0">
            {contactLinks.map((link) => (
              <FooterContactLink key={link.label} {...link} />
            ))}
          </nav>
        </div>
      </div>

      {/* ── Zone 3 : Ligne de fermeture ── */}
      <div className="border-t border-white/8">
        <div className="overflow-hidden py-6">
          <div className="marquee-track-left flex shrink-0 gap-16 whitespace-nowrap">
            {Array.from({ length: 3 }).map((_, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-6 text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--paper)", opacity: 0.45, fontFamily: "var(--font-mono)" }}
              >
                <span>Disponible pour</span>
                <span style={{ color: "var(--ember)", opacity: 1 }}>·</span>
                <span>Web</span>
                <span style={{ color: "var(--ember)", opacity: 1 }}>·</span>
                <span>Mobile</span>
                <span style={{ color: "var(--ember)", opacity: 1 }}>·</span>
                <span>Branding</span>
                <span style={{ color: "var(--ember)", opacity: 1 }}>·</span>
                <span>Consulting</span>
                <span style={{ color: "var(--ember)", opacity: 1 }}>·</span>
              </span>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col justify-between gap-4 px-6 pb-8 text-xs uppercase tracking-[0.2em] md:flex-row lg:px-24"
          style={{ color: "var(--paper)", opacity: 0.35, fontFamily: "var(--font-mono)" }}
        >
          <span>© {new Date().getFullYear()} DigitalVision — Kengbo Othnelio Raphaëlo.</span>
          <span>Lomé, Togo</span>
        </div>
      </div>
    </footer>
  );
}
