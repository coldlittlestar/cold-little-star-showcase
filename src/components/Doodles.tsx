import { motion } from "framer-motion";

export function Star({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      initial={{ rotate: -8, scale: 0.9 }}
      animate={{ rotate: 8, scale: 1.05 }}
      transition={{ duration: 2 + delay, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      aria-hidden
    >
      <path
        d="M12 2l2.9 6.3L22 9.3l-5.2 4.7L18.2 22 12 18.4 5.8 22l1.4-8L2 9.3l7.1-1z"
        fill="var(--color-star)"
        stroke="var(--color-ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

export function Planet({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="36" rx="26" ry="6" fill="none" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="14" fill="var(--color-coral)" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="27" cy="28" r="2" fill="var(--color-ink)" opacity="0.4" />
      <circle cx="36" cy="34" r="1.5" fill="var(--color-ink)" opacity="0.4" />
    </svg>
  );
}

export function Moon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M16 3a9 9 0 1 0 5 16 7 7 0 0 1-5-16z"
        fill="var(--color-star)"
        stroke="var(--color-ink)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShootingStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden>
      <g stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round">
        <line x1="10" y1="80" x2="90" y2="60" stroke="var(--color-coral)" />
        <line x1="20" y1="95" x2="95" y2="72" stroke="var(--color-star)" strokeWidth="5" />
        <line x1="15" y1="65" x2="85" y2="55" stroke="var(--color-star)" />
      </g>
      <path
        d="M130 20l8 18 20 2-15 13 5 20-18-10-18 10 5-20-15-13 20-2z"
        fill="var(--color-star)"
        stroke="var(--color-ink)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="42" r="2.5" fill="var(--color-ink)" />
      <circle cx="150" cy="42" r="2.5" fill="var(--color-ink)" />
      <path d="M138 50q5 4 12 0" stroke="var(--color-ink)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}
