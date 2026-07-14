import { Download, ExternalLink, FileText } from "lucide-react";
import { CV_PDF_URL, CV_FILE_NAME } from "@/config/cv";

export function CvViewer() {
  const hasCv = Boolean(CV_PDF_URL);
  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 px-6 py-6 lg:px-24">
        <div className="flex items-center gap-4">
          <FileText size={20} strokeWidth={1.5} style={{ color: "var(--ink)" }} />
          <div>
            <p className="eyebrow" style={{ color: "var(--ember)" }}>CV</p>
            <p className="text-sm" style={{ color: "var(--ink)", fontFamily: "var(--font-mono)" }}>
              Kengbo Othnelio Raphaëlo
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {hasCv ? (
            <>
              <a
                href={CV_PDF_URL}
                download={CV_FILE_NAME}
                className="flex items-center gap-2 border border-[color:var(--lime)] px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-[color:var(--lime)] hover:text-[color:var(--ink)]"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                <Download size={14} strokeWidth={1.5} /> Télécharger le CV
              </a>
              <a
                href={CV_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-ink/25 px-4 py-2 text-xs uppercase tracking-[0.18em] transition-colors hover:border-ink"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                <ExternalLink size={14} strokeWidth={1.5} /> Ouvrir dans un nouvel onglet
              </a>
            </>
          ) : (
            <span className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--ember)", fontFamily: "var(--font-mono)" }}>
              CV bientôt disponible
            </span>
          )}
        </div>
      </header>

      <div className="flex flex-1">
        {hasCv ? (
          <object data={CV_PDF_URL} type="application/pdf" className="h-[85vh] w-full">
            <iframe src={CV_PDF_URL} title="CV — Kengbo Othnelio Raphaëlo" className="h-[85vh] w-full" />
          </object>
        ) : (
          <div className="flex w-full items-center justify-center py-32">
            <div className="max-w-md text-center">
              <p className="display-section mb-4" style={{ color: "var(--ink)", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                CV bientôt en ligne.
              </p>
              <p className="text-sm" style={{ color: "var(--ink)", opacity: 0.6 }}>
                Le fichier sera hébergé à l'adresse configurée dans <code style={{ fontFamily: "var(--font-mono)" }}>src/config/cv.ts</code>.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
