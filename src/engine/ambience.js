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

// ── Scene-specific builders ──

const buildTemple = (ctx, dest, timers) => {
  const nodes = [];
  // Crowd murmur
  const crowd = createNoiseNode("pink", 3);
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass"; bp.frequency.value = 400; bp.Q.value = 0.4;
  const cg = ctx.createGain(); cg.gain.value = 0.2;
  const lfo = ctx.createOscillator(); lfo.type = "triangle"; lfo.frequency.value = 0.2;
  const ld = ctx.createGain(); ld.gain.value = 0.08;
  lfo.connect(ld); ld.connect(cg.gain); lfo.start(); nodes.push(lfo);
  crowd.connect(bp); bp.connect(cg); cg.connect(dest); crowd.start(); nodes.push(crowd);
  // Echoing footsteps
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 600 + Math.random() * 200;
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    const d = ctx.createDelay(0.2); d.delayTime.value = 0.12;
    const fb = ctx.createGain(); fb.gain.value = 0.25;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.08);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1000);
  }, 2000, 5000, timers);
  // Low chant drone
  const chant = ctx.createOscillator(); chant.type = "sine"; chant.frequency.value = 130;
  const chG = ctx.createGain(); chG.gain.value = 0.03;
  const vib = ctx.createOscillator(); vib.frequency.value = 0.4;
  const vd = ctx.createGain(); vd.gain.value = 2;
  vib.connect(vd); vd.connect(chant.frequency); vib.start(); nodes.push(vib);
  chant.connect(chG); chG.connect(dest); chant.start(); nodes.push(chant);
  return nodes;
};

const buildMarket = (ctx, dest, timers) => {
  const nodes = [];
  // Dense crowd
  const crowd = createNoiseNode("pink", 3);
  const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 600; bp.Q.value = 0.3;
  const cg = ctx.createGain(); cg.gain.value = 0.3;
  crowd.connect(bp); bp.connect(cg); cg.connect(dest); crowd.start(); nodes.push(crowd);
  // Vendor calls (higher pitched bursts)
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 300 + Math.random() * 400;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = f;
    g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.18);
  }, 2000, 6000, timers);
  // Metallic clinks and clattering
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 1500 + Math.random() * 1000;
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.06);
  }, 3000, 7000, timers);
  return nodes;
};

const buildInn = (ctx, dest, timers) => {
  const nodes = [];
  // Fireplace
  const fire = createNoiseNode("white", 3);
  const fbp = ctx.createBiquadFilter(); fbp.type = "bandpass"; fbp.frequency.value = 2000; fbp.Q.value = 0.5;
  const fg = ctx.createGain(); fg.gain.value = 0.12;
  const mod = createNoiseNode("brown", 2); const mg = ctx.createGain(); mg.gain.value = 0.06;
  mod.connect(mg); mg.connect(fg.gain); mod.start(); nodes.push(mod);
  fire.connect(fbp); fbp.connect(fg); fg.connect(dest); fire.start(); nodes.push(fire);
  // Muffled crowd
  const mc = createNoiseNode("pink", 3);
  const mbp = ctx.createBiquadFilter(); mbp.type = "lowpass"; mbp.frequency.value = 300;
  const mcg = ctx.createGain(); mcg.gain.value = 0.1;
  mc.connect(mbp); mbp.connect(mcg); mcg.connect(dest); mc.start(); nodes.push(mc);
  // Wood creak
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(180, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.2);
    g.gain.setValueAtTime(0.03, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.3);
  }, 6000, 15000, timers);
  return nodes;
};

const buildForest = (ctx, dest, timers) => {
  const nodes = [];
  // Rustling leaves
  const leaves = createNoiseNode("pink", 3);
  const lbp = ctx.createBiquadFilter(); lbp.type = "bandpass"; lbp.frequency.value = 1200; lbp.Q.value = 0.5;
  const lg = ctx.createGain(); lg.gain.value = 0.12;
  const llfo = ctx.createOscillator(); llfo.type = "triangle"; llfo.frequency.value = 0.15;
  const lld = ctx.createGain(); lld.gain.value = 0.06;
  llfo.connect(lld); lld.connect(lg.gain); llfo.start(); nodes.push(llfo);
  leaves.connect(lbp); lbp.connect(lg); lg.connect(dest); leaves.start(); nodes.push(leaves);
  // Bird calls
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 1800 + Math.random() * 1200;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = f;
    g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.15);
  }, 3000, 8000, timers);
  // Creaking branches
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(250, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);
    g.gain.setValueAtTime(0.02, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.4);
  }, 8000, 20000, timers);
  // Gentle wind
  const wind = createNoiseNode("brown", 3);
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 300;
  const wg = ctx.createGain(); wg.gain.value = 0.15;
  wind.connect(wlp); wlp.connect(wg); wg.connect(dest); wind.start(); nodes.push(wind);
  return nodes;
};

