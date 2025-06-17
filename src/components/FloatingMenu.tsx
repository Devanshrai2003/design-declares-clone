import { useInView } from "react-intersection-observer";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  HomeIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/FloatingMenu.css";
import { useState, useEffect } from "react";
import { expandVertical } from "../animation/motionVariants";

export function FloatingMenu() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div ref={ref} id="menu-observer" style={{ height: 1 }} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={`floating-menu ${inView ? "stuck" : "floating"}`}
        animate={
          isLargeScreen && isOpen ? { width: "28rem" } : { width: "12rem" }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="menu-section" onClick={() => setIsOpen(!isOpen)}>
          <button className="menu-button">Menu</button>
          <motion.span
            className="icon-box"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <PlusIcon className="menu-icon" />
          </motion.span>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="expanded"
              className="menu-expand"
              variants={expandVertical}
              initial="contracted"
              animate="expanded"
              exit="contracted"
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: isLargeScreen ? 0.5 : 0,
              }}
            >
              <button className="expand-item">
                <HomeIcon className="icon" /> Home
              </button>
              <button className="expand-item">
                <InformationCircleIcon className="icon" /> About
              </button>
              <button className="expand-item">
                <NewspaperIcon className="icon" /> Latest
              </button>
              <button className="expand-item">
                <EnvelopeIcon className="icon" /> Contact
              </button>
              <button className="expand-item">
                <GlobeAltIcon className="icon" /> Choose Global Chapter
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="declare-section">
          <button className="declare-button">Declare Now</button>
        </div>
      </motion.div>
    </>
  );
}
