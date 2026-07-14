import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { VerticalNavbar } from "@/components/nav/VerticalNavbar";
import { MobileNavButton } from "@/components/nav/MobileNavButton";
import { SectionThemeProvider } from "@/hooks/useSectionTheme";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { PageTransition } from "@/components/PageTransition";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      <p className="eyebrow" style={{ color: "var(--lime)" }}>404 — page introuvable</p>
      <h1 className="display-hero text-center">Cette page n'existe pas.</h1>
      <a href="/" className="border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
        Retour à l'accueil
      </a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6" style={{ backgroundColor: "var(--ink)", color: "var(--paper)" }}>
      <p className="eyebrow" style={{ color: "var(--ember)" }}>Erreur</p>
      <h1 className="display-section text-center">Cette page n'a pas pu se charger.</h1>
      <div className="flex gap-3">
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="border border-[color:var(--lime)] px-6 py-3 text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}
        >
          Réessayer
        </button>
        <a href="/" className="border border-white/20 px-6 py-3 text-xs uppercase tracking-[0.2em]" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
          Accueil
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kengbo Othnelio Raphaëlo — Développeur Web & Mobile · DigitalVision" },
      { name: "description", content: "Portfolio de Kengbo Othnelio Raphaëlo, développeur web & mobile full-stack basé à Lomé. Fondateur du studio DigitalVision (Dvision)." },
      { name: "author", content: "Kengbo Othnelio Raphaëlo" },
      { property: "og:site_name", content: "DigitalVision" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Kengbo Othnelio Raphaëlo — DigitalVision" },
      { property: "og:description", content: "Développeur web & mobile full-stack. Expériences digitales sur-mesure pour hôtellerie, restauration et commerce." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <SectionThemeProvider>
        <VerticalNavbar />
        <MobileNavButton />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </SectionThemeProvider>
    </QueryClientProvider>
  );
}
