export interface SkillCategory {
  key: string;
  label: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: "Langages",
    items: ["PHP", "JavaScript", "Dart"],
  },
  {
    key: "frameworks",
    label: "Frameworks & Technologies",
    items: ["Laravel", "Flutter", "Bootstrap", "React"],
  },
  {
    key: "databases",
    label: "Bases de données",
    items: ["MySQL", "PostgreSQL", "Supabase", "Firebase"],
  },
  {
    key: "tools",
    label: "Outils & autres",
    items: ["Git", "GitHub", "Postman", "Figma", "Outils d'IA", "Vercel"],
  },
  {
    key: "assets",
    label: "Atouts",
    items: [
      "Esprit d'analyse",
      "Résolution de problèmes",
      "Autonomie",
      "Rigueur",
      "Travail en équipe",
      "Apprentissage continu"
    ],
  },
];

export const marqueeSkills = [
  "PHP", "JavaScript", "Dart", "Laravel", "Flutter", "Bootstrap", "React",
  "MySQL", "PostgreSQL", "Supabase", "Firebase", "Git", "GitHub",
  "Postman", "Figma", "Outils d'IA", "Vercel",
];

export const stats = [
  { value: 3, suffix: "", label: "Années d'expérience" },
  { value: 10, suffix: "+", label: "Projets livrés" },
  { value: 100, suffix: "%", label: "Clients satisfaits" },
];

export const experiences = [
  {
    company: "DigitalVision",
    role: "Développeur Backend & Cofondateur",
    period: "2025 – 2026",
    tasks: [
      "Développement d'API REST avec Laravel",
      "Conception d'architectures backend",
      "Développement de solutions web sur mesure",
      "Participation aux choix techniques"
    ]
  },
  {
    company: "Otinelio",
    role: "Développeur Full Stack",
    period: "2024 – 2025",
    tasks: [
      "Développement de sites web pour restaurants et hôtels",
      "Intégration de systèmes de commande via QR Code",
      "Réalisation de sites vitrines premium",
      "Projets : Beefcut, Togoliving, Harmonie Signature, La Huqqa..."
    ]
  },
  {
    company: "Projet académique",
    role: "Développeur Laravel",
    period: "2025",
    tasks: [
      "Développement d'une plateforme e-commerce",
      "Gestion des produits, commandes et utilisateurs",
      "Conception de la base de données"
    ]
  }
];

export const formations = [
  {
    year: "2025",
    title: "Formation en Développement Web & Mobile",
    institution: "DTechGroup (Togo)",
  },
  {
    year: "2024 – 2025",
    title: "Parcours d'autoformation en développement web",
    institution: "OpenClassrooms",
    details: "HTML5/CSS3, JavaScript, PHP, MySQL, React, Git/GitHub et Linux"
  }
];
