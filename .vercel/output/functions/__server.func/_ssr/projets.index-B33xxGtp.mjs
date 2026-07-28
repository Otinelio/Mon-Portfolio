import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Footer } from "./routes-CF4UgTdl.mjs";
import { t as useHorizontalScrollRig } from "./useHorizontalScrollRig-BPmGxn71.mjs";
import { r as projects } from "./projects-Dk_kzS0t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets.index-B33xxGtp.js
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
	const rig = useHorizontalScrollRig(filtered.length, { travelPerItem: 420 });
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
				className: "sticky top-0 h-screen overflow-hidden",
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
					className: rig.isPinned ? "flex h-full items-center gap-8 px-6 lg:px-24" : "no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 py-16",
					style: rig.isPinned ? {
						x: rig.x,
						willChange: "transform"
					} : void 0,
					children: [filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeeAllCard, {})]
				})]
			})
		})]
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projets/$slug",
		params: { slug: project.slug },
		className: "group relative block h-[70vh] w-[70vw] shrink-0 overflow-hidden md:w-[52vw] lg:w-[38vw]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.cover,
				alt: project.title,
				loading: "lazy",
				className: "bw-hover-ember h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs uppercase tracking-[0.18em]",
						style: {
							fontFamily: "var(--font-mono)",
							color: "var(--paper)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: "var(--lime)" },
							children: project.index
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: project.year })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "display-section",
						style: {
							color: "var(--paper)",
							fontSize: "clamp(1.8rem, 3vw, 3rem)"
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
function SeeAllCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/projets",
		className: "group flex h-[70vh] w-[50vw] shrink-0 flex-col items-start justify-end gap-6 border border-white/15 p-8 md:w-[36vw] lg:w-[26vw]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				style: { color: "var(--lime)" },
				children: "→ Voir"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "display-section",
				style: {
					color: "var(--paper)",
					fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)"
				},
				children: "Tous les projets"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				size: 40,
				strokeWidth: 1.5,
				style: { color: "var(--paper)" }
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
