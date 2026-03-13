import chapter2 from "./chapter2";
import { chapter2Puzzles } from "./chapter2Puzzles";
import {
  ch2ProphecyPool, ch2Encounter, ch2ExplorationNodes,
  ch2DialogueDuel, ch2DreamData, ch2TickerMessages,
} from "./chapter2Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter2Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const [s1, s2, s3, s4, s5] = chapter2;

  const flow = [
    // Prophecy Draw — chapter opens with fate cards
    { type: "prophecy", prophecyPool: ch2ProphecyPool },

    // Scene 1: The Market at Corinth
    { type: "scene", scene: s1, tickerMessages: ch2TickerMessages },

    // First Encounter: Road bandits (between market and figure scenes)
    { type: "encounter", encounter: ch2Encounter },

    // Scene 2: The Figure at the Well
    { type: "scene", scene: s2 },

    // Puzzle 1: The Figure's Test
    { type: "puzzle", puzzle: chapter2Puzzles.figureTest },

    // Scene 3: The Dilemma
    { type: "scene", scene: s3 },

    // Exploration Nodes (4 nodes, pick 2)
    {
      type: "exploration",
      nodes: ch2ExplorationNodes.nodes,
      picks: ch2ExplorationNodes.picks,
      title: ch2ExplorationNodes.title,
      description: ch2ExplorationNodes.description,
    },

    // Dream/Camp — rest/dream/commune before the agents
    { type: "dream", dreamData: ch2DreamData },

    // Dialogue Duel: Inn deal with Drako
    { type: "dialogueDuel", duel: ch2DialogueDuel },

    // Scene 4: The Consequence (agents on the road)
    { type: "scene", scene: s4, tickerMessages: ch2TickerMessages },

    // Scene 5: The Easy Way Out
    { type: "scene", scene: s5 },

    // Sphinx Papyrus puzzle (conditional on having the item)
    { type: "puzzle", puzzle: chapter2Puzzles.sphinxPapyrus, condition: { item: "sphinxPapyrus" } },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
