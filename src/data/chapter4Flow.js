import { chapter4Scenes } from "./chapter4";
import { chapter4Puzzles } from "./chapter4Puzzles";
import {
  ch4ProphecyPool, ch4EncounterScylla, ch4ExplorationNodes,
  ch4DialogueDuel, ch4Echo, ch4DreamData, ch4TickerMessages,
  ch4OathOpportunity,
} from "./chapter4Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter4Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw
    { type: "prophecy", prophecyPool: ch4ProphecyPool },

    // Scene 1: Port at Rhegion — choose your captain
    { type: "scene", scene: chapter4Scenes.portRhegion, tickerMessages: ch4TickerMessages },

    // Navigation puzzle
    { type: "puzzle", puzzle: chapter4Puzzles.navigationPuzzle },

    // Dialogue Duel: Poseidon as captain (conditional on choosing old captain)
    { type: "dialogueDuel", duel: ch4DialogueDuel, condition: { flag: "choseOldCaptain" } },

    // Major Encounter: Scylla
    { type: "encounter", encounter: ch4EncounterScylla },

    // Scene 2: The Crossing
    { type: "scene", scene: chapter4Scenes.theCrossing },

    // Scene 3: The Aftermath
    { type: "scene", scene: chapter4Scenes.aftermath },

    // Dream/Camp on the Sicilian coast
    { type: "dream", dreamData: ch4DreamData },

    // Exploration: Sicily coast (pick 3 of 4)
    {
      type: "exploration",
      nodes: ch4ExplorationNodes.nodes,
      picks: ch4ExplorationNodes.picks,
      title: ch4ExplorationNodes.title,
      description: ch4ExplorationNodes.description,
    },

    // Memory Echo — vision of Olympus and blood
    { type: "memoryEcho", echo: ch4Echo },

    // Oath Opportunity: Oath of the Sea
    { type: "oathOpportunity", oathData: ch4OathOpportunity },

    // Scene 4: Sicilian shore — departure
    { type: "scene", scene: chapter4Scenes.sicilianShore },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
