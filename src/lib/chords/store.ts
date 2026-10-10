import { create } from "zustand";
import {
  QUALITY_BY_ID,
  QUALITIES,
  chordSymbol,
  diatonicChords,
  identifyChord,
  instantiatePreset,
  intervalLabel,
  inversionName,
  newId,
  noteName,
  prefersFlats,
  voicingMidi,
  type ProgStep,
  type Quality,
} from "./theory";
import { playPitches, playSingle } from "./audio";

export type PlayStyle = "chord" | "arp" | "strum";
export type SavedItem =
  | {
      id: string;
      kind: "chord";
      name: string;
      root: number;
      qualityId: string;
      inversion: number;
    }
  | {
      id: string;
      kind: "progression";
      name: string;
      keyRoot: number;
      steps: ProgStep[];
    };

const LIBRARY_KEY = "resonance-library-v1";

function readLibrary(): SavedItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LIBRARY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as SavedItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLibrary(items: SavedItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LIBRARY_KEY, JSON.stringify(items));
}

type StudioState = {
  root: number;
  qualityId: string;
  inversion: number;
  keyRoot: number;
  keyMode: "major" | "minor";
  sevenths: boolean;
  octave: number;
  volume: number;
  playStyle: PlayStyle;
  bpm: number;
  paintMode: boolean;
  paintMidi: number[];
  playing: number[];
  progression: ProgStep[];
  progCursor: number | null;
  library: SavedItem[];
  hydrated: boolean;

  quality: () => Quality;
  flats: () => boolean;
  symbol: () => string;
  notesMidi: () => number[];
  noteLabels: () => { name: string; interval: string }[];
  inversionLabel: () => string;

  setRoot: (n: number) => void;
  setQuality: (id: string) => void;
  setInversion: (n: number) => void;
  setKey: (root: number, mode?: "major" | "minor") => void;
  setSevenths: (v: boolean) => void;
  setOctave: (n: number) => void;
  setVolume: (n: number) => void;
  setPlayStyle: (s: PlayStyle) => void;
  setBpm: (n: number) => void;
  setPaintMode: (v: boolean) => void;
  togglePaintNote: (midi: number) => void;
  applyIdentified: () => void;
  playCurrent: () => Promise<void>;
  previewNote: (midi: number) => void;
  addToProgression: () => void;
  removeStep: (id: string) => void;
  loadPreset: (id: string) => void;
  clearProgression: () => void;
  playProgression: () => Promise<void>;
  stopPlayback: () => void;
  saveCurrent: () => void;
  saveProgression: () => void;
  loadSaved: (item: SavedItem) => void;
  deleteSaved: (id: string) => void;
  hydrate: () => void;
  pickDiatonic: (root: number, qualityId: string) => void;
};

let playToken = 0;
let playingTimer: ReturnType<typeof setTimeout> | null = null;