const buildDocks = (ctx, dest, timers) => {
  const nodes = [];
  // Water lapping
  const water = createNoiseNode("brown", 4);
  const wbp = ctx.createBiquadFilter(); wbp.type = "bandpass"; wbp.frequency.value = 300; wbp.Q.value = 0.5;
  const wg = ctx.createGain(); wg.gain.value = 0.2;
  const wlfo = ctx.createOscillator(); wlfo.type = "triangle"; wlfo.frequency.value = 0.2;
  const wld = ctx.createGain(); wld.gain.value = 0.08;
  wlfo.connect(wld); wld.connect(wg.gain); wlfo.start(); nodes.push(wlfo);
  water.connect(wbp); wbp.connect(wg); wg.connect(dest); water.start(); nodes.push(water);
  // Gulls
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(2000 + Math.random() * 500, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.2);
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.3);
  }, 4000, 10000, timers);
  // Rope creaking
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 200;
    const v = ctx.createOscillator(); v.frequency.value = 6;
    const vg = ctx.createGain(); vg.gain.value = 20;
    v.connect(vg); vg.connect(o.frequency); v.start(); v.stop(ctx.currentTime + 0.4);
    g.gain.setValueAtTime(0.025, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.4);
  }, 5000, 12000, timers);
  // Sailors murmur
  const sm = createNoiseNode("pink", 3);
  const sbp = ctx.createBiquadFilter(); sbp.type = "bandpass"; sbp.frequency.value = 500; sbp.Q.value = 0.5;
  const sg = ctx.createGain(); sg.gain.value = 0.08;
  sm.connect(sbp); sbp.connect(sg); sg.connect(dest); sm.start(); nodes.push(sm);
  return nodes;
};

const buildWell = (ctx, dest, timers) => {
  const nodes = [];
  // Crickets
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 3500 + Math.random() * 1000;
    g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.1);
  }, 2000, 5000, timers);
  // Light breeze
  const wind = createNoiseNode("brown", 3);
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 250;
  const wg = ctx.createGain(); wg.gain.value = 0.12;
  wind.connect(wlp); wlp.connect(wg); wg.connect(dest); wind.start(); nodes.push(wind);
  // Water in well
  const drip = createNoiseNode("brown", 3);
  const dbp = ctx.createBiquadFilter(); dbp.type = "bandpass"; dbp.frequency.value = 500; dbp.Q.value = 1;
  const dg = ctx.createGain(); dg.gain.value = 0.04;
  drip.connect(dbp); dbp.connect(dg); dg.connect(dest); drip.start(); nodes.push(drip);
  return nodes;
};

const buildArena = (ctx, dest, timers) => {
  const nodes = [];
  // Crowd cheering
  const crowd = createNoiseNode("pink", 3);
  const cbp = ctx.createBiquadFilter(); cbp.type = "bandpass"; cbp.frequency.value = 700; cbp.Q.value = 0.3;
  const cg = ctx.createGain(); cg.gain.value = 0.25;
  const clfo = ctx.createOscillator(); clfo.type = "triangle"; clfo.frequency.value = 0.15;
  const cld = ctx.createGain(); cld.gain.value = 0.1;
  clfo.connect(cld); cld.connect(cg.gain); clfo.start(); nodes.push(clfo);
  crowd.connect(cbp); cbp.connect(cg); cg.connect(dest); crowd.start(); nodes.push(crowd);
  // Sand/feet
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("brown", 0.08); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 800; bp.Q.value = 1;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.1);
  }, 1500, 4000, timers);
  return nodes;
};

const buildCampfire = (ctx, dest, timers) => {
  const nodes = [];
  // Fire
  const fire = createNoiseNode("white", 3);
  const fbp = ctx.createBiquadFilter(); fbp.type = "bandpass"; fbp.frequency.value = 2500; fbp.Q.value = 0.5;
  const fg = ctx.createGain(); fg.gain.value = 0.15;
  const mod = createNoiseNode("brown", 2); const mg = ctx.createGain(); mg.gain.value = 0.08;
  mod.connect(mg); mg.connect(fg.gain); mod.start(); nodes.push(mod);
  fire.connect(fbp); fbp.connect(fg); fg.connect(dest); fire.start(); nodes.push(fire);
  // Crickets
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 3800 + Math.random() * 800;
    g.gain.setValueAtTime(0.04, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.1);
  }, 3000, 6000, timers);
  // Wind
  const wind = createNoiseNode("brown", 3);
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 200;
  const wg = ctx.createGain(); wg.gain.value = 0.08;
  wind.connect(wlp); wlp.connect(wg); wg.connect(dest); wind.start(); nodes.push(wind);
  return nodes;
};

const buildLibrary = (ctx, dest, timers) => {
  const nodes = [];
  // Deep silence with faint reverberant hum
  const hum = ctx.createOscillator(); hum.type = "sine"; hum.frequency.value = 60;
  const hg = ctx.createGain(); hg.gain.value = 0.02;
  hum.connect(hg); hg.connect(dest); hum.start(); nodes.push(hum);
  // Paper rustling
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.1); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 3000; bp.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.03, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.12);
  }, 5000, 15000, timers);
  // Distant footstep echo
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 400;
    g.gain.setValueAtTime(0.02, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    const d = ctx.createDelay(0.3); d.delayTime.value = 0.15;
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.06);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1000);
  }, 4000, 10000, timers);
  return nodes;
};

