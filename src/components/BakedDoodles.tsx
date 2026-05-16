// Cartoon baked goods SVGs for the Eye Spy game.
// Each component accepts className for sizing/positioning.

type P = { className?: string };

export function Cupcake({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M14 36h36l-4 22H18z" fill="#C68A5A" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 42h24M21 48h22M22 54h20" stroke="var(--color-ink)" strokeWidth="1.5" />
      <path d="M12 34c0-10 8-16 20-16s20 6 20 16c0 4-4 6-8 4-3 4-9 4-12 0-3 4-9 4-12 0-4 2-8 0-8-4z" fill="#F4B7C9" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="1.6" fill="#FFEB3B" />
      <circle cx="40" cy="22" r="1.6" fill="#FF5A5F" />
      <circle cx="32" cy="28" r="1.6" fill="#4FC3F7" />
      <path d="M32 12v6" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="10" r="2.5" fill="#FF5A5F" stroke="var(--color-ink)" strokeWidth="2" />
    </svg>
  );
}

export function Donut({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="24" fill="#F4B7C9" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="8" fill="#E6F2FF" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M16 24c4-6 12-6 14 0M40 16c4 2 6 8 4 12M48 36c0 6-4 10-10 10M22 48c-4-2-6-6-6-10" stroke="#7E2D4A" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="20" y="20" width="3" height="6" rx="1" fill="#FFEB3B" transform="rotate(-20 20 20)" />
      <rect x="42" y="28" width="3" height="6" rx="1" fill="#4FC3F7" transform="rotate(35 42 28)" />
      <rect x="28" y="48" width="3" height="6" rx="1" fill="#A0E37C" transform="rotate(10 28 48)" />
    </svg>
  );
}

export function Cookie({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <circle cx="32" cy="32" r="24" fill="#D4A574" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="22" cy="24" r="3" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="1.5" />
      <circle cx="40" cy="22" r="2.5" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="1.5" />
      <circle cx="36" cy="38" r="3" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="1.5" />
      <circle cx="22" cy="42" r="2.5" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="1.5" />
      <circle cx="44" cy="34" r="2" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="1.5" />
    </svg>
  );
}

export function Cake({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="34" width="44" height="22" rx="3" fill="#F4B7C9" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M10 38q11 6 22 0t22 0" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
      <rect x="16" y="22" width="32" height="14" rx="3" fill="#FFE4ED" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M16 26q8 5 16 0t16 0" stroke="var(--color-ink)" strokeWidth="2" fill="none" />
      <rect x="30" y="10" width="4" height="12" fill="#FFEB3B" stroke="var(--color-ink)" strokeWidth="1.5" />
      <path d="M32 6q3 3 0 6q-3-3 0-6z" fill="#FF5A5F" stroke="var(--color-ink)" strokeWidth="1.2" />
    </svg>
  );
}

export function Macaron({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="22" rx="22" ry="10" fill="#A0E37C" stroke="var(--color-ink)" strokeWidth="2.5" />
      <rect x="10" y="28" width="44" height="10" fill="#FFE4ED" stroke="var(--color-ink)" strokeWidth="2.5" />
      <ellipse cx="32" cy="42" rx="22" ry="10" fill="#A0E37C" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M14 24q3-3 8 0M28 22q3-3 8 0M44 24q3-3 6 0" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function Croissant({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M8 40c0-14 14-24 28-22 12 2 20 12 18 22-1 5-6 6-9 3-2-2-4-2-5 1-2 5-8 5-10 0-1-3-3-3-5-1-3 3-8 2-9-2-3 3-8 2-8-1z" fill="#E0A864" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M16 36q4-4 8 0M28 34q4-4 8 0M40 36q4-4 6 0" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function Pie({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <ellipse cx="32" cy="40" rx="24" ry="8" fill="#C68A5A" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M8 40c0-10 11-18 24-18s24 8 24 18" fill="#E8C49A" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path d="M14 32q4-4 8 0M26 28q4-4 8 0M38 30q4-4 8 0M16 36q4-4 8 0M30 34q4-4 8 0M42 36q4-4 6 0" stroke="var(--color-ink)" strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="30" r="1.5" fill="#D62976" />
      <circle cx="36" cy="26" r="1.5" fill="#D62976" />
      <circle cx="44" cy="32" r="1.5" fill="#D62976" />
    </svg>
  );
}

export function Brownie({ className = "" }: P) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="10" y="22" width="44" height="28" rx="3" fill="#5C2A0A" stroke="var(--color-ink)" strokeWidth="2.5" />
      <rect x="10" y="22" width="44" height="8" fill="#7E3A14" stroke="var(--color-ink)" strokeWidth="2.5" />
      <circle cx="20" cy="26" r="1.5" fill="#FFEB3B" />
      <circle cx="32" cy="26" r="1.5" fill="#FF5A5F" />
      <circle cx="44" cy="26" r="1.5" fill="#A0E37C" />
    </svg>
  );
}

export const BAKED = {
  cupcake: { name: "Cupcake", Cmp: Cupcake },
  donut: { name: "Sprinkled Donut", Cmp: Donut },
  cookie: { name: "Choco Chip Cookie", Cmp: Cookie },
  cake: { name: "Birthday Cake", Cmp: Cake },
  macaron: { name: "Macaron", Cmp: Macaron },
  croissant: { name: "Croissant", Cmp: Croissant },
  pie: { name: "Berry Pie", Cmp: Pie },
  brownie: { name: "Brownie", Cmp: Brownie },
} as const;

export type BakedKey = keyof typeof BAKED;
