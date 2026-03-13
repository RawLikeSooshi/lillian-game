import { chapter8Scenes } from "./chapter8";
import { chapter8Puzzles } from "./chapter8Puzzles";
import {
  ch8ProphecyPool, ch8EncounterMinotaur, ch8ExplorationNodes,
  ch8DialogueDuel, ch8Echo, ch8SacrificeData, ch8DreamData, ch8TickerMessages,
} from "./chapter8Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter8Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw
    { type: "prophecy", prophecyPool: ch8ProphecyPool },

    // Scene 1: Palace of Minos — political intrigue, meet Ariadne
    { type: "scene", scene: chapter8Scenes.palaceMinos, tickerMessages: ch8TickerMessages },

    // Dialogue Duel: King Minos — political, tricky
    { type: "dialogueDuel", duel: ch8DialogueDuel },

    // Scene 2: Labyrinth entrance — Ariadne offers thread, inventory beat
    { type: "scene", scene: chapter8Scenes.labyrinthEntrance },

    // Puzzle 1: Labyrinth direction puzzle
    { type: "puzzle", puzzle: chapter8Puzzles.labyrinthDirections },

    // Exploration: Labyrinth interior (pick 2 of 4)
    {
      type: "exploration",
      nodes: ch8ExplorationNodes.nodes,
      picks: ch8ExplorationNodes.picks,
      title: ch8ExplorationNodes.title,
      description: ch8ExplorationNodes.description,
    },

    // Puzzle 2: The labyrinth's riddle (Tier 2)
    { type: "puzzle", puzzle: chapter8Puzzles.labyrinthRiddle },

    // Scene 3: Inside the labyrinth — navigation and courage
    { type: "scene", scene: chapter8Scenes.insideLabyrinth },

    // Major Encounter: The Minotaur (DC 15 fight OR DC 16 Empathy heal)
    { type: "encounter", encounter: ch8EncounterMinotaur },

    // Scene 4: The Minotaur — the hardest moral question
    { type: "scene", scene: chapter8Scenes.theMinotaur },

    // Dream/Camp — processing the labyrinth
    { type: "dream", dreamData: ch8DreamData },

    // Memory Echo — Zeus sees you. "Soon."
    { type: "memoryEcho", echo: ch8Echo },

    // Sacrifice: The woolen thread (conditional on having it)
    { type: "sacrifice", sacrifice: ch8SacrificeData, condition: { item: "woolenThread" } },

    // Scene 5: The exit — Ariadne waits
    { type: "scene", scene: chapter8Scenes.theExit },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
