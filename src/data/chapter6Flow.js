import { chapter6Scenes } from "./chapter6";
import { chapter6Puzzles } from "./chapter6Puzzles";
import {
  ch6ProphecyPool, ch6EncounterCerberus, ch6ExplorationNodes,
  ch6DialogueDuel, ch6Echo, ch6DreamData, ch6TickerMessages,
  ch6SacrificeData, ch6RivalConversation,
} from "./chapter6Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter6Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const flow = [
    // Prophecy Draw
    { type: "prophecy", prophecyPool: ch6ProphecyPool },

    // Scene 1: Descent — Charon's ferry, temple coin pays passage
    { type: "scene", scene: chapter6Scenes.descent, tickerMessages: ch6TickerMessages },

    // Scene 2: Fields of Asphodel — the shade child
    { type: "scene", scene: chapter6Scenes.asphodel },

    // Sacrifice: let a shade send a memory to the living
    { type: "sacrifice", sacrificeData: ch6SacrificeData },

    // Major Encounter: Cerberus
    { type: "encounter", encounter: ch6EncounterCerberus },

    // Scene 3: Cerberus — narrative scene (stat-based approach)
    { type: "scene", scene: chapter6Scenes.cerberus },

    // Dream/Camp in the Underworld
    { type: "dream", dreamData: ch6DreamData },

    // Exploration: Underworld regions (pick 2 of 4)
    {
      type: "exploration",
      nodes: ch6ExplorationNodes.nodes,
      picks: ch6ExplorationNodes.picks,
      title: ch6ExplorationNodes.title,
      description: ch6ExplorationNodes.description,
    },

    // Rival conversation: Kira in the Underworld
    { type: "scene", scene: ch6RivalConversation },

    // Puzzle: Persephone's riddle
    { type: "puzzle", puzzle: chapter6Puzzles.persephonesRiddle },

    // Dialogue Duel: Persephone
    { type: "dialogueDuel", duel: ch6DialogueDuel },

    // Scene 4: Persephone's Court
    { type: "scene", scene: chapter6Scenes.persephonesCourt },

    // Memory Echo — full origin story
    { type: "memoryEcho", echo: ch6Echo },

    // Scene 5: The Truth — full origin revelation
    { type: "scene", scene: chapter6Scenes.theTruth },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
