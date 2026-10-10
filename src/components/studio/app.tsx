import { useEffect } from "react";
import { Minus, Plus, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStudio } from "@/lib/chords/store";
import { ChordStage } from "./chord-stage";
import { CircleOfFifths } from "./circle-of-fifths";
import { GuitarChart } from "./guitar-chart";
import { Library } from "./library";
import { Piano } from "./piano";
import { Progression } from "./progression";
import { QualityBar } from "./quality-bar";

export function Studio() {
  const hydrate = useStudio((s) => s.hydrate);
  const playCurrent = useStudio((s) => s.playCurrent);
  const octave = useStudio((s) => s.octave);
  const setOctave = useStudio((s) => s.setOctave);
  const volume = useStudio((s) => s.volume);
  const setVolume = useStudio((s) => s.setVolume);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      if (e.code === "Space") {
        e.preventDefault();
        void playCurrent();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [playCurrent]);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-fg">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="font-display text-xl tracking-tight text-fg">
              Resonance
            </p>
            <p className="text-xs text-fg-muted">Chord studio</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center rounded-md bg-bg-elevated px-1">
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Lower octave"
                onClick={() => setOctave(octave - 1)}
              >
                <Minus className="size-3.5" />
              </Button>
              <span className="w-16 text-center text-xs text-fg-muted tabular-nums">
                Oct {octave}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                aria-label="Raise octave"
                onClick={() => setOctave(octave + 1)}
              >
                <Plus className="size-3.5" />
              </Button>
            </div>
            <label className="flex h-11 items-center gap-2 rounded-md bg-bg-elevated px-3">
              <Volume2 className="size-3.5 text-fg-muted" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-1 w-20 cursor-pointer accent-accent sm:w-24"
                aria-label="Volume"
                suppressHydrationWarning
              />
            </label>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-5 px-4 py-5 sm:px-6 sm:py-8">
        <ChordStage />
        <Piano />
        <QualityBar />
        <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col gap-5">
            <CircleOfFifths />
            <GuitarChart />
          </div>
          <div className="flex flex-col gap-5">
            <Progression />
            <Library />
          </div>
        </div>
        <p className="pb-8 text-center text-xs text-fg-subtle">
          Space plays the chord. Sequences and saves stay on this device.
        </p>
      </main>
    </div>
  );
}
