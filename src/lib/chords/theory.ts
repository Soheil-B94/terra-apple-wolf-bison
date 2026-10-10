export const NOTE_SHARP = [
  "C",
  "C♯",
  "D",
  "D♯",
  "E",
  "F",
  "F♯",
  "G",
  "G♯",
  "A",
  "A♯",
  "B",
] as const;

export const NOTE_FLAT = [
  "C",
  "D♭",
  "D",
  "E♭",
  "E",
  "F",
  "G♭",
  "G",
  "A♭",
  "A",
  "B♭",
  "B",
] as const;

export const NOTE_ASCII = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
] as const;

/** Keys that conventionally spell with flats. */
const FLAT_KEYS = new Set([5, 10, 3, 8, 1, 6]); // F Bb Eb Ab Db Gb

export type Quality = {
  id: string;
  label: string;
  symbol: string;
  intervals: number[];
  group: "triad" | "seventh" | "color";
};

export const QUALITIES: Quality[] = [
  { id: "maj", label: "maj", symbol: "", intervals: [0, 4, 7], group: "triad" },
  { id: "min", label: "min", symbol: "m", intervals: [0, 3, 7], group: "triad" },
  { id: "dim", label: "dim", symbol: "°", intervals: [0, 3, 6], group: "triad" },
  { id: "aug", label: "aug", symbol: "+", intervals: [0, 4, 8], group: "triad" },
  { id: "sus2", label: "sus2", symbol: "sus2", intervals: [0, 2, 7], group: "triad" },
  { id: "sus4", label: "sus4", symbol: "sus4", intervals: [0, 5, 7], group: "triad" },
  { id: "7", label: "7", symbol: "7", intervals: [0, 4, 7, 10], group: "seventh" },
  { id: "maj7", label: "maj7", symbol: "maj7", intervals: [0, 4, 7, 11], group: "seventh" },
  { id: "min7", label: "min7", symbol: "m7", intervals: [0, 3, 7, 10], group: "seventh" },
  { id: "dim7", label: "dim7", symbol: "°7", intervals: [0, 3, 6, 9], group: "seventh" },
  { id: "m7b5", label: "m7♭5", symbol: "ø7", intervals: [0, 3, 6, 10], group: "seventh" },
  { id: "7sus4", label: "7sus4", symbol: "7sus4", intervals: [0, 5, 7, 10], group: "seventh" },
  { id: "6", label: "6", symbol: "6", intervals: [0, 4, 7, 9], group: "color" },
  { id: "m6", label: "m6", symbol: "m6", intervals: [0, 3, 7, 9], group: "color" },
  { id: "add9", label: "add9", symbol: "add9", intervals: [0, 4, 7, 14], group: "color" },
  { id: "9", label: "9", symbol: "9", intervals: [0, 4, 7, 10, 14], group: "color" },
  { id: "maj9", label: "maj9", symbol: "maj9", intervals: [0, 4, 7, 11, 14], group: "color" },
  { id: "min9", label: "min9", symbol: "m9", intervals: [0, 3, 7, 10, 14], group: "color" },
  { id: "11", label: "11", symbol: "11", intervals: [0, 4, 7, 10, 14, 17], group: "color" },
  { id: "13", label: "13", symbol: "13", intervals: [0, 4, 7, 10, 14, 21], group: "color" },
  { id: "7b9", label: "7♭9", symbol: "7♭9", intervals: [0, 4, 7, 10, 13], group: "color" },
  { id: "7sharp9", label: "7♯9", symbol: "7♯9", intervals: [0, 4, 7, 10, 15], group: "color" },
  { id: "7sharp11", label: "7♯11", symbol: "7♯11", intervals: [0, 4, 7, 10, 18], group: "color" },
];

export const QUALITY_BY_ID: Record<string, Quality> = Object.fromEntries(
  QUALITIES.map((q) => [q.id, q]),
);

export function wrapPc(n: number): number {
  return ((n % 12) + 12) % 12;
}

