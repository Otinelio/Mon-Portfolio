export interface SkillCategory {
  key: string;
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: "Langages",
    items: ["JavaScript", "TypeScript", "PHP", "Python"],
  },
  {
    key: "frameworks",
    label: "Frameworks & Libs",
    items: ["React", "React Router v6", "Tailwind CSS", "Framer Motion", "Node.js"],
  },
  {
    key: "tools",
    label: "Outils & Plateformes",
    items: ["Supabase", "Vercel", "Git / GitHub", "Figma"],
  },
  {
    key: "others",
    label: "Autres",
    items: [
      "UI / UX Design",
      "SEO & Performance Web",
      "Intégration WhatsApp Business",
      "Développement Mobile-first",
    ],
  },
];

export const marqueeSkills = [
  "React", "TypeScript", "Tailwind", "Framer Motion", "Supabase", "Node.js",
  "Vercel", "Figma", "PHP", "Python", "JavaScript", "React Router",
  "PostgreSQL", "REST", "WhatsApp API", "Git", "SEO", "Realtime",
];

export const stats = [
  { value: 3, suffix: "", label: "Années d'expérience" },
  { value: 10, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
];

export const timeline = [
  { year: "2022", title: "Premières lignes", body: "Débuts en développement web, focus JavaScript et React." },
  { year: "2023", title: "Premiers clients", body: "Livraison des premiers sites hospitalité à Lomé." },
  { year: "2024", title: "DigitalVision", body: "Lancement de l'agence Dvision, structuration du studio." },
  { year: "2025", title: "Temps réel", body: "Passage aux applications temps-réel avec Supabase." },
  { year: "2026", title: "Aujourd'hui", body: "10+ projets livrés, focus qualité éditoriale et sur-mesure." },
];
