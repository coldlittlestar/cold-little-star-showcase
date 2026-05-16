import { PLATFORMS } from "@/lib/products";

export function PlatformBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8">
      <div className="rounded-3xl border-4 border-ink bg-card p-4 shadow-pop md:p-5">
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-star text-lg">✦</span>
            <p className="font-display text-base font-bold uppercase tracking-wider">
              Shop the orbit
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {PLATFORMS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border-4 border-ink px-4 py-2 font-display text-sm font-bold uppercase tracking-wide shadow-pop-sm transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                style={{ backgroundColor: p.color }}
              >
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
