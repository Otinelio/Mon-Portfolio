import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useSectionTheme-sAEUATbs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SectionThemeContext = (0, import_react.createContext)({
	theme: "ink",
	setTheme: () => {}
});
function SectionThemeProvider({ children }) {
	const [theme, setTheme] = (0, import_react.useState)("ink");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionThemeContext.Provider, {
		value: {
			theme,
			setTheme
		},
		children
	});
}
function useSectionTheme() {
	return (0, import_react.useContext)(SectionThemeContext);
}
/**
* Attach this to any full-height section wrapper. When the section
* crosses the vertical center of the viewport, it broadcasts its theme
* so the vertical nav can auto-invert.
*/
function useDeclareSectionTheme(ref, theme) {
	const { setTheme } = useSectionTheme();
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) setTheme(theme);
		}, {
			rootMargin: "-45% 0px -45% 0px",
			threshold: 0
		});
		io.observe(el);
		return () => io.disconnect();
	}, [
		ref,
		theme,
		setTheme
	]);
}
//#endregion
export { useDeclareSectionTheme as n, useSectionTheme as r, SectionThemeProvider as t };
