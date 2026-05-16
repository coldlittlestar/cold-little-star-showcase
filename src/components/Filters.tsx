import { CATEGORIES } from "@/lib/products";

type Props = {
  active: string;
  onChange: (c: string) => void;
};

export function Filters({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
      {CATEGORIES.map((c) => {
        const on = active === c;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`rounded-full border-4 border-ink px-4 py-2 font-display text-sm font-bold uppercase tracking-wide shadow-pop-sm transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none ${
              on ? "bg-coral text-card" : "bg-card text-ink"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
