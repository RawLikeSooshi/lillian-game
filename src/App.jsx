import { useState, useMemo, useEffect } from "react";
import { INITIAL_STATS, heroIdentity, getMythFigure } from "./engine/stats";
import { INITIAL_FLAGS, applyFlags } from "./engine/flags";
import { INITIAL_INVENTORY } from "./data/items";
import { applyInventoryChanges, removeItem } from "./engine/inventory";
import { resolveSceneText, resolveChoiceText } from "./engine/sceneText";
import { STEP_TYPES, getSceneCount, getSceneNumber } from "./engine/flow";
import { INITIAL_PUZZLE_STATE, checkAnswer, useHint, getHintCost } from "./engine/puzzleEngine";
import { getChapter1Flow } from "./data/chapter1Flow";
import { getChapter2Flow } from "./data/chapter2Flow";
import { getChapter3Flow } from "./data/chapter3Flow";
import WelcomeScreen from "./screens/WelcomeScreen";
import NameScreen from "./screens/NameScreen";
import SceneScreen from "./screens/SceneScreen";
import ResultScreen from "./screens/ResultScreen";
import ChapterEndScreen from "./screens/ChapterEndScreen";
import TransitionScreen from "./screens/TransitionScreen";
import PuzzleScreen from "./screens/PuzzleScreen";
import AskParentScreen from "./screens/AskParentScreen";
import PuzzleResultScreen from "./screens/PuzzleResultScreen";
import QuestForkScreen from "./screens/QuestForkScreen";
import QuestForkConfirmScreen from "./screens/QuestForkConfirmScreen";

