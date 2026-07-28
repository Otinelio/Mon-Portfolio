import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as useSectionTheme, t as SectionThemeProvider } from "./useSectionTheme-sAEUATbs.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as House, d as FileText, n as Sparkles, o as Mail, t as User, u as FolderGit2 } from "../_libs/lucide-react.mjs";
import { n as Route$7 } from "./routes-CF4UgTdl.mjs";
import { r as projects } from "./projects-Dk_kzS0t.mjs";
import { t as Route$8 } from "./projets._slug-CHIMD6y_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Nq_35rrk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CAQYeLIb.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
var items$1 = [
	{
		to: "/",
		label: "Accueil",
		icon: House
	},
	{
		to: "/projets",
		label: "Projets",
		icon: FolderGit2,
		matchPrefix: "/projets"
	},
	{
		to: "/about",
		label: "À propos",
		icon: User,
		matchPrefix: "/about"
	},
	{
		to: "/about",
		hash: "competences",
		label: "Compétences",
		icon: Sparkles,
		matchPrefix: "/about",
		tighter: true,
		subDest: true
	},
	{
		to: "/contact",
		label: "Contact",
		icon: Mail
	},
	{
		to: "/cv",
		label: "CV",
		icon: FileText,
		detached: true
	}
];
function VerticalNavbar() {
	const { theme } = useSectionTheme();
	const inkMode = theme === "ink";
	const iconColor = inkMode ? "var(--paper)" : "var(--ink)";
	const bgIdle = inkMode ? "rgba(247,246,243,0.08)" : "rgba(10,10,10,0.08)";
	const bgActive = inkMode ? "var(--paper)" : "var(--ink)";
	const labelBg = inkMode ? "var(--paper)" : "var(--ink)";
	const labelFg = inkMode ? "var(--ink)" : "var(--paper)";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		"aria-label": "Navigation principale",
		className: "pointer-events-none fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollRail, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "pointer-events-auto flex flex-col gap-6 pl-6",
			children: items$1.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavIcon, {
				item: it,
				iconColor,
				bgIdle,
				bgActive,
				labelBg,
				labelFg
			}, i))
		})]
	});
}
function NavIcon({ item, iconColor, bgIdle, bgActive, labelBg, labelFg }) {
	const [hover, setHover] = (0, import_react.useState)(false);
	const location = useLocation();
	const active = item.matchPrefix ? location.pathname === item.matchPrefix || location.pathname.startsWith(item.matchPrefix + "/") : location.pathname === item.to;
	const Icon = item.icon;
	const marginTop = item.detached ? "mt-6" : item.tighter ? "-mt-3" : "";
	const iconSize = item.subDest ? 18 : 20;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
		className: `relative flex items-center ${marginTop}`,
		onMouseEnter: () => setHover(true),
		onMouseLeave: () => setHover(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: item.to,
			hash: item.hash,
			"aria-label": item.label,
			className: "relative flex items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: "relative flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md",
				style: {
					backgroundColor: active ? bgActive : bgIdle,
					outline: item.detached ? `1.5px solid var(--lime)` : "none",
					outlineOffset: item.detached ? "3px" : 0
				},
				animate: { scale: hover ? 1.06 : 1 },
				transition: {
					type: "spring",
					stiffness: 320,
					damping: 22
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: iconSize,
					strokeWidth: 1.5,
					color: active ? bgActive === "var(--paper)" ? "var(--ink)" : "var(--paper)" : iconColor
				}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute -right-1 -top-1 h-2 w-2 rounded-full",
					style: { backgroundColor: "var(--lime)" }
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: hover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					opacity: 0,
					x: -6,
					width: 0
				},
				animate: {
					opacity: 1,
					x: 0,
					width: "auto"
				},
				exit: {
					opacity: 0,
					x: -6,
					width: 0
				},
				transition: {
					type: "spring",
					stiffness: 300,
					damping: 26
				},
				className: "ml-3 overflow-hidden whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.18em]",
				style: {
					backgroundColor: labelBg,
					color: labelFg,
					fontFamily: "var(--font-mono)"
				},
				children: item.label
			}) })]
		})
	});
}
function ScrollRail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute left-2 top-[-40vh] h-[80vh] w-px overflow-hidden",
		style: { backgroundColor: "rgba(247,246,243,0.14)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute inset-x-0 top-0 origin-top",
			style: {
				backgroundColor: "var(--lime)",
				height: "100%"
			},
			initial: { scaleY: 0 },
			animate: { scaleY: 1 },
			transition: { duration: .8 }
		})
	});
}
var items = [
	{
		n: "01",
		to: "/",
		label: "Accueil",
		match: "/"
	},
	{
		n: "02",
		to: "/projets",
		label: "Projets",
		match: "/projets"
	},
	{
		n: "03",
		to: "/about",
		label: "À propos",
		match: "/about"
	},
	{
		n: "04",
		to: "/about",
		hash: "competences",
		label: "Compétences",
		match: "/about"
	},
	{
		n: "05",
		to: "/contact",
		label: "Contact",
		match: "/contact"
	},
	{
		n: "06",
		to: "/cv",
		label: "CV",
		match: "/cv",
		detached: true
	}
];
function MobileNavButton() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => setOpen((o) => !o),
		"aria-label": open ? "Fermer le menu" : "Ouvrir le menu",
		className: "active:scale-95 fixed bottom-6 left-1/2 z-[60] flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full backdrop-blur-md transition-transform lg:hidden",
		style: {
			backgroundColor: open ? "var(--paper)" : "rgba(10,10,10,0.85)",
			border: "1.5px solid var(--lime)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MorphIcon, { open })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { clipPath: "circle(0% at 50% 100%)" },
		animate: { clipPath: "circle(150% at 50% 100%)" },
		exit: { clipPath: "circle(0% at 50% 100%)" },
		transition: {
			duration: .55,
			ease: [
				.85,
				0,
				.15,
				1
			]
		},
		drag: "y",
		dragConstraints: {
			top: 0,
			bottom: 0
		},
		onDragEnd: (_, info) => info.offset.y > 100 && setOpen(false),
		className: "fixed inset-0 z-[55] flex flex-col justify-center lg:hidden",
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-2 px-8",
			children: items.map((it, i) => {
				const active = it.match === "/" ? location.pathname === "/" : location.pathname === it.match || location.pathname.startsWith(it.match + "/");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						y: 24
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .15 + i * .06,
						type: "spring",
						stiffness: 220,
						damping: 24
					},
					className: it.detached ? "mt-6" : "",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: it.to,
						hash: it.hash,
						onClick: () => setOpen(false),
						className: "group flex items-baseline gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs",
								style: {
									color: "var(--lime)",
									fontFamily: "var(--font-mono)"
								},
								children: it.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-section",
								style: {
									color: "var(--paper)",
									fontSize: "clamp(2.5rem, 12vw, 4rem)",
									padding: it.detached ? "0.25rem 0.75rem" : 0,
									outline: it.detached ? "1.5px solid var(--lime)" : "none"
								},
								children: it.label
							}),
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-3 w-3 rounded-full",
								style: { backgroundColor: "var(--lime)" }
							})
						]
					})
				}, i);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "absolute bottom-28 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em]",
			style: {
				color: "var(--paper)",
				opacity: .5,
				fontFamily: "var(--font-mono)"
			},
			children: "Glisser vers le bas pour fermer"
		})]
	}, "overlay") })] });
}
function MorphIcon({ open }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: "22",
		height: "22",
		viewBox: "0 0 22 22",
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "4",
				cy: "11",
				r: "1.6",
				fill: open ? "var(--ink)" : "var(--paper)",
				animate: {
					opacity: open ? 0 : 1,
					cx: open ? 11 : 4
				},
				transition: { duration: .3 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
				x1: "4",
				y1: "4",
				x2: "18",
				y2: "18",
				stroke: open ? "var(--ink)" : "var(--paper)",
				strokeWidth: "1.8",
				strokeLinecap: "round",
				animate: { pathLength: open ? 1 : 0 },
				transition: { duration: .3 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
				x1: "18",
				y1: "4",
				x2: "4",
				y2: "18",
				stroke: open ? "var(--ink)" : "var(--paper)",
				strokeWidth: "1.8",
				strokeLinecap: "round",
				animate: { pathLength: open ? 1 : 0 },
				transition: { duration: .3 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "11",
				cy: "11",
				r: "1.6",
				fill: open ? "var(--ink)" : "var(--paper)",
				animate: { opacity: open ? 0 : 1 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "18",
				cy: "11",
				r: "1.6",
				fill: open ? "var(--ink)" : "var(--paper)",
				animate: {
					opacity: open ? 0 : 1,
					cx: open ? 11 : 18
				},
				transition: { duration: .3 }
			})
		]
	});
}
/**
* Lightweight Lenis smooth scroll — loaded only on the client.
* Disabled when prefers-reduced-motion is set.
*/
function useSmoothScroll() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let raf = 0;
		let lenis = null;
		(async () => {
			const Lenis = (await import("../_libs/lenis.mjs").then((n) => n.t)).default;
			lenis = new Lenis({
				duration: 1.15,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
				smoothWheel: true
			});
			const loop = (time) => {
				lenis.raf(time);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		})();
		return () => {
			cancelAnimationFrame(raf);
			lenis?.destroy();
		};
	}, []);
}
function PageTransition({ children }) {
	const location = useLocation();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		mode: "wait",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .35,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { scaleY: 1 },
				animate: { scaleY: 0 },
				transition: {
					duration: .55,
					ease: [
						.85,
						0,
						.15,
						1
					]
				},
				style: {
					transformOrigin: "top",
					backgroundColor: "var(--ink)",
					position: "fixed",
					inset: 0,
					zIndex: 40,
					pointerEvents: "none"
				}
			}), children]
		}, location.pathname)
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center gap-6 px-6",
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				style: { color: "var(--lime)" },
				children: "404 — page introuvable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-hero text-center",
				children: "Cette page n'existe pas."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]",
				style: {
					color: "var(--paper)",
					fontFamily: "var(--font-mono)"
				},
				children: "Retour à l'accueil"
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center gap-6 px-6",
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				style: { color: "var(--ember)" },
				children: "Erreur"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-section text-center",
				children: "Cette page n'a pas pu se charger."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--paper)",
						fontFamily: "var(--font-mono)"
					},
					children: "Réessayer"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em]",
					style: {
						color: "var(--paper)",
						fontFamily: "var(--font-mono)"
					},
					children: "Accueil"
				})]
			})
		]
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Kengbo Othnelio Raphaëlo — Développeur Web & Mobile · DigitalVision" },
			{
				name: "description",
				content: "Portfolio de Kengbo Othnelio Raphaëlo, développeur web & mobile full-stack basé à Lomé. Cofondateur du studio DigitalVision (Dvision)."
			},
			{
				name: "author",
				content: "Kengbo Othnelio Raphaëlo"
			},
			{
				property: "og:site_name",
				content: "DigitalVision"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "Kengbo Othnelio Raphaëlo — DigitalVision"
			},
			{
				property: "og:description",
				content: "Développeur web & mobile full-stack. Expériences digitales sur-mesure pour hôtellerie, restauration et commerce."
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fr",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	useSmoothScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SectionThemeProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerticalNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileNavButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTransition, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
		] })
	});
}
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/projets",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/cv",
				changefreq: "monthly",
				priority: "0.6"
			},
			...projects.map((p) => ({
				path: `/projets/${p.slug}`,
				changefreq: "monthly",
				priority: "0.7"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./projets-cOvFY6e9.mjs");
var Route$4 = createFileRoute("/projets")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./cv-adm-r-L0.mjs");
var Route$3 = createFileRoute("/cv")({
	head: () => ({
		meta: [
			{ title: "CV — Kengbo Othnelio Raphaëlo · DigitalVision" },
			{
				name: "description",
				content: "Curriculum vitae de Kengbo Othnelio Raphaëlo, développeur web & mobile full-stack."
			},
			{
				property: "og:title",
				content: "CV — Kengbo Othnelio Raphaëlo"
			},
			{
				property: "og:description",
				content: "Curriculum vitae, à télécharger ou consulter en ligne."
			},
			{
				property: "og:url",
				content: "/cv"
			}
		],
		links: [{
			rel: "canonical",
			href: "/cv"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BBpWLVvL.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Kengbo Othnelio Raphaëlo · DigitalVision" },
			{
				name: "description",
				content: "Discutons de votre prochain projet. Développeur web & mobile basé à Lomé, disponible à distance et sur place."
			},
			{
				property: "og:title",
				content: "Contact — DigitalVision"
			},
			{
				property: "og:description",
				content: "Basé à Lomé, disponible pour des projets à distance et sur place."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-Dw3TwM1j.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "À propos — Kengbo Othnelio Raphaëlo · DigitalVision" },
			{
				name: "description",
				content: "Développeur web & mobile full-stack basé à Lomé, cofondateur de DigitalVision. Trois ans d'expérience, dix projets livrés."
			},
			{
				property: "og:title",
				content: "À propos — Kengbo Othnelio Raphaëlo"
			},
			{
				property: "og:description",
				content: "L'histoire du studio DigitalVision et de son cofondateur."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./projets.index-B33xxGtp.mjs");
var Route = createFileRoute("/projets/")({
	head: () => ({
		meta: [
			{ title: "Projets — Kengbo Othnelio Raphaëlo · DigitalVision" },
			{
				name: "description",
				content: "Sélection de projets web et mobile signés DigitalVision — hospitalité, restauration et commerce à Lomé."
			},
			{
				property: "og:title",
				content: "Projets — DigitalVision"
			},
			{
				property: "og:description",
				content: "Sélection de projets web et mobile signés DigitalVision."
			},
			{
				property: "og:url",
				content: "/projets"
			}
		],
		links: [{
			rel: "canonical",
			href: "/projets"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var ProjetsRoute = Route$4.update({
	id: "/projets",
	path: "/projets",
	getParentRoute: () => Route$6
});
var CvRoute = Route$3.update({
	id: "/cv",
	path: "/cv",
	getParentRoute: () => Route$6
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$6
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$6
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ProjetsIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => ProjetsRoute
});
var ProjetsRouteChildren = {
	ProjetsSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => ProjetsRoute
	}),
	ProjetsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CvRoute,
	ProjetsRoute: ProjetsRoute._addFileChildren(ProjetsRouteChildren),
	SitemapDotxmlRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
