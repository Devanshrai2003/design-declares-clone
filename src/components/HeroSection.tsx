import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/HeroSection.css";
import { fadeInUp } from "../animation/motionVariants";

const headerWords = ["DESIGN", "DECLARES", "UK"];

const dVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export function HeroSection() {
  const [showInitial, setShowInitial] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowInitial(false);
    }, 1800);

    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 3200);

    return () => {
      clearTimeout(timeout);
      clearTimeout(textTimeout);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-logo font-bebas">
          <AnimatePresence mode="wait">
            {showInitial ? (
              <motion.h1
                key="initial"
                className="hero-heading"
                variants={dVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                D!
              </motion.h1>
            ) : (
              <motion.div
                key="full"
                className="hero-heading hero-heading-group"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                {headerWords.map((word, index) => (
                  <motion.div
                    key={index}
                    className={`hero-word ${index === 2 ? "highlight" : ""}`}
                    variants={fadeInUp}
                  >
                    {word}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showText && (
            <motion.p
              key="hero-text"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="hero-text"
            >
              Design Declares is a growing group of designers, design studios,
              agencies and institutions here to declare a climate and ecological
              emergency. As part of the global declaration movement, we commit
              to harnessing the tools of our industry to reimagine, rebuild and
              heal our world.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
