import { chapter7Scenes } from "./chapter7";
import { chapter7Puzzles } from "./chapter7Puzzles";
import {
  ch7ProphecyPool, ch7EncounterTest, ch7ExplorationNodes,
  ch7DialogueDuel, ch7Echo, ch7SacrificeData, ch7DreamData, ch7TickerMessages,
} from "./chapter7Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter7Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw
    { type: "prophecy", prophecyPool: ch7ProphecyPool },

    // Scene 1: Arriving on volcanic Lemnos
    { type: "scene", scene: chapter7Scenes.volcanicShore, tickerMessages: ch7TickerMessages },

    // Exploration: Lemnos (pick 2 of 3)
    {
      type: "exploration",
      nodes: ch7ExplorationNodes.nodes,
      picks: ch7ExplorationNodes.picks,
      title: ch7ExplorationNodes.title,
      description: ch7ExplorationNodes.description,
    },

    // Scene 2: Meeting Hephaestus
    { type: "scene", scene: chapter7Scenes.theForge },

    // Dialogue Duel: Hephaestus — honest conversation
    { type: "dialogueDuel", duel: ch7DialogueDuel },

    // Scene 3: Forging your weapon
    { type: "scene", scene: chapter7Scenes.theMaking },

    // Sacrifice: Power for weapon enhancement
    { type: "sacrifice", sacrifice: ch7SacrificeData },

    // Puzzle: Artifact identification (if explored the workshop)
    { type: "puzzle", puzzle: chapter7Puzzles.artifactPuzzle, condition: { flag: "exploredWorkshop" } },

    // Major Encounter: Test the forged weapon
    { type: "encounter", encounter: ch7EncounterTest },

    // Scene 4: The weapon test narrative
    { type: "scene", scene: chapter7Scenes.theTest },

    // Dream/Camp on the volcanic plateau
    { type: "dream", dreamData: ch7DreamData },

    // Memory Echo — fire visions
    { type: "memoryEcho", echo: ch7Echo },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
