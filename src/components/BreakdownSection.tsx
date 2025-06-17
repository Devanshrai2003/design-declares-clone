import { Accordion } from "../assets/Accordion";
import { Button } from "../assets/Button";
import { SectionComponent } from "../assets/SectionComponent";
import { accordionData } from "../data/accordionData";
import { motion } from "framer-motion";
import "../styles/BreakdownSection.css";
import { fadeInUp } from "../animation/motionVariants";

export function BreakdownSection() {
  return (
    <SectionComponent
      heading="This is Breakdown"
      footer={<Button text="View Our D! Intro Video" />}
    >
      <motion.div
        variants={fadeInUp}
        transition={{ staggerChildren: 0 }}
        viewport={{ once: true }}
      >
        <p className="info-text">
          The science is settled. We are in an emergency of climate and nature.
          The world is past breaking point; the breakdown has begun...
        </p>

        <div className="accordion-list">
          {accordionData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              para1={item.para1}
              para2={item.para2}
              para3={item.para3}
              para4={item.para4}
            />
          ))}
        </div>
      </motion.div>
    </SectionComponent>
  );
}
