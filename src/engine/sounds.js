/**
 * Synthesized Sound Effects
 * All one-shot sounds using Web Audio API. No audio files.
 * Every function checks getCtx() first — silent no-op if audio not initialized.
 */

import { getCtx, getMaster, createNoiseBuffer } from "./audio";

// ── Helpers ──

const now = () => getCtx()?.currentTime || 0;

const ping = (freq, duration = 0.04, type = "sine", gain = 0.3) => {
  const ctx = getCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(gain, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + duration);
  osc.connect(g);
  g.connect(getMaster());
  osc.start();
  osc.stop(now() + duration + 0.01);
};

const noiseBurst = (duration = 0.08, filterFreq = 2000, filterQ = 1, gain = 0.2, type = "white") => {
  const ctx = getCtx();
  if (!ctx) return;
  const buffer = createNoiseBuffer(duration, type);
  if (!buffer) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = filterFreq;
  filter.Q.value = filterQ;
  const g = ctx.createGain();
  g.gain.setValueAtTime(gain, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + duration);
  src.connect(filter);
  filter.connect(g);
  g.connect(getMaster());
  src.start();
  src.stop(now() + duration + 0.01);
};

// ── UI Sounds ──

export const playClick = () => {
  ping(800, 0.04, "sine", 0.15);
  ping(400, 0.06, "sine", 0.06);
};

export const playChoiceSelect = () => {
  const ctx = getCtx();
  if (!ctx) return;
  ping(440, 0.08, "triangle", 0.2);
  setTimeout(() => ping(660, 0.1, "triangle", 0.18), 50);
};

// ── Dice Sounds ──

export const playDiceRollStart = () => {
  const ctx = getCtx();
  if (!ctx) return;
  let count = 0;
  const maxCount = 12;
  const rattle = () => {
    if (count >= maxCount) return;
    noiseBurst(0.025, 2000 + Math.random() * 1000, 2, 0.12, "brown");
    count++;
    setTimeout(rattle, 50 + count * 15);
  };
  rattle();
};

export const playDiceLand = (value) => {
  const ctx = getCtx();
  if (!ctx) return;
  // Thud
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(120, now());
  osc.frequency.exponentialRampToValueAtTime(60, now() + 0.15);
  g.gain.setValueAtTime(0.3, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + 0.2);
  osc.connect(g);
  g.connect(getMaster());
  osc.start();
  osc.stop(now() + 0.25);

  if (value === 20) {
    // Golden shimmer chord
    setTimeout(() => {
      [261.6, 329.6, 392, 523.3].forEach((f, i) => {
        const o = ctx.createOscillator();
        const gn = ctx.createGain();
        o.type = "triangle";
        o.frequency.value = f + (Math.random() * 2 - 1);
        gn.gain.setValueAtTime(0.12, now());
        gn.gain.exponentialRampToValueAtTime(0.001, now() + 0.8);
        o.connect(gn);
        gn.connect(getMaster());
        o.start(now() + i * 0.03);
        o.stop(now() + 1);
      });
    }, 100);
  } else if (value === 1) {
    // Deep rumble
    const o = ctx.createOscillator();
    const gn = ctx.createGain();
    o.type = "sawtooth";
    o.frequency.value = 40;
    gn.gain.setValueAtTime(0.2, now());
    gn.gain.exponentialRampToValueAtTime(0.001, now() + 0.5);
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 120;
    o.connect(lp);
    lp.connect(gn);
    gn.connect(getMaster());
    o.start();
    o.stop(now() + 0.6);
  }
};

// ── Timer Sounds ──

export const playTimerTick = () => ping(1200, 0.02, "sine", 0.08);

export const playTimerUrgent = () => {
  ping(1800, 0.03, "sine", 0.12);
  setTimeout(() => ping(1800, 0.03, "sine", 0.1), 80);
};

export const playTimerExpire = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(800, now());
  osc.frequency.exponentialRampToValueAtTime(200, now() + 0.3);
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 1500;
  g.gain.setValueAtTime(0.15, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + 0.4);
  osc.connect(lp);
  lp.connect(g);
  g.connect(getMaster());
  osc.start();
  osc.stop(now() + 0.5);
};

// ── Card / Prophecy ──

export const playCardFlip = () => {
  noiseBurst(0.08, 3000, 3, 0.12);
  setTimeout(() => ping(520, 0.2, "sine", 0.1), 60);
};

// ── Combat ──

export const playHit = () => {
  noiseBurst(0.06, 1500, 2, 0.18);
  ping(200, 0.1, "sine", 0.2);
};

export const playMiss = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const buffer = createNoiseBuffer(0.3, "white");
  if (!buffer) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.setValueAtTime(4000, now());
  bp.frequency.exponentialRampToValueAtTime(500, now() + 0.3);
  bp.Q.value = 2;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.12, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + 0.3);
  src.connect(bp);
  bp.connect(g);
  g.connect(getMaster());
  src.start();
  src.stop(now() + 0.35);
};

export const playCrit = () => {
  noiseBurst(0.1, 2000, 1, 0.15);
  const ctx = getCtx();
  if (!ctx) return;
  setTimeout(() => {
    [261.6, 329.6, 392, 523.3, 659.3].forEach((f, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.value = f + (Math.random() * 3 - 1.5);
      g.gain.setValueAtTime(0.1, now());
      g.gain.exponentialRampToValueAtTime(0.001, now() + 1.5);
      o.connect(g);
      g.connect(getMaster());
      o.start(now() + i * 0.06);
      o.stop(now() + 1.8);
    });
  }, 80);
};

