import { Button } from "../assets/Button";
import { NewsItem } from "../assets/NewsItem";
import { SectionComponent } from "../assets/SectionComponent";
import { newsData } from "../data/newsData";
import { motion } from "framer-motion";
import "../styles/NewsSection.css";
import { fadeInUp, staggerContainer } from "../animation/motionVariants";

export function NewsSection() {
  return (
    <SectionComponent
      heading="Latest"
      footer={<Button text="See all the latest" />}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
      >
        {newsData.map((card, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <NewsItem {...card} />
          </motion.div>
        ))}
      </motion.div>
    </SectionComponent>
  );
}
