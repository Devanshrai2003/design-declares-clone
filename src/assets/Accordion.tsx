import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "../styles/Accordion.css";
import { AnimatePresence, motion } from "framer-motion";

interface AccordionProps {
  title: string;
  para1: string;
  para2?: string;
  para3?: string;
  para4: string;
}

export function Accordion({
  title,
  para1,
  para2,
  para3,
  para4,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => setIsOpen((c) => !c);

  return (
    <div>
      <button className="accordion" onClick={toggleAccordion}>
        <span className="accordion-title">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ display: "inline-block" }}
        >
          <ChevronDownIcon width={20} height={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="accordion-content"
          >
            <p>{para1}</p>
            {para2 && <p>{para2}</p>}
            {para3 && <p>{para3}</p>}
            <p>{para4}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
