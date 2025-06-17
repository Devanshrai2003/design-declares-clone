import { type ReactNode } from "react";
import { motion } from "framer-motion";
import "../styles/SectionComponent.css";
import { fadeInUp } from "../animation/motionVariants";

interface SectionComponentProps {
  heading: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function SectionComponent({
  heading,
  children,
  footer,
}: SectionComponentProps) {
  return (
    <div className="two-column-section">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="two-column-content"
      >
        <motion.h2 variants={fadeInUp} className="sticky-heading">
          {heading}
        </motion.h2>
        <motion.div variants={fadeInUp} className="section-body">
          {children}
          {footer && (
            <motion.div variants={fadeInUp} className="section-footer">
              {footer}
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
