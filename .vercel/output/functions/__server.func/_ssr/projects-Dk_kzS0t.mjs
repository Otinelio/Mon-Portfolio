//#region node_modules/.nitro/vite/services/ssr/assets/projects-Dk_kzS0t.js
var IMG = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;
var projects = [
	{
		slug: "la-huqqa",
		index: "01",
		title: "La HuQQa",
		client: "La HuQQa (Restaurant-Café)",
		year: "2024",
		tags: ["Web", "Mobile"],
		stack: [
			"React 18",
			"TypeScript",
			"Tailwind CSS",
			"Supabase",
			"Realtime"
		],
		cover: IMG("photo-1414235077428-338989a2e8c0"),
		gallery: [
			IMG("photo-1517248135467-4c7edcad34c4"),
			IMG("photo-1555396273-367ea4eb4db5"),
			IMG("photo-1544148103-0773bf10d330"),
			IMG("photo-1552566626-52f8b828add9")
		],
		intro: "Une plateforme digitale hybride alliant un site vitrine à l'esthétique premium « magazine » et une suite d'outils métier en temps réel (Menu QR, Dashboard, KDS).",
		problem: "Retranscrire l'atmosphère feutrée du lieu tout en fluidifiant la prise de commande en salle et la synchronisation avec la cuisine, sans ajouter de friction technique.",
		solution: "Création d'une plateforme web unifiée (React/Vite). Côté client : Web App Menu QR. Côté métier : Dashboard et KDS (Kitchen Display System) synchronisés via Supabase Realtime.",
		outcome: "Un écosystème hybride complet en production combinant la beauté visuelle d'un site vitrine premium et l'efficacité d'un SaaS métier sur-mesure.",
		liveUrl: "#",
		repoUrl: "#",
		contribution: [
			"Intégration frontend pixel-perfect et design system",
			"Backend, base de données et sécurité (Supabase RLS)",
			"Architecture temps réel (React Query + Supabase Realtime)",
			"Développement interfaces publiques et métier (KDS, Dashboard)"
		],
		keyFigures: [{
			label: "Vues distinctes",
			value: "7"
		}, {
			label: "Modules connectés",
			value: "4"
		}],
		uniqueFeature: "Le contraste maîtrisé entre l'esthétique premium de la façade publique et l'efficacité technique des outils opérationnels fonctionnant en temps réel."
	},
	{
		slug: "togoliving",
		index: "02",
		title: "TOGOLIVING",
		client: "Résidence TOGOLIVING (Villa balnéaire, Lomé, Togo)",
		year: "2024 – 2025",
		tags: ["Web", "Mobile"],
		stack: [
			"React 19",
			"TanStack Start",
			"TypeScript",
			"Tailwind CSS v4",
			"Framer Motion",
			"Supabase",
			"FedaPay",
			"i18next"
		],
		cover: IMG("photo-1445019980597-93fa8acb246c"),
		gallery: [
			IMG("photo-1520250497591-112f2f40a3f4"),
			IMG("photo-1566073771259-6a8506099945"),
			IMG("photo-1590490360182-c33d57733427"),
			IMG("photo-1507525428034-b723cf961d3e")
		],
		intro: "Plateforme web complète pour une résidence balnéaire de luxe à 100 m de l'Océan Atlantique — vitrine immersive, conciergerie digitale par QR Code et dashboard back-office.",
		problem: "La résidence n'avait aucune présence digitale à la hauteur de son positionnement premium. Réservations par téléphone, services en chambre par appel à la réception, menus papier au restaurant.",
		solution: "Plateforme unifiée à double casquette : site immersif (animations Framer Motion, réservation WhatsApp) côté client, et dashboard complet (hébergements, commandes, abonnements FedaPay, statistiques) côté métier.",
		outcome: "Écosystème digital complet en production — site vitrine, conciergerie QR, menu restaurant digital, back-office admin — multilingue (FR/EN) déployé sur Vercel.",
		liveUrl: "#",
		repoUrl: "#",
		contribution: [
			"Design system complet (palette, typographie, composants)",
			"Développement frontend : animations Framer Motion, Radix UI",
			"Backend Supabase : RLS, Realtime, Storage, Auth",
			"Intégration FedaPay (webhooks sécurisés)",
			"Internationalisation i18next (FR/EN) et déploiement Vercel"
		],
		keyFigures: [
			{
				label: "Types d'hébergements",
				value: "4"
			},
			{
				label: "Pages / vues distinctes",
				value: "8+"
			},
			{
				label: "Modules indépendants",
				value: "4"
			},
			{
				label: "Librairies clés",
				value: "15+"
			}
		],
		uniqueFeature: "Un écosystème SaaS hôtelier complet masqué derrière une vitrine éditoriale premium — conciergerie temps réel, paiement intégré, identité visuelle puissante — conçu pour un hôtel africain avec une approche mobile-first."
	},
	{
		slug: "la-playa",
		index: "03",
		title: "La Playa Beach Resort",
		client: "Resort hôtelier & restaurant en bord de mer",
		year: "2025 – 2026",
		tags: ["Web", "Mobile"],
		stack: [
			"React 19",
			"TanStack Start",
			"TypeScript",
			"Tailwind CSS v4",
			"Framer Motion",
			"Zustand",
			"Radix UI"
		],
		cover: IMG("photo-1507525428034-b723cf961d3e"),
		gallery: [
			IMG("photo-1519046904884-53103b34b206"),
			IMG("photo-1505142468610-359e7d316be0"),
			IMG("photo-1566073771259-6a8506099945"),
			IMG("photo-1514933651103-005eec06c04b")
		],
		intro: "Site vitrine et conciergerie digitale complète pour un beach resort premium — accessible depuis la chambre par simple scan de QR code, sans aucune installation.",
		problem: "Zéro présence digitale structurée. Réservations par téléphone, services en chambre inexistants en ligne, aucune visibilité sur les événements ou le menu. Il fallait bâtir un écosystème complet reflet du positionnement premium du lieu.",
		solution: "Site public direction artistique charcoal/gold/cream + conciergerie QR in-room (commande restaurant, ménage, signalement, guide local) + dashboard admin PIN-protégé + réservation express vers WhatsApp. Zéro backend, zéro app à télécharger.",
		outcome: "8 pages publiques, 7 sections admin, conciergerie mobile-first déployée sur Vercel — le tout sans serveur, sans gateway de paiement, opérationnel pour l'équipe dès le premier jour.",
		liveUrl: "#",
		contribution: [
			"Direction artistique complète (palette, design system, tokens CSS)",
			"Frontend React 19, TanStack Start, Framer Motion, Radix UI",
			"Architecture file-based routing, state Zustand, data layer centralisé",
			"Back-office admin : dashboard, générateur QR, persistance localStorage",
			"Déploiement Vercel avec adaptation serveur Nitro (SSR)"
		],
		keyFigures: [
			{
				label: "Pages publiques",
				value: "8"
			},
			{
				label: "Sections admin",
				value: "7"
			},
			{
				label: "Routes déclarées",
				value: "13"
			},
			{
				label: "Types de réservation",
				value: "3"
			}
		],
		uniqueFeature: "Une conciergerie digitale sans application : QR code en chambre → commande, service, avis — directement depuis Safari ou Chrome, aussi fluide qu'une app native. WhatsApp comme back-end : zéro serveur, zéro complexité pour l'hôtel."
	},
	{
		slug: "harmonie-signature",
		index: "04",
		title: "Harmonie Signature",
		client: "Complexe de loisirs & bien-être (Lomé, Togo)",
		year: "2025 – 2026",
		tags: ["Web"],
		stack: [
			"React 18",
			"TypeScript",
			"Vite 5",
			"Supabase",
			"React Router v6",
			"Lucide React"
		],
		cover: IMG("photo-1571019614242-c5c5dee9f50b"),
		gallery: [
			IMG("photo-1570831739435-6601aa3fa4fb"),
			IMG("photo-1517836357463-d25dfeac3438"),
			IMG("photo-1504674900247-0877df9cc836"),
			IMG("photo-1544148103-0773bf10d330")
		],
		intro: "Site web vitrine multi-pages et back-office admin pour un complexe de loisirs regroupant 6 univers — piscine, bowling, spa, fitness, tennis & basket, restaurant.",
		problem: "Le complexe n'avait aucune présence digitale à la hauteur de ses 6 activités. Pas de site, pas de menu digital, aucun outil pour que le personnel mette à jour horaires, tarifs ou statut ouvert/fermé sans toucher au code.",
		solution: "Site public multi-pages (une page dédiée par univers) + menu restaurant Tropicana avec panier et commande WhatsApp + back-office admin complet synchronisé sur Supabase avec fallback intégré sur données par défaut.",
		outcome: "10 pages publiques, 10 sections admin, 9 tables Supabase, 80+ articles menu, 100+ photos galeries — tout en production sur Vercel.",
		liveUrl: "#",
		contribution: [
			"Direction artistique complète, palette ink/gold/cream, animations CSS",
			"Frontend React 18 + TypeScript, React Router v6, composants CSS par page",
			"Schéma Supabase (9 tables), couche storage.ts avec fallbacks embarqués",
			"Menu digital Tropicana : 80+ articles, panier localStorage, commande WhatsApp",
			"Back-office admin : 10 sections CRUD, gestion médias, vidéos hero adaptatifs",
			"Scripts d'optimisation images & vidéos (sharp, ffmpeg-static)"
		],
		keyFigures: [
			{
				label: "Pages publiques",
				value: "10"
			},
			{
				label: "Sections admin",
				value: "10"
			},
			{
				label: "Articles menu Tropicana",
				value: "80+"
			},
			{
				label: "Prestations Spa",
				value: "44"
			},
			{
				label: "Photos galeries",
				value: "100+"
			},
			{
				label: "Tables Supabase",
				value: "9"
			}
		],
		uniqueFeature: "Un seul site React gère 6 activités très différentes avec une cohérence visuelle totale. Le site tient debout sans Supabase grâce à des fallbacks embarqués — zéro page blanche. Le back-office, pensé pour un personnel non technique, permet de tout modifier sans toucher au code."
	},
	{
		slug: "zanzibar-lome",
		index: "05",
		title: "ZanziBar Lomé",
		client: "Rooftop lounge tropical",
		year: "2024",
		tags: ["Web", "Branding"],
		stack: [
			"React",
			"Tailwind",
			"Framer Motion"
		],
		cover: IMG("photo-1533777857889-4be7c70b33f7"),
		gallery: [
			IMG("photo-1519671482749-fd09be7ccebf"),
			IMG("photo-1502920917128-1aa500764cbd"),
			IMG("photo-1544148103-0773bf10d330")
		],
		intro: "Concept rooftop tropical avec variation forte de couleur dominante par page — un effet « wow » assumé.",
		problem: "Se démarquer visuellement des autres projets hospitalité du portfolio.",
		solution: "Chaque page pousse une palette dominante différente, orchestrée par des transitions Framer Motion tenues.",
		outcome: "Le projet le plus expressif de la série hospitalité."
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
			IMG("photo-1546069901-ba9599a7e63c")
		],
		intro: "Application dix pages, menu ouest-africain au prix en FCFA, tableaux de bord protégés pour la gestion en salle.",
		problem: "Séparer proprement l'espace client public et l'espace salle privé.",
		solution: "Architecture Supabase avec RLS et zones protégées par code PIN pour l'équipe.",
		outcome: "Un outil complet, pas juste une vitrine."
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
			IMG("photo-1466637574441-749b8f19452f")
		],
		intro: "Panier d'épicerie via WhatsApp, architecture localStorage unifiée entre restaurant et épicerie.",
		problem: "Deux modules, une seule expérience client cohérente.",
		solution: "Modèle de données commun, transitions inter-modules invisibles, checkout WhatsApp Business.",
		outcome: "Zero backend à maintenir pour le client, tout tient dans le navigateur."
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
			IMG("photo-1523419409543-a5e549c1faa8")
		],
		intro: "Identité visuelle et narrative tissée autour de la tradition du masque Kaleta afro-brésilienne.",
		problem: "Faire vivre une histoire culturelle sans muséographier le lieu.",
		solution: "Mise en scène éditoriale forte, révélations Framer Motion au scroll, typographie de manifeste.",
		outcome: "Un site qui se lit autant qu'il se parcourt."
	},
	{
		slug: "sunset-beach-lounge",
		index: "09",
		title: "Le Sunset Beach Lounge",
		client: "Rooftop & beach lounge",
		year: "2024",
		tags: ["Web"],
		stack: [
			"React",
			"Tailwind",
			"Framer Motion"
		],
		cover: IMG("photo-1507525428034-b723cf961d3e"),
		gallery: [
			IMG("photo-1519046904884-53103b34b206"),
			IMG("photo-1505142468610-359e7d316be0"),
			IMG("photo-1520454974749-611b7248ffdb")
		],
		intro: "Combinaison de plusieurs systèmes de design en un projet unique, orienté ambiance golden-hour.",
		problem: "Unifier trois moments de la journée — plage, apéro, dîner — sous une même identité.",
		solution: "Un design system flexible avec trois modes de couleur dérivés du même socle.",
		outcome: "Un projet qui prouve la modularité du studio."
	},
	{
		slug: "aroma-cafe",
		index: "10",
		title: "AROMA CAFE",
		client: "Café contemporain chic",
		year: "2024",
		tags: ["Web", "Mobile"],
		stack: [
			"React",
			"Supabase",
			"Fraunces",
			"Manrope"
		],
		cover: IMG("photo-1495474472287-4d71bcdd2085"),
		gallery: [
			IMG("photo-1509042239860-f550ce710b93"),
			IMG("photo-1507133750040-4a8f57021571"),
			IMG("photo-1442512595331-e89e73853f31")
		],
		intro: "Application neuf pages : commande QR en salle, tableau de bord réception, panneau admin.",
		problem: "Un seul produit devait servir client, salle et gestion.",
		solution: "Trois interfaces sur le même socle React + Supabase, typographies Fraunces / Manrope, univers artisanal chaud.",
		outcome: "Un produit complet, prêt à scaler sur d'autres points de vente."
	}
];
function getProject(slug) {
	return projects.find((p) => p.slug === slug);
}
function getNextProject(slug) {
	const i = projects.findIndex((p) => p.slug === slug);
	if (i === -1) return projects[0];
	return projects[(i + 1) % projects.length];
}
//#endregion
export { getProject as n, projects as r, getNextProject as t };
