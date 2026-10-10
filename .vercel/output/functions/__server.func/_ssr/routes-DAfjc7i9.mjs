import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Play, c as Music2, d as Heart, f as Bookmark, i as Plus, l as Minus, o as PenLine, r as Trash2, s as Pause, t as Volume2, u as ListPlus } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DAfjc7i9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium select-none transition-[color,background-color,opacity,transform,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			secondary: "bg-bg-subtle text-fg border border-border hover:bg-bg-mute",
			ghost: "text-fg-muted hover:text-fg hover:bg-bg-subtle",
			outline: "border border-border-strong text-fg hover:bg-bg-subtle",
			danger: "text-danger hover:bg-danger/10"
		},
		size: {
			default: "h-11 rounded-md px-4 text-sm",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-md px-5 text-sm",
			icon: "size-11 rounded-md",
			"icon-sm": "size-9 rounded-sm"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = (0, import_react.forwardRef)(function Button({ className, variant, size, type = "button", ...props }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type,
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
});
var NOTE_SHARP = [
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
	"B"
];
var NOTE_FLAT = [
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
	"B"
];
/** Keys that conventionally spell with flats. */
var FLAT_KEYS = /* @__PURE__ */ new Set([
	5,
	10,
	3,
	8,
	1,
	6
]);
var QUALITIES = [
	{
		id: "maj",
		label: "maj",
		symbol: "",
		intervals: [
			0,
			4,
			7
		],
		group: "triad"
	},
	{
		id: "min",
		label: "min",
		symbol: "m",
		intervals: [
			0,
			3,
			7
		],
		group: "triad"
	},
	{
		id: "dim",
		label: "dim",
		symbol: "°",
		intervals: [
			0,
			3,
			6
		],
		group: "triad"
	},
	{
		id: "aug",
		label: "aug",
		symbol: "+",
		intervals: [
			0,
			4,
			8
		],
		group: "triad"
	},
	{
		id: "sus2",
		label: "sus2",
		symbol: "sus2",
		intervals: [
			0,
			2,
			7
		],
		group: "triad"
	},
	{
		id: "sus4",
		label: "sus4",
		symbol: "sus4",
		intervals: [
			0,
			5,
			7
		],
		group: "triad"
	},
	{
		id: "7",
		label: "7",
		symbol: "7",
		intervals: [
			0,
			4,
			7,
			10
		],
		group: "seventh"
	},
	{
		id: "maj7",
		label: "maj7",
		symbol: "maj7",
		intervals: [
			0,
			4,
			7,
			11
		],
		group: "seventh"
	},
	{
		id: "min7",
		label: "min7",
		symbol: "m7",
		intervals: [
			0,
			3,
			7,
			10
		],
		group: "seventh"
	},
	{
		id: "dim7",
		label: "dim7",
		symbol: "°7",
		intervals: [
			0,
			3,
			6,
			9
		],
		group: "seventh"
	},
	{
		id: "m7b5",
		label: "m7♭5",
		symbol: "ø7",
		intervals: [
			0,
			3,
			6,
			10
		],
		group: "seventh"
	},
	{
		id: "7sus4",
		label: "7sus4",
		symbol: "7sus4",
		intervals: [
			0,
			5,
			7,
			10
		],
		group: "seventh"
	},
	{
		id: "6",
		label: "6",
		symbol: "6",
		intervals: [
			0,
			4,
			7,
			9
		],
		group: "color"
	},
	{
		id: "m6",
		label: "m6",
		symbol: "m6",
		intervals: [
			0,
			3,
			7,
			9
		],
		group: "color"
	},
	{
		id: "add9",
		label: "add9",
		symbol: "add9",
		intervals: [
			0,
			4,
			7,
			14
		],
		group: "color"
	},
	{
		id: "9",
		label: "9",
		symbol: "9",
		intervals: [
			0,
			4,
			7,
			10,
			14
		],
		group: "color"
	},
	{
		id: "maj9",
		label: "maj9",
		symbol: "maj9",
		intervals: [
			0,
			4,
			7,
			11,
			14
		],
		group: "color"
	},
	{
		id: "min9",
		label: "min9",
		symbol: "m9",
		intervals: [
			0,
			3,
			7,
			10,
			14
		],
		group: "color"
	},
	{
		id: "11",
		label: "11",
		symbol: "11",
		intervals: [
			0,
			4,
			7,
			10,
			14,
			17
		],
		group: "color"
	},
	{
		id: "13",
		label: "13",
		symbol: "13",
		intervals: [
			0,
			4,
			7,
			10,
			14,
			21
		],
		group: "color"
	},
	{
		id: "7b9",
		label: "7♭9",
		symbol: "7♭9",
		intervals: [
			0,
			4,
			7,
			10,
			13
		],
		group: "color"
	},
	{
		id: "7sharp9",
		label: "7♯9",
		symbol: "7♯9",
		intervals: [
			0,
			4,
			7,
			10,
			15
		],
		group: "color"
	},
	{
		id: "7sharp11",
		label: "7♯11",
		symbol: "7♯11",
		intervals: [
			0,
			4,
			7,
			10,
			18
		],
		group: "color"
	}
];
var QUALITY_BY_ID = Object.fromEntries(QUALITIES.map((q) => [q.id, q]));
function wrapPc(n) {
	return (n % 12 + 12) % 12;
}
function prefersFlats(keyRoot, keyMode) {
	const majorRoot = keyMode === "minor" ? wrapPc(keyRoot + 3) : keyRoot;
	return FLAT_KEYS.has(majorRoot);
}
function noteName(pc, flats) {
	return (flats ? NOTE_FLAT : NOTE_SHARP)[wrapPc(pc)];
}
function chordSymbol(root, quality, flats) {
	return `${noteName(root, flats)}${quality.symbol}`;
}
var INTERVAL_LABEL = {
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
	11: "7"
};
function intervalLabel(semitones) {
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
function qualityPitchClasses(root, quality) {
	return [...new Set(quality.intervals.map((i) => wrapPc(root + i)))].sort((a, b) => a - b);
}
/** Comfortable closed voicing around C3–C5. */
function voicingMidi(root, quality, inversion, bassOctave = 3) {
	const base = (bassOctave + 1) * 12 + wrapPc(root);
	let notes = quality.intervals.map((i) => base + i);
	notes.sort((a, b) => a - b);
	const steps = notes.length === 0 ? 0 : (inversion % notes.length + notes.length) % notes.length;
	for (let i = 0; i < steps; i++) {
		const n = notes.shift();
		if (n === void 0) break;
		notes.push(n + 12);
	}
	while (notes[0] !== void 0 && notes[0] < 48) notes = notes.map((n) => n + 12);
	while (notes[0] !== void 0 && notes[0] > 64 && notes.every((n) => n - 12 >= 40)) notes = notes.map((n) => n - 12);
	return notes;
}
function pcSetKey(pcs) {
	return [...new Set(pcs.map(wrapPc))].sort((a, b) => a - b).join(",");
}
var QUALITY_SET = /* @__PURE__ */ new Map();
for (const q of QUALITIES) QUALITY_SET.set(pcSetKey(q.intervals.map((i) => wrapPc(i))), q);
function identifyChord(midiNotes) {
	const uniqueMidi = [...new Set(midiNotes)].sort((a, b) => a - b);
	if (uniqueMidi.length < 2) return null;
	const pcs = [...new Set(uniqueMidi.map((n) => wrapPc(n)))];
	if (pcs.length < 2) return null;
	const bass = wrapPc(uniqueMidi[0]);
	let best = null;
	let bestScore = Infinity;
	for (const root of pcs) {
		const rel = pcSetKey(pcs.map((p) => wrapPc(p - root)));
		const quality = QUALITY_SET.get(rel);
		if (!quality) continue;
		const bassIndex = qualityPitchClasses(root, quality).indexOf(bass);
		const inversion = bassIndex >= 0 ? bassIndex : 0;
		let score = quality.intervals.length;
		if (quality.id === "maj") score -= 2;
		if (quality.id === "min") score -= 1;
		if (root !== bass) score += .4;
		if (score < bestScore) {
			bestScore = score;
			best = {
				root,
				quality,
				inversion
			};
		}
	}
	if (best) return best;
	for (const root of pcs) {
		const selected = new Set(pcs.map((p) => wrapPc(p - root)));
		for (const quality of QUALITIES) {
			const need = quality.intervals.map((i) => wrapPc(i));
			if (!need.every((i) => selected.has(i))) continue;
			const score = 20 + (pcs.length - new Set(need).size) + quality.intervals.length;
			if (score < bestScore) {
				bestScore = score;
				const bassIndex = qualityPitchClasses(root, quality).indexOf(bass);
				best = {
					root,
					quality,
					inversion: bassIndex >= 0 ? bassIndex : 0
				};
			}
		}
	}
	return best;
}
var CIRCLE_FIFTHS = [
	0,
	7,
	2,
	9,
	4,
	11,
	6,
	1,
	8,
	3,
	10,
	5
];
var MAJOR_DEGREES = [
	{
		interval: 0,
		qualityId: "maj",
		numeral: "I"
	},
	{
		interval: 2,
		qualityId: "min",
		numeral: "ii"
	},
	{
		interval: 4,
		qualityId: "min",
		numeral: "iii"
	},
	{
		interval: 5,
		qualityId: "maj",
		numeral: "IV"
	},
	{
		interval: 7,
		qualityId: "maj",
		numeral: "V"
	},
	{
		interval: 9,
		qualityId: "min",
		numeral: "vi"
	},
	{
		interval: 11,
		qualityId: "dim",
		numeral: "vii°"
	}
];
var MINOR_DEGREES = [
	{
		interval: 0,
		qualityId: "min",
		numeral: "i"
	},
	{
		interval: 2,
		qualityId: "dim",
		numeral: "ii°"
	},
	{
		interval: 3,
		qualityId: "maj",
		numeral: "III"
	},
	{
		interval: 5,
		qualityId: "min",
		numeral: "iv"
	},
	{
		interval: 7,
		qualityId: "min",
		numeral: "v"
	},
	{
		interval: 8,
		qualityId: "maj",
		numeral: "VI"
	},
	{
		interval: 10,
		qualityId: "maj",
		numeral: "VII"
	}
];
var MAJOR_SEVENTHS = [
	{
		interval: 0,
		qualityId: "maj7",
		numeral: "IΔ"
	},
	{
		interval: 2,
		qualityId: "min7",
		numeral: "ii7"
	},
	{
		interval: 4,
		qualityId: "min7",
		numeral: "iii7"
	},
	{
		interval: 5,
		qualityId: "maj7",
		numeral: "IVΔ"
	},
	{
		interval: 7,
		qualityId: "7",
		numeral: "V7"
	},
	{
		interval: 9,
		qualityId: "min7",
		numeral: "vi7"
	},
	{
		interval: 11,
		qualityId: "m7b5",
		numeral: "viiø"
	}
];
var MINOR_SEVENTHS = [
	{
		interval: 0,
		qualityId: "min7",
		numeral: "i7"
	},
	{
		interval: 2,
		qualityId: "m7b5",
		numeral: "iiø"
	},
	{
		interval: 3,
		qualityId: "maj7",
		numeral: "IIIΔ"
	},
	{
		interval: 5,
		qualityId: "min7",
		numeral: "iv7"
	},
	{
		interval: 7,
		qualityId: "7",
		numeral: "V7"
	},
	{
		interval: 8,
		qualityId: "maj7",
		numeral: "VIΔ"
	},
	{
		interval: 10,
		qualityId: "7",
		numeral: "VII7"
	}
];
function diatonicChords(keyRoot, keyMode, sevenths) {
	return (sevenths ? keyMode === "major" ? MAJOR_SEVENTHS : MINOR_SEVENTHS : keyMode === "major" ? MAJOR_DEGREES : MINOR_DEGREES).map((d) => ({
		root: wrapPc(keyRoot + d.interval),
		quality: QUALITY_BY_ID[d.qualityId],
		numeral: d.numeral
	}));
}
var PROGRESSION_PRESETS = [
	{
		id: "pop",
		name: "I–V–vi–IV",
		steps: [
			{
				interval: 0,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 9,
				qualityId: "min",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "maj",
				beats: 4
			}
		]
	},
	{
		id: "fifties",
		name: "I–vi–IV–V",
		steps: [
			{
				interval: 0,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 9,
				qualityId: "min",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 4
			}
		]
	},
	{
		id: "sensitive",
		name: "vi–IV–I–V",
		steps: [
			{
				interval: 9,
				qualityId: "min",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 4
			}
		]
	},
	{
		id: "twoFive",
		name: "ii–V–I",
		steps: [
			{
				interval: 2,
				qualityId: "min7",
				beats: 2
			},
			{
				interval: 7,
				qualityId: "7",
				beats: 2
			},
			{
				interval: 0,
				qualityId: "maj7",
				beats: 4
			}
		]
	},
	{
		id: "canon",
		name: "Pachelbel",
		steps: [
			{
				interval: 0,
				qualityId: "maj",
				beats: 2
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 2
			},
			{
				interval: 9,
				qualityId: "min",
				beats: 2
			},
			{
				interval: 4,
				qualityId: "min",
				beats: 2
			},
			{
				interval: 5,
				qualityId: "maj",
				beats: 2
			},
			{
				interval: 0,
				qualityId: "maj",
				beats: 2
			},
			{
				interval: 5,
				qualityId: "maj",
				beats: 2
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 2
			}
		]
	},
	{
		id: "blues",
		name: "12-bar blues",
		steps: [
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 5,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 0,
				qualityId: "7",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "7",
				beats: 4
			}
		]
	},
	{
		id: "andante",
		name: "Andalusian",
		steps: [
			{
				interval: 0,
				qualityId: "min",
				beats: 4
			},
			{
				interval: 10,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 8,
				qualityId: "maj",
				beats: 4
			},
			{
				interval: 7,
				qualityId: "maj",
				beats: 4
			}
		]
	}
];
function instantiatePreset(presetId, keyRoot) {
	const preset = PROGRESSION_PRESETS.find((p) => p.id === presetId);
	if (!preset) return [];
	return preset.steps.map((s, i) => ({
		id: `${presetId}-${i}-${Date.now()}`,
		root: wrapPc(keyRoot + s.interval),
		qualityId: s.qualityId,
		beats: s.beats
	}));
}
function isBlackKey(pc) {
	return [
		1,
		3,
		6,
		8,
		10
	].includes(wrapPc(pc));
}
function inversionName(index, noteCount) {
	if (index === 0 || noteCount === 0) return "Root";
	if (index === 1) return "1st";
	if (index === 2) return "2nd";
	if (index === 3) return "3rd";
	return `${index}th`;
}
function newId() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}
var ctx = null;
var master = null;
var wet = null;
var active = /* @__PURE__ */ new Set();
function createContext() {
	const audio = new AudioContext();
	master = audio.createGain();
	master.gain.value = .85;
	const delay = audio.createDelay(1);
	delay.delayTime.value = .22;
	const feedback = audio.createGain();
	feedback.gain.value = .18;
	wet = audio.createGain();
	wet.gain.value = .16;
	delay.connect(feedback);
	feedback.connect(delay);
	delay.connect(wet);
	wet.connect(master);
	master.connect(audio.destination);
	const filter = audio.createBiquadFilter();
	filter.type = "lowpass";
	filter.frequency.value = 4200;
	filter.Q.value = .5;
	audio.__tone = filter;
	filter.connect(master);
	filter.connect(delay);
	return audio;
}
async function ensureAudio() {
	if (!ctx) ctx = createContext();
	if (ctx.state === "suspended") await ctx.resume();
	return ctx;
}
function setMasterVolume(v) {
	if (master) master.gain.value = Math.max(0, Math.min(1, v));
}
function toneBus(audio) {
	return audio.__tone ?? master ?? audio.destination;
}
function scheduleNote(audio, midi, time, duration, velocity) {
	const freq = 440 * 2 ** ((midi - 69) / 12);
	const oscA = audio.createOscillator();
	const oscB = audio.createOscillator();
	const oscC = audio.createOscillator();
	oscA.type = "triangle";
	oscB.type = "sine";
	oscC.type = "sine";
	oscA.frequency.value = freq;
	oscB.frequency.value = freq;
	oscC.frequency.value = freq * 2;
	oscB.detune.value = 4;
	oscA.detune.value = -3;
	const gain = audio.createGain();
	const filter = audio.createBiquadFilter();
	filter.type = "lowpass";
	const brightness = 900 + (midi - 40) * 28;
	filter.frequency.setValueAtTime(brightness * 1.6, time);
	filter.frequency.exponentialRampToValueAtTime(brightness * .55, time + .28);
	filter.Q.value = .7;
	const peak = .11 * velocity;
	gain.gain.setValueAtTime(1e-4, time);
	gain.gain.exponentialRampToValueAtTime(peak, time + .012);
	gain.gain.exponentialRampToValueAtTime(peak * .55, time + .14);
	gain.gain.exponentialRampToValueAtTime(1e-4, time + duration);
	oscA.connect(filter);
	oscB.connect(filter);
	oscC.connect(gain);
	const partial = audio.createGain();
	partial.gain.value = .12;
	oscC.connect(partial);
	partial.connect(filter);
	filter.connect(gain);
	gain.connect(toneBus(audio));
	oscA.start(time);
	oscB.start(time);
	oscC.start(time);
	const stopAt = time + duration + .05;
	oscA.stop(stopAt);
	oscB.stop(stopAt);
	oscC.stop(stopAt);
	active.add(oscA);
	oscA.onended = () => active.delete(oscA);
}
async function playPitches(midis, style, volume) {
	const audio = await ensureAudio();
	setMasterVolume(volume);
	const now = audio.currentTime + .02;
	const notes = [...midis].sort((a, b) => a - b);
	let stagger = 0;
	if (style === "arp") stagger = .14;
	if (style === "strum") stagger = .032;
	const hold = style === "arp" ? .55 : 1.35;
	notes.forEach((midi, i) => {
		const t = now + i * stagger;
		const vel = style === "strum" ? .85 + i * .03 : 1;
		scheduleNote(audio, midi, t, hold, vel);
	});
	return {
		started: notes,
		durationMs: (notes.length - 1) * stagger * 1e3 + hold * 1e3
	};
}
async function playSingle(midi, volume) {
	const audio = await ensureAudio();
	setMasterVolume(volume);
	scheduleNote(audio, midi, audio.currentTime + .01, .9, 1);
}
var LIBRARY_KEY = "resonance-library-v1";
function readLibrary() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(LIBRARY_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function writeLibrary(items) {
	if (typeof window === "undefined") return;
	window.localStorage.setItem(LIBRARY_KEY, JSON.stringify(items));
}
var playToken = 0;
var playingTimer = null;
var useStudio = create((set, get) => ({
	root: 0,
	qualityId: "maj",
	inversion: 0,
	keyRoot: 0,
	keyMode: "major",
	sevenths: false,
	octave: 3,
	volume: .8,
	playStyle: "chord",
	bpm: 92,
	paintMode: false,
	paintMidi: [],
	playing: [],
	progression: [],
	progCursor: null,
	library: [],
	hydrated: false,
	quality: () => QUALITY_BY_ID[get().qualityId] ?? QUALITIES[0],
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
			const root = identifyChord(s.paintMidi)?.root ?? s.root;
			return [...s.paintMidi].sort((a, b) => a - b).map((m) => {
				const pc = (m % 12 + 12) % 12;
				const iv = (pc - root + 12) % 12;
				return {
					name: noteName(pc, flats),
					interval: intervalLabel(iv)
				};
			});
		}
		return q.intervals.map((iv) => ({
			name: noteName(s.root + iv, flats),
			interval: intervalLabel(iv)
		}));
	},
	inversionLabel: () => {
		const s = get();
		return inversionName(s.inversion, s.quality().intervals.length);
	},
	setRoot: (n) => set({
		root: (n % 12 + 12) % 12,
		inversion: 0,
		paintMode: false,
		paintMidi: []
	}),
	setQuality: (id) => set({
		qualityId: id,
		inversion: 0,
		paintMode: false,
		paintMidi: []
	}),
	setInversion: (n) => set({
		inversion: n,
		paintMode: false
	}),
	setKey: (root, mode) => set((s) => ({
		keyRoot: (root % 12 + 12) % 12,
		keyMode: mode ?? s.keyMode
	})),
	setSevenths: (v) => set({ sevenths: v }),
	setOctave: (n) => set({ octave: Math.min(5, Math.max(2, n)) }),
	setVolume: (n) => set({ volume: n }),
	setPlayStyle: (s) => set({ playStyle: s }),
	setBpm: (n) => set({ bpm: Math.min(180, Math.max(48, n)) }),
	setPaintMode: (v) => set({
		paintMode: v,
		paintMidi: v ? get().notesMidi() : []
	}),
	togglePaintNote: (midi) => {
		const s = get();
		const next = s.paintMidi.includes(midi) ? s.paintMidi.filter((n) => n !== midi) : [...s.paintMidi, midi];
		const identified = identifyChord(next);
		set({
			paintMode: true,
			paintMidi: next,
			...identified ? {
				root: identified.root,
				qualityId: identified.quality.id,
				inversion: identified.inversion
			} : {}
		});
	},
	applyIdentified: () => {
		const identified = identifyChord(get().paintMidi);
		if (!identified) return;
		set({
			root: identified.root,
			qualityId: identified.quality.id,
			inversion: identified.inversion,
			paintMode: false,
			paintMidi: []
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
		playSingle(midi, get().volume);
		const token = ++playToken;
		set({ playing: [midi] });
		if (playingTimer) clearTimeout(playingTimer);
		playingTimer = setTimeout(() => {
			if (token === playToken) set({ playing: [] });
		}, 400);
	},
	addToProgression: () => {
		const s = get();
		const step = {
			id: newId(),
			root: s.root,
			qualityId: s.qualityId,
			beats: 4
		};
		set({ progression: [...s.progression, step] });
	},
	removeStep: (id) => set((s) => ({ progression: s.progression.filter((p) => p.id !== id) })),
	loadPreset: (id) => set((s) => ({
		progression: instantiatePreset(id, s.keyRoot),
		progCursor: null
	})),
	clearProgression: () => set({
		progression: [],
		progCursor: null
	}),
	playProgression: async () => {
		const s = get();
		if (s.progression.length === 0) return;
		const token = ++playToken;
		const beat = 60 / s.bpm;
		for (let i = 0; i < s.progression.length; i++) {
			if (token !== playToken) return;
			const step = s.progression[i];
			const q = QUALITY_BY_ID[step.qualityId] ?? QUALITIES[0];
			const notes = voicingMidi(step.root, q, 0, s.octave);
			set({
				progCursor: i,
				root: step.root,
				qualityId: step.qualityId,
				inversion: 0,
				paintMode: false,
				playing: notes
			});
			await playPitches(notes, s.playStyle, s.volume);
			await sleep(step.beats * beat * 1e3);
		}
		if (token === playToken) set({
			progCursor: null,
			playing: []
		});
	},
	stopPlayback: () => {
		playToken += 1;
		set({
			playing: [],
			progCursor: null
		});
	},
	saveCurrent: () => {
		const s = get();
		const library = [{
			id: newId(),
			kind: "chord",
			name: s.symbol(),
			root: s.root,
			qualityId: s.qualityId,
			inversion: s.inversion
		}, ...s.library].slice(0, 40);
		writeLibrary(library);
		set({ library });
	},
	saveProgression: () => {
		const s = get();
		if (s.progression.length === 0) return;
		const name = s.progression.slice(0, 6).map((p) => chordSymbol(p.root, QUALITY_BY_ID[p.qualityId] ?? QUALITIES[0], s.flats())).join(" · ");
		const library = [{
			id: newId(),
			kind: "progression",
			name,
			keyRoot: s.keyRoot,
			steps: s.progression
		}, ...s.library].slice(0, 40);
		writeLibrary(library);
		set({ library });
	},
	loadSaved: (item) => {
		if (item.kind === "chord") set({
			root: item.root,
			qualityId: item.qualityId,
			inversion: item.inversion,
			paintMode: false,
			paintMidi: []
		});
		else set({
			progression: item.steps,
			keyRoot: item.keyRoot,
			root: item.steps[0]?.root ?? get().root,
			qualityId: item.steps[0]?.qualityId ?? get().qualityId
		});
	},
	deleteSaved: (id) => {
		const library = get().library.filter((x) => x.id !== id);
		writeLibrary(library);
		set({ library });
	},
	hydrate: () => {
		if (get().hydrated) return;
		set({
			library: readLibrary(),
			hydrated: true
		});
	},
	pickDiatonic: (root, qualityId) => set({
		root,
		qualityId,
		inversion: 0,
		paintMode: false,
		paintMidi: []
	})
}));
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
function ChordStage() {
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
	const q = QUALITY_BY_ID[qualityId] ?? QUALITIES[0];
	const flats = prefersFlats(keyRoot, keyMode);
	const symbol = chordSymbol(root, q, flats);
	const isPlaying = playing.length > 0;
	const identified = paintMode ? identifyChord(paintMidi) : null;
	const shown = paintMode && paintMidi.length > 0 ? [...paintMidi].sort((a, b) => a - b).map((midi) => {
		const pc = (midi % 12 + 12) % 12;
		const iv = (pc - (identified?.root ?? root) + 12) % 12;
		return {
			name: noteName(pc, flats),
			interval: intervalLabel(iv)
		};
	}) : q.intervals.map((iv) => ({
		name: noteName(root + iv, flats),
		interval: intervalLabel(iv)
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-2xl bg-bg-elevated px-5 py-6 shadow-soft sm:px-8 sm:py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-fg-muted uppercase",
						children: "Current chord"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-2 text-5xl leading-none tracking-tight text-fg sm:text-6xl lg:text-7xl",
						children: symbol
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [shown.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex h-9 items-center gap-2 rounded-md border border-border bg-bg-subtle px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base text-fg",
								children: n.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium tracking-wide text-fg-subtle",
								children: n.interval
							})]
						}, `${n.name}-${n.interval}-${i}`)), shown.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-fg-muted",
							children: "Tap keys to add notes"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: q.intervals.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setInversion(i),
						className: cn("h-9 rounded-sm px-3 text-xs font-medium transition-colors duration-150", inversion === i && !paintMode ? "bg-accent text-accent-fg" : "bg-bg-subtle text-fg-muted hover:text-fg"),
						children: inversionName(i, q.intervals.length)
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						"chord",
						"arp",
						"strum"
					].map((style) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setPlayStyle(style),
						className: cn("h-9 rounded-sm px-3 text-xs font-medium capitalize transition-colors duration-150", playStyle === style ? "bg-bg-mute text-fg" : "text-fg-muted hover:text-fg"),
						children: style === "arp" ? "Arpeggio" : style === "strum" ? "Strum" : "Block"
					}, style))
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-wrap items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "lg",
					onClick: () => void (isPlaying ? stopPlayback() : playCurrent()),
					children: [isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), isPlaying ? "Stop" : "Play chord"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "secondary",
					onClick: saveCurrent,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), "Save"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: paintMode ? "default" : "ghost",
					onClick: () => paintMode ? applyIdentified() : setPaintMode(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-4" }), paintMode ? "Use this spelling" : "Tap to build"]
				})
			]
		})]
	});
}
function CircleOfFifths() {
	const keyRoot = useStudio((s) => s.keyRoot);
	const keyMode = useStudio((s) => s.keyMode);
	const root = useStudio((s) => s.root);
	const setKey = useStudio((s) => s.setKey);
	const setRoot = useStudio((s) => s.setRoot);
	const setQuality = useStudio((s) => s.setQuality);
	const flats = useStudio((s) => s.flats());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
				children: "Circle of fifths"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex rounded-sm bg-bg-subtle p-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChip, {
					active: keyMode === "major",
					onClick: () => setKey(keyRoot, "major"),
					children: "Major"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChip, {
					active: keyMode === "minor",
					onClick: () => setKey(keyRoot, "minor"),
					children: "Minor"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto aspect-square w-full max-w-[280px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[18%] rounded-full border border-border" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-[34%] flex flex-col items-center justify-center rounded-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl leading-none tracking-tight text-fg",
						children: [noteName(keyRoot, flats), keyMode === "minor" ? "m" : ""]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 text-xs tracking-wide text-fg-subtle uppercase",
						children: "Key"
					})]
				}),
				CIRCLE_FIFTHS.map((pc, i) => {
					const rad = i / 12 * Math.PI * 2 - Math.PI / 2;
					const left = 50 + Math.cos(rad) * 41;
					const top = 50 + Math.sin(rad) * 41;
					const pitch = keyMode === "minor" ? wrapPc(pc - 3) : pc;
					const isKey = pitch === keyRoot;
					const isRoot = pitch === root;
					const label = keyMode === "minor" ? `${noteName(pitch, flats)}m` : noteName(pitch, flats);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setKey(pitch, keyMode);
							setRoot(pitch);
							setQuality(keyMode === "minor" ? "min" : "maj");
						},
						className: cn("absolute grid h-11 min-w-11 place-items-center rounded-full px-1.5 font-display text-sm transition-colors duration-150", isKey ? "bg-accent text-accent-fg" : isRoot ? "bg-bg-mute text-fg" : "bg-bg-subtle text-fg hover:bg-bg-mute"),
						style: {
							left: `${left}%`,
							top: `${top}%`,
							transform: "translate(-50%, -50%)"
						},
						"aria-label": `${label} ${keyMode}`,
						"aria-pressed": isKey,
						children: label
					}, `${pc}-${keyMode}`);
				})
			]
		})]
	});
}
function ModeChip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-7 rounded-xs px-2.5 text-xs font-medium transition-colors duration-150", active ? "bg-accent text-accent-fg" : "text-fg-muted hover:text-fg"),
		children
	});
}
/** Standard tuning, low E to high E. */
var TUNING = [
	40,
	45,
	50,
	55,
	59,
	64
];
var SHAPES = [
	{
		qualityIds: ["maj"],
		frets: [
			0,
			2,
			2,
			1,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["maj"],
		frets: [
			-1,
			0,
			2,
			2,
			2,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["maj"],
		frets: [
			-1,
			-1,
			0,
			2,
			3,
			2
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["maj"],
		frets: [
			-1,
			3,
			2,
			0,
			1,
			0
		],
		rootString: 1,
		rootRelFret: 3
	},
	{
		qualityIds: ["maj"],
		frets: [
			3,
			2,
			0,
			0,
			0,
			3
		],
		rootString: 0,
		rootRelFret: 3
	},
	{
		qualityIds: ["min"],
		frets: [
			0,
			2,
			2,
			0,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["min"],
		frets: [
			-1,
			0,
			2,
			2,
			1,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["min"],
		frets: [
			-1,
			-1,
			0,
			2,
			3,
			1
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["dim"],
		frets: [
			-1,
			0,
			1,
			2,
			1,
			-1
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["dim"],
		frets: [
			0,
			1,
			2,
			0,
			-1,
			-1
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["aug"],
		frets: [
			0,
			3,
			2,
			1,
			1,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["aug"],
		frets: [
			-1,
			0,
			3,
			2,
			2,
			1
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["sus2"],
		frets: [
			-1,
			0,
			2,
			2,
			0,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["sus2"],
		frets: [
			-1,
			-1,
			0,
			2,
			3,
			0
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["sus4"],
		frets: [
			0,
			2,
			2,
			2,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["sus4"],
		frets: [
			-1,
			0,
			2,
			2,
			3,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["sus4"],
		frets: [
			-1,
			-1,
			0,
			2,
			3,
			3
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["7"],
		frets: [
			0,
			2,
			0,
			1,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["7"],
		frets: [
			-1,
			0,
			2,
			0,
			2,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["7"],
		frets: [
			-1,
			-1,
			0,
			2,
			1,
			2
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["7"],
		frets: [
			3,
			2,
			0,
			0,
			0,
			1
		],
		rootString: 0,
		rootRelFret: 3
	},
	{
		qualityIds: ["7"],
		frets: [
			-1,
			3,
			2,
			3,
			1,
			0
		],
		rootString: 1,
		rootRelFret: 3
	},
	{
		qualityIds: ["maj7"],
		frets: [
			0,
			2,
			1,
			1,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["maj7"],
		frets: [
			-1,
			0,
			2,
			1,
			2,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["maj7"],
		frets: [
			-1,
			3,
			2,
			0,
			0,
			0
		],
		rootString: 1,
		rootRelFret: 3
	},
	{
		qualityIds: ["maj7"],
		frets: [
			-1,
			-1,
			0,
			2,
			2,
			2
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["min7"],
		frets: [
			0,
			2,
			0,
			0,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["min7"],
		frets: [
			-1,
			0,
			2,
			0,
			1,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["min7"],
		frets: [
			-1,
			-1,
			0,
			2,
			1,
			1
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["dim7"],
		frets: [
			-1,
			-1,
			0,
			1,
			0,
			1
		],
		rootString: 2,
		rootRelFret: 0
	},
	{
		qualityIds: ["dim7"],
		frets: [
			-1,
			0,
			1,
			2,
			1,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["m7b5"],
		frets: [
			-1,
			0,
			1,
			0,
			1,
			-1
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["m7b5"],
		frets: [
			0,
			1,
			2,
			0,
			3,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["7sus4"],
		frets: [
			0,
			2,
			0,
			2,
			0,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["7sus4"],
		frets: [
			-1,
			0,
			2,
			0,
			3,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["6"],
		frets: [
			0,
			-1,
			2,
			1,
			2,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["6"],
		frets: [
			-1,
			0,
			2,
			2,
			2,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["m6"],
		frets: [
			0,
			2,
			2,
			0,
			2,
			0
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["m6"],
		frets: [
			-1,
			0,
			2,
			2,
			1,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["add9"],
		frets: [
			-1,
			3,
			2,
			0,
			3,
			0
		],
		rootString: 1,
		rootRelFret: 3
	},
	{
		qualityIds: ["add9"],
		frets: [
			0,
			2,
			2,
			1,
			0,
			2
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["9"],
		frets: [
			0,
			2,
			0,
			1,
			0,
			2
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["9"],
		frets: [
			-1,
			3,
			2,
			3,
			3,
			3
		],
		rootString: 1,
		rootRelFret: 3
	},
	{
		qualityIds: ["maj9"],
		frets: [
			-1,
			0,
			2,
			1,
			2,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["min9"],
		frets: [
			-1,
			0,
			2,
			0,
			1,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["11"],
		frets: [
			-1,
			0,
			0,
			0,
			1,
			0
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["13"],
		frets: [
			0,
			2,
			0,
			1,
			2,
			2
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["13"],
		frets: [
			-1,
			0,
			2,
			0,
			2,
			2
		],
		rootString: 1,
		rootRelFret: 0
	},
	{
		qualityIds: ["7b9"],
		frets: [
			0,
			2,
			0,
			1,
			0,
			1
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["7sharp9"],
		frets: [
			0,
			2,
			0,
			1,
			3,
			3
		],
		rootString: 0,
		rootRelFret: 0
	},
	{
		qualityIds: ["7sharp11"],
		frets: [
			0,
			2,
			0,
			1,
			1,
			0
		],
		rootString: 0,
		rootRelFret: 0
	}
];
function shiftShape(shape, rootPc) {
	let shift = wrapPc(rootPc - wrapPc(TUNING[shape.rootString])) - shape.rootRelFret;
	const candidates = [
		shift,
		shift + 12,
		shift - 12,
		shift + 24
	];
	let best = null;
	let bestScore = Infinity;
	for (const s of candidates) {
		const placed = shape.frets.map((f) => f < 0 ? -1 : f + s);
		if (placed.some((f) => f > 15)) continue;
		const played = placed.filter((f) => f >= 0);
		if (played.length < 3) continue;
		if (played.some((f) => f < 0)) continue;
		const minF = Math.min(...played);
		const maxF = Math.max(...played);
		if (minF < 0) continue;
		if (maxF - minF > 4 && minF > 0) continue;
		if (maxF > 15) continue;
		const score = minF + (maxF - minF) * .4 + placed.filter((f) => f < 0).length * .5;
		if (score < bestScore) {
			bestScore = score;
			best = placed;
		}
	}
	return best;
}
function interiorMutes(frets) {
	let first = -1;
	let last = -1;
	for (let i = 0; i < 6; i++) if (frets[i] >= 0) {
		if (first < 0) first = i;
		last = i;
	}
	if (first < 0) return 6;
	let n = 0;
	for (let i = first; i <= last; i++) if (frets[i] < 0) n++;
	return n;
}
function genericVoicing(pcs) {
	const target = new Set(pcs.map(wrapPc));
	let best = null;
	let bestScore = Infinity;
	for (let start = 0; start <= 9; start++) {
		const end = start + 3;
		const assignment = [];
		const covered = /* @__PURE__ */ new Set();
		for (let s = 0; s < 6; s++) {
			let found = -1;
			const lo = start === 0 ? 0 : start;
			for (let f = lo; f <= end; f++) {
				const pc = wrapPc(TUNING[s] + f);
				if (target.has(pc)) {
					found = f;
					break;
				}
			}
			assignment.push(found);
			if (found >= 0) covered.add(wrapPc(TUNING[s] + found));
		}
		const missing = [...target].filter((p) => !covered.has(p)).length;
		const mutes = assignment.filter((f) => f < 0).length;
		if (interiorMutes(assignment) > 0) continue;
		if (missing > 1) continue;
		const played = assignment.filter((f) => f >= 0);
		if (played.length < 3) continue;
		const stretch = Math.max(...played) - Math.min(...played);
		const score = missing * 12 + mutes * 2 + stretch + Math.min(...played) * .3;
		if (score < bestScore) {
			bestScore = score;
			best = assignment;
		}
	}
	return best;
}
function coversChord(frets, pcs) {
	const target = new Set(pcs.map(wrapPc));
	const got = /* @__PURE__ */ new Set();
	for (let i = 0; i < 6; i++) {
		const f = frets[i];
		if (f < 0) continue;
		got.add(wrapPc(TUNING[i] + f));
	}
	for (const p of target) if (!got.has(p) && target.size <= 4) return false;
	return got.size >= 3;
}
function guitarVoicing(root, quality) {
	const pcs = quality.intervals.map((i) => wrapPc(root + i));
	const options = [];
	for (const shape of SHAPES) {
		if (!shape.qualityIds.includes(quality.id)) continue;
		const placed = shiftShape(shape, wrapPc(root));
		if (placed && coversChord(placed, pcs)) options.push(placed);
	}
	const generic = genericVoicing(pcs);
	if (generic) options.push(generic);
	if (options.length === 0) return genericVoicing(pcs) ?? [
		-1,
		-1,
		-1,
		-1,
		-1,
		-1
	];
	options.sort((a, b) => {
		const playedA = a.filter((f) => f >= 0);
		const playedB = b.filter((f) => f >= 0);
		const minA = Math.min(...playedA, 99);
		const minB = Math.min(...playedB, 99);
		const muteA = a.filter((f) => f < 0).length;
		const muteB = b.filter((f) => f < 0).length;
		return minA + muteA * .4 - (minB + muteB * .4);
	});
	return options[0];
}
function chartMeta(frets) {
	const played = frets.filter((f) => f > 0);
	if (played.length === 0) return {
		baseFret: 1,
		span: 4,
		showNut: true
	};
	const minF = Math.min(...played);
	const maxF = Math.max(...played, minF + 3);
	const baseFret = minF <= 1 && frets.some((f) => f === 0) || minF <= 1 ? 1 : minF;
	const span = Math.max(4, maxF - baseFret + 1);
	return {
		baseFret,
		span: Math.min(span, 6),
		showNut: baseFret === 1
	};
}
function detectBarre(frets) {
	const played = frets.map((f, i) => ({
		f,
		i
	})).filter((x) => x.f > 0);
	if (played.length < 4) return null;
	const minF = Math.min(...played.map((x) => x.f));
	const at = played.filter((x) => x.f === minF);
	if (at.length < 3) return null;
	const from = Math.min(...at.map((x) => x.i));
	const to = Math.max(...at.map((x) => x.i));
	if (to - from < 2) return null;
	return {
		fret: minF,
		from,
		to
	};
}
function GuitarChart() {
	const root = useStudio((s) => s.root);
	const q = QUALITY_BY_ID[useStudio((s) => s.qualityId)] ?? QUALITIES[0];
	const frets = (0, import_react.useMemo)(() => guitarVoicing(root, q), [root, q]);
	const meta = chartMeta(frets);
	const barre = detectBarre(frets);
	const W = 168;
	const H = 196;
	const padL = 28;
	const padT = 28;
	const innerW = 124;
	const innerH = 150;
	const strings = 6;
	const fretCount = meta.span;
	const xAt = (s) => padL + s / 5 * innerW;
	const yAt = (fretRel) => padT + fretRel / fretCount * innerH;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
				children: "Guitar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-fg-subtle",
				children: "Standard"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "mx-auto h-auto w-full max-w-[220px] text-fg",
			role: "img",
			"aria-label": "Guitar chord diagram",
			children: [
				frets.map((fret, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: xAt(s),
					y: 16,
					textAnchor: "middle",
					className: "fill-fg-muted",
					fontSize: "11",
					fontFamily: "Figtree, sans-serif",
					children: fret < 0 ? "×" : fret === 0 ? "○" : ""
				}, `cap-${s}`)),
				!meta.showNut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 12,
					y: yAt(.55),
					textAnchor: "middle",
					className: "fill-fg-muted",
					fontSize: "11",
					fontFamily: "Figtree, sans-serif",
					children: meta.baseFret
				}),
				meta.showNut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: padL,
					y: 25,
					width: innerW,
					height: 4,
					className: "fill-fg",
					rx: 1
				}),
				Array.from({ length: fretCount + 1 }, (_, f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: padL,
					x2: 152,
					y1: yAt(f),
					y2: yAt(f),
					stroke: "currentColor",
					strokeOpacity: f === 0 && meta.showNut ? 0 : .28,
					strokeWidth: 1
				}, `fret-${f}`)),
				Array.from({ length: strings }, (_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: xAt(s),
					x2: xAt(s),
					y1: padT,
					y2: 178,
					stroke: "currentColor",
					strokeOpacity: .38,
					strokeWidth: s === 0 || s === 5 ? 1.4 : 1
				}, `str-${s}`)),
				barre && barre.fret >= meta.baseFret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: xAt(barre.from) - 7,
					y: yAt(barre.fret - meta.baseFret + .5) - 7,
					width: xAt(barre.to) - xAt(barre.from) + 14,
					height: 14,
					rx: 7,
					className: "fill-fg",
					opacity: .92
				}),
				frets.map((fret, s) => {
					if (fret <= 0) return null;
					if (barre && fret === barre.fret && s >= barre.from && s <= barre.to) return null;
					const rel = fret - meta.baseFret + 1;
					if (rel < 1 || rel > fretCount) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: xAt(s),
						cy: yAt(rel - .5),
						r: 7,
						className: "fill-fg"
					}, `dot-${s}`);
				})
			]
		})]
	});
}
function Library() {
	const library = useStudio((s) => s.library);
	const loadSaved = useStudio((s) => s.loadSaved);
	const deleteSaved = useStudio((s) => s.deleteSaved);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-soft sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
			children: "Library"
		}), library.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-fg-muted",
			children: "Saved chords and sequences live here. They stay on this device."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-3 flex flex-col gap-1.5",
			children: library.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-2 rounded-md border border-transparent px-2 py-1.5 hover:border-border hover:bg-bg-subtle",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => loadSaved(item),
					className: "flex min-w-0 flex-1 items-center gap-2 text-left",
					children: [item.kind === "chord" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-3.5 shrink-0 text-fg-subtle" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "size-3.5 shrink-0 text-fg-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-sm text-fg",
						children: item.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": `Delete ${item.name}`,
					onClick: () => deleteSaved(item.id),
					className: "grid size-9 place-items-center rounded-sm text-fg-subtle hover:text-danger",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
				})]
			}, item.id))
		})]
	});
}
var START = 48;
var END = 72;
function Piano() {
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
	const q = QUALITY_BY_ID[qualityId] ?? QUALITIES[0];
	const chordNotes = paintMode && paintMidi.length > 0 ? paintMidi : voicingMidi(root, q, inversion, octave);
	const chordPcs = new Set(chordNotes.map((n) => wrapPc(n)));
	const useFlats = prefersFlats(keyRoot, keyMode);
	const whites = (0, import_react.useMemo)(() => {
		const list = [];
		for (let m = START; m <= END; m++) list.push({
			midi: m,
			black: isBlackKey(m)
		});
		return list;
	}, []).filter((k) => !k.black);
	const scroller = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		const mid = el.scrollWidth / 2 - el.clientWidth / 2;
		el.scrollLeft = Math.max(0, mid - 40);
	}, []);
	function onKey(midi) {
		if (paintMode) togglePaintNote(midi);
		else previewNote(midi);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-3 shadow-soft sm:p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
				children: "Keyboard"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-fg-subtle",
				children: paintMode ? "Tap keys to build a chord" : "Tap a key to hear it"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "piano-scroll w-full max-w-full overflow-x-auto overscroll-x-contain",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-40 min-w-[560px] sm:h-44",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 flex",
					children: whites.map((k) => {
						const pc = wrapPc(k.midi);
						const active = (paintMode ? paintMidi.includes(k.midi) : chordPcs.has(pc)) || playing.includes(k.midi);
						const label = noteName(pc, useFlats);
						const isC = pc === 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `${label} ${Math.floor(k.midi / 12) - 1}`,
							"aria-pressed": active,
							onPointerDown: (e) => {
								e.preventDefault();
								onKey(k.midi);
							},
							className: cn("relative flex-1 rounded-b-sm border border-bg/40 border-t-0 transition-[background-color,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]", active ? "bg-key-active text-key-active-fg" : "bg-key-white text-key-white-fg", "active:translate-y-px"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("absolute inset-x-0 bottom-2 text-center text-xs font-medium tracking-wide", active ? "text-key-active-fg/80" : "text-key-white-fg/45", !isC && "hidden sm:block"),
								children: isC ? `${label}${Math.floor(k.midi / 12) - 1}` : label
							})
						}, k.midi);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0 flex",
					children: whites.map((k) => {
						const next = k.midi + 1;
						if (!(next <= END && isBlackKey(next))) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative flex-1" }, k.midi);
						const midi = next;
						const pc = wrapPc(midi);
						const active = (paintMode ? paintMidi.includes(midi) : chordPcs.has(pc)) || playing.includes(midi);
						const label = noteName(pc, useFlats);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative flex-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": label,
								"aria-pressed": active,
								onPointerDown: (e) => {
									e.preventDefault();
									e.stopPropagation();
									onKey(midi);
								},
								className: cn("pointer-events-auto absolute top-0 z-10 h-[58%] w-[62%] rounded-b-sm border border-bg/60 transition-[background-color,transform] duration-150", "left-[68%] -translate-x-1/2", active ? "bg-key-active text-key-active-fg" : "bg-key-black text-key-black-fg", "active:translate-y-px")
							})
						}, k.midi);
					})
				})]
			})
		})]
	});
}
function Progression() {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-4 shadow-soft sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
					children: "In key"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-lg text-fg",
					children: "Diatonic chords"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSevenths(!sevenths),
					className: cn("h-9 rounded-sm px-3 text-xs font-medium transition-colors duration-150", sevenths ? "bg-accent text-accent-fg" : "bg-bg-subtle text-fg-muted"),
					children: sevenths ? "Sevenths" : "Triads"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-full min-w-0 gap-2 overflow-x-auto pb-1",
				children: diatonic.map((d) => {
					const active = d.root === root && d.quality.id === qualityId;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => pickDiatonic(d.root, d.quality.id),
						className: cn("flex min-w-16 shrink-0 flex-col items-center rounded-md border px-3 py-2 transition-colors duration-150", active ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg-subtle text-fg hover:border-border-strong"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-medium tracking-wide opacity-70",
							children: d.numeral
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base",
							children: chordSymbol(d.root, d.quality, flats)
						})]
					}, d.numeral);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-5 h-px bg-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-wide text-fg-muted uppercase",
					children: "Progression"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-xs text-fg-muted",
					children: [
						"BPM",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 60,
							max: 160,
							value: bpm,
							onChange: (e) => setBpm(Number(e.target.value)),
							className: "h-1 w-24 cursor-pointer accent-accent",
							"aria-label": "Tempo",
							suppressHydrationWarning: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 tabular-nums text-fg",
							children: bpm
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex w-full min-w-0 flex-wrap gap-1.5",
				children: PROGRESSION_PRESETS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => loadPreset(p.id),
					className: "h-8 rounded-sm bg-bg-subtle px-2.5 text-xs font-medium text-fg-muted transition-colors hover:text-fg",
					children: p.name
				}, p.id))
			}),
			progression.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-md border border-dashed border-border px-4 py-6 text-center text-sm text-fg-muted",
				children: "Add the current chord, or drop in a classic sequence."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "flex w-full min-w-0 flex-wrap gap-2",
				children: progression.map((step, i) => {
					const q = QUALITY_BY_ID[step.qualityId] ?? QUALITIES[0];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => removeStep(step.id),
						className: cn("group flex h-12 items-center gap-2 rounded-md border px-3 text-left transition-colors", progCursor === i ? "border-accent bg-accent text-accent-fg" : "border-border bg-bg-subtle text-fg hover:border-danger/40"),
						title: "Remove chord",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base",
							children: chordSymbol(step.root, q, flats)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3 opacity-0 transition-opacity group-hover:opacity-70" })]
					}) }, step.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "secondary",
						size: "sm",
						onClick: addToProgression,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListPlus, { className: "size-3.5" }), "Add chord"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						onClick: () => void playProgression(),
						disabled: progression.length === 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-3.5" }), "Play sequence"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: saveProgression,
						disabled: progression.length === 0,
						children: "Save sequence"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "sm",
						onClick: clearProgression,
						disabled: progression.length === 0,
						children: "Clear"
					})
				]
			})
		]
	});
}
var GROUPS = [
	{
		id: "triad",
		label: "Triads"
	},
	{
		id: "seventh",
		label: "Sevenths"
	},
	{
		id: "color",
		label: "Color"
	}
];
function QualityBar() {
	const root = useStudio((s) => s.root);
	const qualityId = useStudio((s) => s.qualityId);
	const setRoot = useStudio((s) => s.setRoot);
	const setQuality = useStudio((s) => s.setQuality);
	const names = useStudio((s) => s.flats()) ? NOTE_FLAT : NOTE_SHARP;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-medium tracking-wide text-fg-muted uppercase",
			children: "Root"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: names.map((name, pc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setRoot(pc),
				className: cn("h-11 min-w-11 rounded-md px-2.5 text-sm font-medium transition-colors duration-150", root === pc ? "bg-accent text-accent-fg" : "bg-bg-elevated text-fg-muted hover:text-fg"),
				children: name
			}, name))
		})] }), GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-medium tracking-wide text-fg-muted uppercase",
			children: group.label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: QUALITIES.filter((q) => q.group === group.id).map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setQuality(q.id),
				className: cn("h-10 rounded-md px-3 text-sm font-medium transition-colors duration-150", qualityId === q.id ? "bg-accent text-accent-fg" : "border border-border bg-bg-elevated text-fg-muted hover:text-fg"),
				children: q.label
			}, q.id))
		})] }, group.id))]
	});
}
function Studio() {
	const hydrate = useStudio((s) => s.hydrate);
	const playCurrent = useStudio((s) => s.playCurrent);
	const octave = useStudio((s) => s.octave);
	const setOctave = useStudio((s) => s.setOctave);
	const volume = useStudio((s) => s.volume);
	const setVolume = useStudio((s) => s.setVolume);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const target = e.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
			if (e.code === "Space") {
				e.preventDefault();
				playCurrent();
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [playCurrent]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh overflow-x-hidden bg-bg text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl tracking-tight text-fg",
					children: "Resonance"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-fg-muted",
					children: "Chord studio"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center rounded-md bg-bg-elevated px-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": "Lower octave",
								onClick: () => setOctave(octave - 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "w-16 text-center text-xs text-fg-muted tabular-nums",
								children: ["Oct ", octave]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon-sm",
								"aria-label": "Raise octave",
								onClick: () => setOctave(octave + 1),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-11 items-center gap-2 rounded-md bg-bg-elevated px-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-3.5 text-fg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 0,
							max: 1,
							step: .01,
							value: volume,
							onChange: (e) => setVolume(Number(e.target.value)),
							className: "h-1 w-20 cursor-pointer accent-accent sm:w-24",
							"aria-label": "Volume",
							suppressHydrationWarning: true
						})]
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-5 px-4 py-5 sm:px-6 sm:py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChordStage, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Piano, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QualityBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-0 gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleOfFifths, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuitarChart, {})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progression, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, {})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pb-8 text-center text-xs text-fg-subtle",
					children: "Space plays the chord. Sequences and saves stay on this device."
				})
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Studio, {});
}
//#endregion
export { Home as component };
