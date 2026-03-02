import chapter1 from "./chapter1";
import { chapter1Puzzles } from "./chapter1Puzzles";
import { isStepAccessible } from "../engine/flow";

export function getChapter1Flow(flags, inventory) {
  const [scene1, scene2, scene3] = chapter1;

  const flow = [
    { type: "scene", scene: scene1 },
    { type: "scene", scene: scene2 },
    { type: "puzzle", puzzle: chapter1Puzzles.sphinxRiddle },
    { type: "scene", scene: scene3 },
    { type: "puzzle", puzzle: chapter1Puzzles.oracleDoor },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory));
}
