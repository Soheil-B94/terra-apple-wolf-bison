import { NOTE_FLAT, NOTE_SHARP, QUALITIES } from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";
import { cn } from "@/lib/utils";

const GROUPS = [
  { id: "triad", label: "Triads" },
  { id: "seventh", label: "Sevenths" },
  { id: "color", label: "Color" },
] as const;

export function QualityBar() {
  const root = useStudio((s) => s.root);
  const qualityId = useStudio((s) => s.qualityId);
  const setRoot = useStudio((s) => s.setRoot);
  const setQuality = useStudio((s) => s.setQuality);
  const flats = useStudio((s) => s.flats());

  const names = flats ? NOTE_FLAT : NOTE_SHARP;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-xs font-medium tracking-wide text-fg-muted uppercase">
          Root
        </p>
        <div className="flex flex-wrap gap-1.5">
          {names.map((name, pc) => (
            <button
              key={name}
              type="button"
              onClick={() => setRoot(pc)}
              className={cn(
                "h-11 min-w-11 rounded-md px-2.5 text-sm font-medium transition-colors duration-150",
                root === pc
                  ? "bg-accent text-accent-fg"
                  : "bg-bg-elevated text-fg-muted hover:text-fg",
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
      {GROUPS.map((group) => (
        <div key={group.id}>
          <p className="mb-2 text-xs font-medium tracking-wide text-fg-muted uppercase">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {QUALITIES.filter((q) => q.group === group.id).map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setQuality(q.id)}
                className={cn(
                  "h-10 rounded-md px-3 text-sm font-medium transition-colors duration-150",
                  qualityId === q.id
                    ? "bg-accent text-accent-fg"
                    : "border border-border bg-bg-elevated text-fg-muted hover:text-fg",
                )}
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
