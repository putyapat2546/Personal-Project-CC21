import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function LandingPage() {
  const [isExiting, setIsExiting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      window.location.pathname = "/select"; // navigate to character selection
    }, 800); // matches exit animation duration
  };

  return (

    // BG ANIMATION
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="landing"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="min-h-screen w-full fixed inset-0 bg-black flex flex-col items-center justify-center relative overflow-hidden"
        >
          {/* Hover Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.svg
              width="400"
              height="400"
              viewBox="0 0 200 200"
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovering ? 0.12 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.circle
                cx="100"
                cy="100"
                r="6"
                fill="#C6A664"
                initial={{ scale: 0 }}
                animate={{ scale: isHovering ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                <motion.ellipse
                  key={angle}
                  cx="100"
                  cy="100"
                  rx="12"
                  ry="28"
                  fill="#C6A664"
                  opacity="0.6"
                  initial={{ scale: 0, rotate: angle }}
                  animate={{ scale: isHovering ? 1 : 0, rotate: angle }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  style={{ transformOrigin: "100px 100px" }}
                />
              ))}
              {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map(
                (angle, index) => (
                  <motion.ellipse
                    key={`outer-${angle}`}
                    cx="100"
                    cy="100"
                    rx="9"
                    ry="22"
                    fill="#C6A664"
                    opacity="0.3"
                    initial={{ scale: 0, rotate: angle }}
                    animate={{ scale: isHovering ? 1 : 0, rotate: angle }}
                    transition={{
                      duration: 0.9,
                      delay: 0.1 + index * 0.05,
                      ease: "easeOut",
                    }}
                    style={{ transformOrigin: "100px 100px" }}
                  />
                )
              )}
            </motion.svg>
          </div>

          {/* Texts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-4 text-[#C6A664] tracking-[0.3em] uppercase"
              style={{ fontSize: "0.65rem", fontWeight: 300 }}
            >
              Est. 2025 · Paris
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.8, delay: 0.3 }}
              className="mb-2 tracking-[0.35em]"
              style={{
                fontSize: "4rem",
                fontWeight: 200,
                color: "#C6A664",
                textRendering: "geometricPrecision",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textShadow: "0 0 30px rgba(198, 166, 100, 0.3)",
                lineHeight: 1.1,
              }}
            >
              MAISON
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="w-16 h-[1px] bg-[#C6A664] mx-auto mb-2"
            />

            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.8, delay: 0.5 }}
              className="mb-6 tracking-[0.35em]"
              style={{
                fontSize: "4rem",
                fontWeight: 200,
                color: "#C6A664",
                textRendering: "geometricPrecision",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textShadow: "0 0 30px rgba(198, 166, 100, 0.3)",
                lineHeight: 1.1,
              }}
            >
              EIGHT
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.3 }}
              className="text-gray-400 mb-12 tracking-[0.2em] italic"
              style={{
                fontSize: "0.8rem",
                fontFamily: "Playfair Display, serif",
                fontWeight: 300,
              }}
            >
              Where Eight Personas Meet Timeless Elegance
            </motion.p>

            {/* Enter Button */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              onClick={handleEnter}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="mt-12 px-12 py-4 relative group overflow-hidden border border-[#C6A664] text-[#C6A664] uppercase tracking-wider font-medium"
            >
              {/* overlay behind content using negative z-index */}

              {/* text sits above */}
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Enter Experience
              </span>
              <div
                className="absolute inset-0 bg-[#C6A664] z-[-1] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                aria-hidden="true"
              />
            </motion.button>

            {/* Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <div
                className="text-[#C6A664]/60 mb-2 tracking-[0.2em]"
                style={{ fontSize: "0.6rem" }}
              >
                SCROLL TO EXPLORE
              </div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[1px] h-10 bg-gradient-to-b from-[#C6A664]/60 to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
