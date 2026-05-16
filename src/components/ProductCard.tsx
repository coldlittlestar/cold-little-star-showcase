import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

type Props = { product: Product; onSnag: (p: Product) => void };

export function ProductCard({ product, onSnag }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="group relative flex flex-col overflow-visible rounded-3xl border-4 border-ink bg-card shadow-pop"
    >
      {/* badge */}
      <div className="absolute -left-3 -top-3 z-10 grid h-16 w-16 -rotate-12 place-items-center">
        <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full">
          <path
            d="M32 2l4 6 7-2 1 7 7 1-2 7 6 4-6 4 2 7-7 1-1 7-7-2-4 6-4-6-7 2-1-7-7-1 2-7-6-4 6-4-2-7 7-1 1-7 7 2z"
            fill={product.badge === "Grail" ? "var(--color-coral)" : "var(--color-mint)"}
            stroke="var(--color-ink)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="relative z-10 text-center font-display text-[10px] font-bold leading-tight uppercase">
          {product.badge === "Grail" ? "Grail" : <>Chilly<br />Find</>}
        </span>
      </div>

      {/* image */}
      <div className="m-3 overflow-hidden rounded-2xl border-4 border-ink bg-secondary">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 px-4 pb-4">
        <h3 className="font-display text-lg font-bold leading-tight">{product.title}</h3>
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="rounded-full border-2 border-ink bg-secondary px-2 py-0.5 text-xs font-bold">
            {product.size}
          </span>
          <span className="rounded-full border-2 border-ink bg-secondary px-2 py-0.5 text-xs font-bold">
            {product.fit}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{product.blurb}</p>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="font-display text-2xl font-bold text-ink">
            ${product.price}
          </span>
          <button
            onClick={() => onSnag(product)}
            className="rounded-full border-4 border-ink bg-coral px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-card shadow-pop-sm transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            Snag it on Marktplace
          </button>
        </div>
      </div>
    </motion.article>
  );
}
