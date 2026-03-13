import { chapter9Scenes } from "./chapter9";
import { chapter9Puzzles } from "./chapter9Puzzles";
import {
  ch9ProphecyPool, ch9EncounterBattle, ch9ExplorationNodes,
  ch9DialogueDuel, ch9Echo, ch9DreamData, ch9TickerMessages,
  ch9SacrificeForgedItem, ch9SacrificeStatPoint, ch9SacrificeDivinePower,
} from "./chapter9Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter9Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw — fate cards for the siege
    { type: "prophecy", prophecyPool: ch9ProphecyPool },

    // Scene 1: The Return — Athens under divine siege
    { type: "scene", scene: chapter9Scenes.theReturn, tickerMessages: ch9TickerMessages },

    // Exploration: Prepare Athens (pick 2 of 4)
    {
      type: "exploration",
      nodes: ch9ExplorationNodes.nodes,
      picks: ch9ExplorationNodes.picks,
      title: ch9ExplorationNodes.title,
      description: ch9ExplorationNodes.description,
    },

    // Scene 2: Council with Athena — strategic planning
    { type: "scene", scene: chapter9Scenes.councilAthena },

    // Battle Plan puzzle — position troops and defenses
    { type: "puzzle", puzzle: chapter9Puzzles.battlePlanPuzzle },

    // Sacrifice: Forged item to power wall defenses (conditional on having the item)
    { type: "sacrifice", sacrifice: ch9SacrificeForgedItem, condition: { item: "tridentShard" } },

    // Sacrifice: Stat point to shield companion
    { type: "sacrifice", sacrifice: ch9SacrificeStatPoint },

    // Sacrifice: Divine power to close Ares' gate (conditional on having the power)
    { type: "sacrifice", sacrifice: ch9SacrificeDivinePower, condition: { power: "stormcalling" } },

    // Major Encounter: The Battle of Athens — DC 16, 5 rounds, BIGGEST combat
    { type: "encounter", encounter: ch9EncounterBattle },

    // Scene 3: The Battle aftermath — who survived, what was lost
    { type: "scene", scene: chapter9Scenes.theBattle },

    // Dream/Camp — war-dreams in the shadow of the Parthenon
    { type: "dream", dreamData: ch9DreamData },

    // Dialogue Duel: Hera's Emissary — Resolve 14, 4 rounds
    { type: "dialogueDuel", duel: ch9DialogueDuel },

    // Scene 4: Hera's Offer — the massive moral dilemma
    { type: "scene", scene: chapter9Scenes.herasEmissary },

    // Memory Echo — Zeus speaks directly. baseDC 5 = unmissable
    { type: "memoryEcho", echo: ch9Echo },

    // Scene 5: The Choice — Olympus, mortality, or the third path
    { type: "scene", scene: chapter9Scenes.theChoice },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
