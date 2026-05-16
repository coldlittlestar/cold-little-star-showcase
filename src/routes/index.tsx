import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PlatformBar } from "@/components/PlatformBar";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { SnagModal } from "@/components/SnagModal";
import { StarEscape } from "@/components/StarEscape";
import { Twinkles } from "@/components/Twinkles";
import { Star, Planet, Moon } from "@/components/Doodles";
import { PRODUCTS, type Product } from "@/lib/products";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState<string>("All Items");
  const [snag, setSnag] = useState<Product | null>(null);
  const [gameOn, setGameOn] = useState(false);

  const visible = useMemo(
    () => (filter === "All Items" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div className="relative min-h-screen overflow-x-clip bg-sky bg-stars">
      <Twinkles />
      {/* floating doodles */}
      <Moon className="pointer-events-none absolute left-4 top-32 h-8 w-8 opacity-80 md:left-8" />
      <Planet className="pointer-events-none absolute right-6 top-44 h-10 w-10 opacity-80 md:right-12" />
      <Star className="pointer-events-none absolute left-1/3 top-[28rem] h-6 w-6 opacity-70" />
      <Star className="pointer-events-none absolute right-1/4 top-[34rem] h-8 w-8 opacity-70" delay={0.4} />
      <Planet className="pointer-events-none absolute -right-4 bottom-40 h-12 w-12 opacity-80" />

      <Header gameOn={gameOn} onToggle={() => setGameOn((g) => !g)} />
      <Hero />

      <div className="space-y-8 pb-20">
        <PlatformBar />

        <section id="shop" className="mx-auto max-w-7xl space-y-6 px-4 md:px-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="rounded-full border-4 border-ink bg-star px-4 py-1 font-display text-xs font-bold uppercase tracking-widest shadow-pop-sm">
              The Collection
            </span>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              Chilly finds, fresh from orbit.
            </h2>
            <Filters active={filter} onChange={setFilter} />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} onSnag={setSnag} />
            ))}
          </div>
        </section>

        <section id="story" className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-card p-6 shadow-pop md:p-10">
            <h2 className="font-display text-3xl font-bold md:text-4xl">The Story</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/80">
              Cold Little Star is a one-woman curation studio chasing the most
              soulful Y2K, 90s & nostalgic streetwear pieces across the resale
              cosmos. Every find is hand-picked, photographed, and listed across
              eBay, Depop, Mercari, Vinted and Poshmark — so it lives wherever
              you already shop.
            </p>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-secondary p-6 shadow-pop md:p-10">
            <h2 className="font-display text-3xl font-bold md:text-4xl">FAQ</h2>
            <dl className="mt-4 space-y-4 text-sm md:text-base">
              <div>
                <dt className="font-bold">Where do items ship from?</dt>
                <dd className="text-ink/80">Everything ships within 2 business days from the platform listed on each card.</dd>
              </div>
              <div>
                <dt className="font-bold">Can I bundle across platforms?</dt>
                <dd className="text-ink/80">Yes — DM on any storefront and I'll set up a combined invoice.</dd>
              </div>
              <div>
                <dt className="font-bold">What's the weekly prize?</dt>
                <dd className="text-ink/80">Top Star Escape score each week gets a Mystery Collectible Box. ✦</dd>
              </div>
            </dl>
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 text-center text-sm text-ink/70 md:px-8">
          <p>© {new Date().getFullYear()} Cold Little Star — Made with glitter & gravity.</p>
        </footer>
      </div>

      <SnagModal product={snag} onClose={() => setSnag(null)} />
      <StarEscape open={gameOn} onClose={() => setGameOn(false)} />
    </div>
  );
}
