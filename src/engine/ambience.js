/**
 * Scene Ambient Soundscapes
 * Synthesized ambience per mood. Focused on tonal/musical elements
 * that sound distinctive on phone speakers, with noise only as subtle texture.
 */

import { getCtx, getMaster, createNoiseNode } from "./audio";

let current = null; // { mood, nodes: [], gain, timers: [] }
const FADE = 2.0;
const AMBIENCE_VOLUME = 0.15;

const cleanup = (amb) => {
  if (!amb) return;
  amb.timers.forEach(t => clearTimeout(t));
  amb.timers = [];
  amb.nodes.forEach(n => { try { n.stop(); } catch (_) {} try { n.disconnect(); } catch (_) {} });
  amb.nodes = [];
  try { amb.gain.disconnect(); } catch (_) {}
};

const scheduleRandom = (fn, minMs, maxMs, timers) => {
  const tick = () => {
    fn();
    const t = setTimeout(tick, minMs + Math.random() * (maxMs - minMs));
    timers.push(t);
  };
  const t = setTimeout(tick, minMs + Math.random() * (maxMs - minMs));
  timers.push(t);
};

// Helper: play a short tonal blip (bird, clink, footstep, etc.)
const blip = (ctx, dest, freq, dur, vol, type = "sine") => {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  o.connect(g); g.connect(dest);
  o.start(); o.stop(ctx.currentTime + dur + 0.01);
};

// Helper: chirp with frequency sweep
const chirp = (ctx, dest, startFreq, endFreq, dur, vol, type = "sine") => {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(startFreq, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + dur);
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  o.connect(g); g.connect(dest);
  o.start(); o.stop(ctx.currentTime + dur + 0.01);
};

// ── Soundscape Builders ──

const buildRoad = (ctx, dest, timers) => {
  const nodes = [];
  // Subtle wind texture (very quiet)
  const wind = createNoiseNode("brown", 3);
  const wBP = ctx.createBiquadFilter(); wBP.type = "lowpass"; wBP.frequency.value = 300;
  const wG = ctx.createGain(); wG.gain.value = 0.08;
  wind.connect(wBP); wBP.connect(wG); wG.connect(dest); wind.start(); nodes.push(wind);
  // Warm drone (feels like sun/heat)
  const drone = ctx.createOscillator(); drone.type = "sine"; drone.frequency.value = 110;
  const dG = ctx.createGain(); dG.gain.value = 0.06;
  drone.connect(dG); dG.connect(dest); drone.start(); nodes.push(drone);
  // Crickets — loud and frequent, the signature sound
  scheduleRandom(() => {
    if (!getCtx()) return;
    // Rapid chirp: 2-3 quick blips
    const f = 3500 + Math.random() * 1500;
    for (let i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
      setTimeout(() => blip(ctx, dest, f + i * 200, 0.06, 0.15), i * 70);
    }
  }, 1500, 4000, timers);
  // Occasional bird
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 2000 + Math.random() * 1000, 1500 + Math.random() * 500, 0.2, 0.12);
  }, 5000, 12000, timers);
  return nodes;
};

const buildCity = (ctx, dest, timers) => {
  const nodes = [];
  // Low crowd hum (oscillator, not noise)
  const hum1 = ctx.createOscillator(); hum1.type = "sawtooth"; hum1.frequency.value = 120;
  const hLP = ctx.createBiquadFilter(); hLP.type = "lowpass"; hLP.frequency.value = 200;
  const hG = ctx.createGain(); hG.gain.value = 0.04;
  const hLFO = ctx.createOscillator(); hLFO.frequency.value = 0.3;
  const hLD = ctx.createGain(); hLD.gain.value = 0.02;
  hLFO.connect(hLD); hLD.connect(hG.gain); hLFO.start(); nodes.push(hLFO);
  hum1.connect(hLP); hLP.connect(hG); hG.connect(dest); hum1.start(); nodes.push(hum1);
  // Voices — short melodic fragments
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 250 + Math.random() * 300;
    chirp(ctx, dest, f, f * (0.8 + Math.random() * 0.4), 0.15, 0.1, "triangle");
  }, 1500, 4000, timers);
  // Metallic clinks — clear and bright
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 2000 + Math.random() * 1500, 0.05, 0.12);
  }, 2000, 5000, timers);
  // Footsteps on stone
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 300 + Math.random() * 200, 0.04, 0.08, "triangle");
  }, 800, 2000, timers);
  return nodes;
};

