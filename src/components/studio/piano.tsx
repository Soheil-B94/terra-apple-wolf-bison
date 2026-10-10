import { useEffect, useMemo, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  QUALITY_BY_ID,
  QUALITIES,
  isBlackKey,
  noteName,
  prefersFlats,
  voicingMidi,
  wrapPc,
} from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";

const START = 48; // C3
const END = 72; // C5 inclusive

export function Piano() {
  const paintMode = useStudio((s) => s.paintMode);
  const paintMidi = useStudio((s) => s.paintMidi);
  const playing = useStudio((s) => s.playing);
  const root = useStudio((s) => s.root);
  const qualityId = useStudio((s) => s.qualityId);
  const inversion = useStudio((s) => s.inversion);
  const octave = useStudio((s) => s.octave);
  const keyRoot = useStudio((s) => s.keyRoot);
  const keyMode = useStudio((s) => s.keyMode);
  const togglePaintNote = useStudio((s) => s.togglePaintNote);
  const previewNote = useStudio((s) => s.previewNote);

  const q = QUALITY_BY_ID[qualityId] ?? QUALITIES[0]!;
  const chordNotes =
    paintMode && paintMidi.length > 0
      ? paintMidi
      : voicingMidi(root, q, inversion, octave);
  const chordPcs = new Set(chordNotes.map((n) => wrapPc(n)));
  const useFlats = prefersFlats(keyRoot, keyMode);

  const keys = useMemo(() => {
    const list: { midi: number; black: boolean }[] = [];
    for (let m = START; m <= END; m++) {
      list.push({ midi: m, black: isBlackKey(m) });
    }
    return list;
  }, []);

  const whites = keys.filter((k) => !k.black);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const mid = el.scrollWidth / 2 - el.clientWidth / 2;
    el.scrollLeft = Math.max(0, mid - 40);
  }, []);

  function onKey(midi: number) {
    if (paintMode) togglePaintNote(midi);
    else previewNote(midi);
  }

  return (
    <div className="rounded-xl bg-bg-elevated p-3 shadow-soft sm:p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
          Keyboard
        </p>
        <p className="text-xs text-fg-subtle">
          {paintMode ? "Tap keys to build a chord" : "Tap a key to hear it"}
        </p>
      </div>
      <div
        ref={scroller}
        className="piano-scroll w-full max-w-full overflow-x-auto overscroll-x-contain"
      >
        <div className="relative h-40 min-w-[560px] sm:h-44">
          <div className="absolute inset-0 flex">
            {whites.map((k) => {
              const pc = wrapPc(k.midi);
              const inChord = paintMode
                ? paintMidi.includes(k.midi)
                : chordPcs.has(pc);
              const active = inChord || playing.includes(k.midi);
              const label = noteName(pc, useFlats);
              const isC = pc === 0;
              return (
                <button
                  key={k.midi}
                  type="button"
                  aria-label={`${label} ${Math.floor(k.midi / 12) - 1}`}
                  aria-pressed={active}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    onKey(k.midi);
                  }}
                  className={cn(
                    "relative flex-1 rounded-b-sm border border-bg/40 border-t-0 transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]",
                    active
                      ? "bg-key-active text-key-active-fg"
                      : "bg-key-white text-key-white-fg",
                    "active:translate-y-px",
                  )}
                >
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-2 text-center text-xs font-medium tracking-wide",
                      active ? "text-key-active-fg/80" : "text-key-white-fg/45",
                      !isC && "hidden sm:block",
                    )}
                  >
                    {isC ? `${label}${Math.floor(k.midi / 12) - 1}` : label}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="pointer-events-none absolute inset-0 flex">
            {whites.map((k) => {
              const next = k.midi + 1;
              const hasBlack = next <= END && isBlackKey(next);
              if (!hasBlack) {
                return <div key={k.midi} className="relative flex-1" />;
              }
              const midi = next;
              const pc = wrapPc(midi);
              const inChord = paintMode
                ? paintMidi.includes(midi)
                : chordPcs.has(pc);
              const active = inChord || playing.includes(midi);
              const label = noteName(pc, useFlats);
              return (
                <div key={k.midi} className="relative flex-1">
                  <button
                    type="button"
                    aria-label={label}
                    aria-pressed={active}
                    onPointerDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onKey(midi);
                    }}
                    className={cn(
                      "pointer-events-auto absolute top-0 z-10 h-[58%] w-[62%] rounded-b-sm border border-bg/60 transition-[background-color,transform] duration-150",
                      "left-[68%] -translate-x-1/2",
                      active
                        ? "bg-key-active text-key-active-fg"
                        : "bg-key-black text-key-black-fg",
                      "active:translate-y-px",
                    )}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
