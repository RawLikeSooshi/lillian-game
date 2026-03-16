/**
 * Chapter Ambient Soundscapes
 * Continuous looping synthesized ambience per chapter.
 * Crossfades between chapters automatically.
 */

import { getCtx, getMaster, createNoiseNode } from "./audio";

let current = null; // { chapter, nodes: [], gain, timers: [] }
const FADE = 2.0;
const AMBIENCE_VOLUME = 0.12;

/**
 * Stop all nodes and timers for an ambience set.
 */
const cleanup = (amb) => {
  if (!amb) return;
  amb.timers.forEach(t => clearTimeout(t));
  amb.timers = [];
  amb.nodes.forEach(n => { try { n.stop(); } catch (_) {} try { n.disconnect(); } catch (_) {} });
  amb.nodes = [];
  try { amb.gain.disconnect(); } catch (_) {}
};

/**
 * Create a scheduled random event (chirps, drips, hammer hits, etc.)
 * Returns a reference that can be cleared.
 */
const scheduleRandom = (fn, minMs, maxMs, timers) => {
  const tick = () => {
    fn();
    const next = minMs + Math.random() * (maxMs - minMs);
    const t = setTimeout(tick, next);
    timers.push(t);
  };
  const t = setTimeout(tick, minMs + Math.random() * (maxMs - minMs));
  timers.push(t);
};

// ── Soundscape Builders ──
// Each returns { nodes: AudioNode[], timers: number[] }
// All nodes should be connected to the provided gainNode.

const buildRoad = (ctx, dest, timers) => {
  const nodes = [];

  // Wind
  const wind = createNoiseNode("brown", 3);
  const windBP = ctx.createBiquadFilter();
  windBP.type = "bandpass";
  windBP.frequency.value = 400;
  windBP.Q.value = 0.5;
  const windG = ctx.createGain();
  windG.gain.value = 0.4;
  wind.connect(windBP);
  windBP.connect(windG);
  windG.connect(dest);
  wind.start();
  nodes.push(wind);

  // Earth hum
  const hum = ctx.createOscillator();
  hum.type = "sine";
  hum.frequency.value = 55;
  const humG = ctx.createGain();
  humG.gain.value = 0.04;
  hum.connect(humG);
  humG.connect(dest);
  hum.start();
  nodes.push(hum);

  // Crickets
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 3800 + Math.random() * 800;
    g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g);
    g.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.1);
  }, 3000, 7000, timers);

  return nodes;
};

const buildCity = (ctx, dest, timers) => {
  const nodes = [];

  // Crowd murmur
  const crowd = createNoiseNode("pink", 3);
  const crowdBP = ctx.createBiquadFilter();
  crowdBP.type = "bandpass";
  crowdBP.frequency.value = 500;
  crowdBP.Q.value = 0.3;
  const crowdG = ctx.createGain();
  crowdG.gain.value = 0.3;
  // Slow amplitude modulation
  const lfo = ctx.createOscillator();
  lfo.type = "triangle";
  lfo.frequency.value = 0.3;
  const lfoG = ctx.createGain();
  lfoG.gain.value = 0.1;
  lfo.connect(lfoG);
  lfoG.connect(crowdG.gain);
  lfo.start();
  nodes.push(lfo);
  crowd.connect(crowdBP);
  crowdBP.connect(crowdG);
  crowdG.connect(dest);
  crowd.start();
  nodes.push(crowd);

  // Metallic clinks
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 1200 + Math.random() * 800;
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    o.connect(g);
    g.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.06);
  }, 4000, 10000, timers);

  return nodes;
};

const buildSea = (ctx, dest, timers) => {
  const nodes = [];

  // Ocean waves
  const ocean = createNoiseNode("brown", 4);
  const oceanLP = ctx.createBiquadFilter();
  oceanLP.type = "lowpass";
  oceanLP.frequency.value = 400;
  const oceanG = ctx.createGain();
  oceanG.gain.value = 0.35;
  // Wave swell LFO
  const waveLFO = ctx.createOscillator();
  waveLFO.type = "triangle";
  waveLFO.frequency.value = 0.08;
  const waveDepth = ctx.createGain();
  waveDepth.gain.value = 0.15;
  waveLFO.connect(waveDepth);
  waveDepth.connect(oceanG.gain);
  waveLFO.start();
  nodes.push(waveLFO);
  ocean.connect(oceanLP);
  oceanLP.connect(oceanG);
  oceanG.connect(dest);
  ocean.start();
  nodes.push(ocean);

  // Spray
  const spray = createNoiseNode("white", 3);
  const sprayBP = ctx.createBiquadFilter();
  sprayBP.type = "bandpass";
  sprayBP.frequency.value = 3000;
  sprayBP.Q.value = 0.5;
  const sprayG = ctx.createGain();
  sprayG.gain.value = 0.08;
  spray.connect(sprayBP);
  sprayBP.connect(sprayG);
  sprayG.connect(dest);
  spray.start();
  nodes.push(spray);

  // Deep
  const deep = ctx.createOscillator();
  deep.type = "sine";
  deep.frequency.value = 45;
  const deepG = ctx.createGain();
  deepG.gain.value = 0.05;
  deep.connect(deepG);
  deepG.connect(dest);
  deep.start();
  nodes.push(deep);

  return nodes;
};

