import { Heart, Pause, PenLine, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  QUALITY_BY_ID,
  QUALITIES,
  chordSymbol,
  identifyChord,
  intervalLabel,
  inversionName,
  noteName,
  prefersFlats,
} from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";

export function ChordStage() {
  const root = useStudio((s) => s.root);
  const qualityId = useStudio((s) => s.qualityId);
  const inversion = useStudio((s) => s.inversion);
  const keyRoot = useStudio((s) => s.keyRoot);
  const keyMode = useStudio((s) => s.keyMode);
  const setInversion = useStudio((s) => s.setInversion);
  const playStyle = useStudio((s) => s.playStyle);
  const setPlayStyle = useStudio((s) => s.setPlayStyle);
  const playCurrent = useStudio((s) => s.playCurrent);
  const stopPlayback = useStudio((s) => s.stopPlayback);
  const playing = useStudio((s) => s.playing);
  const saveCurrent = useStudio((s) => s.saveCurrent);
  const paintMode = useStudio((s) => s.paintMode);
  const paintMidi = useStudio((s) => s.paintMidi);
  const setPaintMode = useStudio((s) => s.setPaintMode);
  const applyIdentified = useStudio((s) => s.applyIdentified);

  const q = QUALITY_BY_ID[qualityId] ?? QUALITIES[0]!;
  const flats = prefersFlats(keyRoot, keyMode);
  const symbol = chordSymbol(root, q, flats);
  const isPlaying = playing.length > 0;

  const identified = paintMode ? identifyChord(paintMidi) : null;
  const shown =
    paintMode && paintMidi.length > 0
      ? [...paintMidi]
          .sort((a, b) => a - b)
          .map((midi) => {
            const pc = ((midi % 12) + 12) % 12;
            const from = identified?.root ?? root;
            const iv = (pc - from + 12) % 12;
            return { name: noteName(pc, flats), interval: intervalLabel(iv) };
          })
      : q.intervals.map((iv) => ({
          name: noteName(root + iv, flats),
          interval: intervalLabel(iv),
        }));

  return (
    <section className="rounded-2xl bg-bg-elevated px-5 py-6 shadow-soft sm:px-8 sm:py-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-medium tracking-[0.18em] text-fg-muted uppercase">
            Current chord
          </p>
          <h1 className="font-display mt-2 text-5xl leading-none tracking-tight text-fg sm:text-6xl lg:text-7xl">
            {symbol}
          </h1>
          <ul className="mt-5 flex flex-wrap gap-2">
            {shown.map((n, i) => (
              <li
                key={`${n.name}-${n.interval}-${i}`}
                className="flex h-9 items-center gap-2 rounded-md border border-border bg-bg-subtle px-3"
              >
                <span className="font-display text-base text-fg">{n.name}</span>
                <span className="text-xs font-medium tracking-wide text-fg-subtle">
                  {n.interval}
                </span>
              </li>
            ))}
            {shown.length === 0 && (
              <li className="text-sm text-fg-muted">Tap keys to add notes</li>
            )}
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {q.intervals.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setInversion(i)}
                className={cn(
                  "h-9 rounded-sm px-3 text-xs font-medium transition-colors duration-150",
                  inversion === i && !paintMode
                    ? "bg-accent text-accent-fg"
                    : "bg-bg-subtle text-fg-muted hover:text-fg",
                )}
              >
                {inversionName(i, q.intervals.length)}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {(["chord", "arp", "strum"] as const).map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => setPlayStyle(style)}
                className={cn(
                  "h-9 rounded-sm px-3 text-xs font-medium capitalize transition-colors duration-150",
                  playStyle === style
                    ? "bg-bg-mute text-fg"
                    : "text-fg-muted hover:text-fg",
                )}
              >
                {style === "arp" ? "Arpeggio" : style === "strum" ? "Strum" : "Block"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Button size="lg" onClick={() => void (isPlaying ? stopPlayback() : playCurrent())}>
          {isPlaying ? <Pause className="size-4" /> : <Play className="size-4" />}
          {isPlaying ? "Stop" : "Play chord"}
        </Button>
        <Button variant="secondary" onClick={saveCurrent}>
          <Heart className="size-4" />
          Save
        </Button>
        <Button
          variant={paintMode ? "default" : "ghost"}
          onClick={() => (paintMode ? applyIdentified() : setPaintMode(true))}
        >
          <PenLine className="size-4" />
          {paintMode ? "Use this spelling" : "Tap to build"}
        </Button>
      </div>
    </section>
  );
}
