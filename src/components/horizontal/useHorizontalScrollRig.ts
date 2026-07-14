import { useEffect, useRef, useState, type RefObject } from "react";
import { useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Shared engineering for every pinned horizontal scroll section.
 * Returns refs + a horizontal x MotionValue driven by vertical scroll.
 * Falls back to native horizontal overflow on touch / reduced motion.
 */
export function useHorizontalScrollRig(
  itemCount: number,
  opts: { travelPerItem?: number; overscan?: number } = {},
): {
  wrapperRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
  x: MotionValue<string>;
  progress: MotionValue<number>;
  isPinned: boolean;
  wrapperHeight: string;
  scrollNext: () => void;
  scrollPrev: () => void;
} {
  const { travelPerItem = 380, overscan = 1 } = opts;
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isPinned, setIsPinned] = useState(true);
  const [viewportH, setViewportH] = useState(0);
  const [trackW, setTrackW] = useState(0);
  const [winW, setWinW] = useState(0);

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setIsPinned(!touch && !reduced);
    setViewportH(window.innerHeight);
    setWinW(window.innerWidth);
    const onResize = () => {
      setViewportH(window.innerHeight);
      setWinW(window.innerWidth);
      if (trackRef.current) setTrackW(trackRef.current.scrollWidth);
    };
    window.addEventListener("resize", onResize);
    if (trackRef.current) setTrackW(trackRef.current.scrollWidth);
    return () => window.removeEventListener("resize", onResize);
  }, [itemCount]);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(0, trackW - winW + 80);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const xString = useTransform(x, (v) => `${v}px`);

  const wrapperHeight =
    isPinned && viewportH
      ? `${viewportH + itemCount * travelPerItem * overscan}px`
      : "auto";

  const scrollNext = () => {
    if (isPinned) {
      window.scrollBy({ top: window.innerWidth * 0.6, behavior: "smooth" });
    } else if (trackRef.current) {
      trackRef.current.scrollBy({ left: window.innerWidth * 0.6, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (isPinned) {
      window.scrollBy({ top: -window.innerWidth * 0.6, behavior: "smooth" });
    } else if (trackRef.current) {
      trackRef.current.scrollBy({ left: -window.innerWidth * 0.6, behavior: "smooth" });
    }
  };

  return { wrapperRef, trackRef, x: xString, progress: scrollYProgress, isPinned, wrapperHeight, scrollNext, scrollPrev };
}