// ── Stats / Items / Powers ──

export const playStatChange = (positive) => {
  const ctx = getCtx();
  if (!ctx) return;
  const freqs = positive ? [330, 415, 523] : [330, 311, 294];
  freqs.forEach((f, i) => {
    setTimeout(() => ping(f, 0.1, "sine", 0.15), i * 70);
  });
};

export const playItemGain = () => {
  ping(1046, 0.25, "sine", 0.15);
  ping(1568, 0.25, "sine", 0.1);
  noiseBurst(0.1, 6000, 1, 0.06);
};

export const playPowerUnlock = () => {
  const ctx = getCtx();
  if (!ctx) return;
  // Low drone fade-in
  const drone = ctx.createOscillator();
  const dg = ctx.createGain();
  drone.type = "sine";
  drone.frequency.value = 80;
  dg.gain.setValueAtTime(0, now());
  dg.gain.linearRampToValueAtTime(0.1, now() + 0.5);
  dg.gain.linearRampToValueAtTime(0.001, now() + 2.5);
  drone.connect(dg);
  dg.connect(getMaster());
  drone.start();
  drone.stop(now() + 3);

  // Ascending chord
  [130.8, 196, 261.6, 329.6, 392].forEach((f, i) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "triangle";
    o.frequency.value = f;
    // Slow vibrato
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 3;
    lfoGain.gain.value = 3;
    lfo.connect(lfoGain);
    lfoGain.connect(o.frequency);
    lfo.start(now() + 0.4 + i * 0.1);
    lfo.stop(now() + 3);

    g.gain.setValueAtTime(0, now());
    g.gain.linearRampToValueAtTime(0.08, now() + 0.5 + i * 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, now() + 2.5);
    o.connect(g);
    g.connect(getMaster());
    o.start(now() + 0.4 + i * 0.1);
    o.stop(now() + 3);
  });
};

// ── Transition ──

export const playTransition = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const buffer = createNoiseBuffer(2, "brown");
  if (!buffer) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 400;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now());
  g.gain.linearRampToValueAtTime(0.08, now() + 1);
  g.gain.linearRampToValueAtTime(0, now() + 2);
  src.connect(lp);
  lp.connect(g);
  g.connect(getMaster());
  src.start();
  src.stop(now() + 2.1);
};

// ── Oath / Sacrifice ──

export const playOathSwear = () => {
  const ctx = getCtx();
  if (!ctx) return;
  [110, 165].forEach((f) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "square";
    o.frequency.value = f;
    // Tremolo
    const lfo = ctx.createOscillator();
    const lg = ctx.createGain();
    lfo.frequency.value = 8;
    lg.gain.value = 0.3;
    lfo.connect(lg);
    lg.connect(g.gain);
    lfo.start();
    lfo.stop(now() + 1.5);

    g.gain.setValueAtTime(0.1, now());
    g.gain.exponentialRampToValueAtTime(0.001, now() + 1.5);
    o.connect(g);
    g.connect(getMaster());
    o.start();
    o.stop(now() + 1.6);
  });
};

export const playSacrifice = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "sine";
  o.frequency.setValueAtTime(440, now());
  o.frequency.exponentialRampToValueAtTime(110, now() + 1);
  g.gain.setValueAtTime(0.15, now());
  g.gain.exponentialRampToValueAtTime(0.001, now() + 1.2);
  o.connect(g);
  g.connect(getMaster());
  o.start();
  o.stop(now() + 1.3);
};

// ── Puzzle ──

export const playPuzzleSolve = () => {
  [261.6, 329.6, 392, 523.3].forEach((f, i) => {
    setTimeout(() => ping(f, 0.12, "sine", 0.15), i * 100);
  });
};

export const playPuzzleFail = () => {
  ping(200, 0.15, "square", 0.1);
  setTimeout(() => ping(180, 0.15, "square", 0.1), 180);
};

// ── Thunder (narrative moment) ──

export const playThunder = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const buffer = createNoiseBuffer(1.5, "brown");
  if (!buffer) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 200;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now());
  g.gain.linearRampToValueAtTime(0.25, now() + 0.05);
  g.gain.exponentialRampToValueAtTime(0.001, now() + 1.5);
  src.connect(lp);
  lp.connect(g);
  g.connect(getMaster());
  src.start();
  src.stop(now() + 1.6);
  // Bright crack
  noiseBurst(0.03, 5000, 1, 0.2);
};

// ── Fire (narrative moment) ──

export const playFire = () => {
  const ctx = getCtx();
  if (!ctx) return;
  const buffer = createNoiseBuffer(2, "white");
  if (!buffer) return;
  const src = ctx.createBufferSource();
  src.buffer = buffer;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.value = 2000;
  bp.Q.value = 0.5;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0, now());
  g.gain.linearRampToValueAtTime(0.1, now() + 0.3);
  g.gain.linearRampToValueAtTime(0, now() + 2);
  src.connect(bp);
  bp.connect(g);
  g.connect(getMaster());
  src.start();
  src.stop(now() + 2.1);
};

// ── Divine glow (narrative moment) ──

export const playDivineGlow = () => {
  const ctx = getCtx();
  if (!ctx) return;
  [220, 222, 224].forEach((f) => {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = f;
    g.gain.setValueAtTime(0, now());
    g.gain.linearRampToValueAtTime(0.06, now() + 0.5);
    g.gain.exponentialRampToValueAtTime(0.001, now() + 2);
    o.connect(g);
    g.connect(getMaster());
    o.start();
    o.stop(now() + 2.2);
  });
};
