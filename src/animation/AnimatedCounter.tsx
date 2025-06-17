// AnimatedCounter.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  duration?: number;
  className?: string;
  shouldStart?: boolean;
}

export function AnimatedCounter({
  to,
  duration = 1.8,
  className,
  shouldStart = true,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    const controls = animate(count, to, {
      duration,
      ease: [0.1, 0.9, 0.3, 1.01],
      onUpdate(value) {
        setDisplay(Math.floor(value));
      },
    });

    return controls.stop;
  }, [to, duration, shouldStart]);

  return <motion.span className={className}>#{display}</motion.span>;
}
