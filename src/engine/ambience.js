/**
 * Chapter Musical Backdrops
 * Simple looping melodies/chords per chapter using Web Audio oscillators.
 * Each chapter has a unique musical identity — not ambient simulation,
 * but an intentional RPG-style soundtrack.
 */

import { getCtx, getMaster } from "./audio";

let current = null; // { mood, nodes: [], gain, timers: [] }
const FADE = 2.0;
const AMBIENCE_VOLUME = 0.18;

const cleanup = (amb) => {
  if (!amb) return;
  amb.timers.forEach(t => clearTimeout(t));
  amb.timers = [];
  amb.nodes.forEach(n => { try { n.stop(); } catch (_) {} try { n.disconnect(); } catch (_) {} });
  amb.nodes = [];
  try { amb.gain.disconnect(); } catch (_) {}
};

// Helper: create a note that plays for a duration then fades
const note = (ctx, dest, freq, start, dur, vol = 0.06, type = "sine") => {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, start);
  g.gain.linearRampToValueAtTime(vol, start + 0.05);
  g.gain.linearRampToValueAtTime(vol * 0.7, start + dur - 0.1);
  g.gain.linearRampToValueAtTime(0, start + dur);
  o.connect(g); g.connect(dest);
  o.start(start); o.stop(start + dur + 0.01);
  return o;
};

// Helper: schedule a looping melody sequence
const melodyLoop = (ctx, dest, notes, bpm, timers, nodes, vol = 0.06, type = "sine") => {
  const beatDur = 60 / bpm;
  const totalBeats = notes.reduce((s, n) => s + n[1], 0);
  const loopDur = totalBeats * beatDur;

  const playOnce = () => {
    if (!getCtx()) return;
    let t = ctx.currentTime + 0.05;
    for (const [freq, beats] of notes) {
      if (freq > 0) {
        const o = note(ctx, dest, freq, t, beats * beatDur * 0.9, vol, type);
        nodes.push(o);
      }
      t += beats * beatDur;
    }
    const timer = setTimeout(playOnce, loopDur * 1000);
    timers.push(timer);
  };
  playOnce();
};

// Helper: sustained chord pad
const pad = (ctx, dest, freqs, vol = 0.03, type = "sine") => {
  const nodes = [];
  for (const f of freqs) {
    const o = ctx.createOscillator(); o.type = type; o.frequency.value = f;
    const g = ctx.createGain(); g.gain.value = vol;
    o.connect(g); g.connect(dest); o.start();
    nodes.push(o);
  }
  return nodes;
};

// ── Chapter Soundtracks ──

// Ch1: The Road to Delphi — hopeful, adventurous, simple folk melody
const buildCh1 = (ctx, dest, timers) => {
  const nodes = [];
  // Warm pad: D minor (hopeful-ancient)
  nodes.push(...pad(ctx, dest, [147, 175, 220], 0.025, "triangle"));
  // Melody: pentatonic journey theme
  const melody = [
    [294, 2], [330, 1], [392, 1], [440, 2], [392, 2],
    [330, 1], [294, 1], [262, 2], [294, 4],
    [392, 2], [440, 1], [494, 1], [440, 2], [392, 2],
    [330, 1], [294, 1], [262, 2], [294, 4],
  ];
  melodyLoop(ctx, dest, melody, 72, timers, nodes, 0.07, "triangle");
  // Gentle bass pulse
  const bass = [
    [147, 4], [131, 4], [147, 4], [165, 4],
    [147, 4], [131, 4], [110, 4], [147, 4],
  ];
  melodyLoop(ctx, dest, bass, 72, timers, nodes, 0.04, "sine");
  return nodes;
};

