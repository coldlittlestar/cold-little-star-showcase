import { motion } from "framer-motion";
import { useMemo } from "react";

export function Twinkles() {
  const twinkles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 6 + Math.random() * 8,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {twinkles.map((twinkle) => (
        <motion.div
          key={twinkle.id}
          className="absolute rounded-full bg-star"
          style={{
            left: `${twinkle.left}%`,
            top: `${twinkle.top}%`,
            width: `${twinkle.size}px`,
            height: `${twinkle.size}px`,
            filter: "drop-shadow(0 0 4px rgba(229, 207, 67, 0.8))",
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.6, 1.3, 0.6],
          }}
          transition={{
            duration: twinkle.duration,
            delay: twinkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
