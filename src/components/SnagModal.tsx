import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/lib/products";

type Props = { product: Product | null; onClose: () => void };

export function SnagModal({ product, onClose }: Props) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-ink/40 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.7, rotate: -4, y: 30 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl border-4 border-ink bg-card p-6 shadow-pop-lg"
          >
            <button
              onClick={onClose}
              className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full border-4 border-ink bg-star shadow-pop-sm"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="text-center">
              <span className="inline-block -rotate-2 rounded-full border-4 border-ink bg-coral px-3 py-1 font-display text-xs font-bold uppercase tracking-wider text-card shadow-pop-sm">
                Live on {product.platform}
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {product.size} • {product.fit} • <strong>${product.price}</strong>
              </p>

              <p className="mt-4 text-sm">
                Tap below to launch into <strong>{product.platform}</strong> and snag it before someone else does.
              </p>

              <a
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border-4 border-ink bg-star px-6 py-3 font-display text-base font-bold uppercase tracking-wide shadow-pop transition-transform hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 active:shadow-pop-sm"
              >
                Take me to {product.platform} →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