// Ch2: The Road from Delphi — slightly darker, more determined
const buildCh2 = (ctx, dest, timers) => {
  const nodes = [];
  // Minor pad: A minor
  nodes.push(...pad(ctx, dest, [110, 131, 165], 0.025, "triangle"));
  // Melody: walking rhythm, minor key
  const melody = [
    [330, 1], [294, 1], [262, 2], [247, 2], [262, 2],
    [294, 2], [330, 2], [294, 2], [262, 2],
    [247, 1], [220, 1], [247, 2], [262, 2], [294, 2],
    [330, 2], [294, 1], [262, 1], [220, 4],
  ];
  melodyLoop(ctx, dest, melody, 80, timers, nodes, 0.06, "triangle");
  // Steady bass
  const bass = [
    [110, 4], [131, 4], [147, 4], [131, 4],
    [110, 4], [98, 4], [110, 4], [131, 4],
  ];
  melodyLoop(ctx, dest, bass, 80, timers, nodes, 0.04, "sine");
  return nodes;
};

// Ch3: The City of Corinth — bustling, lively, slightly mysterious
const buildCh3 = (ctx, dest, timers) => {
  const nodes = [];
  // Pad: C major with a touch of mystery
  nodes.push(...pad(ctx, dest, [131, 165, 196], 0.02, "triangle"));
  // Melody: quick and playful
  const melody = [
    [392, 1], [440, 1], [494, 1], [392, 1], [330, 2], [0, 2],
    [440, 1], [494, 1], [523, 1], [440, 1], [392, 2], [0, 2],
    [523, 1], [494, 1], [440, 1], [392, 1], [440, 2], [330, 2],
    [392, 1], [330, 1], [294, 1], [262, 1], [294, 2], [0, 2],
  ];
  melodyLoop(ctx, dest, melody, 100, timers, nodes, 0.06, "triangle");
  // Rhythmic bass
  const bass = [
    [131, 2], [0, 2], [131, 2], [165, 2],
    [175, 2], [0, 2], [175, 2], [131, 2],
    [131, 2], [0, 2], [131, 2], [165, 2],
    [110, 2], [0, 2], [131, 2], [0, 2],
  ];
  melodyLoop(ctx, dest, bass, 100, timers, nodes, 0.04, "sine");
  return nodes;
};

// Ch4: The Straits of Messina — epic, rolling sea shanty feel
const buildCh4 = (ctx, dest, timers) => {
  const nodes = [];
  // Pad: open fifths, oceanic
  nodes.push(...pad(ctx, dest, [98, 147, 196], 0.025, "sine"));
  // Melody: rolling 6/8 sea theme
  const melody = [
    [294, 1.5], [330, 1.5], [392, 3], [440, 1.5], [392, 1.5],
    [330, 3], [294, 1.5], [262, 1.5], [220, 3],
    [262, 1.5], [294, 1.5], [330, 3], [392, 1.5], [330, 1.5],
    [294, 3], [262, 1.5], [294, 1.5], [330, 3],
  ];
  melodyLoop(ctx, dest, melody, 90, timers, nodes, 0.06, "triangle");
  // Rolling bass
  const bass = [
    [98, 3], [131, 3], [147, 3], [131, 3],
    [110, 3], [98, 3], [131, 3], [147, 3],
  ];
  melodyLoop(ctx, dest, bass, 90, timers, nodes, 0.05, "sine");
  return nodes;
};

// Ch5: The Garden of the Hesperides — ethereal, magical, wonder
const buildCh5 = (ctx, dest, timers) => {
  const nodes = [];
  // Shimmering pad: major 7th
  nodes.push(...pad(ctx, dest, [262, 330, 392, 494], 0.02, "sine"));
  // Melody: dreamy, flowing, lots of space
  const melody = [
    [523, 3], [494, 1], [440, 2], [0, 2],
    [494, 3], [440, 1], [392, 2], [0, 2],
    [440, 2], [494, 2], [523, 2], [659, 2],
    [587, 3], [523, 1], [494, 2], [0, 2],
    [440, 3], [392, 1], [330, 2], [0, 2],
    [392, 2], [440, 2], [494, 4],
  ];
  melodyLoop(ctx, dest, melody, 60, timers, nodes, 0.05, "sine");
  // Harp-like arpeggios (high, gentle)
  const arp = [
    [523, 1], [659, 1], [784, 1], [659, 1],
    [587, 1], [740, 1], [880, 1], [740, 1],
    [523, 1], [659, 1], [784, 1], [1047, 1],
    [880, 1], [784, 1], [659, 1], [523, 1],
  ];
  melodyLoop(ctx, dest, arp, 120, timers, nodes, 0.03, "sine");
  return nodes;
};

