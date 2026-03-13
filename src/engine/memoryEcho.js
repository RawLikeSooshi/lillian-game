/**
 * Memory Echo System
 * Interactive vision fragments that reveal the hero's divine origin.
 * Player arranges scattered words. D20 + Wisdom/Empathy vs resistance DC.
 * Clarity determines how much of the Zeus origin story is revealed.
 */

import { rollD20, getStatModifier } from "./dice.js";

/**
 * The ordered Zeus revelation — 10 fragments building the full story.
 * Each fragment is unlocked as echoProgress increases.
 */
export const ECHO_REVELATIONS = [
  {
    level: 1,
    brief: "A stirring. Something ancient moves inside you.",
    full: "You feel a warmth in your chest — not from exertion, but from somewhere deeper. As if something sleeping has turned over.",
  },
  {
    level: 2,
    brief: "A mountaintop. Lightning that doesn't burn.",
    full: "You see a mountain taller than any mountain. Lightning strikes its peak — but the peak is not damaged. It glows.",
  },
  {
    level: 3,
    brief: "A woman holding a baby to her chest in a storm.",
    full: "A woman stands in rain. She holds a baby — you? — close to her body. The rain doesn't touch either of them. Someone watches from above.",
  },
  {
    level: 4,
    brief: "A man with lightning in his hands, looking at a cradle.",
    full: "A man made of light and storm stands over a cradle. His hands crackle with lightning, but when he reaches for the baby, his touch is gentle. 'Hide her,' he says. 'They must not know.'",
  },
  {
    level: 5,
    brief: "A temple on a mountain. Columns of cloud.",
    full: "The throne room of Olympus. Twelve seats. A voice says: 'She has your eyes.' Another voice: 'She has her mother's courage.' The man made of lightning looks proud — and afraid.",
  },
  {
    level: 6,
    brief: "A name whispered: 'Daughter of the Storm.'",
    full: "You are a daughter of Zeus. Born to a mortal woman. Hidden among mortals to protect you from the wrath of Hera, who destroys the mortal children of her husband's love.",
  },
  {
    level: 7,
    brief: "The Oracle received instructions. Your journey was planned.",
    full: "The Oracle at Delphi was told: 'When she is ready, send her home.' The prophecy that started your journey was not random. It was a summons, disguised as fate.",
  },
  {
    level: 8,
    brief: "Your rival carries the same blood. A different god, the same question.",
    full: "You are not the only hidden child. The girl who follows you — Kira — is also divine. Different parent, same exile. The gods hid many children. Not all of them will find their way home.",
  },
  {
    level: 9,
    brief: "Zeus speaks: 'Come home when you are ready. Not before.'",
    full: "Zeus's voice, clear as thunder: 'I did not hide you because I was ashamed. I hid you because I was afraid — for you. Every step you have taken has been your own. Come home when you are ready. Not before.'",
  },
  {
    level: 10,
    brief: "You remember everything. You always did.",
    full: "The full memory returns. Not in fragments — in a flood. Your mother's face. Zeus's hand on your forehead. The mortal family that raised you, chosen with care. The Oracle, waiting. The road. All of it was real. All of it was yours.",
  },
];

/**
 * Resolve a memory echo attempt.
 * @param {number} wisdomStat - Hero's Wisdom value
 * @param {number} empathyStat - Hero's Empathy value
 * @param {number} baseDC - The echo's difficulty class
 * @param {number} echoDCModifier - Modifier from divine favor (negative = easier)
 * @param {number} dreamBonus - Bonus from recent dream (0-2)
 * @returns {{ roll: object, clarity: string, echoGain: number }}
 */
export const resolveEcho = (wisdomStat, empathyStat, baseDC, echoDCModifier = 0, dreamBonus = 0) => {
  const roll = rollD20();
  const modifier = Math.max(getStatModifier(wisdomStat), getStatModifier(empathyStat)) + dreamBonus;
  const dc = Math.max(5, baseDC + echoDCModifier); // DC can't go below 5
  const total = roll.raw + modifier;

  let clarity;
  let echoGain;

  if (roll.nat20) {
    clarity = "perfect";
    echoGain = 2;
  } else if (total >= dc + 5) {
    clarity = "high";
    echoGain = 2;
  } else if (total >= dc) {
    clarity = "medium";
    echoGain = 1;
  } else if (total >= dc - 3) {
    clarity = "low";
    echoGain = 1; // Still gain something — skip floor
  } else {
    clarity = "blocked";
    echoGain = 0;
    // Even on block, divine favor increases slightly (effort matters)
  }

  return { roll, clarity, echoGain, total, dc, modifier };
};

/**
 * Get the revelation text for the current echo progress level.
 * @param {number} echoProgress - Current progress (0-10)
 * @param {string} clarity - "perfect" | "high" | "medium" | "low" | "blocked"
 * @returns {{ brief: string, full: string, level: number } | null}
 */
export const getEchoRevelation = (echoProgress, clarity) => {
  if (clarity === "blocked") {
    return {
      level: echoProgress,
      brief: "The vision shatters. Something pushed you out.",
      full: "Flashes. Nothing clear. But the effort itself draws divine attention — something is watching, and it's not angry. It's waiting.",
    };
  }

  // Get the next revelation based on current progress
  const nextLevel = Math.min(echoProgress + 1, 10);
  const revelation = ECHO_REVELATIONS.find((r) => r.level === nextLevel);

  if (!revelation) return null;

  // On low clarity, only show the brief version
  if (clarity === "low") {
    return { ...revelation, full: revelation.brief };
  }

  return revelation;
};

/**
 * Generate the interactive fragment puzzle for a memory echo.
 * @param {Object} echoData - Chapter's echo definition
 * @returns {{ fragments: string[], correctSequence: number[] }}
 */
export const generateEchoFragments = (echoData) => {
  if (!echoData) return { fragments: [], correctSequence: [] };

  // Shuffle fragment display order (player must reorder)
  const indices = echoData.fragments.map((_, i) => i);
  const shuffled = [...indices].sort(() => Math.random() - 0.5);

  return {
    fragments: shuffled.map((i) => echoData.fragments[i]),
    correctSequence: echoData.correctOrder.map((orig) => shuffled.indexOf(orig)),
    originalFragments: echoData.fragments,
    originalCorrectOrder: echoData.correctOrder,
  };
};

/**
 * Check if the player's fragment arrangement is close enough.
 * Exact match not required — partial credit for getting some in order.
 * @param {number[]} playerOrder - Player's arrangement (indices)
 * @param {number[]} correctOrder - Correct arrangement
 * @returns {{ correct: boolean, score: number, maxScore: number }}
 */
export const checkFragmentOrder = (playerOrder, correctOrder) => {
  let score = 0;
  const maxScore = correctOrder.length;

  for (let i = 0; i < correctOrder.length; i++) {
    if (playerOrder[i] === correctOrder[i]) score++;
  }

  return {
    correct: score === maxScore,
    score,
    maxScore,
    percentage: maxScore > 0 ? score / maxScore : 0,
  };
};
