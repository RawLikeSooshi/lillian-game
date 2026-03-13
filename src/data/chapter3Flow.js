import { chapter3Scenes, chapter3Fork } from "./chapter3";
import { chapter3Puzzles } from "./chapter3Puzzles";
import {
  ch3ProphecyPool, ch3EncounterWarehouse, ch3EncounterSaboteur,
  ch3ExplorationNodes, ch3DialogueDuel, ch3Echo,
  ch3DreamData, ch3TickerMessages, ch3OathOpportunity,
} from "./chapter3Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter3Flow(flags, inventory, forkChoice, reputation, worldState) {
  const flow = [];

  // Prophecy Draw — chapter opens with fate cards
  flow.push({ type: "prophecy", prophecyPool: ch3ProphecyPool });

  // Scene 1: The City, Finally
  flow.push({ type: "scene", scene: chapter3Scenes.cityArrival, tickerMessages: ch3TickerMessages });

  // Exploration: Corinth (pick 2 of 4, before fork)
  flow.push({
    type: "exploration",
    nodes: ch3ExplorationNodes.nodes,
    picks: ch3ExplorationNodes.picks,
    title: ch3ExplorationNodes.title,
    description: ch3ExplorationNodes.description,
  });

  // Dream/Camp in city inn
  flow.push({ type: "dream", dreamData: ch3DreamData });

  // Quest Fork: Two Things Need Doing
  if (!forkChoice) {
    flow.push({ type: "questFork", fork: chapter3Fork });
    return flow;
  }

  // Path A: Messenger (Find Mira)
  if (forkChoice === "messengerPath") {
    flow.push({ type: "scene", scene: chapter3Scenes.mira1 });
    // Encounter: Warehouse confrontation
    flow.push({ type: "encounter", encounter: ch3EncounterWarehouse });
    flow.push({ type: "puzzle", puzzle: chapter3Puzzles.messengerPuzzle });
    flow.push({ type: "scene", scene: chapter3Scenes.mira2 });
  }

  // Path B: Arena (Help Castor)
  if (forkChoice === "arenaPath") {
    flow.push({ type: "scene", scene: chapter3Scenes.castor1 });
    flow.push({ type: "puzzle", puzzle: chapter3Puzzles.arenaPuzzle });
    // Encounter: Confronting the saboteur
    flow.push({ type: "encounter", encounter: ch3EncounterSaboteur });
    flow.push({ type: "scene", scene: chapter3Scenes.castor2 });
  }

  // Tier 2 puzzle: Sphinx's Papyrus (conditional)
  flow.push({
    type: "puzzle",
    puzzle: chapter3Puzzles.sphinxFinalPuzzle,
    condition: { item: "sphinxPapyrus" },
  });

  // Dialogue Duel: Helena (convergence woman)
  flow.push({ type: "dialogueDuel", duel: ch3DialogueDuel });

  // Convergence scene
  flow.push({ type: "scene", scene: chapter3Scenes.convergence });

  // Memory Echo — vision of Zeus and the cradle
  flow.push({ type: "memoryEcho", echo: ch3Echo });

  // Oath Opportunity: Oath of Return (Niko) — only if allied
  flow.push({
    type: "oathOpportunity",
    oathData: ch3OathOpportunity,
    condition: { flag: "madeAllyOfNiko" },
  });

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
