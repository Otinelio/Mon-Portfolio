import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/useHorizontalScrollRig-lcp0tcPt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Shared engineering for every pinned horizontal scroll section.
* Returns refs + a horizontal x MotionValue driven by vertical scroll.
* Falls back to native horizontal overflow only on reduced motion.
*/
function useHorizontalScrollRig(itemCount, opts = {}) {
	const { travelPerItem = 600, overscan = 1 } = opts;
	const wrapperRef = (0, import_react.useRef)(null);
	const trackRef = (0, import_react.useRef)(null);
	const [isPinned, setIsPinned] = (0, import_react.useState)(true);
	const [viewportH, setViewportH] = (0, import_react.useState)(0);
	const [trackW, setTrackW] = (0, import_react.useState)(0);
	const [winW, setWinW] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const checkIsPinned = () => {
			const touch = window.matchMedia("(pointer: coarse)").matches;
			const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
			const isMobileSize = window.innerWidth < 768;
			return !(touch || isMobileSize || reduced);
		};
		setIsPinned(checkIsPinned());
		setViewportH(window.innerHeight);
		setWinW(window.innerWidth);
		const onResize = () => {
			setViewportH(window.innerHeight);
			setWinW(window.innerWidth);
			setIsPinned(checkIsPinned());
			if (trackRef.current) setTrackW(trackRef.current.scrollWidth);
		};
		window.addEventListener("resize", onResize);
		if (trackRef.current) setTrackW(trackRef.current.scrollWidth);
		return () => window.removeEventListener("resize", onResize);
	}, [itemCount]);
	const { scrollYProgress } = useScroll({
		target: wrapperRef,
		offset: ["start start", "end end"]
	});
	const xString = useTransform(useTransform(scrollYProgress, [0, 1], [0, -Math.max(0, trackW - winW + 80)]), (v) => `${v}px`);
	const wrapperHeight = isPinned && viewportH ? `${viewportH + itemCount * travelPerItem * overscan}px` : "auto";
	const scrollNext = () => {
		if (isPinned) window.scrollBy({
			top: window.innerWidth * .6,
			behavior: "smooth"
		});
		else if (trackRef.current) trackRef.current.scrollBy({
			left: window.innerWidth * .6,
			behavior: "smooth"
		});
	};
	const scrollPrev = () => {
		if (isPinned) window.scrollBy({
			top: -window.innerWidth * .6,
			behavior: "smooth"
		});
		else if (trackRef.current) trackRef.current.scrollBy({
			left: -window.innerWidth * .6,
			behavior: "smooth"
		});
	};
	return {
		wrapperRef,
		trackRef,
		x: xString,
		progress: scrollYProgress,
		isPinned,
		wrapperHeight,
		scrollNext,
		scrollPrev
	};
}
//#endregion
export { useHorizontalScrollRig as t };
