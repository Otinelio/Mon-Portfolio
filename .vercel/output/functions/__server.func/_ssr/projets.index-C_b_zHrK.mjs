import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as Github } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-Cevld2U2.mjs";
import { t as useHorizontalScrollRig } from "./useHorizontalScrollRig-lcp0tcPt.mjs";
import { r as projects } from "./projects-DzKDpMo3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets.index-C_b_zHrK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TAGS = [
	"Tous",
	"Web",
	"Mobile",
	"Branding"
];
function HorizontalGallery() {
	const [filter, setFilter] = (0, import_react.useState)("Tous");
	const filtered = filter === "Tous" ? projects : projects.filter((p) => p.tags.includes(filter));
	const rig = useHorizontalScrollRig(filtered.length + 1, { travelPerItem: 420 });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		style: { backgroundColor: "var(--ink)" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-white/10 px-6 pb-6 pt-32 lg:px-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "eyebrow mb-6",
					style: { color: "var(--lime)" },
					children: ["Projets — 01 à ", String(projects.length).padStart(2, "0")]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-hero",
					style: { color: "var(--paper)" },
					children: "Travaux"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap gap-2",
					children: TAGS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(t),
						className: "border px-4 py-1.5 text-xs uppercase tracking-[0.18em] transition-colors",
						style: {
							fontFamily: "var(--font-mono)",
							borderColor: filter === t ? "var(--lime)" : "rgba(247,246,243,0.2)",
							color: filter === t ? "var(--lime)" : "var(--paper)",
							backgroundColor: filter === t ? "rgba(212,255,63,0.08)" : "transparent"
						},
						children: t
					}, t))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: rig.wrapperRef,
			style: { height: rig.wrapperHeight },
			className: "relative",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: rig.isPinned ? "sticky top-0 h-screen overflow-hidden" : "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-0 right-0 top-0 h-px",
					style: { backgroundColor: "rgba(247,246,243,0.1)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "h-full origin-left",
						style: {
							backgroundColor: "var(--lime)",
							scaleX: rig.progress
						}
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					ref: rig.trackRef,
					className: rig.isPinned ? "flex h-full items-center gap-8 px-6 lg:px-24" : "flex flex-col gap-8 px-6 py-16 w-full",
					style: rig.isPinned ? {
						x: rig.x,
						willChange: "transform"
					} : void 0,
					children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						project: p,
						isPinned: rig.isPinned
					}, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://github.com/otinelio",
						target: "_blank",
						rel: "noopener noreferrer",
						className: `group flex shrink-0 flex-col items-start justify-end gap-4 border border-white/15 p-6 transition-colors hover:border-[color:var(--lime)] hover:bg-[color:var(--lime)] ${rig.isPinned ? "h-[70vh] w-[46vw] md:w-[28vw] lg:w-[20vw]" : "h-[30vh] w-full"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, {
							size: 32,
							strokeWidth: 1.5,
							className: "text-[color:var(--lime)] group-hover:text-[color:var(--ink)] transition-colors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl text-[color:var(--paper)] group-hover:text-[color:var(--ink)] transition-colors",
							style: {
								fontFamily: "var(--font-display)",
								fontWeight: 900
							},
							children: "Voir tous mes projets sur GitHub →"
						})]
					})]
				})]
			})
		})]
	});
}
function ProjectCard({ project, isPinned = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projets/$slug",
		params: { slug: project.slug },
		className: `group relative block shrink-0 overflow-hidden ${isPinned ? "h-[70vh] w-[70vw] md:w-[52vw] lg:w-[38vw]" : "h-[50vh] w-full"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.cover,
				alt: project.title,
				loading: "lazy",
				className: "bw-hover-ember h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs uppercase tracking-[0.18em]",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--paper)",
							textShadow: "0px 2px 4px rgba(0,0,0,0.8)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--lime)" },
							children: project.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.year })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display-section",
						style: {
							color: "var(--lime)",
							fontSize: "clamp(1.8rem, 3vw, 3rem)",
							textShadow: "0px 4px 12px rgba(0,0,0,0.9)"
						},
						children: project.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: project.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 py-0.5 text-[10px] uppercase tracking-[0.2em]",
							style: {
								fontFamily: "var(--font-mono)",
								backgroundColor: "var(--ember)",
								color: "var(--ink)"
							},
							children: t
						}, t))
					})
				]
			})
		]
	});
}
function ProjetsIndex() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HorizontalGallery, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})]
	});
}
//#endregion
export { ProjetsIndex as component };
