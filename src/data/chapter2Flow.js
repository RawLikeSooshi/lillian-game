import chapter2 from "./chapter2";
import { chapter2Puzzles } from "./chapter2Puzzles";
import { isStepAccessible } from "../engine/flow";

export function getChapter2Flow(flags, inventory) {
  const [s1, s2, s3, s4, s5] = chapter2;

  const flow = [
    { type: "scene", scene: s1 },
    { type: "scene", scene: s2 },
    { type: "puzzle", puzzle: chapter2Puzzles.figureTest },
    { type: "scene", scene: s3 },
    { type: "scene", scene: s4 },
    { type: "scene", scene: s5 },
    { type: "puzzle", puzzle: chapter2Puzzles.sphinxPapyrus, condition: { item: "sphinxPapyrus" } },
  ];

  return flow.filter(step => isStepAccessible(step, flags, inventory));
}