const buildSea = (ctx, dest, timers) => {
  const nodes = [];
  // Wave swells — brown noise with heavy LFO modulation
  const wave = createNoiseNode("brown", 4);
  const wLP = ctx.createBiquadFilter(); wLP.type = "lowpass"; wLP.frequency.value = 300;
  const wG = ctx.createGain(); wG.gain.value = 0.0;
  const wLFO = ctx.createOscillator(); wLFO.type = "sine"; wLFO.frequency.value = 0.08;
  const wLD = ctx.createGain(); wLD.gain.value = 0.12;
  wLFO.connect(wLD); wLD.connect(wG.gain); wLFO.start(); nodes.push(wLFO);
  wave.connect(wLP); wLP.connect(wG); wG.connect(dest); wave.start(); nodes.push(wave);
  // Deep tonal boom (wave hits)
  const deep = ctx.createOscillator(); deep.type = "sine"; deep.frequency.value = 50;
  const dG = ctx.createGain(); dG.gain.value = 0.06;
  const dLFO = ctx.createOscillator(); dLFO.type = "sine"; dLFO.frequency.value = 0.06;
  const dLD = ctx.createGain(); dLD.gain.value = 0.04;
  dLFO.connect(dLD); dLD.connect(dG.gain); dLFO.start(); nodes.push(dLFO);
  deep.connect(dG); dG.connect(dest); deep.start(); nodes.push(deep);
  // Gulls — distinctive swooping calls
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 2200 + Math.random() * 600, 1400 + Math.random() * 300, 0.3, 0.14);
    setTimeout(() => chirp(ctx, dest, 2000 + Math.random() * 400, 1600, 0.2, 0.1), 350);
  }, 4000, 9000, timers);
  return nodes;
};

const buildGarden = (ctx, dest, timers) => {
  const nodes = [];
  // Magical shimmer — beating sine tones
  [330, 332, 495, 497].forEach(f => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.03;
    o.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Bird chirps — frequent and musical
  scheduleRandom(() => {
    if (!getCtx()) return;
    const base = 1800 + Math.random() * 1500;
    chirp(ctx, dest, base, base * 1.3, 0.1, 0.12);
    setTimeout(() => chirp(ctx, dest, base * 1.2, base * 0.9, 0.08, 0.1), 130);
  }, 2000, 5000, timers);
  // Gentle wind chime
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1000 + Math.random() * 2000, 0.8, 0.08);
  }, 3000, 8000, timers);
  return nodes;
};

const buildUnderworld = (ctx, dest, timers) => {
  const nodes = [];
  // Deep ominous drone with vibrato
  const drone = ctx.createOscillator(); drone.type = "sine"; drone.frequency.value = 55;
  const dG = ctx.createGain(); dG.gain.value = 0.1;
  const vib = ctx.createOscillator(); vib.frequency.value = 0.3;
  const vG = ctx.createGain(); vG.gain.value = 3;
  vib.connect(vG); vG.connect(drone.frequency); vib.start(); nodes.push(vib);
  drone.connect(dG); dG.connect(dest); drone.start(); nodes.push(drone);
  // Dissonant interval
  const dis = ctx.createOscillator(); dis.type = "sine"; dis.frequency.value = 82;
  const disG = ctx.createGain(); disG.gain.value = 0.04;
  dis.connect(disG); disG.connect(dest); dis.start(); nodes.push(dis);
  // Water drips with echo
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "sine"; o.frequency.value = 800 + Math.random() * 400;
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    const d = ctx.createDelay(0.3); d.delayTime.value = 0.2;
    const fb = ctx.createGain(); fb.gain.value = 0.35;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.1);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 2000);
  }, 2000, 6000, timers);
  // Ghostly moan — slow pitch sweep
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 200, 160, 1.5, 0.06);
  }, 8000, 15000, timers);
  return nodes;
};

