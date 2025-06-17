import { signatoriesData } from "../data/signatoriesData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/SignatoriesSection.css";
import { fadeInUp } from "../animation/motionVariants";
import { AnimatedCounter } from "../animation/AnimatedCounter";

export function SignatoriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="signatories-section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="signatories-heading">
        <AnimatedCounter
          to={513}
          duration={2}
          shouldStart={inView}
          className="heading-number"
        />
        <div className="heading-text-container">
          <p className="heading-text">Signatories and counting in</p>
          <span className="heading-tag">D! UK</span>
        </div>
      </div>
      <div className="signatories-columns">
        {signatoriesData.map((name, index) => (
          <a href="#" key={index} className="signatory-item">
            {name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
