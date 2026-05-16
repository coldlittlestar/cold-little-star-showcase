import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

type Props = { gameOn: boolean; onToggle: () => void };

export function Header({ gameOn, onToggle }: Props) {
  return (
    <header className="relative z-30 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 md:px-8">
      <a href="#top" className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full border-4 border-ink bg-star shadow-pop-sm">
          <span className="text-2xl font-bold text-ink">★</span>
        </div>
        <span className="hidden text-2xl font-bold tracking-tight text-ink sm:block">
          Cold Little Star
        </span>
      </a>

      <nav className="hidden items-center gap-6 text-base font-semibold text-ink md:flex">
        <a href="#shop" className="hover:underline underline-offset-4">Browse</a>
        <a href="#story" className="hover:underline underline-offset-4">Story</a>
        <a href="#faq" className="hover:underline underline-offset-4">FAQ</a>
      </nav>

      <button
        onClick={onToggle}
        aria-pressed={gameOn}
        className="group flex items-center gap-2 rounded-full border-4 border-ink bg-card px-3 py-2 shadow-pop-sm transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
      >
        <Gamepad2 className="h-4 w-4" />
        <span className="hidden text-xs font-bold uppercase tracking-wider sm:inline">
          Star Escape
        </span>
        <span
          className={`relative inline-flex h-6 w-11 items-center rounded-full border-2 border-ink transition-colors ${
            gameOn ? "bg-coral" : "bg-secondary"
          }`}
        >
          <motion.span
            layout
            className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-ink bg-star ${
              gameOn ? "right-0.5 animate-pulse-glow" : "left-0.5"
            }`}
          />
        </span>
      </button>
    </header>
  );
}
