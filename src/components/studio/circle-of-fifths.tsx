import { CIRCLE_FIFTHS, noteName, wrapPc } from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";
import { cn } from "@/lib/utils";

export function CircleOfFifths() {
  const keyRoot = useStudio((s) => s.keyRoot);
  const keyMode = useStudio((s) => s.keyMode);
  const root = useStudio((s) => s.root);
  const setKey = useStudio((s) => s.setKey);
  const setRoot = useStudio((s) => s.setRoot);
  const setQuality = useStudio((s) => s.setQuality);
  const flats = useStudio((s) => s.flats());

  return (
    <div className="rounded-xl bg-bg-elevated p-4 shadow-soft">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
          Circle of fifths
        </p>
        <div className="flex rounded-sm bg-bg-subtle p-0.5">
          <ModeChip
            active={keyMode === "major"}
            onClick={() => setKey(keyRoot, "major")}
          >
            Major
          </ModeChip>
          <ModeChip
            active={keyMode === "minor"}
            onClick={() => setKey(keyRoot, "minor")}
          >
            Minor
          </ModeChip>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[280px]">
        <div className="absolute inset-[18%] rounded-full border border-border" />
        <div className="absolute inset-[34%] flex flex-col items-center justify-center rounded-full">
          <span className="font-display text-2xl leading-none tracking-tight text-fg">
            {noteName(keyRoot, flats)}
            {keyMode === "minor" ? "m" : ""}
          </span>
          <span className="mt-1 text-xs tracking-wide text-fg-subtle uppercase">
            Key
          </span>
        </div>
        {CIRCLE_FIFTHS.map((pc, i) => {
          const rad = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + Math.cos(rad) * 41;
          const top = 50 + Math.sin(rad) * 41;
          const pitch = keyMode === "minor" ? wrapPc(pc - 3) : pc;
          const isKey = pitch === keyRoot;
          const isRoot = pitch === root;
          const label =
            keyMode === "minor"
              ? `${noteName(pitch, flats)}m`
              : noteName(pitch, flats);
          return (
            <button
              key={`${pc}-${keyMode}`}
              type="button"
              onClick={() => {
                setKey(pitch, keyMode);
                setRoot(pitch);
                setQuality(keyMode === "minor" ? "min" : "maj");
              }}
              className={cn(
                "absolute grid h-11 min-w-11 place-items-center rounded-full px-1.5 font-display text-sm transition-colors duration-150",
                isKey
                  ? "bg-accent text-accent-fg"
                  : isRoot
                    ? "bg-bg-mute text-fg"
                    : "bg-bg-subtle text-fg hover:bg-bg-mute",
              )}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: "translate(-50%, -50%)",
              }}
              aria-label={`${label} ${keyMode}`}
              aria-pressed={isKey}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ModeChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-7 rounded-xs px-2.5 text-xs font-medium transition-colors duration-150",
        active ? "bg-accent text-accent-fg" : "text-fg-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}