export const useStudio = create<StudioState>((set, get) => ({
  root: 0,
  qualityId: "maj",
  inversion: 0,
  keyRoot: 0,
  keyMode: "major",
  sevenths: false,
  octave: 3,
  volume: 0.8,
  playStyle: "chord",
  bpm: 92,
  paintMode: false,
  paintMidi: [],
  playing: [],
  progression: [],
  progCursor: null,
  library: [],
  hydrated: false,

  quality: () => QUALITY_BY_ID[get().qualityId] ?? QUALITIES[0]!,
  flats: () => prefersFlats(get().keyRoot, get().keyMode),
  symbol: () => {
    const s = get();
    return chordSymbol(s.root, s.quality(), s.flats());
  },
  notesMidi: () => {
    const s = get();
    if (s.paintMode && s.paintMidi.length > 0) return [...s.paintMidi].sort((a, b) => a - b);
    return voicingMidi(s.root, s.quality(), s.inversion, s.octave);
  },
  noteLabels: () => {
    const s = get();
    const q = s.quality();
    const flats = s.flats();
    if (s.paintMode && s.paintMidi.length > 0) {
      const identified = identifyChord(s.paintMidi);
      const root = identified?.root ?? s.root;
      return [...s.paintMidi]
        .sort((a, b) => a - b)
        .map((m) => {
          const pc = ((m % 12) + 12) % 12;
          const iv = (pc - root + 12) % 12;
          return { name: noteName(pc, flats), interval: intervalLabel(iv) };
        });
    }
    return q.intervals.map((iv) => ({
      name: noteName(s.root + iv, flats),
      interval: intervalLabel(iv),
    }));
  },
  inversionLabel: () => {
    const s = get();
    return inversionName(s.inversion, s.quality().intervals.length);
  },

  setRoot: (n) => set({ root: ((n % 12) + 12) % 12, inversion: 0, paintMode: false, paintMidi: [] }),
  setQuality: (id) => set({ qualityId: id, inversion: 0, paintMode: false, paintMidi: [] }),
  setInversion: (n) => set({ inversion: n, paintMode: false }),
  setKey: (root, mode) =>
    set((s) => ({
      keyRoot: ((root % 12) + 12) % 12,
      keyMode: mode ?? s.keyMode,
    })),
  setSevenths: (v) => set({ sevenths: v }),
  setOctave: (n) => set({ octave: Math.min(5, Math.max(2, n)) }),
  setVolume: (n) => set({ volume: n }),
  setPlayStyle: (s) => set({ playStyle: s }),
  setBpm: (n) => set({ bpm: Math.min(180, Math.max(48, n)) }),
  setPaintMode: (v) => set({ paintMode: v, paintMidi: v ? get().notesMidi() : [] }),
  togglePaintNote: (midi) => {
    const s = get();
    const exists = s.paintMidi.includes(midi);
    const next = exists ? s.paintMidi.filter((n) => n !== midi) : [...s.paintMidi, midi];
    const identified = identifyChord(next);
    set({
      paintMode: true,
      paintMidi: next,
      ...(identified
        ? { root: identified.root, qualityId: identified.quality.id, inversion: identified.inversion }
        : {}),
    });
  },
  applyIdentified: () => {
    const s = get();
    const identified = identifyChord(s.paintMidi);
    if (!identified) return;
    set({
      root: identified.root,
      qualityId: identified.quality.id,
      inversion: identified.inversion,
      paintMode: false,
      paintMidi: [],
    });
  },
  playCurrent: async () => {
    const s = get();
    const notes = s.notesMidi();
    playToken += 1;
    const token = playToken;
    const { durationMs } = await playPitches(notes, s.playStyle, s.volume);
    set({ playing: notes });
    if (playingTimer) clearTimeout(playingTimer);
    playingTimer = setTimeout(() => {
      if (token === playToken) set({ playing: [] });
    }, durationMs);
  },
  previewNote: (midi) => {
    void playSingle(midi, get().volume);
    const token = ++playToken;
    set({ playing: [midi] });
    if (playingTimer) clearTimeout(playingTimer);
    playingTimer = setTimeout(() => {
      if (token === playToken) set({ playing: [] });
    }, 400);
  },
  addToProgression: () => {
    const s = get();
    const step: ProgStep = {
      id: newId(),
      root: s.root,
      qualityId: s.qualityId,
      beats: 4,
    };
    set({ progression: [...s.progression, step] });
  },
  removeStep: (id) =>
    set((s) => ({ progression: s.progression.filter((p) => p.id !== id) })),
  loadPreset: (id) =>
    set((s) => ({
      progression: instantiatePreset(id, s.keyRoot),
      progCursor: null,
    })),
  clearProgression: () => set({ progression: [], progCursor: null }),
  playProgression: async () => {
    const s = get();
    if (s.progression.length === 0) return;
    const token = ++playToken;
    const beat = 60 / s.bpm;
    for (let i = 0; i < s.progression.length; i++) {
      if (token !== playToken) return;
      const step = s.progression[i]!;
      const q = QUALITY_BY_ID[step.qualityId] ?? QUALITIES[0]!;
      const notes = voicingMidi(step.root, q, 0, s.octave);
      set({
        progCursor: i,
        root: step.root,
        qualityId: step.qualityId,
        inversion: 0,
        paintMode: false,
        playing: notes,
      });
      await playPitches(notes, s.playStyle, s.volume);
      const waitMs = step.beats * beat * 1000;
      await sleep(waitMs);
    }
    if (token === playToken) set({ progCursor: null, playing: [] });
  },
  stopPlayback: () => {
    playToken += 1;
    set({ playing: [], progCursor: null });
  },
  saveCurrent: () => {
    const s = get();
    const item: SavedItem = {
      id: newId(),
      kind: "chord",
      name: s.symbol(),
      root: s.root,
      qualityId: s.qualityId,
      inversion: s.inversion,
    };
    const library = [item, ...s.library].slice(0, 40);
    writeLibrary(library);
    set({ library });
  },
  saveProgression: () => {
    const s = get();
    if (s.progression.length === 0) return;
    const name = s.progression
      .slice(0, 6)
      .map((p) => chordSymbol(p.root, QUALITY_BY_ID[p.qualityId] ?? QUALITIES[0]!, s.flats()))
      .join(" · ");
    const item: SavedItem = {
      id: newId(),
      kind: "progression",
      name,
      keyRoot: s.keyRoot,
      steps: s.progression,
    };
    const library = [item, ...s.library].slice(0, 40);
    writeLibrary(library);
    set({ library });
  },
  loadSaved: (item) => {
    if (item.kind === "chord") {
      set({
        root: item.root,
        qualityId: item.qualityId,
        inversion: item.inversion,
        paintMode: false,
        paintMidi: [],
      });
    } else {
      set({
        progression: item.steps,
        keyRoot: item.keyRoot,
        root: item.steps[0]?.root ?? get().root,
        qualityId: item.steps[0]?.qualityId ?? get().qualityId,
      });
    }
  },
  deleteSaved: (id) => {
    const library = get().library.filter((x) => x.id !== id);
    writeLibrary(library);
    set({ library });
  },
  hydrate: () => {
    if (get().hydrated) return;
    set({ library: readLibrary(), hydrated: true });
  },
  pickDiatonic: (root, qualityId) =>
    set({ root, qualityId, inversion: 0, paintMode: false, paintMidi: [] }),
}));

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export function currentDiatonic() {
  const s = useStudio.getState();
  return diatonicChords(s.keyRoot, s.keyMode, s.sevenths);
}