const buildForge = (ctx, dest, timers) => {
  const nodes = [];
  // Fire crackle — bursts of noise, not continuous
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.05); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 3000; bp.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.05);
  }, 200, 800, timers);
  // Bellows breathing — slow oscillating low tone
  const bell = ctx.createOscillator(); bell.type = "sawtooth"; bell.frequency.value = 50;
  const bLP = ctx.createBiquadFilter(); bLP.type = "lowpass"; bLP.frequency.value = 120;
  const bG = ctx.createGain(); bG.gain.value = 0.0;
  const bLFO = ctx.createOscillator(); bLFO.type = "sine"; bLFO.frequency.value = 0.15;
  const bLD = ctx.createGain(); bLD.gain.value = 0.06;
  bLFO.connect(bLD); bLD.connect(bG.gain); bLFO.start(); nodes.push(bLFO);
  bell.connect(bLP); bLP.connect(bG); bG.connect(dest); bell.start(); nodes.push(bell);
  // Hammer strikes — loud and distinctive
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 400, 80, 0.12, 0.2, "triangle");
  }, 3000, 7000, timers);
  // Anvil ring
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1800 + Math.random() * 600, 0.3, 0.15);
  }, 4000, 10000, timers);
  return nodes;
};

const buildLabyrinth = (ctx, dest, timers) => {
  const nodes = [];
  // Eerie swept drone
  const drone = ctx.createOscillator(); drone.type = "sine"; drone.frequency.value = 100;
  const dG = ctx.createGain(); dG.gain.value = 0.06;
  const sweep = ctx.createOscillator(); sweep.frequency.value = 0.05;
  const sG = ctx.createGain(); sG.gain.value = 30;
  sweep.connect(sG); sG.connect(drone.frequency); sweep.start(); nodes.push(sweep);
  drone.connect(dG); dG.connect(dest); drone.start(); nodes.push(drone);
  // Echoing footsteps
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = 400 + Math.random() * 200;
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    const d = ctx.createDelay(0.4); d.delayTime.value = 0.25;
    const fb = ctx.createGain(); fb.gain.value = 0.4;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.06);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 2000);
  }, 2500, 6000, timers);
  // Distant rumble
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 80, 40, 0.5, 0.08);
  }, 6000, 15000, timers);
  return nodes;
};

const buildBattle = (ctx, dest, timers) => {
  const nodes = [];
  // War drums — rhythmic low hits
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 120, 50, 0.15, 0.2, "triangle");
    setTimeout(() => chirp(ctx, dest, 110, 45, 0.12, 0.15, "triangle"), 300);
  }, 1500, 3500, timers);
  // Tension string — high dissonant tone
  const tens = ctx.createOscillator(); tens.type = "sawtooth"; tens.frequency.value = 440;
  const tLP = ctx.createBiquadFilter(); tLP.type = "lowpass"; tLP.frequency.value = 500;
  const tG = ctx.createGain(); tG.gain.value = 0.03;
  const tLFO = ctx.createOscillator(); tLFO.frequency.value = 6;
  const tLD = ctx.createGain(); tLD.gain.value = 0.02;
  tLFO.connect(tLD); tLD.connect(tG.gain); tLFO.start(); nodes.push(tLFO);
  tens.connect(tLP); tLP.connect(tG); tG.connect(dest); tens.start(); nodes.push(tens);
  // Sword clashes
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 2500 + Math.random() * 2000, 0.04, 0.15);
    setTimeout(() => blip(ctx, dest, 3000 + Math.random() * 1500, 0.03, 0.1), 50);
  }, 1000, 3000, timers);
  // Shouts
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 300 + Math.random() * 200, 200, 0.15, 0.1, "triangle");
  }, 2000, 5000, timers);
  return nodes;
};

