import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { X } from "lucide-react";

const COLS = 20;
const ROWS = 16;
const TICK_MS = 130;

type Cell = { x: number; y: number };

const dirs = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
} as const;
type Dir = (typeof dirs)[keyof typeof dirs];

function randCell(exclude: Cell[]): Cell {
  while (true) {
    const c = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    if (!exclude.some((e) => e.x === c.x && e.y === c.y)) return c;
  }
}

function playTurnSound() {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.frequency.value = 400;
  gain.gain.setValueAtTime(0.1, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  osc.start(audioContext.currentTime);
  osc.stop(audioContext.currentTime + 0.1);
}

function playGameOverSound() {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const now = audioContext.currentTime;
  for (let i = 0; i < 3; i++) {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.frequency.value = 200 - i * 50;
    gain.gain.setValueAtTime(0.1, now + i * 0.15);
    gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.2);
    osc.start(now + i * 0.15);
    osc.stop(now + i * 0.15 + 0.2);
  }
}

function createBackgroundMusic() {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const notes = [262, 294, 330, 349, 392, 392, 349, 330, 294, 262];

  const playNote = (freq: number, time: number, duration: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.05, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    osc.start(time);
    osc.stop(time + duration);
  };

  const playRound = () => {
    const start = audioContext.currentTime;
    notes.forEach((note, idx) => playNote(note, start + idx * 0.15, 0.15));
  };

  playRound();
  const musicLoop = setInterval(playRound, notes.length * 150);

  return {
    stop: () => {
      clearInterval(musicLoop);
      audioContext.close().catch(() => {});
    },
  };
}

type Props = { open: boolean; onClose: () => void };

