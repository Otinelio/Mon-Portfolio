import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useDeclareSectionTheme } from "./useSectionTheme-sAEUATbs.mjs";
import { d as FileText, f as ExternalLink, p as Download } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-B4-GZ8Ol.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CV_PDF_URL = "/othnelio_cv.pdf";
var CV_FILE_NAME = "Kengbo-Othnelio-Raphaelo-CV.pdf";
function CvViewer() {
	const hasCv = Boolean(CV_PDF_URL);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		style: {
			backgroundColor: "var(--ink)",
			color: "var(--paper)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-6 lg:px-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
					size: 20,
					strokeWidth: 1.5,
					style: { color: "var(--paper)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					style: { color: "var(--ember)" },
					children: "CV"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm",
					style: {
						color: "var(--paper)",
						fontFamily: "var(--font-mono)"
					},
					children: "Kengbo Othnelio Raphaëlo"
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: hasCv ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CV_PDF_URL,
					download: CV_FILE_NAME,
					className: "flex items-center gap-2 border border-[color:var(--lime)] px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--paper)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
						size: 14,
						strokeWidth: 1.5
					}), " Télécharger le CV"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: CV_PDF_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex items-center gap-2 border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:border-[color:var(--paper)]",
					style: {
						fontFamily: "var(--font-mono)",
						color: "var(--paper)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
						size: 14,
						strokeWidth: 1.5
					}), " Ouvrir dans un nouvel onglet"]
				})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.18em]",
					style: {
						color: "var(--ember)",
						fontFamily: "var(--font-mono)"
					},
					children: "CV bientôt disponible"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-1",
			children: hasCv ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("object", {
				data: CV_PDF_URL,
				type: "application/pdf",
				className: "h-[85vh] w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: CV_PDF_URL,
					title: "CV — Kengbo Othnelio Raphaëlo",
					className: "h-[85vh] w-full"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-full items-center justify-center py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-md text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display-section mb-4",
						style: {
							color: "var(--paper)",
							fontSize: "clamp(2rem, 4vw, 3.5rem)"
						},
						children: "CV bientôt en ligne."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						style: {
							color: "var(--paper)",
							opacity: .6
						},
						children: [
							"Le fichier sera hébergé à l'adresse configurée dans ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								style: { fontFamily: "var(--font-mono)" },
								children: "src/config/cv.ts"
							}),
							"."
						]
					})]
				})
			})
		})]
	});
}
function CvPage() {
	const ref = (0, import_react.useRef)(null);
	useDeclareSectionTheme(ref, "ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvViewer, {})
	});
}
//#endregion
export { CvPage as component };
