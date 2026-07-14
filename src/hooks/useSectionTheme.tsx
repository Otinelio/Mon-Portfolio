import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type SectionTheme = "ink" | "paper";

interface Ctx {
  theme: SectionTheme;
  setTheme: (t: SectionTheme) => void;
}

const SectionThemeContext = createContext<Ctx>({
  theme: "ink",
  setTheme: () => {},
});

export function SectionThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<SectionTheme>("ink");
  return (
    <SectionThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </SectionThemeContext.Provider>
  );
}

export function useSectionTheme() {
  return useContext(SectionThemeContext);
}

/**
 * Attach this to any full-height section wrapper. When the section
 * crosses the vertical center of the viewport, it broadcasts its theme
 * so the vertical nav can auto-invert.
 */
export function useDeclareSectionTheme(
  ref: React.RefObject<HTMLElement | null>,
  theme: SectionTheme,
) {
  const { setTheme } = useSectionTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setTheme(theme);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, theme, setTheme]);
}