export function StarEscape({ open, onClose }: Props) {
  const [snake, setSnake] = useState<Cell[]>([{ x: 8, y: 8 }, { x: 7, y: 8 }]);
  const [dir, setDir] = useState<Dir>(dirs.ArrowRight);
  const dirRef = useRef(dir);
  dirRef.current = dir;
  const [food, setFood] = useState<Cell>({ x: 14, y: 8 });
  const [holes, setHoles] = useState<Cell[]>([
    { x: 4, y: 4 }, { x: 15, y: 11 }, { x: 10, y: 2 }, { x: 3, y: 12 },
  ]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [over, setOver] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const b = Number(localStorage.getItem("cls_best") || 0);
      setBest(b);
    }
  }, []);

  const reset = useCallback(() => {
    setSnake([{ x: 8, y: 8 }, { x: 7, y: 8 }]);
    setDir(dirs.ArrowRight);
    setFood({ x: 14, y: 8 });
    setHoles([
      { x: 4, y: 4 }, { x: 15, y: 11 }, { x: 10, y: 2 }, { x: 3, y: 12 },
    ]);
    setScore(0);
    setOver(false);
  }, []);

  // input
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key in dirs) {
        e.preventDefault();
        const next = dirs[e.key as keyof typeof dirs];
        const cur = dirRef.current;
        if (cur.x + next.x === 0 && cur.y + next.y === 0) return;
        playTurnSound();
        setDir(next);
      }
      if (e.key === " " && over) reset();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, over, reset, onClose]);

  // tick
  useEffect(() => {
    if (!open || over) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const nh = { x: head.x + dirRef.current.x, y: head.y + dirRef.current.y };
        if (nh.x < 0 || nh.x >= COLS || nh.y < 0 || nh.y >= ROWS) {
          playGameOverSound();
          setOver(true);
          return prev;
        }
        if (prev.some((c) => c.x === nh.x && c.y === nh.y)) {
          playGameOverSound();
          setOver(true);
          return prev;
        }
        if (holes.some((h) => h.x === nh.x && h.y === nh.y)) {
          playGameOverSound();
          setOver(true);
          return prev;
        }
        const ate = nh.x === food.x && nh.y === food.y;
        const next = [nh, ...prev];
        if (!ate) next.pop();
        else {
          setScore((s) => {
            const ns = s + 10;
            setBest((b) => {
              const nb = Math.max(b, ns);
              if (typeof window !== "undefined") localStorage.setItem("cls_best", String(nb));
              return nb;
            });
            return ns;
          });
          setFood(randCell([...next, ...holes]));
          // every 30 pts add a new hole
          if ((score + 10) % 30 === 0) {
            setHoles((hs) => [...hs, randCell([...next, ...hs, food])]);
          }
        }
        return next;
      });
    }, TICK_MS);
    return () => clearInterval(id);
  }, [open, over, food, holes, score]);

  // background music
  useEffect(() => {
    if (!open || over) return;
    const music = createBackgroundMusic();
    return () => music.stop();
  }, [open, over]);

  // shared steer (used by swipe + on-screen D-pad)
  const steer = useCallback((nd: Dir) => {
    const cur = dirRef.current;
    if (cur.x + nd.x === 0 && cur.y + nd.y === 0) return;
    if (cur.x === nd.x && cur.y === nd.y) return;
    playTurnSound();
    setDir(nd);
  }, []);

  // mobile swipe
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    if (Math.abs(dx) < 12 && Math.abs(dy) < 12) {
      touchStart.current = null;
      return;
    }
    if (Math.abs(dx) > Math.abs(dy)) {
      steer(dx > 0 ? dirs.ArrowRight : dirs.ArrowLeft);
    } else {
      steer(dy > 0 ? dirs.ArrowDown : dirs.ArrowUp);
    }
    touchStart.current = null;
  };

  const handlePadPress = (e: React.PointerEvent, nd: Dir) => {
    e.preventDefault();
    if (over) return;
    steer(nd);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 grid place-items-center bg-ink/70 backdrop-blur-sm p-3 md:p-6"
        >
          <motion.div
            initial={{ y: 30, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 30, opacity: 0 }}
            className="relative w-full max-w-5xl rounded-3xl border-4 border-ink bg-card p-4 shadow-pop-lg md:p-6"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-bold uppercase tracking-wider md:text-2xl">
                ★ Star Escape
              </h3>
              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border-4 border-ink bg-star shadow-pop-sm"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mb-3 rounded-2xl border-4 border-ink bg-coral px-4 py-2 text-center font-display text-sm font-bold uppercase tracking-wider text-card shadow-pop-sm md:text-base">
              ✦ Weekly Top Score Wins a Mystery Collectible Box! ✦
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_220px]">
              <div
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative aspect-[20/16] w-full overflow-hidden rounded-2xl border-4 border-ink bg-sky shadow-pop-sm"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(10,17,40,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,17,40,0.08) 1px, transparent 1px)",
                  backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
                }}
              >
                {/* food star */}
                <div
                  className="absolute grid place-items-center"
                  style={{
                    left: `${(food.x / COLS) * 100}%`,
                    top: `${(food.y / ROWS) * 100}%`,
                    width: `${100 / COLS}%`,
                    height: `${100 / ROWS}%`,
                  }}
                >
                  <span className="text-xl md:text-2xl">⭐</span>
                </div>
                {/* holes */}
                {holes.map((h, i) => (
                  <div
                    key={i}
                    className="absolute grid place-items-center"
                    style={{
                      left: `${(h.x / COLS) * 100}%`,
                      top: `${(h.y / ROWS) * 100}%`,
                      width: `${100 / COLS}%`,
                      height: `${100 / ROWS}%`,
                    }}
                  >
                    <div className="h-[80%] w-[80%] rounded-full border-2 border-ink bg-grape shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" />
                  </div>
                ))}
                {/* snake */}
                {snake.map((c, i) => (
                  <div
                    key={i}
                    className="absolute grid place-items-center"
                    style={{
                      left: `${(c.x / COLS) * 100}%`,
                      top: `${(c.y / ROWS) * 100}%`,
                      width: `${100 / COLS}%`,
                      height: `${100 / ROWS}%`,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[75%] w-[75%]"
                      style={{
                        filter: i === 0 ? "drop-shadow(0 0 2px rgba(229, 207, 67, 0.6))" : `opacity-${Math.max(0.4, 1 - i * 0.08)}`,
                      }}
                      aria-hidden
                    >
                      <path
                        d="M12 2l2.9 6.3L22 9.3l-5.2 4.7L18.2 22 12 18.4 5.8 22l1.4-8L2 9.3l7.1-1z"
                        fill="var(--color-star)"
                        stroke="var(--color-ink)"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ))}

                {over && (
                  <div className="absolute inset-0 grid place-items-center bg-ink/60">
                    <div className="rounded-2xl border-4 border-ink bg-card px-6 py-5 text-center shadow-pop">
                      <p className="font-display text-2xl font-bold">Cosmic Crash!</p>
                      <p className="mt-1 text-sm">Score: <strong>{score}</strong></p>
                      <button
                        onClick={reset}
                        className="mt-3 rounded-full border-4 border-ink bg-star px-5 py-2 font-display text-sm font-bold uppercase shadow-pop-sm"
                      >
                        Re-launch
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <aside className="flex flex-col gap-3">
                <div className="rounded-2xl border-4 border-ink bg-ink p-4 text-card shadow-pop-sm">
                  <p className="font-display text-xs uppercase tracking-widest text-star">Score</p>
                  <p className="font-display text-4xl font-bold text-star">{score}</p>
                  <p className="mt-3 font-display text-xs uppercase tracking-widest text-mint">Best</p>
                  <p className="font-display text-2xl font-bold text-mint">{best}</p>
                </div>
                {/* On-screen D-pad — essential for touch, handy on desktop too */}
                <div className="rounded-2xl border-4 border-ink bg-sky p-3 shadow-pop-sm">
                  <p className="mb-2 text-center font-display text-[10px] font-bold uppercase tracking-widest text-ink/70">
                    Touch Controls
                  </p>
                  <div className="mx-auto grid w-40 grid-cols-3 grid-rows-3 gap-1.5 select-none">
                    <div />
                    <button
                      type="button"
                      aria-label="Up"
                      onPointerDown={(e) => handlePadPress(e, dirs.ArrowUp)}
                      className="grid h-12 touch-none place-items-center rounded-xl border-4 border-ink bg-card text-lg font-bold shadow-pop-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >▲</button>
                    <div />
                    <button
                      type="button"
                      aria-label="Left"
                      onPointerDown={(e) => handlePadPress(e, dirs.ArrowLeft)}
                      className="grid h-12 touch-none place-items-center rounded-xl border-4 border-ink bg-card text-lg font-bold shadow-pop-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >◀</button>
                    <div className="grid place-items-center text-xl">★</div>
                    <button
                      type="button"
                      aria-label="Right"
                      onPointerDown={(e) => handlePadPress(e, dirs.ArrowRight)}
                      className="grid h-12 touch-none place-items-center rounded-xl border-4 border-ink bg-card text-lg font-bold shadow-pop-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >▶</button>
                    <div />
                    <button
                      type="button"
                      aria-label="Down"
                      onPointerDown={(e) => handlePadPress(e, dirs.ArrowDown)}
                      className="grid h-12 touch-none place-items-center rounded-xl border-4 border-ink bg-card text-lg font-bold shadow-pop-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                    >▼</button>
                    <div />
                  </div>
                </div>
                <div className="rounded-2xl border-4 border-ink bg-secondary p-3 text-xs shadow-pop-sm">
                  <p><strong>Arrows / WASD</strong>, swipe, or tap the D-pad.</p>
                  <p className="mt-1">Eat ⭐ to grow your glitter trail. Avoid the purple <strong>black holes</strong>.</p>
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
