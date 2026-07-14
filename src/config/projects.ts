export type ProjectTag = "Web" | "Mobile" | "Branding";

export interface Project {
  slug: string;
  index: string;
  title: string;
  client: string;
  year: string;
  tags: ProjectTag[];
  stack: string[];
  cover: string;
  gallery: string[];
  intro: string;
  problem: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  repoUrl?: string;
}

const IMG = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const projects: Project[] = [
  {
    slug: "la-huqqa",
    index: "01",
    title: "La Huqqa",
    client: "Café-restaurant, Lomé",
    year: "2024",
    tags: ["Web", "Mobile"],
    stack: ["React", "Supabase", "Realtime", "Vercel"],
    cover: IMG("photo-1414235077428-338989a2e8c0"),
    gallery: [
      IMG("photo-1517248135467-4c7edcad34c4"),
      IMG("photo-1555396273-367ea4eb4db5"),
      IMG("photo-1544148103-0773bf10d330"),
      IMG("photo-1552566626-52f8b828add9"),
    ],
    intro:
      "Plateforme de menu digital et de commandes temps réel pour un café-restaurant emblématique de Lomé.",
    problem:
      "35+ catégories de menu à digitaliser sans rompre l'expérience en salle, avec une synchronisation immédiate entre serveurs, cuisine et clients.",
    solution:
      "Application React couplée à Supabase Realtime : chaque commande se propage instantanément, chaque changement de menu est visible à la table suivante.",
    outcome:
      "Le projet le plus techniquement abouti de DigitalVision — déployé sur Vercel, en production.",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    slug: "le-kentia",
    index: "02",
    title: "Le Kentia",
    client: "Hôtel & restaurant boutique",
    year: "2024",
    tags: ["Web", "Branding"],
    stack: ["React", "Tailwind", "Framer Motion"],
    cover: IMG("photo-1445019980597-93fa8acb246c"),
    gallery: [
      IMG("photo-1520250497591-112f2f40a3f4"),
      IMG("photo-1566073771259-6a8506099945"),
      IMG("photo-1590490360182-c33d57733427"),
    ],
    intro:
      "Un site hospitalité chaleureux et raffiné, dont la palette entière est puisée dans le logo et les matériaux de l'établissement.",
    problem:
      "Rendre en ligne la sensation feutrée du lieu, sans tomber dans le template hôtel générique.",
    solution:
      "Direction artistique sur-mesure, typographie éditoriale, transitions Framer Motion douces, hiérarchie image-texte inspirée des magazines de voyage.",
    outcome: "Une présence digitale à la hauteur du positionnement boutique du lieu.",
    liveUrl: "#",
  },
  {
    slug: "zwonders",
    index: "03",
    title: "ZWONDERS",
    client: "Lounge bar premium",
    year: "2024",
    tags: ["Web", "Branding"],
    stack: ["React", "Tailwind"],
    cover: IMG("photo-1470337458703-46ad1756a187"),
    gallery: [
      IMG("photo-1514933651103-005eec06c04b"),
      IMG("photo-1517457373958-b7bdd4587205"),
      IMG("photo-1543007630-9710e4a00a20"),
    ],
    intro:
      "Esthétique sombre « quiet luxury » avec touches dorées pour un lounge bar de destination.",
    problem:
      "Trois univers à faire cohabiter : rooftop, traiteur, événements privés.",
    solution:
      "Un système de sections en pleine hauteur, chacune traitée comme une couverture éditoriale distincte.",
    outcome: "Un site qui vend l'expérience avant le menu.",
  },
  {
    slug: "mac-bouffe",
    index: "04",
    title: "MAC BOUFFE",
    client: "Fast-food urbain",
    year: "2023",
    tags: ["Web", "Mobile"],
    stack: ["React", "Tailwind"],
    cover: IMG("photo-1568901346375-23c9450c58cd"),
    gallery: [
      IMG("photo-1572802419224-296b0aeee0d9"),
      IMG("photo-1550547660-d9450f859349"),
      IMG("photo-1571091718767-18b5b1457add"),
    ],
    intro:
      "Identité rouge / jaune / anthracite affirmée, pensée pour la commande mobile en salle.",
    problem: "Fluidifier la commande QR sans surcharger l'écran d'un menu long.",
    solution:
      "Navigation mobile-first verticale, hiérarchie de catégories en accordéon, panier persistent.",
    outcome: "Un flux de commande qui tient la charge du service midi.",
  },
  {
    slug: "zanzibar-lome",
    index: "05",
    title: "ZanziBar Lomé",
    client: "Rooftop lounge tropical",
    year: "2024",
    tags: ["Web", "Branding"],
    stack: ["React", "Tailwind", "Framer Motion"],
    cover: IMG("photo-1533777857889-4be7c70b33f7"),
    gallery: [
      IMG("photo-1519671482749-fd09be7ccebf"),
      IMG("photo-1502920917128-1aa500764cbd"),
      IMG("photo-1544148103-0773bf10d330"),
    ],
    intro:
      "Concept rooftop tropical avec variation forte de couleur dominante par page — un effet « wow » assumé.",
    problem:
      "Se démarquer visuellement des autres projets hospitalité du portfolio.",
    solution:
      "Chaque page pousse une palette dominante différente, orchestrée par des transitions Framer Motion tenues.",
    outcome: "Le projet le plus expressif de la série hospitalité.",
  },
  {
    slug: "palais-royal-des-saveurs",
    index: "06",
    title: "Palais Royal des Saveurs",
    client: "Restaurant africain",
    year: "2023",
    tags: ["Web"],
    stack: ["React", "Supabase"],
    cover: IMG("photo-1504674900247-0877df9cc836"),
    gallery: [
      IMG("photo-1476224203421-9ac39bcb3327"),
      IMG("photo-1555939594-58d7cb561ad1"),
      IMG("photo-1546069901-ba9599a7e63c"),
    ],
    intro:
      "Application dix pages, menu ouest-africain au prix en FCFA, tableaux de bord protégés pour la gestion en salle.",
    problem: "Séparer proprement l'espace client public et l'espace salle privé.",
    solution:
      "Architecture Supabase avec RLS et zones protégées par code PIN pour l'équipe.",
    outcome: "Un outil complet, pas juste une vitrine.",
  },
  {
    slug: "escale-africaine",
    index: "07",
    title: "L'Escale Africaine",
    client: "Restaurant franco-togolais & épicerie fine",
    year: "2024",
    tags: ["Web"],
    stack: ["React", "Tailwind"],
    cover: IMG("photo-1424847651672-bf20a4b0982b"),
    gallery: [
      IMG("photo-1509440159596-0249088772ff"),
      IMG("photo-1498837167922-ddd27525d352"),
      IMG("photo-1466637574441-749b8f19452f"),
    ],
    intro:
      "Panier d'épicerie via WhatsApp, architecture localStorage unifiée entre restaurant et épicerie.",
    problem: "Deux modules, une seule expérience client cohérente.",
    solution:
      "Modèle de données commun, transitions inter-modules invisibles, checkout WhatsApp Business.",
    outcome: "Zero backend à maintenir pour le client, tout tient dans le navigateur.",
  },
  {
    slug: "kaleta",
    index: "08",
    title: "Kaleta",
    client: "Restaurant à narration culturelle",
    year: "2024",
    tags: ["Web", "Branding"],
    stack: ["React", "Framer Motion"],
    cover: IMG("photo-1517841905240-472988babdf9"),
    gallery: [
      IMG("photo-1509631179647-0177331693ae"),
      IMG("photo-1528605248644-14dd04022da1"),
      IMG("photo-1523419409543-a5e549c1faa8"),
    ],
    intro:
      "Identité visuelle et narrative tissée autour de la tradition du masque Kaleta afro-brésilienne.",
    problem: "Faire vivre une histoire culturelle sans muséographier le lieu.",
    solution:
      "Mise en scène éditoriale forte, révélations Framer Motion au scroll, typographie de manifeste.",
    outcome: "Un site qui se lit autant qu'il se parcourt.",
  },
  {
    slug: "sunset-beach-lounge",
    index: "09",
    title: "Le Sunset Beach Lounge",
    client: "Rooftop & beach lounge",
    year: "2024",
    tags: ["Web"],
    stack: ["React", "Tailwind", "Framer Motion"],
    cover: IMG("photo-1507525428034-b723cf961d3e"),
    gallery: [
      IMG("photo-1519046904884-53103b34b206"),
      IMG("photo-1505142468610-359e7d316be0"),
      IMG("photo-1520454974749-611b7248ffdb"),
    ],
    intro:
      "Combinaison de plusieurs systèmes de design en un projet unique, orienté ambiance golden-hour.",
    problem: "Unifier trois moments de la journée — plage, apéro, dîner — sous une même identité.",
    solution:
      "Un design system flexible avec trois modes de couleur dérivés du même socle.",
    outcome: "Un projet qui prouve la modularité du studio.",
  },
  {
    slug: "aroma-cafe",
    index: "10",
    title: "AROMA CAFE",
    client: "Café contemporain chic",
    year: "2024",
    tags: ["Web", "Mobile"],
    stack: ["React", "Supabase", "Fraunces", "Manrope"],
    cover: IMG("photo-1495474472287-4d71bcdd2085"),
    gallery: [
      IMG("photo-1509042239860-f550ce710b93"),
      IMG("photo-1507133750040-4a8f57021571"),
      IMG("photo-1442512595331-e89e73853f31"),
    ],
    intro:
      "Application neuf pages : commande QR en salle, tableau de bord réception, panneau admin.",
    problem: "Un seul produit devait servir client, salle et gestion.",
    solution:
      "Trois interfaces sur le même socle React + Supabase, typographies Fraunces / Manrope, univers artisanal chaud.",
    outcome: "Un produit complet, prêt à scaler sur d'autres points de vente.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return projects[0];
  return projects[(i + 1) % projects.length];
}
