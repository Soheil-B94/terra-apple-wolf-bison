type PlayStyle = "chord" | "arp" | "strum";

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let wet: GainNode | null = null;
const active = new Set<OscillatorNode>();

function createContext(): AudioContext {
  const audio = new AudioContext();
  master = audio.createGain();
  master.gain.value = 0.85;

  const delay = audio.createDelay(1);
  delay.delayTime.value = 0.22;
  const feedback = audio.createGain();
  feedback.gain.value = 0.18;
  wet = audio.createGain();
  wet.gain.value = 0.16;
  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wet);
  wet.connect(master);
  master.connect(audio.destination);

  const filter = audio.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 4200;
  filter.Q.value = 0.5;
  // Keep a shared tone bus
  (audio as AudioContext & { __tone?: BiquadFilterNode }).__tone = filter;
  filter.connect(master);
  filter.connect(delay);
  return audio;
}

export async function ensureAudio(): Promise<AudioContext> {
  if (!ctx) ctx = createContext();
  if (ctx.state === "suspended") await ctx.resume();
  return ctx;
}

export function setMasterVolume(v: number) {
  if (master) master.gain.value = Math.max(0, Math.min(1, v));
}

function toneBus(audio: AudioContext): AudioNode {
  const tagged = audio as AudioContext & { __tone?: AudioNode };
  return tagged.__tone ?? master ?? audio.destination;
}

function scheduleNote(
  audio: AudioContext,
  midi: number,
  time: number,
  duration: number,
  velocity: number,
) {
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
  filter.frequency.exponentialRampToValueAtTime(brightness * 0.55, time + 0.28);
  filter.Q.value = 0.7;

  const peak = 0.11 * velocity;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peak, time + 0.012);
  gain.gain.exponentialRampToValueAtTime(peak * 0.55, time + 0.14);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  oscA.connect(filter);
  oscB.connect(filter);
  oscC.connect(gain);
  const partial = audio.createGain();
  partial.gain.value = 0.12;
  oscC.connect(partial);
  partial.connect(filter);
  filter.connect(gain);
  gain.connect(toneBus(audio));

  oscA.start(time);
  oscB.start(time);
  oscC.start(time);
  const stopAt = time + duration + 0.05;
  oscA.stop(stopAt);
  oscB.stop(stopAt);
  oscC.stop(stopAt);
  active.add(oscA);
  oscA.onended = () => active.delete(oscA);
}

export async function playPitches(
  midis: number[],
  style: PlayStyle,
  volume: number,
): Promise<{ started: number[]; durationMs: number }> {
  const audio = await ensureAudio();
  setMasterVolume(volume);
  const now = audio.currentTime + 0.02;
  const notes = [...midis].sort((a, b) => a - b);
  let stagger = 0;
  if (style === "arp") stagger = 0.14;
  if (style === "strum") stagger = 0.032;
  const hold = style === "arp" ? 0.55 : 1.35;

  notes.forEach((midi, i) => {
    const t = now + i * stagger;
    const vel = style === "strum" ? 0.85 + i * 0.03 : 1;
    scheduleNote(audio, midi, t, hold, vel);
  });

  const durationMs = (notes.length - 1) * stagger * 1000 + hold * 1000;
  return { started: notes, durationMs };
}

export async function playSingle(midi: number, volume: number) {
  const audio = await ensureAudio();
  setMasterVolume(volume);
  scheduleNote(audio, midi, audio.currentTime + 0.01, 0.9, 1);
}

export function stopAll() {
  if (!ctx || !master) return;
  const now = ctx.currentTime;
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(master.gain.value, now);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
  master.gain.setValueAtTime(0.85, now + 0.05);
}
