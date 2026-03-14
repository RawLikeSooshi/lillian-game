/**
 * Chapter 10 Puzzles — FINAL CHAPTER
 * One puzzle: The Riddle of Identity — the Sphinx's riddle revisited,
 * but the answer is about divine identity, about YOU.
 */

export const chapter10Puzzles = {
  riddleOfIdentity: {
    id: "ch10_puzzle1",
    tier: 2,
    title: "The Riddle of Identity",
    setup: "At the gates of Olympus — gates of crystal that catch a light older than the sun — you find words carved into the archway. Words you've seen before.\n\nThe Sphinx's riddle. The oldest riddle in the world. The one you encountered at the first crossroads, a lifetime ago, when you were a girl on a dusty road who didn't know her own name.\n\nBut something is different. The words shimmer and shift as you approach — rearranging themselves, rewriting themselves, as if the riddle is recognizing who's reading it and deciding to ask a different question.\n\nIt's not asking about humanity anymore.\n\nIt's asking about you.",
    question: "The archway reads:\n\n'What crawls at dawn, walks at midday, and soars at dusk?'\n\nThis isn't the original riddle. The Sphinx asked about legs — about the universal stages of mortal life. But this version changed when you approached. Dawn, midday, dusk — but the answer isn't 'a human.'\n\nThink about YOUR journey:\n- At the beginning (dawn), you were low to the ground, learning, uncertain, crawling toward understanding.\n- In the middle (midday), you stood upright, walked your own path, made your own choices.\n- At the end (dusk), you're here — at the peak. Not walking. Rising.\n\nWhat is the answer? What crawls, then walks, then soars?",
    type: "multipleChoice",
    options: [
      "A human — the original answer still applies",
      "A hero — someone who grows beyond what they were",
      "A god — divine beings start mortal and ascend",
      "Me — the answer is me, specifically, my journey",
    ],
    correctIndex: 3,
    hints: [
      "The riddle changed when you approached it. It's not asking about all of humanity anymore — it's asking about a specific journey. One specific girl. Whose journey has gone from crawling to walking to the edge of flight?",
      "The Sphinx's original riddle was universal — it applied to every human who ever lived. But this riddle is personal. It changed for YOU. The answer isn't a category. It's a name. Your name.",
    ],
    askParentPrompt: "The Sphinx's riddle is one of the oldest puzzles in mythology. The original answer is 'a human' — babies crawl, adults walk, elders use a cane (three 'legs'). But this version changes the riddle for the hero. Talk together: how has the hero's journey followed that same pattern — from crawling to walking to something beyond walking? How is she different now from when she started?",
    onSolve: { Wisdom: 2, Courage: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedIdentityRiddle",
    skipFlag: "skippedIdentityRiddle",
    solveMessage: "You say your name.\n\nNot 'a human.' Not 'a hero.' Not 'a god.' Your name. The specific, unrepeatable name that belongs to the girl who walked out of the ashes of a house with a blue door and didn't stop walking until she reached the top of the world.\n\nThe archway blazes. Crystal singing a single, perfect note — the note that every instrument in the world is trying to find and never quite reaches. The gates of Olympus vibrate with it. The mountain vibrates with it. The stars vibrate with it.\n\nThe Sphinx's riddle was always about identity. The original answer was universal — 'a human.' But this riddle changed because *you* changed. You're not just a human anymore. Not just a hero. Not just a demigod.\n\nYou're you. Specific. Unrepeatable. Forged by choices no one else made.\n\nAnd the gates of Olympus open for that. Not for a title. Not for a bloodline. For a name.\n\nYour name.",
    skipMessage: "The archway waits. The words shimmer. The answer hovers just out of reach — close, so close, like a word on the tip of your tongue that refuses to arrive.\n\nBut the mountain doesn't turn you away. The gates open — slowly, grudgingly, with a grinding of crystal on crystal — because you're here. You climbed the mountain. You faced the riddle. You didn't solve it, but you stood in front of it without flinching.\n\nSometimes showing up is its own answer.",
    forceMessage: "The Oracle's voice comes one last time. Gentle. The gentleness of a parent explaining something the child will laugh about later — not because it's funny, but because it's so obvious they'll wonder how they missed it.\n\n\"The riddle changed because YOU approached it. The Sphinx asked about all humans. The mountain is asking about one.\"\n\nA pause. Warm.\n\n\"The answer is your name. It was always your name.\"\n\nYou say it. The gates open. The crystal sings.\n\nYou understand now. The riddle wasn't the last test. The answer was. Not the cleverness of getting it right — the courage of saying your own name at the gates of the gods and believing it was enough.\n\nIt was. It always was.",
  },
};
