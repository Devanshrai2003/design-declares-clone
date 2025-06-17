import { AnimatedCounter } from "../animation/AnimatedCounter";
import { globalSupporters } from "../data/globalSupportData";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import "../styles/GlobalSupportSection.css";
import { fadeInUp } from "../animation/motionVariants";

export function GlobalSupportSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      className="global-support-section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="global-support-heading">
        <AnimatedCounter
          to={661}
          duration={2}
          shouldStart={inView}
          className="heading-number"
        />
        <span className="heading-text">Global Supporters</span>
      </div>
      <div className="countries-section">
        {Object.entries(globalSupporters).map(([country, names]) => (
          <div>
            <h3 key={country} className="country">
              {country}
            </h3>
            <div className="names-column">
              {names.map((name, index) => (
                <a href="#" key={index} className="name">
                  {name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