const buildOlympus = (ctx, dest, timers) => {
  const nodes = [];
  // Ethereal choir — major chord with gentle beating
  [262, 264, 330, 332, 392, 394].forEach(f => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.04;
    o.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // High shimmer bell
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 2000 + Math.random() * 2000, 1.2, 0.08);
  }, 3000, 7000, timers);
  // Divine hum pulse
  const hum = ctx.createOscillator(); hum.type = "triangle"; hum.frequency.value = 65;
  const hG = ctx.createGain(); hG.gain.value = 0.0;
  const hLFO = ctx.createOscillator(); hLFO.type = "sine"; hLFO.frequency.value = 0.15;
  const hLD = ctx.createGain(); hLD.gain.value = 0.04;
  hLFO.connect(hLD); hLD.connect(hG.gain); hLFO.start(); nodes.push(hLFO);
  hum.connect(hG); hG.connect(dest); hum.start(); nodes.push(hum);
  return nodes;
};

// ── Scene-specific builders ──

const buildTemple = (ctx, dest, timers) => {
  const nodes = [];
  // Low chant — two oscillators beating
  [130, 131].forEach(f => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.05;
    o.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Higher chant harmony
  const ch = ctx.createOscillator(); ch.type = "sine"; ch.frequency.value = 196;
  const chG = ctx.createGain(); chG.gain.value = 0.03;
  ch.connect(chG); chG.connect(dest); ch.start(); nodes.push(ch);
  // Echoing footsteps — reverberant
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = 500 + Math.random() * 300;
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    const d = ctx.createDelay(0.3); d.delayTime.value = 0.15;
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.08);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1500);
  }, 1500, 4000, timers);
  // Murmuring voices — melodic fragments
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 200 + Math.random() * 150;
    chirp(ctx, dest, f, f * 0.9, 0.2, 0.08, "triangle");
  }, 2000, 5000, timers);
  return nodes;
};

const buildMarket = (ctx, dest, timers) => {
  const nodes = [];
  // Constant voice babble — multiple oscillators at speech frequencies
  [180, 240, 320].forEach(f => {
    const o = ctx.createOscillator(); o.type = "triangle"; o.frequency.value = f;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 400;
    const g = ctx.createGain(); g.gain.value = 0.02;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.3 + Math.random() * 0.5;
    const ld = ctx.createGain(); ld.gain.value = 0.015;
    lfo.connect(ld); ld.connect(g.gain); lfo.start(); nodes.push(lfo);
    o.connect(lp); lp.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Vendor calls — louder melodic shouts
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 300 + Math.random() * 300;
    chirp(ctx, dest, f, f * 1.3, 0.12, 0.12, "triangle");
    setTimeout(() => chirp(ctx, dest, f * 1.2, f * 0.8, 0.1, 0.1, "triangle"), 200);
  }, 1500, 4000, timers);
  // Clinks and clattering
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1500 + Math.random() * 2000, 0.04, 0.12);
  }, 1000, 3000, timers);
  // Donkey/animal
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 180, 120, 0.3, 0.08, "sawtooth");
  }, 8000, 20000, timers);
  return nodes;
};

const buildInn = (ctx, dest, timers) => {
  const nodes = [];
  // Fire crackle — irregular short bursts
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.03); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 3000; bp.Q.value = 3;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.04);
  }, 150, 600, timers);
  // Warm bass hum (hearth)
  const hearth = ctx.createOscillator(); hearth.type = "sine"; hearth.frequency.value = 80;
  const hG = ctx.createGain(); hG.gain.value = 0.05;
  hearth.connect(hG); hG.connect(dest); hearth.start(); nodes.push(hearth);
  // Muffled laughter/voices
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 250 + Math.random() * 200;
    chirp(ctx, dest, f, f * (0.7 + Math.random() * 0.6), 0.2, 0.08, "triangle");
  }, 3000, 7000, timers);
  // Wood creak
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 180, 100, 0.25, 0.06);
  }, 5000, 12000, timers);
  // Cup/plate clink
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1200 + Math.random() * 800, 0.06, 0.08);
  }, 4000, 10000, timers);
  return nodes;
};

