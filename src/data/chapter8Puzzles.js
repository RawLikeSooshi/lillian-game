/**
 * Chapter 8 Puzzles
 * Labyrinth direction puzzle + the labyrinth's riddle
 */

export const chapter8Puzzles = {
  labyrinthDirections: {
    id: "ch8_puzzle1",
    tier: 1,
    title: "The Shifting Corridors",
    setup: "The labyrinth's corridors shift, but not randomly. Ariadne whispered a rule before you entered: 'The walls move clockwise every hundred heartbeats. The center is always north. Daedalus built the maze to test logic, not luck.'",
    question: "You're facing a T-junction. You need to go NORTH (toward the center).\n\nRight now, your path options are: LEFT (which goes West) and RIGHT (which goes East).\n\nBut the walls will shift clockwise in about 30 heartbeats.\n\nAfter the shift:\n- What was West becomes North\n- What was North becomes East\n- What was East becomes South\n- What was South becomes West\n\nIf you wait for the shift and THEN choose, which path leads to the center?",
    type: "multipleChoice",
    options: [
      "Turn LEFT now (currently West) — after the shift, it will point North toward the center",
      "Turn RIGHT now (currently East) — after the shift, it will point South, away from center",
      "Wait for TWO shifts — then both paths reset",
      "It doesn't matter — the labyrinth is random",
    ],
    correctIndex: 0,
    hints: [
      "Think about what happens to each direction after a clockwise shift. West becomes... what?",
      "Clockwise rotation: N->E, E->S, S->W, W->N. So the LEFT path (West) becomes North after one shift. The RIGHT path (East) becomes South. Only one of those leads to the center.",
    ],
    askParentPrompt: null,
    onSolve: { Wisdom: 2, Cunning: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedLabyrinthDirections",
    skipFlag: "skippedLabyrinthDirections",
    solveMessage: "The corridors grind and shift. The LEFT path — which was West — rotates to face North. Directly toward the center. You step through without hesitation. The labyrinth hums. It respects the solution.",
    skipMessage: "You pick a direction and hope. The labyrinth shifts around you, and you end up further from the center. But you keep walking. Sometimes persistence replaces precision.",
    forceMessage: "Ariadne's voice echoes in your memory: 'Clockwise. Always clockwise.' You trace the rotation in the dust — West becomes North. The LEFT path. You take it just as the walls begin to move. Perfect timing.",
  },

  labyrinthRiddle: {
    id: "ch8_puzzle2",
    tier: 2,
    title: "The Labyrinth Speaks",
    setup: "Deep in the maze, you reach a door that won't open. There's no lock — just words carved into the stone, glowing faintly. The labyrinth itself is asking you a question. Above the riddle, smaller text reads: 'Daedalus carved this door for the one who understands what I am.'",
    question: "The door reads:\n\n'I have no beginning, though I was begun.\nI have no end, though I was done.\nI trap the proud but free the wise.\nI am not my walls — I am what's inside.\nWhat am I?'\n\nWhat is the answer?",
    type: "multipleChoice",
    options: [
      "A labyrinth",
      "A question",
      "A circle",
      "A prison",
    ],
    correctIndex: 1,
    hints: [
      "The riddle says 'I am not my walls.' So the answer isn't the physical labyrinth itself. Think about what the labyrinth contains at its center — not a creature, but something more abstract.",
      "What has no beginning or end once it exists? What traps people who are too proud to consider it? What frees people who are wise enough to face it? The labyrinth was built around a moral question. The answer IS the question.",
    ],
    askParentPrompt: "This riddle is about the difference between a thing and its purpose. What was the labyrinth really built to contain — the Minotaur, or the question of what to do about him? Talk about what makes a question harder than a maze.",
    onSolve: { Wisdom: 2, Empathy: 1 },
    onSkip: { Wisdom: 1 },
    solveFlag: "solvedLabyrinthRiddle",
    skipFlag: "skippedLabyrinthRiddle",
    solveMessage: "'A question,' you say. The door glows brighter. The carved letters rearrange: 'CORRECT. A question has no beginning once asked. No end once considered. It traps the proud and frees the wise. And I — this labyrinth — am not my walls. I am the question at my center: what do you do with someone who suffers?' The door opens.",
    skipMessage: "The door remains closed. You press your hand against it and push — and it opens anyway. Not because you solved the riddle, but because the labyrinth decided you'd tried hard enough. Some doors open for effort, not answers.",
    forceMessage: "The riddle clicks into place. 'A question,' you say. The labyrinth hums — the deep, satisfied sound of a test completed. The door swings open, and beyond it, the path to the center is clear. The labyrinth wasn't testing your cleverness. It was testing whether you understood what it was for.",
  },
};