export default function App() {
  const [phase, setPhase] = useState("welcome");
  const [heroName, setHeroName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [chapter, setChapter] = useState(1);
  const [stepIndex, setStepIndex] = useState(0);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [flags, setFlags] = useState(INITIAL_FLAGS);
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [lastChanges, setLastChanges] = useState({});
  const [choice, setChoice] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const [ch1EndStats, setCh1EndStats] = useState(null);
  const [ch2EndStats, setCh2EndStats] = useState(null);
  const [forkChoice, setForkChoice] = useState(null);
  const [puzzleState, setPuzzleState] = useState(INITIAL_PUZZLE_STATE);
  const [pendingForkChoice, setPendingForkChoice] = useState(null);
  const [inventoryGained, setInventoryGained] = useState([]);

  const flow = useMemo(() => {
    if (chapter === 1) return getChapter1Flow(flags, inventory);
    if (chapter === 2) return getChapter2Flow(flags, inventory);
    if (chapter === 3) return getChapter3Flow(flags, inventory, forkChoice);
    return [];
  }, [chapter, flags, inventory, forkChoice]);

  const currentStep = flow[stepIndex] || null;
  const totalScenes = getSceneCount(flow);
  const currentSceneNumber = getSceneNumber(flow, stepIndex);
  const figure = getMythFigure(stats);
  const identity = heroIdentity(stats);

  const resolvedScene = currentStep?.type === STEP_TYPES.SCENE
    ? resolveSceneText(currentStep.scene, flags, figure)
    : null;

  // After fork confirmation, flow recomputes — detect and set correct phase
  useEffect(() => {
    if (phase === "questForkConfirm" && forkChoice && currentStep) {
      if (currentStep.type === STEP_TYPES.SCENE) {
        setPhase(currentStep.scene.transitionText ? "transition" : "scene");
      } else if (currentStep.type === STEP_TYPES.PUZZLE) {
        setPuzzleState(INITIAL_PUZZLE_STATE);
        setPhase("puzzle");
      }
    }
  }, [flow, forkChoice]);

  const setPhaseForStep = (step) => {
    if (step.type === STEP_TYPES.SCENE) {
      const resolved = resolveSceneText(step.scene, flags, figure);
      setPhase(resolved.transitionText ? "transition" : "scene");
    } else if (step.type === STEP_TYPES.PUZZLE) {
      setPuzzleState(INITIAL_PUZZLE_STATE);
      setPhase("puzzle");
    } else if (step.type === STEP_TYPES.QUEST_FORK) {
      setPhase("questFork");
    }
  };

  const handleChoice = (c) => {
    const ns = { ...stats };
    Object.entries(c.statChanges).forEach(([k, v]) => {
      ns[k] = Math.max(0, Math.min(10, ns[k] + v));
    });
    const nf = applyFlags(flags, c.setsFlags);
    let ni = inventory;
    const gained = [];
    if (c.setsInventory) {
      const before = inventory.length;
      ni = applyInventoryChanges(inventory, c.setsInventory);
      for (let i = before; i < ni.length; i++) gained.push(ni[i]);
    }
    if (c.consumesItem && c.requiresItem) {
      ni = removeItem(ni, c.requiresItem);
    }
    const resolvedChoice = resolveChoiceText(c, getMythFigure(ns));

    setChoice(resolvedChoice);
    setStats(ns);
    setFlags(nf);
    setInventory(ni);
    setInventoryGained(gained);
    setLastChanges(c.statChanges);
    setPhase("result");
    setTimeout(() => setShowLesson(true), 700);
  };

  const handleAdvanceStep = () => {
    setShowLesson(false);
    setChoice(null);
    setLastChanges({});
    setInventoryGained([]);
    const nextIndex = stepIndex + 1;

    if (nextIndex >= flow.length) {
      setPhase("end");
      return;
    }

    setStepIndex(nextIndex);
    setPhaseForStep(flow[nextIndex]);
  };

  const handlePuzzleAnswer = (selectedIndex) => {
    const puzzle = currentStep.puzzle;
    const correct = checkAnswer(puzzle, selectedIndex);
    if (correct) {
      handlePuzzleSolve(puzzle);
    } else {
      // Wrong answer — let them try again (no penalty, just stay on puzzle)
      setPuzzleState(ps => ({ ...ps, selectedAnswer: selectedIndex }));
    }
  };

  const handlePuzzleSolve = (puzzle) => {
    const ns = { ...stats };
    if (puzzle.onSolve) {
      Object.entries(puzzle.onSolve).forEach(([k, v]) => {
        ns[k] = Math.max(0, Math.min(10, ns[k] + v));
      });
    }
    setStats(ns);
    const nf = applyFlags(flags, { [puzzle.solveFlag]: true });
    setFlags(nf);
    // Handle puzzle inventory rewards
    if (puzzle.setsInventory) {
      setInventory(prev => applyInventoryChanges(prev, puzzle.setsInventory));
    }
    setPuzzleState(ps => ({ ...ps, solved: true }));
    setPhase("puzzleResult");
  };

  const handlePuzzleSkip = (puzzle) => {
    const ns = { ...stats };
    if (puzzle.onSkip) {
      Object.entries(puzzle.onSkip).forEach(([k, v]) => {
        ns[k] = Math.max(0, Math.min(10, ns[k] + v));
      });
    }
    setStats(ns);
    const nf = applyFlags(flags, { [puzzle.skipFlag]: true });
    setFlags(nf);
    setPuzzleState(ps => ({ ...ps, skipped: true }));
    setPhase("puzzleResult");
  };

  const handleHint = () => {
    const puzzle = currentStep.puzzle;
    const cost = getHintCost(puzzle, puzzleState.hintsUsed);
    if (Object.keys(cost).length > 0) {
      const ns = { ...stats };
      Object.entries(cost).forEach(([k, v]) => {
        ns[k] = Math.max(0, Math.min(10, ns[k] + v));
      });
      setStats(ns);
    }
    setPuzzleState(useHint(puzzleState));
  };

  const handleForkSelect = (pathId) => {
    setPendingForkChoice(pathId);
    setPhase("questForkConfirm");
  };

  const handleForkConfirm = () => {
    const chosen = pendingForkChoice;
    const notChosen = chosen === "messengerPath" ? "arenaPath" : "messengerPath";
    const nf = applyFlags(flags, {
      [`${chosen}_chosen`]: true,
      [`${notChosen}_notTaken`]: true,
    });
    setFlags(nf);
    setForkChoice(chosen);
    setPendingForkChoice(null);
    // Flow recomputes via useMemo — fork step replaced by path steps.
    // useEffect above will detect this and set the correct phase.
  };

  const handleContinueToChapter2 = () => {
    setCh1EndStats({ ...stats });
    setChapter(2);
    setStepIndex(0);
    setChoice(null);
    setLastChanges({});
    setForkChoice(null);
    setPhase("scene");
  };

  const handleContinueToChapter3 = () => {
    setCh2EndStats({ ...stats });
    setChapter(3);
    setStepIndex(0);
    setChoice(null);
    setLastChanges({});
    setForkChoice(null);
    setPhase("scene");
  };

  const reset = () => {
    setPhase("welcome");
    setStats(INITIAL_STATS);
    setFlags(INITIAL_FLAGS);
    setStepIndex(0);
    setChapter(1);
    setHeroName("");
    setNameInput("");
    setLastChanges({});
    setChoice(null);
    setShowLesson(false);
    setCh1EndStats(null);
    setCh2EndStats(null);
    setInventory(INITIAL_INVENTORY);
    setForkChoice(null);
    setPuzzleState(INITIAL_PUZZLE_STATE);
    setPendingForkChoice(null);
    setInventoryGained([]);
  };

  // --- Phase routing ---

  if (phase === "welcome") {
    return <WelcomeScreen onBegin={() => setPhase("name")} />;
  }

  if (phase === "name") {
    return (
      <NameScreen
        nameInput={nameInput}
        onNameChange={setNameInput}
        onSubmitName={(name) => { setHeroName(name); setPhase("scene"); }}
      />
    );
  }

  if (phase === "transition" && currentStep?.type === STEP_TYPES.SCENE) {
    return (
      <TransitionScreen
        heroName={heroName}
        transitionText={resolvedScene.transitionText}
        inventory={inventory}
        stats={stats}
        chapter={chapter}
        onContinue={() => setPhase("scene")}
      />
    );
  }

  if (phase === "scene" && currentStep?.type === STEP_TYPES.SCENE && resolvedScene) {
    return (
      <SceneScreen
        heroName={heroName}
        scene={resolvedScene}
        sceneIndex={currentSceneNumber - 1}
        totalScenes={totalScenes}
        stats={stats}
        inventory={inventory}
        flags={flags}
        onChoice={handleChoice}
        chapter={chapter}
      />
    );
  }

  if (phase === "result" && choice) {
    return (
      <ResultScreen
        heroName={heroName}
        scene={resolvedScene}
        stats={stats}
        inventory={inventory}
        lastChanges={lastChanges}
        choice={choice}
        showLesson={showLesson}
        onNext={handleAdvanceStep}
        isLastScene={stepIndex >= flow.length - 1}
        chapter={chapter}
        inventoryGained={inventoryGained}
      />
    );
  }

  if (phase === "puzzle" && currentStep?.type === STEP_TYPES.PUZZLE) {
    return (
      <PuzzleScreen
        heroName={heroName}
        puzzle={currentStep.puzzle}
        puzzleState={puzzleState}
        stats={stats}
        inventory={inventory}
        chapter={chapter}
        onAnswer={handlePuzzleAnswer}
        onHint={handleHint}
        onSkip={() => handlePuzzleSkip(currentStep.puzzle)}
        onAskParent={currentStep.puzzle.tier === 2 ? () => setPhase("askParent") : null}
      />
    );
  }

  if (phase === "askParent" && currentStep?.type === STEP_TYPES.PUZZLE) {
    return (
      <AskParentScreen
        puzzle={currentStep.puzzle}
        onBack={() => setPhase("puzzle")}
      />
    );
  }

  if (phase === "puzzleResult") {
    return (
      <PuzzleResultScreen
        puzzle={currentStep.puzzle}
        puzzleState={puzzleState}
        stats={stats}
        inventory={inventory}
        onContinue={handleAdvanceStep}
      />
    );
  }

  if (phase === "questFork" && currentStep?.type === STEP_TYPES.QUEST_FORK) {
    return (
      <QuestForkScreen
        fork={currentStep.fork}
        heroName={heroName}
        stats={stats}
        inventory={inventory}
        onSelect={handleForkSelect}
      />
    );
  }

  if (phase === "questForkConfirm") {
    const fork = currentStep?.fork || flow[stepIndex]?.fork;
    return (
      <QuestForkConfirmScreen
        fork={fork}
        selectedPath={pendingForkChoice}
        onConfirm={handleForkConfirm}
        onBack={() => { setPendingForkChoice(null); setPhase("questFork"); }}
      />
    );
  }

  if (phase === "end") {
    return (
      <ChapterEndScreen
        heroName={heroName}
        chapter={chapter}
        stats={stats}
        ch1EndStats={ch1EndStats}
        ch2EndStats={ch2EndStats}
        flags={flags}
        figure={figure}
        identity={identity}
        inventory={inventory}
        forkChoice={forkChoice}
        onContinue={
          chapter === 1 ? handleContinueToChapter2 :
          chapter === 2 ? handleContinueToChapter3 : null
        }
        onReset={reset}
      />
    );
  }

  return null;
}