// Ch6: The Halls of Hades — dark, somber, echoing, slow
const buildCh6 = (ctx, dest, timers) => {
  const nodes = [];
  // Dark pad: diminished feel
  nodes.push(...pad(ctx, dest, [82, 98, 117], 0.03, "triangle"));
  // Melody: sparse, haunting, lots of rests
  const melody = [
    [165, 4], [0, 4], [156, 4], [0, 4],
    [147, 4], [131, 2], [0, 2], [117, 4], [0, 4],
    [131, 4], [0, 2], [147, 2], [165, 4], [0, 4],
    [156, 4], [0, 4], [131, 8],
  ];
  melodyLoop(ctx, dest, melody, 50, timers, nodes, 0.06, "sine");
  // Deep slow bass
  const bass = [
    [55, 8], [0, 8], [52, 8], [0, 8],
    [49, 8], [0, 8], [55, 8], [0, 8],
  ];
  melodyLoop(ctx, dest, bass, 50, timers, nodes, 0.05, "sine");
  return nodes;
};

// Ch7: The Forge of Hephaestus — rhythmic, industrial, powerful
const buildCh7 = (ctx, dest, timers) => {
  const nodes = [];
  // Power chord pad
  nodes.push(...pad(ctx, dest, [110, 165, 220], 0.02, "sawtooth"));
  // Melody: strong, rhythmic, hammer-like
  const melody = [
    [220, 1], [0, 1], [220, 1], [262, 1], [294, 2], [0, 2],
    [330, 1], [0, 1], [330, 1], [294, 1], [262, 2], [0, 2],
    [220, 1], [0, 1], [294, 1], [0, 1], [262, 1], [220, 1], [196, 2],
    [220, 1], [262, 1], [294, 1], [330, 1], [294, 2], [0, 2],
  ];
  melodyLoop(ctx, dest, melody, 110, timers, nodes, 0.06, "triangle");
  // Hammering bass rhythm
  const bass = [
    [110, 1], [0, 1], [110, 1], [0, 1], [131, 2], [0, 2],
    [110, 1], [0, 1], [110, 1], [0, 1], [98, 2], [0, 2],
    [110, 1], [0, 1], [110, 1], [0, 1], [131, 2], [147, 2],
    [110, 1], [0, 1], [110, 1], [0, 1], [110, 2], [0, 2],
  ];
  melodyLoop(ctx, dest, bass, 110, timers, nodes, 0.05, "triangle");
  return nodes;
};

// Ch8: The Labyrinth of Crete — tense, winding, mysterious
const buildCh8 = (ctx, dest, timers) => {
  const nodes = [];
  // Unsettling pad: minor 2nd interval
  nodes.push(...pad(ctx, dest, [131, 139, 196], 0.02, "sine"));
  // Melody: chromatic, creeping
  const melody = [
    [262, 2], [277, 2], [262, 2], [247, 2],
    [262, 1], [277, 1], [294, 1], [277, 1], [262, 4],
    [247, 2], [233, 2], [247, 2], [262, 2],
    [294, 1], [277, 1], [262, 1], [247, 1], [233, 4],
    [0, 4], [262, 1], [0, 1], [262, 1], [0, 1],
    [277, 2], [262, 2], [247, 4],
  ];
  melodyLoop(ctx, dest, melody, 70, timers, nodes, 0.05, "sine");
  // Heartbeat bass
  const bass = [
    [65, 1], [0, 1], [65, 1], [0, 5],
    [65, 1], [0, 1], [65, 1], [0, 5],
    [69, 1], [0, 1], [69, 1], [0, 5],
    [65, 1], [0, 1], [65, 1], [0, 5],
  ];
  melodyLoop(ctx, dest, bass, 70, timers, nodes, 0.06, "sine");
  return nodes;
};