const buildForest = (ctx, dest, timers) => {
  const nodes = [];
  // Gentle wind — very subtle
  const wind = createNoiseNode("brown", 3);
  const wLP = ctx.createBiquadFilter(); wLP.type = "lowpass"; wLP.frequency.value = 200;
  const wG = ctx.createGain(); wG.gain.value = 0.04;
  wind.connect(wLP); wLP.connect(wG); wG.connect(dest); wind.start(); nodes.push(wind);
  // Bird calls — the main feature, varied and frequent
  scheduleRandom(() => {
    if (!getCtx()) return;
    const type = Math.random();
    if (type < 0.3) {
      // Two-note call
      const f = 2000 + Math.random() * 1000;
      blip(ctx, dest, f, 0.1, 0.14);
      setTimeout(() => blip(ctx, dest, f * 1.25, 0.1, 0.12), 150);
    } else if (type < 0.6) {
      // Warble
      chirp(ctx, dest, 1800 + Math.random() * 800, 2200 + Math.random() * 600, 0.15, 0.12);
    } else {
      // Trill — rapid notes
      const f = 2500 + Math.random() * 1000;
      for (let i = 0; i < 4; i++) {
        setTimeout(() => blip(ctx, dest, f + (i % 2) * 300, 0.04, 0.1), i * 60);
      }
    }
  }, 2000, 5000, timers);
  // Rustling (very brief noise bursts)
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("pink", 0.05); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 1500; bp.Q.value = 1;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.12);
  }, 4000, 10000, timers);
  return nodes;
};

const buildDocks = (ctx, dest, timers) => {
  const nodes = [];
  // Water lapping — rhythmic swells (not continuous noise)
  const lap = createNoiseNode("brown", 3);
  const lLP = ctx.createBiquadFilter(); lLP.type = "lowpass"; lLP.frequency.value = 250;
  const lG = ctx.createGain(); lG.gain.value = 0.0;
  const lLFO = ctx.createOscillator(); lLFO.type = "sine"; lLFO.frequency.value = 0.25;
  const lLD = ctx.createGain(); lLD.gain.value = 0.06;
  lLFO.connect(lLD); lLD.connect(lG.gain); lLFO.start(); nodes.push(lLFO);
  lap.connect(lLP); lLP.connect(lG); lG.connect(dest); lap.start(); nodes.push(lap);
  // Seagulls
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 2200 + Math.random() * 500, 1500, 0.25, 0.14);
    setTimeout(() => chirp(ctx, dest, 2000 + Math.random() * 300, 1600, 0.2, 0.1), 300);
  }, 3000, 8000, timers);
  // Rope creaking
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 220, 160, 0.3, 0.08);
  }, 4000, 9000, timers);
  // Bell (ship bell)
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1200, 0.6, 0.1);
  }, 8000, 20000, timers);
  return nodes;
};

const buildWell = (ctx, dest, timers) => {
  const nodes = [];
  // Night silence — very quiet low hum
  const hum = ctx.createOscillator(); hum.type = "sine"; hum.frequency.value = 60;
  const hG = ctx.createGain(); hG.gain.value = 0.02;
  hum.connect(hG); hG.connect(dest); hum.start(); nodes.push(hum);
  // Crickets — the dominant sound
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 3500 + Math.random() * 1500;
    for (let i = 0; i < 3; i++) {
      setTimeout(() => blip(ctx, dest, f, 0.05, 0.12), i * 60);
    }
  }, 1000, 3000, timers);
  // Water dripping in well
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 900 + Math.random() * 300, 0.1, 0.12);
  }, 2000, 5000, timers);
  // Owl
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 500, 0.3, 0.08);
    setTimeout(() => blip(ctx, dest, 400, 0.4, 0.08), 500);
  }, 8000, 18000, timers);
  return nodes;
};

