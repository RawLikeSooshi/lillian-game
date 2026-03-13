/**
 * Prophecy Deck System
 * At the start of each chapter, draw 1-3 cryptic fate cards.
 * D20 + Wisdom determines how many cards are drawn.
 * Cards are revealed at chapter end (or in batches every 3 chapters).
 */

import { rollD20, getStatModifier } from "./dice.js";

/**
 * Draw prophecy cards for a chapter.
 * @param {number} wisdomStat - Hero's current Wisdom value
 * @param {Array} prophecyPool - Chapter's available prophecy cards
 * @returns {{ roll: object, count: number, cards: Array }}
 */
export const drawProphecies = (wisdomStat, prophecyPool) => {
  if (!prophecyPool || !prophecyPool.length) return { roll: null, count: 0, cards: [] };

  const roll = rollD20();
  const modifier = getStatModifier(wisdomStat);
  const total = roll.raw + modifier;

  // Determine how many cards to draw
  let count;
  if (roll.nat20 || total >= 16) count = 3;
  else if (total >= 10) count = 2;
  else count = 1;

  // Don't draw more than available
  count = Math.min(count, prophecyPool.length);

  // Shuffle and pick
  const shuffled = [...prophecyPool].sort(() => Math.random() - 0.5);
  const cards = shuffled.slice(0, count);

  return { roll, count, cards };
};

/**
 * Reveal what a prophecy card meant after the chapter.
 * @param {Object} card - The prophecy card { id, text, reveal }
 * @returns {{ prophecyText: string, revealText: string }}
 */
export const revealProphecy = (card) => ({
  prophecyText: card.text,
  revealText: card.reveal,
});

/**
 * Get all drawn prophecies for a set of chapters (for batch reveal).
 * @param {Object} drawnProphecies - { chapterNum: [card, card, ...] }
 * @param {number[]} chapters - Which chapters to reveal
 * @returns {Array} All cards with their chapter numbers
 */
export const getPropheciesForReveal = (drawnProphecies, chapters) => {
  const result = [];
  for (const ch of chapters) {
    const cards = drawnProphecies[ch] || [];
    for (const card of cards) {
      result.push({ chapter: ch, ...revealProphecy(card) });
    }
  }
  return result;
};

/**
 * Master prophecy card pool.
 * Each card is tagged with which chapters it's relevant to.
 * Individual chapters reference specific cards from this pool
 * or define their own in chapter data files.
 */
export const PROPHECY_POOL = {
  // Chapter 1
  ch1_thread: {
    id: "ch1_thread",
    text: "The thread you carry was woven before you were born.",
    reveal: "The woolen thread from the old woman is no ordinary thread. It connects to a story far older than you.",
    chapters: [1],
  },
  ch1_temple: {
    id: "ch1_temple",
    text: "The man at the temple fears what you will become.",
    reveal: "Lycon sensed something in you at the Temple of Apollo -- something that threatened his grip on power.",
    chapters: [1],
  },
  ch1_blood: {
    id: "ch1_blood",
    text: "Your blood remembers what your mind has forgotten.",
    reveal: "The strange feelings you've had -- the stirring, the flashes -- your body knows a truth your mind hasn't found yet.",
    chapters: [1],
  },

  // Chapter 2
  ch2_figure: {
    id: "ch2_figure",
    text: "The figure at the well is not what they seem -- but neither are you.",
    reveal: "The figure was a god in disguise. And you? You are more than mortal, though you don't know it yet.",
    chapters: [2],
  },
  ch2_follower: {
    id: "ch2_follower",
    text: "The one who follows you carries the same question.",
    reveal: "Your rival -- the girl on the road -- is asking the same question you are: 'Who am I?'",
    chapters: [2],
  },
  ch2_soldier: {
    id: "ch2_soldier",
    text: "A soldier's choice echoes further than the sword.",
    reveal: "The soldier's dilemma showed you that some decisions outlast the moment. Your choice echoed into Corinth.",
    chapters: [2],
  },

  // Chapter 3
  ch3_fork: {
    id: "ch3_fork",
    text: "The fork in the road was always there -- you just couldn't see it.",
    reveal: "Mira and Castor both needed help. The choice wasn't random -- it revealed who you are when you can't save everyone.",
    chapters: [3],
  },
  ch3_name: {
    id: "ch3_name",
    text: "The name you make will outlast the name you were given.",
    reveal: "Your reputation now precedes you. The name you earned in Corinth carries more weight than the one you were born with.",
    chapters: [3],
  },
  ch3_rival: {
    id: "ch3_rival",
    text: "Your rival knows something you don't. They don't know they know it.",
    reveal: "She's having visions too. She's a child of a god. And she has no idea what that means -- just like you.",
    chapters: [3],
  },
};
