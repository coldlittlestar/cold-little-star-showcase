import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BAKED, type BakedKey } from "./BakedDoodles";
import { Star } from "./Doodles";

type Hidden = { id: number; key: BakedKey; top: number; left: number; rot: number; size: number };

const TARGETS: BakedKey[] = ["cupcake", "donut", "cookie", "cake", "macaron", "croissant", "pie", "brownie"];

function seededScene(): Hidden[] {
  // Mix of targets + decoy duplicates scattered across the scene
  const items: Hidden[] = [];
  const all: BakedKey[] = [
    ...TARGETS,
    "cupcake", "donut", "cookie", "macaron", "croissant", "brownie",
  ];
  all.forEach((key, i) => {
    items.push({
      id: i,
      key,
      top: 6 + ((i * 53) % 82),
      left: 4 + ((i * 71) % 88),
      rot: ((i * 37) % 40) - 20,
      size: 44 + ((i * 17) % 32),
    });
  });
  return items;
}

export function EyeSpyGame() {
  const [scene] = useState<Hidden[]>(() => seededScene());
  const [found, setFound] = useState<Set<BakedKey>>(new Set());
  const [poofId, setPoofId] = useState<number | null>(null);

  const remaining = useMemo(
    () => TARGETS.filter((k) => !found.has(k)),
    [found],
  );

  const handleClick = (item: Hidden) => {
    if (!TARGETS.includes(item.key)) return;
    if (found.has(item.key)) return;
    setFound((prev) => new Set(prev).add(item.key));
    setPoofId(item.id);
    setTimeout(() => setPoofId(null), 700);
  };

  const reset = () => setFound(new Set());
  const done = remaining.length === 0;

  return (
    <div className="space-y-4">
      {/* Checklist */}
      <div className="rounded-2xl border-4 border-ink bg-card p-4 shadow-pop-sm">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="font-display text-sm font-bold uppercase tracking-wider">
            Find {TARGETS.length} treats · {found.size}/{TARGETS.length}
          </p>
          <button
            onClick={reset}
            className="rounded-full border-2 border-ink bg-star px-3 py-1 font-display text-xs font-bold uppercase tracking-wider shadow-pop-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            Reset
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-8">
          {TARGETS.map((k) => {
            const { Cmp, name } = BAKED[k];
            const isFound = found.has(k);
            return (
              <div
                key={k}
                title={name}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 border-ink p-2 transition ${
                  isFound ? "bg-mint/40 opacity-60" : "bg-secondary"
                }`}
              >
                <Cmp className={`h-8 w-8 ${isFound ? "" : "animate-floaty"}`} />
                <span className={`text-[10px] font-bold leading-tight text-center ${isFound ? "line-through" : ""}`}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scene */}
      <div className="relative h-[520px] w-full overflow-hidden rounded-3xl border-4 border-ink bg-gradient-to-b from-[#FFE4ED] via-[#FFF6E5] to-[#D9F2FF] shadow-pop md:h-[620px]">
        {/* decor */}
        <Star className="pointer-events-none absolute left-3 top-3 h-6 w-6 opacity-50" />
        <Star className="pointer-events-none absolute bottom-4 right-6 h-7 w-7 opacity-50" delay={0.3} />

        {scene.map((item) => {
          const { Cmp } = BAKED[item.key];
          const isFound = found.has(item.key);
          const isTarget = TARGETS.includes(item.key);
          return (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item)}
              disabled={isFound}
              aria-label={isTarget ? BAKED[item.key].name : "treat"}
              whileHover={{ scale: 1.12, rotate: item.rot + 6 }}
              whileTap={{ scale: 0.9 }}
              initial={{ rotate: item.rot, opacity: 0, scale: 0.6 }}
              animate={{
                rotate: item.rot,
                opacity: isFound ? 0 : 1,
                scale: isFound ? 0 : 1,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: (item.id % 8) * 0.05 }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
                width: item.size,
                height: item.size,
              }}
            >
              <Cmp className="h-full w-full drop-shadow-[2px_2px_0_rgb(10_17_40)]" />
            </motion.button>
          );
        })}

        <AnimatePresence>
          {poofId !== null && (
            <motion.div
              key={poofId}
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 1.6, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="pointer-events-none absolute inset-0 grid place-items-center"
            >
              <span className="rounded-full border-4 border-ink bg-star px-4 py-2 font-display text-xl font-bold shadow-pop">
                YUM! ✦
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {done && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="absolute inset-x-4 bottom-4 rounded-2xl border-4 border-ink bg-coral p-4 text-card shadow-pop"
          >
            <p className="font-display text-lg font-bold uppercase tracking-wide">
              🎉 You found every treat!
            </p>
            <p className="text-sm">
              Peek the real bakes on{" "}
              <a
                href="https://www.instagram.com/perrywinklecupcakes?igsh=MW56NXUwdGMwMDM0aA=="
                target="_blank"
                rel="noreferrer"
                className="underline font-bold"
              >
                @perrywinklecupcakes
              </a>{" "}
              ✦
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
