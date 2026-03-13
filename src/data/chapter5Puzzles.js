/**
 * Chapter 5 Puzzles
 * Hesperides riddle about the golden apples
 */

export const chapter5Puzzles = {
  hesperidesRiddle: {
    id: "ch5_puzzle1",
    tier: 1,
    title: "The Riddle of the Golden Apple",
    setup: "Before you reach the golden tree, Aigle steps into the path. Her shimmer brightens — not threatening but serious, the light of a lantern turned up in a dark room.\n\n\"No one passes without answering,\" she says. Her voice carries the weight of every hero who has stood here before you — some who answered well, many who didn't, all of whom wanted the same thing.\n\n\"The garden keeps its own counsel. And it asks this of every seeker.\"",
    question: "Aigle speaks:\n\n'I hang from a branch but I am not fruit.\nI shine like the sun but give no warmth.\nKings have killed for me. Heroes have died.\nNot color but desire gives gold its name.\n\nWhat makes an apple golden?'\n\nThink carefully. The answer is not about the apple itself.",
    type: "multipleChoice",
    options: [
      "The apple is golden because people want it — desire makes ordinary things precious",
      "The apple is golden because the gods made it that way — divine power gives it value",
      "The apple is golden because it grants immortality — its power makes it valuable",
      "The apple is golden because gold is rare — scarcity creates worth",
    ],
    correctIndex: 0,
    hints: [
      "Read the riddle again: 'Not color but desire gives gold its name.' The answer is hidden in the riddle itself.",
      "Think about why people want gold in the first place. Is it because gold is useful, or because people WANT it? The riddle says the apple isn't really about color or material — it's about what people project onto it.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Empathy: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedHesperidesRiddle",
    skipFlag: "skippedHesperidesRiddle",
    solveMessage: "Aigle's eyes widen. The shimmer on her skin pulses once — bright, warm, surprised.\n\n\"Yes,\" she breathes. \"The apple is golden because you WANT it to be. Take away the desire, and it's just fruit hanging from a branch in a garden at the edge of the world.\"\n\nShe steps aside. The path to the tree opens — golden light falling across the ground like a carpet.\n\n\"You understand something most heroes never do,\" she says. \"The treasure isn't in the thing. It's in the wanting. And knowing that changes what the wanting means.\"",
    skipMessage: "Aigle shakes her head — gently, the way an old teacher shakes her head when the answer was right there in the question.\n\n\"Not color but desire gives gold its name,\" she says. \"People make things golden by wanting them. The apple isn't precious because it glows. It glows because people have wanted it for three thousand years.\"\n\nShe steps aside anyway. The path opens.\n\n\"Not all wisdom comes from riddles. Some comes from what happens next.\"",
    forceMessage: "Aigle waits while you think. She's patient — she's had three thousand years of practice.\n\n\"Consider this,\" she says, when the silence has gone on long enough. \"A hundred heroes have stood where you stand. Every one of them wanted the apple. Did any of them stop to ask *why* they wanted it?\"\n\nShe touches the golden bark of the nearest branch.\n\n\"Not color but desire gives gold its name. The wanting IS the gold. The apple is just... an apple.\"\n\nThe path opens. You see it now — value isn't a property of objects. It's a property of desire. And understanding that changes what you'll do when you reach the tree.",
  },
};