export function prefersFlats(keyRoot: number, keyMode: "major" | "minor"): boolean {
  const majorRoot = keyMode === "minor" ? wrapPc(keyRoot + 3) : keyRoot;
  return FLAT_KEYS.has(majorRoot);
}

export function noteName(pc: number, flats: boolean): string {
  return (flats ? NOTE_FLAT : NOTE_SHARP)[wrapPc(pc)]!;
}

export function chordSymbol(root: number, quality: Quality, flats: boolean): string {
  return `${noteName(root, flats)}${quality.symbol}`;
}

const INTERVAL_LABEL: Record<number, string> = {
  0: "R",
  1: "♭9",
  2: "9",
  3: "m3",
  4: "3",
  5: "11",
  6: "♭5",
  7: "5",
  8: "♯5",
  9: "13",
  10: "♭7",
  11: "7",
};

export function intervalLabel(semitones: number): string {
  if (semitones === 5) return "4";
  if (semitones === 2) return "2";
  if (semitones === 9) return "6";
  if (semitones === 14) return "9";
  if (semitones === 15) return "♯9";
  if (semitones === 13) return "♭9";
  if (semitones === 17) return "11";
  if (semitones === 18) return "♯11";
  if (semitones === 21) return "13";
  return INTERVAL_LABEL[semitones] ?? INTERVAL_LABEL[wrapPc(semitones)] ?? String(semitones);
}

export function qualityPitchClasses(root: number, quality: Quality): number[] {
  const set = new Set(quality.intervals.map((i) => wrapPc(root + i)));
  return [...set].sort((a, b) => a - b);
}

/** Comfortable closed voicing around C3–C5. */
export function voicingMidi(
  root: number,
  quality: Quality,
  inversion: number,
  bassOctave = 3,
): number[] {
  const base = (bassOctave + 1) * 12 + wrapPc(root);
  let notes = quality.intervals.map((i) => base + i);
  notes.sort((a, b) => a - b);
  const steps = notes.length === 0 ? 0 : ((inversion % notes.length) + notes.length) % notes.length;
  for (let i = 0; i < steps; i++) {
    const n = notes.shift();
    if (n === undefined) break;
    notes.push(n + 12);
  }
  while (notes[0] !== undefined && notes[0] < 48) {
    notes = notes.map((n) => n + 12);
  }
  while (notes[0] !== undefined && notes[0] > 64 && notes.every((n) => n - 12 >= 40)) {
    notes = notes.map((n) => n - 12);
  }
  return notes;
}

function pcSetKey(pcs: number[]): string {
  return [...new Set(pcs.map(wrapPc))].sort((a, b) => a - b).join(",");
}

const QUALITY_SET = new Map<string, Quality>();
for (const q of QUALITIES) {
  QUALITY_SET.set(pcSetKey(q.intervals.map((i) => wrapPc(i))), q);
}

export type Identified = {
  root: number;
  quality: Quality;
  inversion: number;
};

export function identifyChord(midiNotes: number[]): Identified | null {
  const uniqueMidi = [...new Set(midiNotes)].sort((a, b) => a - b);
  if (uniqueMidi.length < 2) return null;
  const pcs = [...new Set(uniqueMidi.map((n) => wrapPc(n)))];
  if (pcs.length < 2) return null;

  const bass = wrapPc(uniqueMidi[0]!);
  let best: Identified | null = null;
  let bestScore = Infinity;

  for (const root of pcs) {
    const rel = pcSetKey(pcs.map((p) => wrapPc(p - root)));
    const quality = QUALITY_SET.get(rel);
    if (!quality) continue;
    const chordPcs = qualityPitchClasses(root, quality);
    const bassIndex = chordPcs.indexOf(bass);
    const inversion = bassIndex >= 0 ? bassIndex : 0;
    let score = quality.intervals.length;
    if (quality.id === "maj") score -= 2;
    if (quality.id === "min") score -= 1;
    if (root !== bass) score += 0.4;
    if (score < bestScore) {
      bestScore = score;
      best = { root, quality, inversion };
    }
  }

  if (best) return best;

  // Fuzzy: match the largest quality whose tones are a subset of the selection.
  for (const root of pcs) {
    const selected = new Set(pcs.map((p) => wrapPc(p - root)));
    for (const quality of QUALITIES) {
      const need = quality.intervals.map((i) => wrapPc(i));
      if (!need.every((i) => selected.has(i))) continue;
      const extra = pcs.length - new Set(need).size;
      const score = 20 + extra + quality.intervals.length;
      if (score < bestScore) {
        bestScore = score;
        const chordPcs = qualityPitchClasses(root, quality);
        const bassIndex = chordPcs.indexOf(bass);
        best = { root, quality, inversion: bassIndex >= 0 ? bassIndex : 0 };
      }
    }
  }

  return best;
}

