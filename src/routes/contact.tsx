import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Linkedin, Phone, Github } from "lucide-react";
import { useDeclareSectionTheme } from "@/hooks/useSectionTheme";
import { SplitReveal } from "@/components/SectionReveal";
import { Footer } from "@/routes/index";

const EMAIL = "kengboothnelioraphaelo@gmail.com";
const PHONE = "+228 98 47 27 01 / +228 72 95 75 62";
const WHATSAPP = "https://wa.me/qr/R4TYNXD7NT2WP1";
const LINKEDIN = "https://www.linkedin.com/in/othnelio-kengbo?utm_source=share_via&utm_content=profile&utm_medium=member_android";
const GITHUB = "https://github.com/otinelio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kengbo Othnelio Raphaëlo · DigitalVision" },
      { name: "description", content: "Discutons de votre prochain projet. Développeur web & mobile basé à Lomé, disponible à distance et sur place." },
      { property: "og:title", content: "Contact — DigitalVision" },
      { property: "og:description", content: "Basé à Lomé, disponible pour des projets à distance et sur place." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const ref = useRef<HTMLElement>(null);
  useDeclareSectionTheme(ref, "paper");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <main>
      <section ref={ref} className="relative min-h-screen py-24 lg:py-32" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
        <div className="grid grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-24">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}>
              <motion.span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--ember)" }}
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              Disponible pour un nouveau projet
            </div>
            <h1 className="display-hero mb-12" style={{ color: "var(--ink)" }}>
              <SplitReveal text="Discutons." />
            </h1>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="flex max-w-xl flex-col gap-10"
            >
              <UnderlineField label="Votre nom" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <UnderlineField label="Votre email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <UnderlineField label="Votre message" multiline value={form.message} onChange={(v) => setForm({ ...form, message: v })} />
              <button
                type="submit"
                className="magnetic-btn inline-flex w-fit items-center gap-3 border border-[color:var(--ink)] px-6 py-4 text-xs uppercase tracking-[0.2em] transition-colors hover:bg-[color:var(--ink)] hover:text-[color:var(--paper)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                Envoyer le message <ArrowUpRight size={16} strokeWidth={1.5} />
              </button>
              {sent && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--ember)", fontFamily: "var(--font-mono)" }}>
                  → Merci. Message pris en compte (démo — brancher un endpoint).
                </motion.p>
              )}
            </form>
          </div>

          <aside className="flex flex-col gap-8 lg:col-span-5 lg:pl-12">
            <div className="border-t border-ink/20 pt-6">
              <p className="eyebrow mb-3" style={{ color: "var(--ember)" }}>Contact direct</p>
              <ul className="flex flex-col gap-4">
                <DirectLink icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                <DirectLink icon={Phone} label="Téléphone" value={PHONE} href="tel:+22898472701" />
                <DirectLink icon={MessageCircle} label="WhatsApp" value="Cliquez ici" href={WHATSAPP} />
                <DirectLink icon={Linkedin} label="LinkedIn" value="Othnelio Kengbo" href={LINKEDIN} />
                <DirectLink icon={Github} label="GitHub" value="otinelio" href={GITHUB} />
              </ul>
            </div>
            <div className="border-t border-ink/20 pt-6">
              <p className="eyebrow mb-3" style={{ color: "var(--ember)" }}>Localisation</p>
              <p className="text-lg" style={{ color: "var(--ink)", fontFamily: "var(--font-display)", fontWeight: 700 }}>
                Basé à Lomé, Togo
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--ink)", opacity: 0.65 }}>
                Disponible pour des projets à distance et sur place.
              </p>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function UnderlineField({
  label, value, onChange, type = "text", multiline = false,
}: { label: string; value: string; onChange: (v: string) => void; type?: string; multiline?: boolean }) {
  const commonProps = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value),
    className: "w-full border-0 border-b border-ink/30 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[color:var(--ember)]",
    style: { color: "var(--ink)", fontFamily: "var(--font-sans)" as const },
  };
  return (
    <label className="flex flex-col gap-2">
      <span className="eyebrow" style={{ color: "var(--ink)", opacity: 0.55 }}>{label}</span>
      {multiline ? (
        <textarea rows={4} {...commonProps} />
      ) : (
        <input type={type} {...commonProps} />
      )}
    </label>
  );
}

function DirectLink({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <li>
      <a href={href} className="group flex items-center justify-between gap-6 border-b border-ink/15 pb-3">
        <span className="flex items-center gap-3">
          <Icon size={16} strokeWidth={1.5} style={{ color: "var(--ember)" }} />
          <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--ink)", opacity: 0.55, fontFamily: "var(--font-mono)" }}>{label}</span>
        </span>
        <span className="flex items-center gap-2 text-sm transition-colors group-hover:text-[color:var(--ember)]" style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}>
          {value} <ArrowUpRight size={14} strokeWidth={1.5} />
        </span>
      </a>
    </li>
  );
}