const buildGarden = (ctx, dest, timers) => {
  const nodes = [];

  // Gentle breeze
  const breeze = createNoiseNode("pink", 3);
  const breezeLP = ctx.createBiquadFilter();
  breezeLP.type = "lowpass";
  breezeLP.frequency.value = 500;
  const breezeG = ctx.createGain();
  breezeG.gain.value = 0.15;
  breeze.connect(breezeLP);
  breezeLP.connect(breezeG);
  breezeG.connect(dest);
  breeze.start();
  nodes.push(breeze);

  // Mystic hum
  const hum = ctx.createOscillator();
  hum.type = "sine";
  hum.frequency.value = 82;
  const humG = ctx.createGain();
  humG.gain.value = 0.04;
  hum.connect(humG);
  humG.connect(dest);
  hum.start();
  nodes.push(hum);

  // Shimmer
  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = 6000;
  const shimG = ctx.createGain();
  shimG.gain.value = 0.015;
  const shimLFO = ctx.createOscillator();
  shimLFO.frequency.value = 1;
  const shimDepth = ctx.createGain();
  shimDepth.gain.value = 0.01;
  shimLFO.connect(shimDepth);
  shimDepth.connect(shimG.gain);
  shimLFO.start();
  nodes.push(shimLFO);
  shimmer.connect(shimG);
  shimG.connect(dest);
  shimmer.start();
  nodes.push(shimmer);

  // Bird chirps
  scheduleRandom(() => {
    if (!getCtx()) return;
    const freq = Math.random() > 0.5 ? 2000 : 2500;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g);
    g.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.1);
  }, 4000, 9000, timers);

  return nodes;
};

const buildUnderworld = (ctx, dest, timers) => {
  const nodes = [];

  // Deep rumble
  const rumble = createNoiseNode("brown", 4);
  const rumbleLP = ctx.createBiquadFilter();
  rumbleLP.type = "lowpass";
  rumbleLP.frequency.value = 150;
  const rumbleG = ctx.createGain();
  rumbleG.gain.value = 0.35;
  rumble.connect(rumbleLP);
  rumbleLP.connect(rumbleG);
  rumbleG.connect(dest);
  rumble.start();
  nodes.push(rumble);

  // Eerie tone with vibrato
  const eerie = ctx.createOscillator();
  eerie.type = "sine";
  eerie.frequency.value = 110;
  const eerieG = ctx.createGain();
  eerieG.gain.value = 0.06;
  const vib = ctx.createOscillator();
  vib.frequency.value = 0.5;
  const vibG = ctx.createGain();
  vibG.gain.value = 5;
  vib.connect(vibG);
  vibG.connect(eerie.frequency);
  vib.start();
  nodes.push(vib);
  eerie.connect(eerieG);
  eerieG.connect(dest);
  eerie.start();
  nodes.push(eerie);

  // Ghostly whisper
  const ghost = createNoiseNode("white", 3);
  const ghostBP = ctx.createBiquadFilter();
  ghostBP.type = "bandpass";
  ghostBP.frequency.value = 1200;
  ghostBP.Q.value = 2;
  const ghostG = ctx.createGain();
  ghostG.gain.value = 0.04;
  const ghostLFO = ctx.createOscillator();
  ghostLFO.frequency.value = 0.125;
  const ghostDepth = ctx.createGain();
  ghostDepth.gain.value = 0.03;
  ghostLFO.connect(ghostDepth);
  ghostDepth.connect(ghostG.gain);
  ghostLFO.start();
  nodes.push(ghostLFO);
  ghost.connect(ghostBP);
  ghostBP.connect(ghostG);
  ghostG.connect(dest);
  ghost.start();
  nodes.push(ghost);

  // Dripping
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 800;
    g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    // Simple delay for echo
    const delay = ctx.createDelay(0.3);
    delay.delayTime.value = 0.15;
    const fb = ctx.createGain();
    fb.gain.value = 0.3;
    o.connect(g);
    g.connect(dest);
    g.connect(delay);
    delay.connect(fb);
    fb.connect(delay);
    fb.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.08);
    setTimeout(() => { try { delay.disconnect(); fb.disconnect(); } catch (_) {} }, 1500);
  }, 5000, 12000, timers);

  return nodes;
};

