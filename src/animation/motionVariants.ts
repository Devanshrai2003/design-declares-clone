import { easeOut } from "framer-motion";

export const appearInOut = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 140 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export const expandVertical = {
  contracted: { opacity: 0, height: 0 },
  expanded: { opacity: 1, height: "auto" },
};