const buildRiver = (ctx, dest, timers) => {
  const nodes = [];
  // Running water
  const water = createNoiseNode("pink", 4);
  const wbp = ctx.createBiquadFilter(); wbp.type = "bandpass"; wbp.frequency.value = 800; wbp.Q.value = 0.3;
  const wg = ctx.createGain(); wg.gain.value = 0.2;
  water.connect(wbp); wbp.connect(wg); wg.connect(dest); water.start(); nodes.push(water);
  // Splashing
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.08); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 2000; bp.Q.value = 1;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.05, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.1);
  }, 3000, 8000, timers);
  // Birds
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 2200 + Math.random() * 800;
    g.gain.setValueAtTime(0.03, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.12);
  }, 4000, 10000, timers);
  return nodes;
};

const buildShip = (ctx, dest, timers) => {
  const nodes = [];
  // Waves against hull
  const waves = createNoiseNode("brown", 4);
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 350;
  const wg = ctx.createGain(); wg.gain.value = 0.25;
  const wlfo = ctx.createOscillator(); wlfo.type = "triangle"; wlfo.frequency.value = 0.12;
  const wld = ctx.createGain(); wld.gain.value = 0.1;
  wlfo.connect(wld); wld.connect(wg.gain); wlfo.start(); nodes.push(wlfo);
  waves.connect(wlp); wlp.connect(wg); wg.connect(dest); waves.start(); nodes.push(waves);
  // Wood creaking
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(200, ctx.currentTime);
    o.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.3);
    g.gain.setValueAtTime(0.03, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    o.connect(g); g.connect(dest); o.start(); o.stop(ctx.currentTime + 0.4);
  }, 4000, 10000, timers);
  // Wind in sails
  const wind = createNoiseNode("pink", 3);
  const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 500; bp.Q.value = 0.3;
  const fg = ctx.createGain(); fg.gain.value = 0.1;
  wind.connect(bp); bp.connect(fg); fg.connect(dest); wind.start(); nodes.push(wind);
  return nodes;
};

const buildSacred = (ctx, dest, timers) => {
  const nodes = [];
  // Deep silence with divine hum
  [165, 167].forEach((f) => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.04;
    o.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Wind whisper
  const wind = createNoiseNode("brown", 3);
  const wlp = ctx.createBiquadFilter(); wlp.type = "lowpass"; wlp.frequency.value = 200;
  const wg = ctx.createGain(); wg.gain.value = 0.06;
  wind.connect(wlp); wlp.connect(wg); wg.connect(dest); wind.start(); nodes.push(wind);
  return nodes;
};

const buildPalace = (ctx, dest, timers) => {
  const nodes = [];
  // Echoing stone chamber
  const hum = createNoiseNode("brown", 3);
  const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 300; bp.Q.value = 0.8;
  const hg = ctx.createGain(); hg.gain.value = 0.08;
  hum.connect(bp); bp.connect(hg); hg.connect(dest); hum.start(); nodes.push(hum);
  // Footsteps on stone
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 500 + Math.random() * 200;
    g.gain.setValueAtTime(0.03, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    const d = ctx.createDelay(0.3); d.delayTime.value = 0.1;
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.06);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1000);
  }, 3000, 8000, timers);
  // Distant murmurs
  const mc = createNoiseNode("pink", 3);
  const mbp = ctx.createBiquadFilter(); mbp.type = "lowpass"; mbp.frequency.value = 250;
  const mg = ctx.createGain(); mg.gain.value = 0.06;
  mc.connect(mbp); mbp.connect(mg); mg.connect(dest); mc.start(); nodes.push(mc);
  return nodes;
};

// ── Mood → Builder Map ──

const moodBuilders = {
  road: buildRoad,
  city: buildCity,
  sea: buildSea,
  garden: buildGarden,
  underworld: buildUnderworld,
  forge: buildForge,
  labyrinth: buildLabyrinth,
  battle: buildBattle,
  olympus: buildOlympus,
  temple: buildTemple,
  market: buildMarket,
  inn: buildInn,
  forest: buildForest,
  docks: buildDocks,
  well: buildWell,
  arena: buildArena,
  campfire: buildCampfire,
  library: buildLibrary,
  river: buildRiver,
  ship: buildShip,
  sacred: buildSacred,
  palace: buildPalace,
};

// Chapter default moods (fallback when scene has no mood)
const CHAPTER_MOODS = {
  1: "road", 2: "road", 3: "city", 4: "sea", 5: "garden",
  6: "underworld", 7: "forge", 8: "labyrinth", 9: "battle", 10: "olympus",
};

// ── Public API ──

/**
 * Start ambience for a given mood. If mood is null, uses chapter default.
 * Crossfades between moods automatically.
 */
export const startAmbience = (chapter, mood) => {
  const ctx = getCtx();
  if (!ctx) return;
  const activeMood = mood || CHAPTER_MOODS[chapter] || "road";
  if (current && current.mood === activeMood) return;

  const master = getMaster();
  const builder = moodBuilders[activeMood] || buildRoad;

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

  current = { mood: activeMood, nodes, gain, timers };
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