const buildForge = (ctx, dest, timers) => {
  const nodes = [];

  // Fire crackling
  const fire = createNoiseNode("white", 3);
  const fireBP = ctx.createBiquadFilter();
  fireBP.type = "bandpass";
  fireBP.frequency.value = 2500;
  fireBP.Q.value = 0.5;
  const fireG = ctx.createGain();
  fireG.gain.value = 0.15;
  // Irregular modulation via noise
  const modNoise = createNoiseNode("brown", 2);
  const modG = ctx.createGain();
  modG.gain.value = 0.1;
  modNoise.connect(modG);
  modG.connect(fireG.gain);
  modNoise.start();
  nodes.push(modNoise);
  fire.connect(fireBP);
  fireBP.connect(fireG);
  fireG.connect(dest);
  fire.start();
  nodes.push(fire);

  // Bellows breathing
  const bellows = ctx.createOscillator();
  bellows.type = "sawtooth";
  bellows.frequency.value = 60;
  const bellLP = ctx.createBiquadFilter();
  bellLP.type = "lowpass";
  bellLP.frequency.value = 200;
  const bellG = ctx.createGain();
  bellG.gain.value = 0.06;
  const bellLFO = ctx.createOscillator();
  bellLFO.type = "triangle";
  bellLFO.frequency.value = 0.17;
  const bellDepth = ctx.createGain();
  bellDepth.gain.value = 0.04;
  bellLFO.connect(bellDepth);
  bellDepth.connect(bellG.gain);
  bellLFO.start();
  nodes.push(bellLFO);
  bellows.connect(bellLP);
  bellLP.connect(bellG);
  bellG.connect(dest);
  bellows.start();
  nodes.push(bellows);

  // Hammer strikes
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(200, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.1);
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    o.connect(g);
    g.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.2);
  }, 6000, 15000, timers);

  return nodes;
};

const buildLabyrinth = (ctx, dest, timers) => {
  const nodes = [];

  // Stone echo chamber
  const stone = createNoiseNode("brown", 3);
  const stoneBP = ctx.createBiquadFilter();
  stoneBP.type = "bandpass";
  stoneBP.frequency.value = 400;
  stoneBP.Q.value = 1;
  const stoneG = ctx.createGain();
  stoneG.gain.value = 0.15;
  // Echo
  const delay = ctx.createDelay(0.5);
  delay.delayTime.value = 0.2;
  const fb = ctx.createGain();
  fb.gain.value = 0.3;
  stone.connect(stoneBP);
  stoneBP.connect(stoneG);
  stoneG.connect(dest);
  stoneG.connect(delay);
  delay.connect(fb);
  fb.connect(delay);
  fb.connect(dest);
  stone.start();
  nodes.push(stone);

  // Eerie wind through passages
  const wind = createNoiseNode("pink", 4);
  const windBP = ctx.createBiquadFilter();
  windBP.type = "bandpass";
  windBP.Q.value = 1;
  // Sweep center frequency
  const sweepLFO = ctx.createOscillator();
  sweepLFO.frequency.value = 0.1;
  const sweepG = ctx.createGain();
  sweepG.gain.value = 250;
  sweepLFO.connect(sweepG);
  sweepG.connect(windBP.frequency);
  windBP.frequency.value = 550;
  sweepLFO.start();
  nodes.push(sweepLFO);
  const windG = ctx.createGain();
  windG.gain.value = 0.06;
  wind.connect(windBP);
  windBP.connect(windG);
  windG.connect(dest);
  wind.start();
  nodes.push(wind);

  return nodes;
};