const buildArena = (ctx, dest, timers) => {
  const nodes = [];
  // Crowd roar — modulated oscillators
  [200, 280, 350].forEach(f => {
    const o = ctx.createOscillator(); o.type = "triangle"; o.frequency.value = f;
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 400;
    const g = ctx.createGain(); g.gain.value = 0.025;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.2 + Math.random() * 0.3;
    const ld = ctx.createGain(); ld.gain.value = 0.02;
    lfo.connect(ld); ld.connect(g.gain); lfo.start(); nodes.push(lfo);
    o.connect(lp); lp.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Crowd cheers/gasps — periodic surges
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 300 + Math.random() * 200, 500 + Math.random() * 200, 0.2, 0.12, "triangle");
  }, 2000, 5000, timers);
  // Combat impacts
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 200, 60, 0.08, 0.15, "triangle");
  }, 1500, 4000, timers);
  return nodes;
};

const buildCampfire = (ctx, dest, timers) => {
  const nodes = [];
  // Fire crackle bursts
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.03); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 2500; bp.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.04);
  }, 150, 500, timers);
  // Warm bass
  const fire = ctx.createOscillator(); fire.type = "sine"; fire.frequency.value = 90;
  const fG = ctx.createGain(); fG.gain.value = 0.04;
  fire.connect(fG); fG.connect(dest); fire.start(); nodes.push(fire);
  // Night crickets
  scheduleRandom(() => {
    if (!getCtx()) return;
    const f = 3800 + Math.random() * 800;
    blip(ctx, dest, f, 0.05, 0.1);
    setTimeout(() => blip(ctx, dest, f, 0.05, 0.08), 80);
  }, 2000, 5000, timers);
  // Distant wolf/owl
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 400, 300, 0.6, 0.06);
  }, 10000, 25000, timers);
  return nodes;
};

const buildLibrary = (ctx, dest, timers) => {
  const nodes = [];
  // Near silence — very faint hum
  const hum = ctx.createOscillator(); hum.type = "sine"; hum.frequency.value = 60;
  const hG = ctx.createGain(); hG.gain.value = 0.015;
  hum.connect(hG); hG.connect(dest); hum.start(); nodes.push(hum);
  // Page turning
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.06); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 3500; bp.Q.value = 3;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.08);
  }, 3000, 8000, timers);
  // Echoing footstep
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = 400;
    g.gain.setValueAtTime(0.06, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    const d = ctx.createDelay(0.3); d.delayTime.value = 0.2;
    const fb = ctx.createGain(); fb.gain.value = 0.3;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.05);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1500);
  }, 5000, 12000, timers);
  return nodes;
};

const buildRiver = (ctx, dest, timers) => {
  const nodes = [];
  // Running water — modulated noise, kept subtle
  const water = createNoiseNode("pink", 3);
  const wBP = ctx.createBiquadFilter(); wBP.type = "bandpass"; wBP.frequency.value = 600; wBP.Q.value = 1;
  const wG = ctx.createGain(); wG.gain.value = 0.06;
  water.connect(wBP); wBP.connect(wG); wG.connect(dest); water.start(); nodes.push(water);
  // Splashing
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("white", 0.05); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 2000; bp.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.08);
  }, 2000, 5000, timers);
  // Birds
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 2200 + Math.random() * 800, 1800 + Math.random() * 400, 0.12, 0.1);
  }, 3000, 8000, timers);
  return nodes;
};

