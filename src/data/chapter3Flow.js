import { chapter3Scenes, chapter3Fork } from "./chapter3";
import { chapter3Puzzles } from "./chapter3Puzzles";
import { isStepAccessible } from "../engine/flow";

export function getChapter3Flow(flags, inventory, forkChoice) {
  const flow = [];

  // Scene 1: The City, Finally
  flow.push({ type: "scene", scene: chapter3Scenes.cityArrival });

  // Quest Fork: Two Things Need Doing
  if (!forkChoice) {
    flow.push({ type: "questFork", fork: chapter3Fork });
    return flow;
  }

  // Path A: Messenger (Find Mira)
  if (forkChoice === "messengerPath") {
    flow.push({ type: "scene", scene: chapter3Scenes.mira1 });
    flow.push({ type: "puzzle", puzzle: chapter3Puzzles.messengerPuzzle });
    flow.push({ type: "scene", scene: chapter3Scenes.mira2 });
  }

  // Path B: Arena (Help Castor)
  if (forkChoice === "arenaPath") {
    flow.push({ type: "scene", scene: chapter3Scenes.castor1 });
    flow.push({ type: "puzzle", puzzle: chapter3Puzzles.arenaPuzzle });
    flow.push({ type: "scene", scene: chapter3Scenes.castor2 });
  }

  // Tier 2 puzzle: Sphinx's Papyrus (conditional)
  flow.push({
    type: "puzzle",
    puzzle: chapter3Puzzles.sphinxFinalPuzzle,
    condition: { item: "sphinxPapyrus" },
  });

  // Convergence scene
  flow.push({ type: "scene", scene: chapter3Scenes.convergence });

  return flow.filter(step => isStepAccessible(step, flags, inventory));
}