// Ch9: The Siege of Athens — dramatic, urgent, heroic
const buildCh9 = (ctx, dest, timers) => {
  const nodes = [];
  // Heroic pad: D minor power
  nodes.push(...pad(ctx, dest, [147, 175, 220, 294], 0.02, "triangle"));
  // Melody: bold, marching, heroic theme
  const melody = [
    [294, 1], [294, 1], [440, 2], [392, 1], [349, 1], [330, 2],
    [294, 1], [330, 1], [349, 2], [294, 2], [0, 2],
    [392, 1], [392, 1], [440, 2], [523, 2], [494, 2],
    [440, 1], [392, 1], [349, 2], [294, 2], [0, 2],
  ];
  melodyLoop(ctx, dest, melody, 108, timers, nodes, 0.07, "triangle");
  // March bass
  const bass = [
    [147, 2], [147, 2], [175, 2], [131, 2],
    [147, 2], [147, 2], [110, 2], [131, 2],
    [147, 2], [147, 2], [175, 2], [196, 2],
    [175, 2], [147, 2], [131, 2], [147, 2],
  ];
  melodyLoop(ctx, dest, bass, 108, timers, nodes, 0.05, "triangle");
  return nodes;
};

// Ch10: The Daughter of Thunder — grand, emotional, culminating
const buildCh10 = (ctx, dest, timers) => {
  const nodes = [];
  // Majestic pad: C major with octave spread
  nodes.push(...pad(ctx, dest, [131, 165, 196, 262, 330], 0.02, "sine"));
  // Melody: soaring, emotional, the main theme transformed
  const melody = [
    [523, 2], [494, 1], [440, 1], [392, 4],
    [440, 2], [494, 1], [523, 1], [587, 4],
    [659, 2], [587, 1], [523, 1], [494, 2], [440, 2],
    [392, 2], [440, 2], [494, 4],
    [523, 2], [587, 1], [659, 1], [784, 4],
    [659, 2], [587, 1], [523, 1], [494, 4],
    [440, 2], [392, 1], [440, 1], [523, 4],
    [494, 2], [440, 2], [392, 4],
  ];
  melodyLoop(ctx, dest, melody, 66, timers, nodes, 0.06, "sine");
  // Grand bass
  const bass = [
    [131, 4], [165, 4], [175, 4], [131, 4],
    [131, 4], [175, 4], [196, 4], [165, 4],
    [131, 4], [165, 4], [175, 4], [196, 4],
    [175, 4], [165, 4], [131, 8],
  ];
  melodyLoop(ctx, dest, bass, 66, timers, nodes, 0.04, "sine");
  // High counter-melody (delayed start)
  const counter = [
    [0, 8],
    [784, 2], [659, 2], [587, 4],
    [659, 2], [784, 2], [880, 4],
    [784, 2], [659, 2], [587, 2], [523, 2],
    [587, 2], [659, 2], [784, 4],
  ];
  melodyLoop(ctx, dest, counter, 66, timers, nodes, 0.03, "sine");
  return nodes;
};

// ── Chapter → Builder Map ──

const chapterBuilders = {
  1: buildCh1, 2: buildCh2, 3: buildCh3, 4: buildCh4, 5: buildCh5,
  6: buildCh6, 7: buildCh7, 8: buildCh8, 9: buildCh9, 10: buildCh10,
};

// ── Public API ──

export const startAmbience = (chapter) => {
  const ctx = getCtx();
  if (!ctx) return;
  const key = `ch${chapter}`;
  if (current && current.mood === key) return;

  const master = getMaster();
  const builder = chapterBuilders[chapter] || buildCh1;

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

  current = { mood: key, nodes, gain, timers };
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
