import { useEffect, useRef, useState, useCallback } from "react";

export function useAmbientMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startedRef = useRef(false);

  // load persisted mute state once
  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsMuted(localStorage.getItem("cls_audio_muted") === "true");
  }, []);

  // initialize audio graph exactly once
  useEffect(() => {
    if (typeof window === "undefined" || startedRef.current) return;
    startedRef.current = true;

    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const master = ctx.createGain();
      master.gain.value = 0.04;
      master.connect(ctx.destination);
      audioContextRef.current = ctx;
      masterGainRef.current = master;

      const scale = [262, 294, 330, 392, 440, 494, 523];

      const playMelody = () => {
        const now = ctx.currentTime;
        let time = now;
        scale.forEach((freq) => {
          const osc = ctx.createOscillator();
          const g = ctx.createGain();
          osc.connect(g);
          g.connect(master);
          osc.type = "sine";
          osc.frequency.value = freq;
          g.gain.setValueAtTime(1, time);
          g.gain.exponentialRampToValueAtTime(0.001, time + 0.4);
          osc.start(time);
          osc.stop(time + 0.42);
          time += 0.4;
        });
        timeoutRef.current = setTimeout(playMelody, scale.length * 400);
      };
      playMelody();
    } catch (e) {
      console.error("Failed to initialize audio context:", e);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      audioContextRef.current?.close().catch(() => {});
      audioContextRef.current = null;
      masterGainRef.current = null;
      startedRef.current = false;
    };
  }, []);

  // react to mute changes by adjusting master gain only
  useEffect(() => {
    const ctx = audioContextRef.current;
    const master = masterGainRef.current;
    if (!ctx || !master) return;
    if (isMuted) {
      master.gain.setValueAtTime(0, ctx.currentTime);
    } else {
      ctx.resume?.().catch(() => {});
      master.gain.setValueAtTime(0.04, ctx.currentTime);
    }
  }, [isMuted]);

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("cls_audio_muted", String(next));
      } catch {}
      return next;
    });
  }, []);

  return { isMuted, toggleMute };
}
