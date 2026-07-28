import type { ReactNode } from "react";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  children?: ReactNode;
  heightCss?: string;
}

export function PhoneMockup({ src, alt, className = "", children, heightCss }: PhoneMockupProps) {
  return (
    <div
      className={`relative select-none shrink-0 ${className}`}
      style={{
        height: heightCss || "min(540px, 68vh)",
        aspectRatio: "9 / 19.5",
      }}
    >
      {/* Outer Phone Titanium Chassis */}
      <div
        className="relative h-full w-full overflow-hidden rounded-[38px] md:rounded-[44px] p-[6px] md:p-[8px]"
        style={{
          backgroundColor: "#16161a",
          boxShadow: `
            0 25px 60px -10px rgba(0, 0, 0, 0.9),
            0 10px 25px -15px rgba(0, 0, 0, 0.7),
            inset 0 0 0 1px rgba(255, 255, 255, 0.22),
            inset 0 2px 4px rgba(255, 255, 255, 0.2),
            inset 0 -2px 4px rgba(0, 0, 0, 0.9)
          `,
        }}
      >
        {/* Hardware Side Buttons - Volume (Left) */}
        <div
          className="absolute -left-[3px] top-20 h-7 w-[3px] rounded-l-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
        />
        <div
          className="absolute -left-[3px] top-32 h-7 w-[3px] rounded-l-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
        />
        {/* Power Button (Right) */}
        <div
          className="absolute -right-[3px] top-24 h-11 w-[3px] rounded-r-sm"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
        />

        {/* Screen Bezel Inner Frame */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[32px] md:rounded-[36px] bg-black"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Dynamic Island Pill Notch */}
          <div
            className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-between px-2.5"
            style={{
              width: "78px",
              height: "18px",
              backgroundColor: "#000000",
              borderRadius: "18px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.8)",
            }}
          >
            {/* Lens Reflection */}
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 35%, #252a48 0%, #0a0c16 70%, #000 100%)",
                boxShadow: "inset 0 0 1px rgba(255,255,255,0.4)",
              }}
            />
            {/* Sensor */}
            <div className="h-1.5 w-1.5 rounded-full bg-[#121218]" />
          </div>

          {/* Screenshot Image */}
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />

          {/* Subtle Glass Reflection Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              background:
                "linear-gradient(130deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 32%, transparent 55%)",
            }}
          />

          {/* Home Bar */}
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30"
            style={{
              width: "95px",
              height: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              borderRadius: "4px",
            }}
          />

          {children}
        </div>
      </div>
    </div>
  );
}
