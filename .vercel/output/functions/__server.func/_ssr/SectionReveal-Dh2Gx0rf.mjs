import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionReveal-Dh2Gx0rf.js
var import_jsx_runtime = require_jsx_runtime();
function SectionReveal({ children, delay = 0, y = 30, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: false,
			margin: "-10%"
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
/**
* Word-by-word masked reveal. Uses animate-on-mount by default so it
* plays reliably even under Lenis smooth-scroll where whileInView can
* miss its first trigger.
*/
function SplitReveal({ text, className, style, onMount = true, delayBase = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className,
		style,
		children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-block overflow-hidden pr-[0.25em] align-baseline",
			style: { lineHeight: .95 },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: { y: "110%" },
				...onMount ? { animate: { y: "0%" } } : {
					whileInView: { y: "0%" },
					viewport: {
						once: false,
						margin: "-10%"
					}
				},
				transition: {
					duration: .75,
					delay: delayBase + i * .06,
					ease: [
						.22,
						1,
						.36,
						1
					]
				},
				className: "inline-block",
				children: w
			})
		}, i))
	});
}
//#endregion
export { SplitReveal as n, SectionReveal as t };