const buildShip = (ctx, dest, timers) => {
  const nodes = [];
  // Wave swell — rhythmic low noise
  const wave = createNoiseNode("brown", 3);
  const wLP = ctx.createBiquadFilter(); wLP.type = "lowpass"; wLP.frequency.value = 250;
  const wG = ctx.createGain(); wG.gain.value = 0.0;
  const wLFO = ctx.createOscillator(); wLFO.type = "sine"; wLFO.frequency.value = 0.1;
  const wLD = ctx.createGain(); wLD.gain.value = 0.08;
  wLFO.connect(wLD); wLD.connect(wG.gain); wLFO.start(); nodes.push(wLFO);
  wave.connect(wLP); wLP.connect(wG); wG.connect(dest); wave.start(); nodes.push(wave);
  // Wood creaking — the signature ship sound
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 200 + Math.random() * 50, 130 + Math.random() * 30, 0.3, 0.1);
  }, 2000, 5000, timers);
  // Sail flapping
  scheduleRandom(() => {
    if (!getCtx()) return;
    const n = createNoiseNode("pink", 0.08); if (!n) return;
    const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = 800; bp.Q.value = 1;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    n.connect(bp); bp.connect(g); g.connect(dest); n.start(); n.stop(ctx.currentTime + 0.1);
  }, 3000, 8000, timers);
  return nodes;
};

const buildSacred = (ctx, dest, timers) => {
  const nodes = [];
  // Divine chord — ethereal beating tones
  [165, 167, 248, 250].forEach(f => {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = 0.04;
    o.connect(g); g.connect(dest); o.start(); nodes.push(o);
  });
  // Occasional bell/chime
  scheduleRandom(() => {
    if (!getCtx()) return;
    blip(ctx, dest, 1500 + Math.random() * 1500, 1.0, 0.08);
  }, 4000, 10000, timers);
  return nodes;
};

const buildPalace = (ctx, dest, timers) => {
  const nodes = [];
  // Grand hall resonance
  const res = ctx.createOscillator(); res.type = "sine"; res.frequency.value = 82;
  const rG = ctx.createGain(); rG.gain.value = 0.04;
  res.connect(rG); rG.connect(dest); res.start(); nodes.push(res);
  // Echoing footsteps on marble
  scheduleRandom(() => {
    if (!getCtx()) return;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = "triangle"; o.frequency.value = 600 + Math.random() * 200;
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
    const d = ctx.createDelay(0.4); d.delayTime.value = 0.2;
    const fb = ctx.createGain(); fb.gain.value = 0.35;
    o.connect(g); g.connect(dest); g.connect(d); d.connect(fb); fb.connect(d); fb.connect(dest);
    o.start(); o.stop(ctx.currentTime + 0.05);
    setTimeout(() => { try { d.disconnect(); fb.disconnect(); } catch(_){} }, 1500);
  }, 2000, 5000, timers);
  // Distant voices/murmurs
  scheduleRandom(() => {
    if (!getCtx()) return;
    chirp(ctx, dest, 200 + Math.random() * 100, 160 + Math.random() * 80, 0.2, 0.06, "triangle");
  }, 3000, 8000, timers);
  return nodes;
};

// ── Mood → Builder Map ──

const moodBuilders = {
  road: buildRoad, city: buildCity, sea: buildSea, garden: buildGarden,
  underworld: buildUnderworld, forge: buildForge, labyrinth: buildLabyrinth,
  battle: buildBattle, olympus: buildOlympus, temple: buildTemple,
  market: buildMarket, inn: buildInn, forest: buildForest, docks: buildDocks,
  well: buildWell, arena: buildArena, campfire: buildCampfire,
  library: buildLibrary, river: buildRiver, ship: buildShip,
  sacred: buildSacred, palace: buildPalace,
};

const CHAPTER_MOODS = {
  1: "road", 2: "road", 3: "city", 4: "sea", 5: "garden",
  6: "underworld", 7: "forge", 8: "labyrinth", 9: "battle", 10: "olympus",
};

// ── Public API ──

export const startAmbience = (chapter, mood) => {
  const ctx = getCtx();
  if (!ctx) return;
  const activeMood = mood || CHAPTER_MOODS[chapter] || "road";
  if (current && current.mood === activeMood) return;

  const master = getMaster();
  const builder = moodBuilders[activeMood] || buildRoad;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(AMBIENCE_VOLUME, ctx.currentTime + FADE);
  gain.connect(master);

  const timers = [];
  const nodes = builder(ctx, gain, timers);

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
