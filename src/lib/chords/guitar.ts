import { wrapPc, type Quality } from "./theory";

/** Standard tuning, low E to high E. */
export const TUNING = [40, 45, 50, 55, 59, 64];
export const STRING_NAMES = ["E", "A", "D", "G", "B", "E"] as const;

export type FretMap = number[]; // 6 entries, -1 muted, 0+ fret

type Shape = {
  qualityIds: string[];
  frets: FretMap;
  rootString: number;
  rootRelFret: number;
};

const SHAPES: Shape[] = [
  { qualityIds: ["maj"], frets: [0, 2, 2, 1, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["maj"], frets: [-1, 0, 2, 2, 2, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["maj"], frets: [-1, -1, 0, 2, 3, 2], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["maj"], frets: [-1, 3, 2, 0, 1, 0], rootString: 1, rootRelFret: 3 },
  { qualityIds: ["maj"], frets: [3, 2, 0, 0, 0, 3], rootString: 0, rootRelFret: 3 },
  { qualityIds: ["min"], frets: [0, 2, 2, 0, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["min"], frets: [-1, 0, 2, 2, 1, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["min"], frets: [-1, -1, 0, 2, 3, 1], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["dim"], frets: [-1, 0, 1, 2, 1, -1], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["dim"], frets: [0, 1, 2, 0, -1, -1], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["aug"], frets: [0, 3, 2, 1, 1, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["aug"], frets: [-1, 0, 3, 2, 2, 1], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["sus2"], frets: [-1, 0, 2, 2, 0, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["sus2"], frets: [-1, -1, 0, 2, 3, 0], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["sus4"], frets: [0, 2, 2, 2, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["sus4"], frets: [-1, 0, 2, 2, 3, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["sus4"], frets: [-1, -1, 0, 2, 3, 3], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["7"], frets: [0, 2, 0, 1, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["7"], frets: [-1, 0, 2, 0, 2, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["7"], frets: [-1, -1, 0, 2, 1, 2], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["7"], frets: [3, 2, 0, 0, 0, 1], rootString: 0, rootRelFret: 3 },
  { qualityIds: ["7"], frets: [-1, 3, 2, 3, 1, 0], rootString: 1, rootRelFret: 3 },
  { qualityIds: ["maj7"], frets: [0, 2, 1, 1, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["maj7"], frets: [-1, 0, 2, 1, 2, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["maj7"], frets: [-1, 3, 2, 0, 0, 0], rootString: 1, rootRelFret: 3 },
  { qualityIds: ["maj7"], frets: [-1, -1, 0, 2, 2, 2], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["min7"], frets: [0, 2, 0, 0, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["min7"], frets: [-1, 0, 2, 0, 1, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["min7"], frets: [-1, -1, 0, 2, 1, 1], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["dim7"], frets: [-1, -1, 0, 1, 0, 1], rootString: 2, rootRelFret: 0 },
  { qualityIds: ["dim7"], frets: [-1, 0, 1, 2, 1, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["m7b5"], frets: [-1, 0, 1, 0, 1, -1], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["m7b5"], frets: [0, 1, 2, 0, 3, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["7sus4"], frets: [0, 2, 0, 2, 0, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["7sus4"], frets: [-1, 0, 2, 0, 3, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["6"], frets: [0, -1, 2, 1, 2, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["6"], frets: [-1, 0, 2, 2, 2, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["m6"], frets: [0, 2, 2, 0, 2, 0], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["m6"], frets: [-1, 0, 2, 2, 1, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["add9"], frets: [-1, 3, 2, 0, 3, 0], rootString: 1, rootRelFret: 3 },
  { qualityIds: ["add9"], frets: [0, 2, 2, 1, 0, 2], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["9"], frets: [0, 2, 0, 1, 0, 2], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["9"], frets: [-1, 3, 2, 3, 3, 3], rootString: 1, rootRelFret: 3 },
  { qualityIds: ["maj9"], frets: [-1, 0, 2, 1, 2, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["min9"], frets: [-1, 0, 2, 0, 1, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["11"], frets: [-1, 0, 0, 0, 1, 0], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["13"], frets: [0, 2, 0, 1, 2, 2], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["13"], frets: [-1, 0, 2, 0, 2, 2], rootString: 1, rootRelFret: 0 },
  { qualityIds: ["7b9"], frets: [0, 2, 0, 1, 0, 1], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["7sharp9"], frets: [0, 2, 0, 1, 3, 3], rootString: 0, rootRelFret: 0 },
  { qualityIds: ["7sharp11"], frets: [0, 2, 0, 1, 1, 0], rootString: 0, rootRelFret: 0 },
];

function shiftShape(shape: Shape, rootPc: number): FretMap | null {
  const openPc = wrapPc(TUNING[shape.rootString]!);
  const needed = wrapPc(rootPc - openPc);
  let shift = needed - shape.rootRelFret;
  const candidates = [shift, shift + 12, shift - 12, shift + 24];
  let best: FretMap | null = null;
  let bestScore = Infinity;
  for (const s of candidates) {
    const placed = shape.frets.map((f) => (f < 0 ? -1 : f + s));
    if (placed.some((f) => f > 15)) continue;
    const played = placed.filter((f) => f >= 0);
    if (played.length < 3) continue;
    if (played.some((f) => f < 0)) continue;
    const minF = Math.min(...played);
    const maxF = Math.max(...played);
    if (minF < 0) continue;
    if (maxF - minF > 4 && minF > 0) continue;
    if (maxF > 15) continue;
    const score = minF + (maxF - minF) * 0.4 + (placed.filter((f) => f < 0).length) * 0.5;
    if (score < bestScore) {
      bestScore = score;
      best = placed;
    }
  }
  return best;
}

function interiorMutes(frets: FretMap): number {
  let first = -1;
  let last = -1;
  for (let i = 0; i < 6; i++) {
    if (frets[i]! >= 0) {
      if (first < 0) first = i;
      last = i;
    }
  }
  if (first < 0) return 6;
  let n = 0;
  for (let i = first; i <= last; i++) if (frets[i]! < 0) n++;
  return n;
}

function genericVoicing(pcs: number[]): FretMap | null {
  const target = new Set(pcs.map(wrapPc));
  let best: FretMap | null = null;
  let bestScore = Infinity;
  for (let start = 0; start <= 9; start++) {
    const end = start + 3;
    const assignment: FretMap = [];
    const covered = new Set<number>();
    for (let s = 0; s < 6; s++) {
      let found = -1;
      const lo = start === 0 ? 0 : start;
      for (let f = lo; f <= end; f++) {
        const pc = wrapPc(TUNING[s]! + f);
        if (target.has(pc)) {
          found = f;
          break;
        }
      }
      assignment.push(found);
      if (found >= 0) covered.add(wrapPc(TUNING[s]! + found));
    }
    const missing = [...target].filter((p) => !covered.has(p)).length;
    const mutes = assignment.filter((f) => f < 0).length;
    const interior = interiorMutes(assignment);
    if (interior > 0) continue;
    if (missing > 1) continue;
    const played = assignment.filter((f) => f >= 0);
    if (played.length < 3) continue;
    const stretch = Math.max(...played) - Math.min(...played);
    const score = missing * 12 + mutes * 2 + stretch + Math.min(...played) * 0.3;
    if (score < bestScore) {
      bestScore = score;
      best = assignment;
    }
  }
  return best;
}

function coversChord(frets: FretMap, pcs: number[]): boolean {
  const target = new Set(pcs.map(wrapPc));
  const got = new Set<number>();
  for (let i = 0; i < 6; i++) {
    const f = frets[i]!;
    if (f < 0) continue;
    got.add(wrapPc(TUNING[i]! + f));
  }
  for (const p of target) {
    if (!got.has(p) && target.size <= 4) return false;
  }
  return got.size >= 3;
}

export function guitarVoicing(root: number, quality: Quality): FretMap {
  const pcs = quality.intervals.map((i) => wrapPc(root + i));
  const options: FretMap[] = [];
  for (const shape of SHAPES) {
    if (!shape.qualityIds.includes(quality.id)) continue;
    const placed = shiftShape(shape, wrapPc(root));
    if (placed && coversChord(placed, pcs)) options.push(placed);
  }
  const generic = genericVoicing(pcs);
  if (generic) options.push(generic);

  if (options.length === 0) {
    return genericVoicing(pcs) ?? [-1, -1, -1, -1, -1, -1];
  }

  options.sort((a, b) => {
    const playedA = a.filter((f) => f >= 0);
    const playedB = b.filter((f) => f >= 0);
    const minA = Math.min(...playedA, 99);
    const minB = Math.min(...playedB, 99);
    const muteA = a.filter((f) => f < 0).length;
    const muteB = b.filter((f) => f < 0).length;
    return minA + muteA * 0.4 - (minB + muteB * 0.4);
  });
  return options[0]!;
}

export function chartMeta(frets: FretMap): {
  baseFret: number;
  span: number;
  showNut: boolean;
} {
  const played = frets.filter((f) => f > 0);
  if (played.length === 0) return { baseFret: 1, span: 4, showNut: true };
  const minF = Math.min(...played);
  const maxF = Math.max(...played, minF + 3);
  const showNut = minF <= 1 && frets.some((f) => f === 0);
  const baseFret = showNut || minF <= 1 ? 1 : minF;
  const span = Math.max(4, maxF - baseFret + 1);
  return { baseFret, span: Math.min(span, 6), showNut: baseFret === 1 };
}

export function detectBarre(frets: FretMap): { fret: number; from: number; to: number } | null {
  const played = frets
    .map((f, i) => ({ f, i }))
    .filter((x) => x.f > 0);
  if (played.length < 4) return null;
  const minF = Math.min(...played.map((x) => x.f));
  const at = played.filter((x) => x.f === minF);
  if (at.length < 3) return null;
  const from = Math.min(...at.map((x) => x.i));
  const to = Math.max(...at.map((x) => x.i));
  if (to - from < 2) return null;
  return { fret: minF, from, to };
}
