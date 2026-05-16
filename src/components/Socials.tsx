import { motion } from "framer-motion";

const FB_URL = "https://www.facebook.com/talia.dorsey.1";
const IG_URL = "https://www.instagram.com/perrywinklecupcakes?igsh=MW56NXUwdGMwMDM0aA==";

function FacebookCartoon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <circle cx="32" cy="32" r="26" fill="#4F86FF" stroke="var(--color-ink)" strokeWidth="3.5" />
      <circle cx="24" cy="26" r="2.2" fill="var(--color-ink)" />
      <circle cx="40" cy="26" r="2.2" fill="var(--color-ink)" />
      <path
        d="M38 22.5c1.5-1 3-1 4 0"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M22 22.5c1.5-1 3-1 4 0"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M37 36c-2 3-8 3-10 0"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <text
        x="32"
        y="55"
        textAnchor="middle"
        fontFamily="Fredoka, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="white"
        stroke="var(--color-ink)"
        strokeWidth="0.8"
      >
        f
      </text>
    </svg>
  );
}

function InstagramCartoon() {
  return (
    <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="ig-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="35%" stopColor="#FA7E1E" />
          <stop offset="65%" stopColor="#D62976" />
          <stop offset="100%" stopColor="#962FBF" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="14" fill="url(#ig-grad)" stroke="var(--color-ink)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" />
      <circle cx="32" cy="32" r="6" fill="#FFF6E5" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="29" cy="30" r="1.4" fill="var(--color-ink)" />
      <circle cx="35" cy="30" r="1.4" fill="var(--color-ink)" />
      <path d="M29 34c1.5 1.5 4.5 1.5 6 0" stroke="var(--color-ink)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="47" cy="17" r="2.6" fill="#FFEB3B" stroke="var(--color-ink)" strokeWidth="2" />
    </svg>
  );
}

export function Socials({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-16 w-16" : "h-12 w-12";

  return (
    <div className="flex items-center gap-3">
      <motion.a
        href={FB_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook — Talia Dorsey"
        title="Facebook"
        whileHover={{ y: -4, rotate: -6 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } }}
        className={`${dim} rounded-2xl border-4 border-ink bg-card shadow-pop-sm overflow-hidden`}
      >
        <FacebookCartoon />
      </motion.a>
      <motion.a
        href={IG_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram — Perrywinkle Cupcakes"
        title="Instagram — Perrywinkle Cupcakes"
        whileHover={{ y: -4, rotate: 6 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -3, 0] }}
        transition={{ y: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 } }}
        className={`${dim} rounded-2xl border-4 border-ink bg-card shadow-pop-sm overflow-hidden`}
      >
        <InstagramCartoon />
      </motion.a>
    </div>
  );
}
