import { chapter5Scenes } from "./chapter5";
import { chapter5Puzzles } from "./chapter5Puzzles";
import {
  ch5ProphecyPool, ch5EncounterLadon, ch5ExplorationNodes,
  ch5DialogueDuel, ch5Echo, ch5SacrificeData, ch5DreamData, ch5TickerMessages,
  ch5OathOpportunity,
} from "./chapter5Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter5Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw
    { type: "prophecy", prophecyPool: ch5ProphecyPool },

    // Scene 1: Edge of the Map — reality warps, meet Hermes in disguise
    { type: "scene", scene: chapter5Scenes.edgeOfMap, tickerMessages: ch5TickerMessages },

    // Exploration: Garden periphery (pick 2 of 4)
    {
      type: "exploration",
      nodes: ch5ExplorationNodes.nodes,
      picks: ch5ExplorationNodes.picks,
      title: ch5ExplorationNodes.title,
      description: ch5ExplorationNodes.description,
    },

    // Dialogue Duel: Hermes as fellow traveler
    { type: "dialogueDuel", duel: ch5DialogueDuel },

    // Hesperides riddle puzzle
    { type: "puzzle", puzzle: chapter5Puzzles.hesperidesRiddle },

    // Scene 2: Meeting the Hesperides
    { type: "scene", scene: chapter5Scenes.hesperides },

    // Major Encounter: Ladon (conditional on choosing the fight path)
    { type: "encounter", encounter: ch5EncounterLadon, condition: { flag: "fightPathLadon" } },

    // Scene 3: Dragon Ladon — empathy vs combat
    { type: "scene", scene: chapter5Scenes.dragonLadon },

    // Sacrifice: First sacrifice (conditional on not taking the apple directly in scene)
    { type: "sacrifice", sacrifice: ch5SacrificeData, condition: { flag: "sacrificedForLadon" } },

    // Scene 4: The Golden Apple — the choice
    { type: "scene", scene: chapter5Scenes.goldenApple },

    // Dream/Camp at the garden's edge
    { type: "dream", dreamData: ch5DreamData },

    // Memory Echo — involuntary, the big reveal
    { type: "memoryEcho", echo: ch5Echo },

    // Oath Opportunity: Oath of the Garden
    { type: "oathOpportunity", oathData: ch5OathOpportunity },

    // Scene 5: The Exit — Zeus identity revealed, Hermes unmasked
    { type: "scene", scene: chapter5Scenes.theExit },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
