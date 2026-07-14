export function ProcessFilmstrip({ images, title }: { images: string[]; title: string }) {
  return (
    <section className="relative py-16" style={{ backgroundColor: "var(--ink)" }}>
      <div className="mb-8 px-6 lg:px-24">
        <p className="eyebrow" style={{ color: "var(--lime)" }}>Process</p>
      </div>
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 lg:px-24" style={{ cursor: "grab" }}>
        {images.map((src, i) => (
          <div key={i} className="relative h-[60vh] w-[80vw] shrink-0 snap-center overflow-hidden md:w-[52vw] lg:w-[42vw]">
            <img src={src} alt={`${title} — image ${i + 1}`} loading="lazy" className="bw-image h-full w-full object-cover" />
            <span className="absolute bottom-4 left-4 text-xs" style={{ color: "var(--paper)", fontFamily: "var(--font-mono)" }}>
              {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