export const CIRCLE_FIFTHS = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5] as const;

export type Degree = {
  interval: number;
  qualityId: string;
  numeral: string;
};

export const MAJOR_DEGREES: Degree[] = [
  { interval: 0, qualityId: "maj", numeral: "I" },
  { interval: 2, qualityId: "min", numeral: "ii" },
  { interval: 4, qualityId: "min", numeral: "iii" },
  { interval: 5, qualityId: "maj", numeral: "IV" },
  { interval: 7, qualityId: "maj", numeral: "V" },
  { interval: 9, qualityId: "min", numeral: "vi" },
  { interval: 11, qualityId: "dim", numeral: "vii°" },
];

export const MINOR_DEGREES: Degree[] = [
  { interval: 0, qualityId: "min", numeral: "i" },
  { interval: 2, qualityId: "dim", numeral: "ii°" },
  { interval: 3, qualityId: "maj", numeral: "III" },
  { interval: 5, qualityId: "min", numeral: "iv" },
  { interval: 7, qualityId: "min", numeral: "v" },
  { interval: 8, qualityId: "maj", numeral: "VI" },
  { interval: 10, qualityId: "maj", numeral: "VII" },
];

export const MAJOR_SEVENTHS: Degree[] = [
  { interval: 0, qualityId: "maj7", numeral: "IΔ" },
  { interval: 2, qualityId: "min7", numeral: "ii7" },
  { interval: 4, qualityId: "min7", numeral: "iii7" },
  { interval: 5, qualityId: "maj7", numeral: "IVΔ" },
  { interval: 7, qualityId: "7", numeral: "V7" },
  { interval: 9, qualityId: "min7", numeral: "vi7" },
  { interval: 11, qualityId: "m7b5", numeral: "viiø" },
];

export const MINOR_SEVENTHS: Degree[] = [
  { interval: 0, qualityId: "min7", numeral: "i7" },
  { interval: 2, qualityId: "m7b5", numeral: "iiø" },
  { interval: 3, qualityId: "maj7", numeral: "IIIΔ" },
  { interval: 5, qualityId: "min7", numeral: "iv7" },
  { interval: 7, qualityId: "7", numeral: "V7" },
  { interval: 8, qualityId: "maj7", numeral: "VIΔ" },
  { interval: 10, qualityId: "7", numeral: "VII7" },
];

export function diatonicChords(
  keyRoot: number,
  keyMode: "major" | "minor",
  sevenths: boolean,
): { root: number; quality: Quality; numeral: string }[] {
  const degrees = sevenths
    ? keyMode === "major"
      ? MAJOR_SEVENTHS
      : MINOR_SEVENTHS
    : keyMode === "major"
      ? MAJOR_DEGREES
      : MINOR_DEGREES;
  return degrees.map((d) => ({
    root: wrapPc(keyRoot + d.interval),
    quality: QUALITY_BY_ID[d.qualityId]!,
    numeral: d.numeral,
  }));
}

export function romanForChord(
  chordRoot: number,
  qualityId: string,
  keyRoot: number,
  keyMode: "major" | "minor",
): string | null {
  const degrees = [...(keyMode === "major" ? MAJOR_DEGREES : MINOR_DEGREES), ...(keyMode === "major" ? MAJOR_SEVENTHS : MINOR_SEVENTHS)];
  const match = degrees.find(
    (d) => wrapPc(keyRoot + d.interval) === wrapPc(chordRoot) && d.qualityId === qualityId,
  );
  return match?.numeral ?? null;
}

