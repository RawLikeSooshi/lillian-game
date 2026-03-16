/**
 * Core Audio Engine
 * Singleton AudioContext, master volume, mute toggle.
 * All audio goes through masterGain → destination.
 * Must call initAudio() from a user gesture (click) before any sound plays.
 */

let ctx = null;
let masterGain = null;
let muted = false;
let volume = 0.5;

const VOLUME_KEY = "hoo-volume";
const MUTE_KEY = "hoo-muted";

// Load persisted settings
try {
  const savedVol = localStorage.getItem(VOLUME_KEY);
  if (savedVol !== null) volume = parseFloat(savedVol);
  const savedMute = localStorage.getItem(MUTE_KEY);
  if (savedMute !== null) muted = savedMute === "true";
} catch (_) {}

/**
 * Initialize AudioContext. Must be called from a user gesture handler.
 */
export const initAudio = () => {
  try {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      masterGain = ctx.createGain();
      masterGain.gain.value = muted ? 0 : volume;
      masterGain.connect(ctx.destination);
    }
    if (ctx.state === "suspended") ctx.resume();
    return true;
  } catch (_) {
    return false;
  }
};

export const getCtx = () => ctx;
export const getMaster = () => masterGain;
export const isReady = () => ctx && ctx.state === "running";

export const getVolume = () => volume;
export const setVolume = (v) => {
  volume = Math.max(0, Math.min(1, v));
  if (masterGain && !muted) masterGain.gain.value = volume;
  try { localStorage.setItem(VOLUME_KEY, String(volume)); } catch (_) {}
};

export const isMuted = () => muted;
export const toggleMute = () => {
  muted = !muted;
  if (masterGain) masterGain.gain.value = muted ? 0 : volume;
  try { localStorage.setItem(MUTE_KEY, String(muted)); } catch (_) {}
  return muted;
};

/**
 * Create a buffer of noise.
 * @param {number} duration - seconds
 * @param {'white'|'pink'|'brown'} type
 */
export const createNoiseBuffer = (duration = 2, type = "white") => {
  if (!ctx) return null;
  const length = Math.floor(ctx.sampleRate * duration);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  if (type === "white") {
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
  } else if (type === "brown") {
    let last = 0;
    for (let i = 0; i < length; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      data[i] = last * 3.5;
    }
  } else if (type === "pink") {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < length; i++) {
      const w = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + w * 0.0555179;
      b1 = 0.99332 * b1 + w * 0.0750759;
      b2 = 0.96900 * b2 + w * 0.1538520;
      b3 = 0.86650 * b3 + w * 0.3104856;
      b4 = 0.55000 * b4 + w * 0.5329522;
      b5 = -0.7616 * b5 - w * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w * 0.5362) * 0.11;
      b6 = w * 0.115926;
    }
  }
  return buffer;
};

/**
 * Create a noise source node (looping).
 */
export const createNoiseNode = (type = "white", duration = 2) => {
  if (!ctx) return null;
  const buffer = createNoiseBuffer(duration, type);
  if (!buffer) return null;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
};
