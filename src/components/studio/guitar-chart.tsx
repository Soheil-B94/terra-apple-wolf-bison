import { useMemo } from "react";
import { detectBarre, guitarVoicing, chartMeta } from "@/lib/chords/guitar";
import { QUALITY_BY_ID, QUALITIES } from "@/lib/chords/theory";
import { useStudio } from "@/lib/chords/store";

export function GuitarChart() {
  const root = useStudio((s) => s.root);
  const qualityId = useStudio((s) => s.qualityId);
  const q = QUALITY_BY_ID[qualityId] ?? QUALITIES[0]!;
  const frets = useMemo(() => guitarVoicing(root, q), [root, q]);
  const meta = chartMeta(frets);
  const barre = detectBarre(frets);

  const W = 168;
  const H = 196;
  const padL = 28;
  const padR = 16;
  const padT = 28;
  const padB = 18;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const strings = 6;
  const fretCount = meta.span;
  const xAt = (s: number) => padL + (s / (strings - 1)) * innerW;
  const yAt = (fretRel: number) => padT + (fretRel / fretCount) * innerH;

  return (
    <div className="rounded-xl bg-bg-elevated p-4 shadow-soft">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <p className="text-xs font-medium tracking-wide text-fg-muted uppercase">
          Guitar
        </p>
        <p className="font-display text-sm text-fg-subtle">Standard</p>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mx-auto h-auto w-full max-w-[220px] text-fg"
        role="img"
        aria-label="Guitar chord diagram"
      >
        {frets.map((fret, s) => (
          <text
            key={`cap-${s}`}
            x={xAt(s)}
            y={16}
            textAnchor="middle"
            className="fill-fg-muted"
            fontSize="11"
            fontFamily="Figtree, sans-serif"
          >
            {fret < 0 ? "×" : fret === 0 ? "○" : ""}
          </text>
        ))}

        {!meta.showNut && (
          <text
            x={12}
            y={yAt(0.55)}
            textAnchor="middle"
            className="fill-fg-muted"
            fontSize="11"
            fontFamily="Figtree, sans-serif"
          >
            {meta.baseFret}
          </text>
        )}

        {meta.showNut && (
          <rect
            x={padL}
            y={padT - 3}
            width={innerW}
            height={4}
            className="fill-fg"
            rx={1}
          />
        )}

        {Array.from({ length: fretCount + 1 }, (_, f) => (
          <line
            key={`fret-${f}`}
            x1={padL}
            x2={padL + innerW}
            y1={yAt(f)}
            y2={yAt(f)}
            stroke="currentColor"
            strokeOpacity={f === 0 && meta.showNut ? 0 : 0.28}
            strokeWidth={1}
          />
        ))}

        {Array.from({ length: strings }, (_, s) => (
          <line
            key={`str-${s}`}
            x1={xAt(s)}
            x2={xAt(s)}
            y1={padT}
            y2={padT + innerH}
            stroke="currentColor"
            strokeOpacity={0.38}
            strokeWidth={s === 0 || s === 5 ? 1.4 : 1}
          />
        ))}

        {barre && barre.fret >= meta.baseFret && (
          <rect
            x={xAt(barre.from) - 7}
            y={yAt(barre.fret - meta.baseFret + 0.5) - 7}
            width={xAt(barre.to) - xAt(barre.from) + 14}
            height={14}
            rx={7}
            className="fill-fg"
            opacity={0.92}
          />
        )}

        {frets.map((fret, s) => {
          if (fret <= 0) return null;
          if (barre && fret === barre.fret && s >= barre.from && s <= barre.to) {
            return null;
          }
          const rel = fret - meta.baseFret + 1;
          if (rel < 1 || rel > fretCount) return null;
          return (
            <circle
              key={`dot-${s}`}
              cx={xAt(s)}
              cy={yAt(rel - 0.5)}
              r={7}
              className="fill-fg"
            />
          );
        })}
      </svg>
    </div>
  );
}
