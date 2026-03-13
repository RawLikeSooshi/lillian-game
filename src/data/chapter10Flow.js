import { chapter10Scenes } from "./chapter10";
import { chapter10Puzzles } from "./chapter10Puzzles";
import {
  ch10ProphecyPool, ch10EncounterAscent, ch10ExplorationNodes,
  ch10DialogueDuel, ch10Echo, ch10DreamData, ch10TickerMessages,
  ch10SacrificeData,
} from "./chapter10Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter10Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Final Prophecy Draw
    { type: "prophecy", prophecyPool: ch10ProphecyPool },

    // Scene 1: The Ascent — climbing Olympus
    { type: "scene", scene: chapter10Scenes.theAscent, tickerMessages: ch10TickerMessages },

    // Major Encounter: Endurance test climbing Olympus (DC 15, 3 rounds)
    { type: "encounter", encounter: ch10EncounterAscent },

    // Puzzle: The Riddle of Identity at the gates
    { type: "puzzle", puzzle: chapter10Puzzles.riddleOfIdentity },

    // Exploration: Olympus summit (pick 2 of 3)
    {
      type: "exploration",
      nodes: ch10ExplorationNodes.nodes,
      picks: ch10ExplorationNodes.picks,
      title: ch10ExplorationNodes.title,
      description: ch10ExplorationNodes.description,
    },

    // Dream/Camp: Final night on Olympus
    { type: "dream", dreamData: ch10DreamData },

    // Memory Echo: Complete — all fragments assembled (baseDC: 1, automatic)
    { type: "memoryEcho", echo: ch10Echo },

    // Scene 2: The Hall of the Gods — retrospective
    { type: "scene", scene: chapter10Scenes.hallOfTheGods },

    // Dialogue Duel: Zeus (Resolve 10, vulnerable to everything genuine)
    { type: "dialogueDuel", duel: ch10DialogueDuel },

    // Scene 3: Zeus — father meets daughter
    { type: "scene", scene: chapter10Scenes.zeus },

    // Sacrifice: The Oracle (required for the Third Path)
    { type: "sacrifice", sacrifice: ch10SacrificeData, condition: { flag: "completedEcho" } },

    // Scene 4: The Three Paths — THE final choice
    { type: "scene", scene: chapter10Scenes.threePaths },

    // Scene 5: Epilogue — wrap-up based on choice
    { type: "scene", scene: chapter10Scenes.epilogue },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
