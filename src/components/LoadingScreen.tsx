import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress that accelerates
    let frame: number;
    let start: number | null = null;
    const duration = 2200; // ms for the full animation

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      // Ease-out cubic progress
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    // Wait for fonts + minimum display time, then dismiss
    const minTime = new Promise((r) => setTimeout(r, 2400));
    const fontsReady = document.fonts?.ready ?? Promise.resolve();

    Promise.all([minTime, fontsReady]).then(() => {
      setIsLoading(false);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "var(--ink)",
            overflow: "hidden",
          }}
        >
          {/* Grain overlay */}
          <div className="grain" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

          {/* Geometric corner accents */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "3rem",
              height: "1px",
              backgroundColor: "var(--lime)",
              transformOrigin: "left",
            }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              width: "1px",
              height: "3rem",
              backgroundColor: "var(--lime)",
              transformOrigin: "top",
            }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              width: "3rem",
              height: "1px",
              backgroundColor: "var(--lime)",
              transformOrigin: "right",
            }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              bottom: "2rem",
              right: "2rem",
              width: "1px",
              height: "3rem",
              backgroundColor: "var(--lime)",
              transformOrigin: "bottom",
            }}
          />

          {/* Main content */}
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            {/* Initials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(4rem, 15vw, 12rem)",
                  letterSpacing: "-0.06em",
                  lineHeight: 0.85,
                  color: "var(--paper)",
                  margin: 0,
                }}
              >
                K
                <motion.span
                  initial={{ color: "var(--paper)" }}
                  animate={{ color: "var(--lime)" }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  O
                </motion.span>
                R
              </h1>
            </motion.div>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                width: "100%",
                maxWidth: "6rem",
                height: "2px",
                backgroundColor: "var(--ember)",
                margin: "1.5rem auto",
                transformOrigin: "center",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--paper)",
                opacity: 0.5,
                margin: 0,
              }}
            >
              DigitalVision
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
              style={{
                marginTop: "2.5rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: "8rem",
                  height: "1px",
                  backgroundColor: "rgba(247, 246, 243, 0.1)",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1px",
                }}
              >
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "var(--lime)",
                    transition: "width 100ms ease-out",
                  }}
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--paper)",
                }}
              >
                {progress}%
              </motion.span>
            </motion.div>
          </div>

          {/* Bottom text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.55rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--paper)",
              whiteSpace: "nowrap",
            }}
          >
            Lomé — Togo
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
