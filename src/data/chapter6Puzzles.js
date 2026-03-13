/**
 * Chapter 6 Puzzles
 * Persephone's riddle — what grows in darkness
 */

export const chapter6Puzzles = {
  persephonesRiddle: {
    id: "ch6_puzzle1",
    tier: 2,
    title: "Persephone's Riddle",
    setup: "Before Persephone will speak the full truth, she pauses. The garden around you dims — the dark flowers closing half an inch, the underground streams going quiet, as if the whole kingdom is leaning in.\n\n\"I ask this of everyone who enters my court,\" she says. Her voice is formal now — not the queen-to-guest voice but the older voice, the voice of the riddle-keeper, the one that has asked this question of heroes and mortals and gods for longer than anyone can count.\n\n\"The answer tells me what kind of person you are. Not whether you're clever — I don't care about clever. Whether you understand the world beneath the world.\"",
    question: "Persephone speaks:\n\n'I have no sun, yet I bloom.\nI have no rain, yet I grow.\nI am planted by pain and watered by time.\nThe dead carry me, but only the living can give me.\nI am strongest in the dark.\n\nWhat am I?'\n\nShe watches you think. Her eyes are patient — the patience of someone who rules a kingdom where time has no meaning.\n\n'Don't rush,' she says. 'The Underworld has no clocks.'",
    type: "freeResponse",
    acceptableAnswers: ["hope", "memory", "love", "grief", "roots"],
    hints: [
      "Think about what the dead carry with them — not objects, but something invisible. What did the shade child in the Fields of Asphodel still have, even after death?",
      "Persephone's garden grows in darkness. What keeps it alive? Not water or sunlight — something that comes from inside. The riddle says 'planted by pain and watered by time.' What emotion grows stronger the longer you carry it?",
    ],
    askParentPrompt: "Persephone's riddle is about something that grows in darkness. Talk with your parent about what the dead might carry that only the living can give. Think about hope, memory, love, or grief — more than one answer can be right. What do you think grows strongest when there's no light?",
    onSolve: { Wisdom: 2, Empathy: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedPersephonesRiddle",
    skipFlag: "skippedPersephonesRiddle",
    solveMessage: "Persephone's eyes widen — then soften. The garden brightens. One pomegranate flower blooms in the space between you, fast and vivid, as if your answer gave it permission.\n\n\"Yes,\" she says. \"That is the answer. Or one of them.\"\n\nShe looks at the flower.\n\n\"The riddle has many true answers — hope, memory, love, grief. Each one grows in darkness. Each one is planted by pain. Each one is strongest underground, where no one can see it except the person carrying it.\"\n\nShe nods — to herself, to the garden, to whatever force decided that you would be the one standing here today.\n\n\"You understand the Underworld. That means you're ready for what I have to tell you.\"",
    skipMessage: "Persephone waits. The silence isn't uncomfortable — it's vast, the way silence is vast in a place where there's nothing to fill it.\n\nWhen no answer comes, she doesn't look disappointed. She looks like someone who has planted a seed and is content to wait for it to grow.\n\n\"The answer will come to you later,\" she says. \"Riddles are seeds. They grow in their own time — sometimes years after they're planted.\"\n\nShe tells you the truth anyway. The riddle was a test of character, not a gate. The gate was never locked.",
    forceMessage: "Your parent helps you think it through — talking about what grows in darkness, what the dead carry, what only the living can give. Together, the answer takes shape — not suddenly but gradually, like a flower opening.\n\nPersephone watches. When the answer comes, she nods.\n\n\"The living help each other understand what the dead cannot explain alone,\" she says. \"That is its own kind of answer — perhaps the deepest one.\"\n\nShe is pleased. Not with the solution, but with the asking. With the fact that you didn't carry this alone.",
  },
};
