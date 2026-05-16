import { motion } from "framer-motion";
import { ShootingStar, Star, Planet, Moon } from "./Doodles";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-7xl px-4 pt-2 pb-12 md:px-8 md:pt-6">
      <div className="relative grid items-center gap-8 md:grid-cols-2">
        {/* shooting star art */}
        <div className="relative">
          <Moon className="absolute -left-2 top-2 h-10 w-10 animate-floaty" />
          <Planet className="absolute right-4 top-0 h-12 w-12" />
          <Star className="absolute -bottom-2 left-12 h-8 w-8" delay={0.5} />
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="relative"
          >
            <ShootingStar className="mx-auto w-full max-w-md drop-shadow-[6px_6px_0_rgb(10_17_40)]" />
            <span className="absolute left-2 top-2 -rotate-12 rounded-full border-4 border-ink bg-card px-3 py-1 font-display text-xl font-bold shadow-pop-sm">
              ZOOOOM!
            </span>
            <span className="absolute -bottom-2 right-6 rotate-6 rounded-full border-4 border-ink bg-coral px-4 py-1 font-display text-lg font-bold text-card shadow-pop-sm">
              POW!
            </span>
          </motion.div>
        </div>

        {/* text */}
        <div className="relative">
          <Star className="absolute -left-4 -top-4 h-8 w-8" />
          <Star className="absolute right-2 top-2 h-10 w-10" delay={0.3} />
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-card text-stroke-ink md:text-7xl">
            COLD<br />LITTLE STAR
          </h1>
          <p className="mt-4 max-w-md text-lg font-medium text-ink md:text-xl">
            Out-of-this-World Vintage Finds — Y2K, retro streetwear & nostalgic goods, hand-picked across every major resale orbit.
          </p>
          <a
            href="#shop"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-4 border-ink bg-star px-6 py-3 font-display text-lg font-bold uppercase tracking-wide shadow-pop transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-pop-sm"
          >
            Blast off into the collection!
          </a>
        </div>
      </div>
    </section>
  );
}