const buildBattle = (ctx, dest, timers) => {
  const nodes = [];

  // Battle din
  const din = createNoiseNode("pink", 3);
  const dinBP = ctx.createBiquadFilter();
  dinBP.type = "bandpass";
  dinBP.frequency.value = 600;
  dinBP.Q.value = 0.3;
  const dinG = ctx.createGain();
  dinG.gain.value = 0.25;
  din.connect(dinBP);
  dinBP.connect(dinG);
  dinG.connect(dest);
  din.start();
  nodes.push(din);

  // Tension tone
  const tension = ctx.createOscillator();
  tension.type = "sine";
  tension.frequency.value = 330;
  const tensG = ctx.createGain();
  tensG.gain.value = 0.03;
  const tensLFO = ctx.createOscillator();
  tensLFO.frequency.value = 4;
  const tensDepth = ctx.createGain();
  tensDepth.gain.value = 0.02;
  tensLFO.connect(tensDepth);
  tensDepth.connect(tensG.gain);
  tensLFO.start();
  nodes.push(tensLFO);
  tension.connect(tensG);
  tensG.connect(dest);
  tension.start();
  nodes.push(tension);

  // Distant impacts
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = createNoiseNode("brown", 0.3);
    if (!o) return;
    const lp = ctx.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    o.connect(lp);
    lp.connect(g);
    g.connect(dest);
    o.start();
    o.stop(ctx.currentTime + 0.3);
  }, 3000, 8000, timers);

  return nodes;
};

const buildOlympus = (ctx, dest, timers) => {
  const nodes = [];

  // Ethereal choir — beating frequencies
  [220, 222, 224].forEach((f) => {
    const o = ctx.createOscillator();
    o.type = "sine";
    o.frequency.value = f;
    const g = ctx.createGain();
    g.gain.value = 0.06;
    o.connect(g);
    g.connect(dest);
    o.start();
    nodes.push(o);
  });

  // High shimmer
  const shimmer = ctx.createOscillator();
  shimmer.type = "sine";
  shimmer.frequency.value = 4000;
  const shimG = ctx.createGain();
  shimG.gain.value = 0.015;
  const shimLFO = ctx.createOscillator();
  shimLFO.frequency.value = 0.8;
  const shimDepth = ctx.createGain();
  shimDepth.gain.value = 0.01;
  shimLFO.connect(shimDepth);
  shimDepth.connect(shimG.gain);
  shimLFO.start();
  nodes.push(shimLFO);
  shimmer.connect(shimG);
  shimG.connect(dest);
  shimmer.start();
  nodes.push(shimmer);

  // Celestial wind
  const celestial = createNoiseNode("white", 3);
  const celHP = ctx.createBiquadFilter();
  celHP.type = "highpass";
  celHP.frequency.value = 3000;
  const celG = ctx.createGain();
  celG.gain.value = 0.025;
  celestial.connect(celHP);
  celHP.connect(celG);
  celG.connect(dest);
  celestial.start();
  nodes.push(celestial);

  // Divine hum
  const hum = ctx.createOscillator();
  hum.type = "triangle";
  hum.frequency.value = 55;
  const humG = ctx.createGain();
  humG.gain.value = 0.04;
  hum.connect(humG);
  humG.connect(dest);
  hum.start();
  nodes.push(hum);

  return nodes;
};

// ── Chapter → Builder Map ──

const builders = {
  1: buildRoad,
  2: buildRoad,    // slightly different via random events
  3: buildCity,
  4: buildSea,
  5: buildGarden,
  6: buildUnderworld,
  7: buildForge,
  8: buildLabyrinth,
  9: buildBattle,
  10: buildOlympus,
};

// ── Public API ──

export const startAmbience = (chapter) => {
  const ctx = getCtx();
  if (!ctx) return;
  if (current && current.chapter === chapter) return;

  const master = getMaster();
  const builder = builders[chapter] || buildRoad;

  // Create new
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(AMBIENCE_VOLUME, ctx.currentTime + FADE);
  gain.connect(master);

  const timers = [];
  const nodes = builder(ctx, gain, timers);

  // Fade out old
  if (current) {
    const old = current;
    old.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + FADE);
    setTimeout(() => cleanup(old), FADE * 1000 + 200);
  }

  current = { chapter, nodes, gain, timers };
};

export const stopAmbience = () => {
  const ctx = getCtx();
  if (!current) return;
  if (ctx) {
    current.gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
    const old = current;
    current = null;
    setTimeout(() => cleanup(old), 700);
  } else {
    cleanup(current);
    current = null;
  }
};

export const setAmbienceVolume = (v) => {
  if (current && current.gain) {
    const ctx = getCtx();
    if (ctx) current.gain.gain.linearRampToValueAtTime(v, ctx.currentTime + 0.1);
  }
};
