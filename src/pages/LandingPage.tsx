import { BreakdownSection } from "../components/BreakdownSection";
import { DeclareEmergencySection } from "../components/DeclareEmergencySection";
import { DonateSection } from "../components/DonateSection";
import { GlobalSupportSection } from "../components/GlobalSupportSection";
import { HeroSection } from "../components/HeroSection";
import { InformationSection } from "../components/InformationSection";
import { NewsletterSection } from "../components/NewsletterSection";
import { NewsSection } from "../components/NewsSection";
import { SignatoriesSection } from "../components/SignatoriesSection";
import { motion, useScroll, useSpring } from "framer-motion";

import "../styles/LandingPage.css";

export function LandingPage() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 1,
  });

  return (
    <>
      <motion.div
        style={{
          transformOrigin: "left",
          scaleX: smoothProgress,
          backgroundColor: "var(--color-bg-red)",
          position: "sticky",
          top: 0,
          height: "8px",
          zIndex: 10,
        }}
      />
      ;
      <HeroSection />
      <BreakdownSection />
      <DonateSection />
      <InformationSection />
      <DeclareEmergencySection />
      <NewsSection />
      <NewsletterSection />
      <SignatoriesSection />
      <GlobalSupportSection />
      <div id="menu-stop" style={{ height: 1 }}></div>
    </>
  );
}
