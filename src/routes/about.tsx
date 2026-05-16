import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Twinkles } from "@/components/Twinkles";
import { Star, Planet, Moon } from "@/components/Doodles";
import { Socials } from "@/components/Socials";
import { EyeSpyGame } from "@/components/EyeSpyGame";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Talia — Cold Little Star & Perrywinkle Cupcakes" },
      {
        name: "description",
        content:
          "Meet Talia, the curator behind Cold Little Star and baker behind Perrywinkle Cupcakes. Play the Eye Spy bake-finding mini game!",
      },
      { property: "og:title", content: "About Talia — Cold Little Star" },
      {
        property: "og:description",
        content:
          "Meet the curator + baker behind the orbit, and play the Eye Spy treat-hunt game.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-sky bg-stars">
      <Twinkles />
      <Moon className="pointer-events-none absolute left-4 top-32 h-8 w-8 opacity-80 md:left-8" />
      <Planet className="pointer-events-none absolute right-6 top-44 h-10 w-10 opacity-80 md:right-12" />
      <Star className="pointer-events-none absolute left-1/3 top-[28rem] h-6 w-6 opacity-70" />

      <Header gameOn={false} onToggle={() => {}} />

      <main className="space-y-10 pb-20">
        <section className="mx-auto max-w-4xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-card p-6 shadow-pop md:p-10">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-block rounded-full border-4 border-ink bg-star px-4 py-1 font-display text-xs font-bold uppercase tracking-widest shadow-pop-sm">
                  ✦ Meet the Star ✦
                </span>
                <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">
                  Hi, I'm Talia
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-ink/85">
                  Curator of <strong>Cold Little Star</strong> and baker behind{" "}
                  <strong>Perrywinkle Cupcakes</strong>. By day I'm hunting Y2K
                  grails across every resale orbit — by oven I'm piping
                  pastel-perfect cupcakes, frosted cookies, and one-of-a-kind
                  custom cakes from my little kitchen.
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink/75">
                  Sweet, nostalgic, a little chaotic — same vibe, different
                  medium. Follow along to see what's fresh out of the oven (or
                  the vintage bin).
                </p>
                <div className="mt-5">
                  <Socials size="lg" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid h-44 w-44 place-items-center rounded-full border-4 border-ink bg-coral shadow-pop">
                  <span className="font-display text-7xl">★</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="rounded-3xl border-4 border-ink bg-secondary p-6 shadow-pop md:p-10">
            <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
              <div>
                <span className="inline-block rounded-full border-4 border-ink bg-coral px-4 py-1 font-display text-xs font-bold uppercase tracking-widest text-card shadow-pop-sm">
                  Mini Game
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
                  Eye Spy: Perrywinkle Bakes
                </h2>
                <p className="mt-2 max-w-xl text-base text-ink/80">
                  Tap each cartoon treat that matches a real bake from{" "}
                  <a
                    href="https://www.instagram.com/perrywinklecupcakes?igsh=MW56NXUwdGMwMDM0aA=="
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold underline"
                  >
                    @perrywinklecupcakes
                  </a>
                  . Find all 8 to win bragging rights ✦
                </p>
              </div>
            </div>
            <EyeSpyGame />
          </div>
        </section>

        <footer className="mx-auto max-w-7xl px-4 text-center text-sm text-ink/70 md:px-8">
          <div className="mb-3 flex justify-center">
            <Socials size="sm" />
          </div>
          <p>© {new Date().getFullYear()} Cold Little Star — Made with glitter & gravity.</p>
        </footer>
      </main>
    </div>
  );
}