export type ProgStep = {
  id: string;
  root: number;
  qualityId: string;
  beats: number;
};

export const PROGRESSION_PRESETS: {
  id: string;
  name: string;
  /** Intervals from the current key root + quality ids. */
  steps: { interval: number; qualityId: string; beats: number }[];
}[] = [
  {
    id: "pop",
    name: "I–V–vi–IV",
    steps: [
      { interval: 0, qualityId: "maj", beats: 4 },
      { interval: 7, qualityId: "maj", beats: 4 },
      { interval: 9, qualityId: "min", beats: 4 },
      { interval: 5, qualityId: "maj", beats: 4 },
    ],
  },
  {
    id: "fifties",
    name: "I–vi–IV–V",
    steps: [
      { interval: 0, qualityId: "maj", beats: 4 },
      { interval: 9, qualityId: "min", beats: 4 },
      { interval: 5, qualityId: "maj", beats: 4 },
      { interval: 7, qualityId: "maj", beats: 4 },
    ],
  },
  {
    id: "sensitive",
    name: "vi–IV–I–V",
    steps: [
      { interval: 9, qualityId: "min", beats: 4 },
      { interval: 5, qualityId: "maj", beats: 4 },
      { interval: 0, qualityId: "maj", beats: 4 },
      { interval: 7, qualityId: "maj", beats: 4 },
    ],
  },
  {
    id: "twoFive",
    name: "ii–V–I",
    steps: [
      { interval: 2, qualityId: "min7", beats: 2 },
      { interval: 7, qualityId: "7", beats: 2 },
      { interval: 0, qualityId: "maj7", beats: 4 },
    ],
  },
  {
    id: "canon",
    name: "Pachelbel",
    steps: [
      { interval: 0, qualityId: "maj", beats: 2 },
      { interval: 7, qualityId: "maj", beats: 2 },
      { interval: 9, qualityId: "min", beats: 2 },
      { interval: 4, qualityId: "min", beats: 2 },
      { interval: 5, qualityId: "maj", beats: 2 },
      { interval: 0, qualityId: "maj", beats: 2 },
      { interval: 5, qualityId: "maj", beats: 2 },
      { interval: 7, qualityId: "maj", beats: 2 },
    ],
  },
  {
    id: "blues",
    name: "12-bar blues",
    steps: [
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 5, qualityId: "7", beats: 4 },
      { interval: 5, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 7, qualityId: "7", beats: 4 },
      { interval: 5, qualityId: "7", beats: 4 },
      { interval: 0, qualityId: "7", beats: 4 },
      { interval: 7, qualityId: "7", beats: 4 },
    ],
  },
  {
    id: "andante",
    name: "Andalusian",
    steps: [
      { interval: 0, qualityId: "min", beats: 4 },
      { interval: 10, qualityId: "maj", beats: 4 },
      { interval: 8, qualityId: "maj", beats: 4 },
      { interval: 7, qualityId: "maj", beats: 4 },
    ],
  },
];

export function instantiatePreset(
  presetId: string,
  keyRoot: number,
): ProgStep[] {
  const preset = PROGRESSION_PRESETS.find((p) => p.id === presetId);
  if (!preset) return [];
  return preset.steps.map((s, i) => ({
    id: `${presetId}-${i}-${Date.now()}`,
    root: wrapPc(keyRoot + s.interval),
    qualityId: s.qualityId,
    beats: s.beats,
  }));
}

export function midiToPc(midi: number): number {
  return wrapPc(midi);
}

export function isBlackKey(pc: number): boolean {
  return [1, 3, 6, 8, 10].includes(wrapPc(pc));
}

export function inversionName(index: number, noteCount: number): string {
  if (index === 0 || noteCount === 0) return "Root";
  if (index === 1) return "1st";
  if (index === 2) return "2nd";
  if (index === 3) return "3rd";
  return `${index}th`;
}

export function newId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
