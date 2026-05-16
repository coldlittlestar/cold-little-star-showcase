import { useEffect, useRef, useState } from "react";

export function useAmbientMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainsRef = useRef<GainNode[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const muted = localStorage.getItem("cls_audio_muted") === "true";
    setIsMuted(muted);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => {
      const newState = !prev;
      localStorage.setItem("cls_audio_muted", String(newState));
      return newState;
    });
  };

  useEffect(() => {
    if (typeof window === "undefined" || !audioContextRef.current) return;

    if (isMuted) {
      gainsRef.current.forEach((gain) => {
        gain.gain.setValueAtTime(0, audioContextRef.current!.currentTime);
      });
    } else {
      gainsRef.current.forEach((gain) => {
        gain.gain.setValueAtTime(0.04, audioContextRef.current!.currentTime);
      });
    }
  }, [isMuted]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const pentatonicScale = [262, 294, 330, 392, 440, 494, 523]; // Space-like scale

      const playMelody = () => {
        const now = audioContext.currentTime;
        let time = now;

        pentatonicScale.forEach((freq, idx) => {
          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();

          osc.connect(gain);
          gain.connect(audioContext.destination);

          osc.type = "sine";
          osc.frequency.value = freq;

          const startGain = isMuted ? 0 : 0.04;
          gain.gain.setValueAtTime(startGain, time);
          gain.gain.exponentialRampToValueAtTime(
            0.001,
            time + 0.4
          );

          osc.start(time);
          osc.stop(time + 0.4);

          oscillatorsRef.current.push(osc);
          gainsRef.current.push(gain);

          time += 0.4;
        });

        setTimeout(() => playMelody(), pentatonicScale.length * 400);
      };

      playMelody();

      return () => {
        oscillatorsRef.current.forEach((osc) => {
          try {
            osc.stop();
          } catch (e) {
            // Already stopped
          }
        });
      };
    } catch (error) {
      console.error("Failed to initialize audio context:", error);
    }
  }, [isMuted]);

  return { isMuted, toggleMute };
}
