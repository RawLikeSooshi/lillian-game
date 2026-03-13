import chapter1 from "./chapter1";
import { chapter1Puzzles } from "./chapter1Puzzles";
import { ch1ProphecyPool, ch1ExplorationNodes, ch1Echo } from "./chapter1Expanded";
import { isStepAccessible } from "../engine/flow";

export function getChapter1Flow(flags, inventory, _forkChoice, reputation, worldState) {
  const [scene1, scene2, scene3] = chapter1;

  const flow = [
    // Prophecy Draw — chapter opens with fate cards
    { type: "prophecy", prophecyPool: ch1ProphecyPool },

    // Scene 1: The old woman on the road
    { type: "scene", scene: scene1 },

    // Scene 2: The crossroads / Sphinx
    { type: "scene", scene: scene2 },

    // Exploration: The hills before Delphi (pick 2 of 3)
    {
      type: "exploration",
      nodes: ch1ExplorationNodes.nodes,
      picks: ch1ExplorationNodes.picks,
      title: ch1ExplorationNodes.title,
      description: ch1ExplorationNodes.description,
    },

    // Puzzle 1: Sphinx's riddle (only if took forest path)
    { type: "puzzle", puzzle: chapter1Puzzles.sphinxRiddle, condition: { flag: "tookForestPath" } },

    // Memory Echo — vision fragments (after Sphinx encounter)
    { type: "memoryEcho", echo: ch1Echo },

    // Scene 3: The Temple of Apollo
    { type: "scene", scene: scene3 },

    // Puzzle 2: Oracle's antechamber
    { type: "puzzle", puzzle: chapter1Puzzles.oracleDoor },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory, reputation, worldState));
}
