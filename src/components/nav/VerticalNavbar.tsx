import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderGit2, User, Sparkles, Mail, FileText } from "lucide-react";
import { useState } from "react";
import { useSectionTheme } from "@/hooks/useSectionTheme";

interface NavItem {
  to: string;
  label: string;
  icon: typeof Home;
  hash?: string;
  matchPrefix?: string;
  tighter?: boolean; // grouped tighter to previous item
  subDest?: boolean; // slightly smaller weight
  detached?: boolean; // extra top margin + permanent lime ring
}

const items: NavItem[] = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/projets", label: "Projets", icon: FolderGit2, matchPrefix: "/projets" },
  { to: "/about", label: "À propos", icon: User, matchPrefix: "/about" },
  { to: "/about", hash: "competences", label: "Compétences", icon: Sparkles, matchPrefix: "/about", tighter: true, subDest: true },
  { to: "/contact", label: "Contact", icon: Mail },
  { to: "/cv", label: "CV", icon: FileText, detached: true },
];

export function VerticalNavbar() {
  const { theme } = useSectionTheme();
  const inkMode = theme === "ink"; // dark background → paper icons
  const iconColor = inkMode ? "var(--paper)" : "var(--ink)";
  const bgIdle = inkMode ? "rgba(247,246,243,0.08)" : "rgba(10,10,10,0.08)";
  const bgActive = inkMode ? "var(--paper)" : "var(--ink)";
  const labelBg = inkMode ? "var(--paper)" : "var(--ink)";
  const labelFg = inkMode ? "var(--ink)" : "var(--paper)";

  return (
    <nav
      aria-label="Navigation principale"
      className="pointer-events-none fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
    >
      {/* thin vertical progress rail */}
      <ScrollRail />
      <ul className="pointer-events-auto flex flex-col gap-6 pl-6">
        {items.map((it, i) => (
          <NavIcon
            key={i}
            item={it}
            iconColor={iconColor}
            bgIdle={bgIdle}
            bgActive={bgActive}
            labelBg={labelBg}
            labelFg={labelFg}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavIcon({
  item,
  iconColor,
  bgIdle,
  bgActive,
  labelBg,
  labelFg,
}: {
  item: NavItem;
  iconColor: string;
  bgIdle: string;
  bgActive: string;
  labelBg: string;
  labelFg: string;
}) {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const active = item.matchPrefix
    ? location.pathname === item.matchPrefix || location.pathname.startsWith(item.matchPrefix + "/")
    : location.pathname === item.to;
  const Icon = item.icon;

  const marginTop = item.detached ? "mt-6" : item.tighter ? "-mt-3" : "";
  const iconSize = item.subDest ? 18 : 20;

  return (
    <li
      className={`relative flex items-center ${marginTop}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        to={item.to as "/"}
        hash={item.hash}
        aria-label={item.label}
        className="relative flex items-center"
      >
        <motion.span
          className="relative flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md"
          style={{
            backgroundColor: active ? bgActive : bgIdle,
            outline: item.detached ? `1.5px solid var(--lime)` : "none",
            outlineOffset: item.detached ? "3px" : 0,
          }}
          animate={{ scale: hover ? 1.06 : 1 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <Icon
            size={iconSize}
            strokeWidth={1.5}
            color={active ? (bgActive === "var(--paper)" ? "var(--ink)" : "var(--paper)") : iconColor}
          />
          {active && (
            <span
              className="absolute -right-1 -top-1 h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--lime)" }}
            />
          )}
        </motion.span>

        <AnimatePresence>
          {hover && (
            <motion.span
              initial={{ opacity: 0, x: -6, width: 0 }}
              animate={{ opacity: 1, x: 0, width: "auto" }}
              exit={{ opacity: 0, x: -6, width: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="ml-3 overflow-hidden whitespace-nowrap px-3 py-1.5 text-xs uppercase tracking-[0.18em]"
              style={{
                backgroundColor: labelBg,
                color: labelFg,
                fontFamily: "var(--font-mono)",
              }}
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </Link>
    </li>
  );
}

function ScrollRail() {
  return (
    <div
      className="pointer-events-none absolute left-2 top-[-40vh] h-[80vh] w-px overflow-hidden"
      style={{ backgroundColor: "rgba(247,246,243,0.14)" }}
    >
      <motion.div
        className="absolute inset-x-0 top-0 origin-top"
        style={{ backgroundColor: "var(--lime)", height: "100%" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
}
