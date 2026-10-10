import { ListPlus, Play, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PROGRESSION_PRESETS,
  QUALITY_BY_ID,
  QUALITIES,
  chordSymbol,
  diatonicChords,
} from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";
import { cn } from "@/lib/utils";

export function Progression() {
  const keyRoot = useStudio((s) => s.keyRoot);
  const keyMode = useStudio((s) => s.keyMode);
  const sevenths = useStudio((s) => s.sevenths);
  const setSevenths = useStudio((s) => s.setSevenths);
  const pickDiatonic = useStudio((s) => s.pickDiatonic);
  const progression = useStudio((s) => s.progression);
  const progCursor = useStudio((s) => s.progCursor);
  const addToProgression = useStudio((s) => s.addToProgression);
  const removeStep = useStudio((s) => s.removeStep);
  const loadPreset = useStudio((s) => s.loadPreset);
  const clearProgression = useStudio((s) => s.clearProgression);
  const playProgression = useStudio((s) => s.playProgression);
  const saveProgression = useStudio((s) => s.saveProgression);
  const bpm = useStudio((s) => s.bpm);
  const setBpm = useStudio((s) => s.setBpm);
  const root = useStudio((s) => s.root);
  const qualityId = useStudio((s) => s.qualityId);
  const flats = useStudio((s) => s.flats());

  const diatonic = diatonicChords(keyRoot, keyMode, sevenths);

  return (
    <div className="rounded-xl bg-bg-elevated p-4 shadow-soft sm:p-5">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
            In key
          </p>
          <p className="mt-1 font-display text-lg text-fg">Diatonic chords</p>
        </div>
        <button
          type="button"
          onClick={() => setSevenths(!sevenths)}
          className={cn(
            "h-9 rounded-sm px-3 text-xs font-medium transition-colors duration-150",
            sevenths ? "bg-accent text-accent-fg" : "bg-bg-subtle text-fg-muted",
          )}
        >
          {sevenths ? "Sevenths" : "Triads"}
        </button>
      </div>

      <div className="flex w-full min-w-0 gap-2 overflow-x-auto pb-1">
        {diatonic.map((d) => {
          const active = d.root === root && d.quality.id === qualityId;
          return (
            <button
              key={d.numeral}
              type="button"
              onClick={() => pickDiatonic(d.root, d.quality.id)}
              className={cn(
                "flex min-w-16 shrink-0 flex-col items-center rounded-md border px-3 py-2 transition-colors duration-150",
                active
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-bg-subtle text-fg hover:border-border-strong",
              )}
            >
              <span className="text-xs font-medium tracking-wide opacity-70">
                {d.numeral}
              </span>
              <span className="font-display text-base">
                {chordSymbol(d.root, d.quality, flats)}
              </span>
            </button>
          );
        })}
      </div>

      <div className="my-5 h-px bg-border" />

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
          Progression
        </p>
        <label className="flex items-center gap-2 text-xs text-fg-muted">
          BPM
          <input
            type="range"
            min={60}
            max={160}
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="h-1 w-24 cursor-pointer accent-accent"
            aria-label="Tempo"
            suppressHydrationWarning
          />
          <span className="w-8 tabular-nums text-fg">{bpm}</span>
        </label>
      </div>

      <div className="mb-3 flex w-full min-w-0 flex-wrap gap-1.5">
        {PROGRESSION_PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => loadPreset(p.id)}
            className="h-8 rounded-sm bg-bg-subtle px-2.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg"
          >
            {p.name}
          </button>
        ))}
      </div>

      {progression.length === 0 ? (
        <p className="rounded-md border border-dashed border-border px-4 py-6 text-center text-sm text-fg-muted">
          Add the current chord, or drop in a classic sequence.
        </p>
      ) : (
        <ol className="flex w-full min-w-0 flex-wrap gap-2">
          {progression.map((step, i) => {
            const q = QUALITY_BY_ID[step.qualityId] ?? QUALITIES[0]!;
            return (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => removeStep(step.id)}
                  className={cn(
                    "group flex h-12 items-center gap-2 rounded-md border px-3 text-left transition-colors",
                    progCursor === i
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-border bg-bg-subtle text-fg hover:border-danger/40",
                  )}
                  title="Remove chord"
                >
                  <span className="font-display text-base">
                    {chordSymbol(step.root, q, flats)}
                  </span>
                  <Trash2 className="size-3 opacity-0 transition-opacity group-hover:opacity-70" />
                </button>
              </li>
            );
          })}
        </ol>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" onClick={addToProgression}>
          <ListPlus className="size-3.5" />
          Add chord
        </Button>
        <Button
          size="sm"
          onClick={() => void playProgression()}
          disabled={progression.length === 0}
        >
          <Play className="size-3.5" />
          Play sequence
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={saveProgression}
          disabled={progression.length === 0}
        >
          Save sequence
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearProgression}
          disabled={progression.length === 0}
        >
          Clear
        </Button>
      </div>
    </div>
  );
}
