//#region node_modules/.nitro/vite/services/ssr/assets/projects-DzKDpMo3.js
var projects = [
	{
		slug: "la-huqqa",
		index: "01",
		title: "La HuQQa",
		client: "La HuQQa (Restaurant-Café)",
		year: "2024",
		tags: ["Web"],
		stack: [
			"React 18",
			"TypeScript",
			"Tailwind CSS",
			"Supabase",
			"Realtime"
		],
		cover: "/projects/lahuqqa/accueil.png",
		gallery: [
			"/projects/lahuqqa/site1.png",
			"/projects/lahuqqa/site2.png",
			"/projects/lahuqqa/site3.png",
			"/projects/lahuqqa/site4.png"
		],
		intro: "Une plateforme digitale hybride alliant un site vitrine à l'esthétique premium « magazine » et une suite d'outils métier en temps réel (Menu QR, Dashboard, KDS).",
		problem: "Retranscrire l'atmosphère feutrée du lieu tout en fluidifiant la prise de commande en salle et la synchronisation avec la cuisine, sans ajouter de friction technique.",
		solution: "Création d'une plateforme web unifiée (React/Vite). Côté client : Web App Menu QR. Côté métier : Dashboard et KDS (Kitchen Display System) synchronisés via Supabase Realtime.",
		outcome: "Un écosystème hybride complet en production combinant la beauté visuelle d'un site vitrine premium et l'efficacité d'un SaaS métier sur-mesure.",
		liveUrl: "https://la-huqqa.vercel.app",
		repoUrl: "https://github.com/Otinelio/LaHuqqa",
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
		tags: ["Web"],
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
		cover: "/projects/togoliving/accueil.png",
		gallery: [
			"/projects/togoliving/site1.png",
			"/projects/togoliving/site2.png",
			"/projects/togoliving/site3.png",
			"/projects/togoliving/site4.png",
			"/projects/togoliving/site5.png",
			"/projects/togoliving/site6.png",
			"/projects/togoliving/site7.png"
		],
		intro: "Plateforme web complète pour une résidence balnéaire de luxe à 100 m de l'Océan Atlantique — vitrine immersive, conciergerie digitale par QR Code et dashboard back-office.",
		problem: "La résidence n'avait aucune présence digitale à la hauteur de son positionnement premium. Réservations par téléphone, services en chambre par appel à la réception, menus papier au restaurant.",
		solution: "Plateforme unifiée à double casquette : site immersif (animations Framer Motion, réservation WhatsApp) côté client, et dashboard complet (hébergements, commandes, abonnements FedaPay, statistiques) côté métier.",
		outcome: "Écosystème digital complet en production — site vitrine, conciergerie QR, menu restaurant digital, back-office admin — multilingue (FR/EN) déployé sur Vercel.",
		liveUrl: "https://www.residencetogoliving.com",
		repoUrl: "https://github.com/Otinelio/togoliving/",
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
		tags: ["Web"],
		stack: [
			"React 19",
			"TanStack Start",
			"TypeScript",
			"Tailwind CSS v4",
			"Framer Motion",
			"Zustand",
			"Radix UI"
		],
		cover: "/projects/playa/accueil.png",
		gallery: [
			"/projects/playa/site1.png",
			"/projects/playa/site2.png",
			"/projects/playa/site3.png",
			"/projects/playa/site4.png",
			"/projects/playa/site5.png",
			"/projects/playa/site6.png",
			"/projects/playa/site7.png",
			"/projects/playa/site8.png",
			"/projects/playa/site9.png"
		],
		intro: "Site vitrine et conciergerie digitale complète pour un beach resort premium — accessible depuis la chambre par simple scan de QR code, sans aucune installation.",
		problem: "Zéro présence digitale structurée. Réservations par téléphone, services en chambre inexistants en ligne, aucune visibilité sur les événements ou le menu. Il fallait bâtir un écosystème complet reflet du positionnement premium du lieu.",
		solution: "Site public direction artistique charcoal/gold/cream + conciergerie QR in-room (commande restaurant, ménage, signalement, guide local) + dashboard admin PIN-protégé + réservation express vers WhatsApp. Zéro backend, zéro app à télécharger.",
		outcome: "8 pages publiques, 7 sections admin, conciergerie mobile-first déployée sur Vercel — le tout sans serveur, sans gateway de paiement, opérationnel pour l'équipe dès le premier jour.",
		liveUrl: "https://villa-blanca1.vercel.app",
		repoUrl: "https://github.com/Otinelio/villa-blanca1",
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
		cover: "/projects/hs/accueil.png",
		gallery: [
			"/projects/hs/site1.png",
			"/projects/hs/site2.png",
			"/projects/hs/site3.png",
			"/projects/hs/site4.png",
			"/projects/hs/site5.png",
			"/projects/hs/site6.png"
		],
		intro: "Site web vitrine multi-pages et back-office admin pour un complexe de loisirs regroupant 6 univers — piscine, bowling, spa, fitness, tennis & basket, restaurant.",
		problem: "Le complexe n'avait aucune présence digitale à la hauteur de ses 6 activités. Pas de site, pas de menu digital, aucun outil pour que le personnel mette à jour horaires, tarifs ou statut ouvert/fermé sans toucher au code.",
		solution: "Site public multi-pages (une page dédiée par univers) + menu restaurant Tropicana avec panier et commande WhatsApp + back-office admin complet synchronisé sur Supabase avec fallback intégré sur données par défaut.",
		outcome: "10 pages publiques, 10 sections admin, 9 tables Supabase, 80+ articles menu, 100+ photos galeries — tout en production sur Vercel.",
		liveUrl: "https://harmoniesignature-lome.vercel.app",
		repoUrl: "https://github.com/Otinelio/harmoniesignature-lome",
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
		slug: "beefcut-grillhouse",
		index: "05",
		title: "Beefcut Grillhouse",
		client: "Restaurant Grillhouse (Lomé, Togo)",
		year: "2025",
		tags: ["Web"],
		stack: [
			"React 19",
			"Vite 8",
			"TypeScript",
			"Tailwind CSS v3",
			"React Router v7"
		],
		cover: "/projects/beefcut/accueil.png",
		gallery: [
			"/projects/beefcut/site1.png",
			"/projects/beefcut/site2.png",
			"/projects/beefcut/site3.png",
			"/projects/beefcut/site4.png",
			"/projects/beefcut/site5.png",
			"/projects/beefcut/site6.png"
		],
		intro: "Un écosystème applicatif complet conçu pour fonctionner sans aucun backend : site vitrine premium, menu digital sur table et KDS en cuisine.",
		problem: "Attirer avec une vitrine immersive (ambiance feu/braise) et digitaliser les commandes à table sans s'encombrer d'infrastructures lourdes ni de coûts cloud.",
		solution: "Application tout-en-un (Client, Admin, Cuisine) avec système de synchronisation locale temps réel (localStorage) entre les onglets.",
		outcome: "Site vitrine immersif, Menu QR, KDS Kanban en cuisine et Back-office Admin. Le tout fonctionne instantanément sans serveur.",
		liveUrl: "https://beefcut-grillhouse.vercel.app",
		repoUrl: "https://github.com/Otinelio/beefcut-grillhouse/",
		contribution: [
			"UI / UX Design (Dark/Red/Gold) et conception interfaces",
			"Architecture 100% sans serveur (persistance localStorage)",
			"Système de synchronisation temps réel inter-onglets",
			"Animations de particules CSS pur (BraiseParticles)"
		],
		keyFigures: [
			{
				label: "Temps de chargement Backend",
				value: "0 ms"
			},
			{
				label: "Vues métiers distinctes",
				value: "3"
			},
			{
				label: "Dépendances backend",
				value: "0"
			}
		],
		uniqueFeature: "Une infrastructure 100% autonome recréant une expérience KDS complète sans aucun serveur. L'identité visuelle plonge directement le client dans l'univers de la grillade avec de subtiles braises animées."
	},
	{
		slug: "riviera-ramatou-plage",
		index: "06",
		title: "Hotel Riviera Ramatou Plage",
		client: "Hotel Riviera Ramatou Plage (Lomé, Togo)",
		year: "2026",
		tags: ["Web"],
		stack: [
			"React 19",
			"TanStack Start",
			"TypeScript",
			"Zustand",
			"Tailwind CSS v4",
			"Framer Motion"
		],
		cover: "/projects/ramatou/accueil.png",
		gallery: [
			"/projects/ramatou/site1.png",
			"/projects/ramatou/site2.png",
			"/projects/ramatou/site3.png",
			"/projects/ramatou/site4.png",
			"/projects/ramatou/site5.png",
			"/projects/ramatou/site6.png",
			"/projects/ramatou/site7.png",
			"/projects/ramatou/site8.png",
			"/projects/ramatou/site9.png",
			"/projects/ramatou/site10.png",
			"/projects/ramatou/site11.png",
			"/projects/ramatou/site12.png",
			"/projects/ramatou/site13.png",
			"/projects/ramatou/site14.png",
			"/projects/ramatou/site15.png",
			"/projects/ramatou/site16.png",
			"/projects/ramatou/site17.png"
		],
		intro: "Vitrine premium, PMS léger et room service digital via QR code pour un hôtel-resort de bord de mer.",
		problem: "Digitaliser la logistique interne fragmentée (menus papier, gestion des chambres) et offrir une vitrine premium sans infrastructure serveur lourde.",
		solution: "Écosystème web tout-en-un (vitrine public + back-office PMS 11 modules + room service QR) basé sur Zustand et déployé à l'Edge.",
		outcome: "Site immersif avec animations Framer Motion, room service avec alertes sonores (Web Audio API) et gestion centralisée des chambres en temps réel.",
		liveUrl: "https://riviera-tau.vercel.app",
		repoUrl: "https://github.com/Otinelio/riviera/",
		contribution: [
			"Direction artistique tropicale et premium (navy, ivory, coral)",
			"Architecture Zustand unifiée agissant comme base de données en mémoire",
			"Développement du back-office PMS et room service live avec notifications natives",
			"Générateur de QR codes adaptatif pour l'impression"
		],
		keyFigures: [
			{
				label: "Modules d'administration",
				value: "11"
			},
			{
				label: "Entités gérées (Zustand)",
				value: "10"
			},
			{
				label: "Types d'états de chambre",
				value: "4"
			}
		],
		uniqueFeature: "Un véritable ERP hôtelier masqué derrière une vitrine fluide. Le room service digital recrée la cloche de comptoir grâce à l'API Web Audio, et le système tourne de manière autonome dans le navigateur sans backend grâce à Zustand persist."
	},
	{
		slug: "togo-market",
		index: "07",
		title: "Togo Market",
		client: "E-commerce & Marketplace (Togo)",
		year: "2026",
		tags: ["Mobile"],
		stack: [
			"Flutter",
			"Laravel",
			"MySQL",
			"WebSockets",
			"Firebase"
		],
		cover: "/projects/togomarket/accueil.jpeg",
		gallery: [
			"/projects/togomarket/site1.jpeg",
			"/projects/togomarket/site2.jpeg",
			"/projects/togomarket/site3.jpeg",
			"/projects/togomarket/site4.jpeg",
			"/projects/togomarket/site5.jpeg",
			"/projects/togomarket/site6.jpeg",
			"/projects/togomarket/site7.jpeg",
			"/projects/togomarket/site8.jpeg",
			"/projects/togomarket/site9.jpeg",
			"/projects/togomarket/site10.jpeg",
			"/projects/togomarket/site11.jpeg",
			"/projects/togomarket/site12.jpeg",
			"/projects/togomarket/site13.jpeg",
			"/projects/togomarket/site14.jpeg",
			"/projects/togomarket/site15.jpeg",
			"/projects/togomarket/site16.jpeg",
			"/projects/togomarket/site17.jpeg"
		],
		layout: "mobile",
		intro: "Application mobile de marketplace (C2C et B2C) structurant les échanges et sécurisant le processus d'achat/vente en ligne au Togo.",
		problem: "Les échanges locaux se font de manière désordonnée sur WhatsApp ou Facebook. Les produits disparaissent vite et l'historique est brouillon. Il manque une plateforme unifiée avec filtres et système de négociation direct.",
		solution: "Création d'une application Flutter (iOS/Android) couplée à un backend Laravel avec chat en temps réel rattaché spécifiquement aux produits pour faciliter la négociation et l'échange de preuves de paiement.",
		outcome: "En cours de développement. Architecture BDD robuste (15+ tables) conçue, et prototype de l'application native avec chat contextuel intégré.",
		repoUrl: "https://github.com/medard2004/Togo_market",
		backendRepoUrl: "https://github.com/Otinelio/laravel-togo-market",
		contribution: [
			"Architecture globale de l'application mobile et de l'API REST",
			"Design du schéma relationnel sur Laravel (gestion des états produits)",
			"Développement Mobile (Flutter) et State Management",
			"Développement Backend (WebSockets, Notifications FCM, API)"
		],
		keyFigures: [
			{
				label: "Entités en Base de Données",
				value: "15+ tables"
			},
			{
				label: "États de produit",
				value: "3 (Actif, Réservé, Vendu)"
			},
			{
				label: "Types d'utilisateurs",
				value: "3"
			}
		],
		uniqueFeature: "Une approche qui embrasse les réalités togolaises : l'absence de passerelle de paiement classique est compensée par un chat temps réel contextuel où les utilisateurs s'accordent et échangent leurs preuves de transfert (TMoney/Flooz). Le flux de réservation (type Vinted) rend l'expérience asynchrone sécurisée et parfaitement adaptée au marché."
	},
	{
		slug: "fashion-store",
		index: "08",
		title: "Fashion Store",
		client: "Projet Personnel",
		year: "2025",
		tags: ["Mobile"],
		stack: [
			"Flutter",
			"GetX",
			"Firebase",
			"GetStorage",
			"Lottie"
		],
		cover: "/projects/fashionstore/accueil.jpeg",
		gallery: [
			"/projects/fashionstore/screen1.jpeg",
			"/projects/fashionstore/screen2.jpeg",
			"/projects/fashionstore/screen3.jpeg",
			"/projects/fashionstore/screen4.jpeg",
			"/projects/fashionstore/screen5.jpeg",
			"/projects/fashionstore/screen6.jpeg",
			"/projects/fashionstore/screen7.jpeg",
			"/projects/fashionstore/screen8.jpeg",
			"/projects/fashionstore/screen9.jpeg",
			"/projects/fashionstore/screen10.jpeg",
			"/projects/fashionstore/screen11.jpeg",
			"/projects/fashionstore/screen12.jpeg",
			"/projects/fashionstore/screen13.jpeg",
			"/projects/fashionstore/screen14.jpeg",
			"/projects/fashionstore/screen15.jpeg"
		],
		layout: "mobile",
		intro: "Application e-commerce mobile complète offrant une vitrine rapide, fluide et attrayante pour l'achat de vêtements et accessoires en ligne.",
		problem: "Les applications e-commerce traditionnelles souffrent souvent de lenteurs et d'une gestion de l'état inefficace. Les utilisateurs recherchent une exploration rapide et fluide avec des fonctionnalités modernes.",
		solution: "Développement d'une application Flutter avec GetX pour une gestion d'état ultra-réactive, couplée à Firebase pour un backend robuste, temps réel et sans serveur.",
		outcome: "Un prototype avancé avec authentification complète, modélisation NoSQL, interface dynamique (mode sombre/clair) et animations vectorielles fluides.",
		repoUrl: "https://github.com/Otinelio/ecomApp-FAshion-Store",
		contribution: [
			"Développement de l'intégralité des interfaces utilisateur (UI) responsives en Flutter",
			"Architecture modulaire (controllers, models, services, utils, views)",
			"Intégration et configuration complète du backend Firebase (Auth, Firestore)",
			"Gestion avancée de l'état et du routage avec GetX"
		],
		keyFigures: [
			{
				label: "Écrans & Composants UI",
				value: "20+"
			},
			{
				label: "Plateformes cibles",
				value: "2 (Android & iOS)"
			},
			{
				label: "Dépendances majeures",
				value: "6"
			}
		],
		uniqueFeature: "L'intégration systématique de GetX englobe toute l'application, de la réactivité locale des composants (favoris, thèmes) à la gestion des sessions. Couplée à la puissance de Firebase, l'application offre une expérience quasi-native et riche en fonctionnalités avec une base de code unifiée et maintenable."
	},
	{
		slug: "drinkeazy",
		index: "09",
		title: "DrinkEazy",
		client: "DigitalVision (Restauration / Foodtech)",
		year: "2025",
		tags: ["Mobile"],
		stack: [
			"Flutter",
			"Laravel 12",
			"MySQL",
			"Sanctum",
			"Twilio",
			"Sendgrid"
		],
		cover: "/projects/drinkeazy/accueil.jpeg",
		gallery: [
			"/projects/drinkeazy/site1.jpeg",
			"/projects/drinkeazy/site2.jpeg",
			"/projects/drinkeazy/site3.jpeg",
			"/projects/drinkeazy/site4.jpeg",
			"/projects/drinkeazy/site5.jpeg",
			"/projects/drinkeazy/site6.jpeg",
			"/projects/drinkeazy/site7.jpeg",
			"/projects/drinkeazy/site8.jpeg",
			"/projects/drinkeazy/site9.jpeg",
			"/projects/drinkeazy/site10.jpeg",
			"/projects/drinkeazy/site11.jpeg",
			"/projects/drinkeazy/site12.jpeg",
			"/projects/drinkeazy/site13.jpeg",
			"/projects/drinkeazy/site14.jpeg"
		],
		layout: "mobile",
		intro: "Application mobile bidirectionnelle (Client et Staff) permettant de fluidifier la prise de commande par QR code dans les bars et restaurants bondés.",
		problem: "Temps d'attente interminables, erreurs de prise de commande et manque d'autonomie des clients lors des pics d'affluence. Les gérants manquent d'outils temps réel pour piloter les stocks.",
		solution: "Application mobile Flutter (App Client + App Admin) couplée à une API REST Laravel 12 pour une commande autonome à table avec gestion des stocks et de l'état des commandes en temps réel.",
		outcome: "Un écosystème complet avec authentification OTP sécurisée, génération de reçus PDF, et un dashboard intégré pour la gestion des promotions et ruptures de stock.",
		repoUrl: "https://github.com/digitalvisiontg-ux/DrinkEasy_Project",
		backendRepoUrl: "https://github.com/digitalvisiontg-ux/Laravel-Api-DrinkEazy-Project",
		contribution: [
			"Architecture de la base de données relationnelle (14 tables, SQLite/MySQL)",
			"Développement de l'API REST (Laravel) sécurisée via Sanctum",
			"Implémentation du flux d'authentification OTP multicanal (Twilio/Sendgrid)",
			"Développement Mobile Flutter (Provider/GetX) de l'interface Client et Admin"
		],
		keyFigures: [
			{
				label: "Entités en Base de Données",
				value: "14 tables"
			},
			{
				label: "Interfaces App",
				value: "2 en 1 (Client & Staff)"
			},
			{
				label: "Méthodes d'Authentification",
				value: "2 (OTP SMS & Email)"
			}
		],
		uniqueFeature: "Une application mobile qui embarque deux expériences métiers distinctes : un parcours fluide pour le client (scan, choix, commande) et un véritable outil de pilotage pour le gérant (gestion des commandes, ruptures de stock en 1 clic). L'identification OTP et le QR code tokenisé garantissent un flux parfaitement sécurisé."
	},
	{
		slug: "el-papiro",
		index: "10",
		title: "El Papiro",
		client: "DigitalVision (Supermarché & Épicerie)",
		year: "2025 – 2026",
		tags: ["Web"],
		stack: [
			"Laravel 11",
			"Blade",
			"Alpine.js",
			"Tailwind CSS",
			"Twilio (WhatsApp/SMS)",
			"MySQL"
		],
		cover: "/projects/elpapiro/accueil.png",
		gallery: [
			"/projects/elpapiro/detail-produit.png",
			"/projects/elpapiro/panier.png",
			"/projects/elpapiro/checkout.png",
			"/projects/elpapiro/checkout-2.png",
			"/projects/elpapiro/espace-profil.png",
			"/projects/elpapiro/selection.png",
			"/projects/elpapiro/mini-categorie.png",
			"/projects/elpapiro/espace-banniere.png",
			"/projects/elpapiro/comment-ca-marche.png"
		],
		intro: "Application Web E-Commerce & Marketplace permettant de réaliser ses courses alimentaires et ménagères en ligne avec des notifications directes par SMS/WhatsApp.",
		problem: "Les difficultés d'accès aux produits de consommation courante et les pertes de temps en magasin physique, combinées à une absence de visibilité en temps réel et de suivi direct par messagerie.",
		solution: "Plateforme e-commerce Laravel 11 complète avec gestion fine des catégories, espaces bannières publicitaires et notifications automatisées via Twilio (WhatsApp & SMS) pour chaque étape de la commande.",
		outcome: "Un écosystème e-commerce fluide avec gestion des rôles (User, Staff, Admin), panier/favoris dynamiques, et suivi de commande multi-canal instantané.",
		repoUrl: "https://github.com/Otinelio/El-Papiro",
		contribution: [
			"Architecture BDD relationnelle (14 tables: Users, Produits, Commandes, Pubs, etc.)",
			"Développement backend Laravel 11, contrôleurs d'administration et logique métier",
			"Intégration du service TwilioMessenger pour les notifications automatiques (WhatsApp & SMS)",
			"Système de Seeding dynamique avec téléchargement d'images haute définition"
		],
		keyFigures: [
			{
				label: "Tables en BDD",
				value: "14 tables"
			},
			{
				label: "Niveaux de Rôles",
				value: "3 (User, Staff, Admin)"
			},
			{
				label: "Canaux de Notification",
				value: "2 (WhatsApp API & SMS)"
			}
		],
		uniqueFeature: "El Papiro combine la puissance du e-commerce moderne à la réactivité de WhatsApp/SMS, offrant une expérience de vente directe ultra-accessible pour les clients et un outil de gestion clé en main pour les commerçants."
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
