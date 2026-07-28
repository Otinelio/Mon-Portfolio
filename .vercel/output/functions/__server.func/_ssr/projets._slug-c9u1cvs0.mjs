import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projets._slug-c9u1cvs0.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "flex min-h-screen items-center justify-center",
	style: {
		backgroundColor: "var(--ink)",
		color: "var(--paper)"
	},
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-4",
				style: { color: "var(--ember)" },
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-section mb-6",
				children: "Projet introuvable"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/projets",
				className: "text-xs uppercase tracking-[0.2em] underline",
				style: { fontFamily: "var(--font-mono)" },
				children: "← Retour aux projets"
			})
		]
	})
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
