import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Twinkles } from "@/components/Twinkles";
import { Star, Planet, Moon } from "@/components/Doodles";

export const Route = createFileRoute("/mystery-box")({
  component: MysteryBox,
});

function MysteryBox() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-sky bg-stars">
      <Twinkles />
      {/* floating doodles */}
      <Moon className="pointer-events-none absolute left-4 top-32 h-8 w-8 opacity-80 md:left-8" />
      <Planet className="pointer-events-none absolute right-6 top-44 h-10 w-10 opacity-80 md:right-12" />
      <Star className="pointer-events-none absolute left-1/3 top-[28rem] h-6 w-6 opacity-70" />
      <Star className="pointer-events-none absolute right-1/4 top-[34rem] h-8 w-8 opacity-70" delay={0.4} />
      <Planet className="pointer-events-none absolute -right-4 bottom-40 h-12 w-12 opacity-80" />

      <Header gameOn={false} onToggle={() => {}} />

      <div className="space-y-12 pb-20">
        <section className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-card p-8 shadow-pop md:p-12">
            <div className="mb-8 text-center">
              <div className="mb-6 inline-block rounded-full border-4 border-ink bg-coral px-6 py-3 font-display text-xl font-bold uppercase tracking-wider text-card shadow-pop">
                ✦ Weekly Prize ✦
              </div>
              <h1 className="font-display text-5xl font-bold md:text-6xl">
                Mystery Collectible Box
              </h1>
            </div>

            <div className="mb-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-4 border-ink bg-star/20 p-6 shadow-pop-sm">
                <h2 className="mb-3 font-display text-2xl font-bold">How to Win</h2>
                <p className="mb-3 leading-relaxed">
                  Top player on the weekly <strong>Star Escape</strong> leaderboard wins a curated Mystery Collectible Box packed with exclusive finds.
                </p>
                <p className="mb-3 leading-relaxed">
                  Play the game every week for a chance to score this cosmic prize. New leaderboard resets every Sunday at midnight.
                </p>
                <a
                  href="/#top"
                  className="inline-block rounded-full border-4 border-ink bg-star px-6 py-3 font-display font-bold uppercase tracking-wider shadow-pop-sm transition-transform active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                >
                  Play Star Escape
                </a>
              </div>

              <div className="rounded-2xl border-4 border-ink bg-coral/20 p-6 shadow-pop-sm">
                <h2 className="mb-3 font-display text-2xl font-bold">What's Inside</h2>
                <p className="mb-3 leading-relaxed">
                  Each Mystery Collectible Box is hand-curated and contains 3-5 premium vintage or rare pieces from the Cold Little Star collection.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Exclusive vintage streetwear pieces</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Rare Y2K or nostalgic finds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold">•</span>
                    <span>Handwritten note with styling tips</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border-4 border-ink bg-mint/20 p-6 shadow-pop-sm">
              <h2 className="mb-4 font-display text-2xl font-bold">Why You'll Love It</h2>
              <p className="mb-4 leading-relaxed">
                Every Mystery Collectible Box is a surprise element experience — you never know exactly what treasures you'll get, but you know they've been personally selected for quality, fit, and that special "Cold Little Star" vibe. It's like getting a mini curated shopping spree of the rarest pieces.
              </p>
              <p className="leading-relaxed text-ink/80">
                Plus, knowing you won them by mastering Star Escape makes them even more special. 🎮✨
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-secondary p-6 shadow-pop md:p-10">
            <h2 className="font-display text-3xl font-bold md:text-4xl mb-4">Game Tips</h2>
            <div className="space-y-4 text-sm md:text-base">
              <div>
                <p className="font-bold mb-1">🎯 Eat the Stars</p>
                <p className="text-ink/80">Each ⭐ you collect adds 10 points to your score. Plan your route carefully.</p>
              </div>
              <div>
                <p className="font-bold mb-1">⚠️ Avoid the Black Holes</p>
                <p className="text-ink/80">Purple holes are obstacles that get more numerous as you grow longer. More holes spawn every 30 points.</p>
              </div>
              <div>
                <p className="font-bold mb-1">🐍 Don't Collide</p>
                <p className="text-ink/80">Hitting walls or yourself ends the game. Space management is key as your snake grows.</p>
              </div>
              <div>
                <p className="font-bold mb-1">📱 Mobile Friendly</p>
                <p className="text-ink/80">Swipe or use arrow keys to navigate. The game works on all devices.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 text-center text-sm text-ink/70 md:px-8">
          <p>© {new Date().getFullYear()} Cold Little Star — Made with glitter & gravity.</p>
        </footer>
      </div>
    </div>
  );
}
