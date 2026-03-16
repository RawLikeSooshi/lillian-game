import { useState, useMemo, useEffect, useCallback } from "react";
import { INITIAL_STATS, heroIdentity, getMythFigure } from "./engine/stats";
import { INITIAL_FLAGS, applyFlags } from "./engine/flags";
import { INITIAL_INVENTORY } from "./data/items";
import { applyInventoryChanges, removeItem } from "./engine/inventory";
import { resolveSceneText, resolveChoiceText } from "./engine/sceneText";
import { STEP_TYPES, getSceneCount, getSceneNumber } from "./engine/flow";
import { INITIAL_PUZZLE_STATE, checkAnswer } from "./engine/puzzleEngine";
import { getUnlockedPowers, getNewlyUnlocked, getPowerBonus } from "./engine/powers";
import { INITIAL_REPUTATION, applyReputation } from "./engine/reputation";
import { INITIAL_WORLD_STATE, applyWorldChanges, getEncounterDCModifier, getTickerMessages } from "./engine/worldState";
import { getOathBuffs, checkOathConstraints, swearOath, breakOath } from "./engine/oaths";
import { generateNemesis, updateNemesisRelation, recalibrateNemesis } from "./engine/nemesis";
import { applySacrifice } from "./engine/sacrifice";
import { applyWound } from "./engine/dreams";
import { getChapter1Flow } from "./data/chapter1Flow";
import { getChapter2Flow } from "./data/chapter2Flow";
import { getChapter3Flow } from "./data/chapter3Flow";
import { getChapter4Flow } from "./data/chapter4Flow";
import { getChapter5Flow } from "./data/chapter5Flow";
import { getChapter6Flow } from "./data/chapter6Flow";
import { getChapter7Flow } from "./data/chapter7Flow";
import { getChapter8Flow } from "./data/chapter8Flow";
import { getChapter9Flow } from "./data/chapter9Flow";
import { getChapter10Flow } from "./data/chapter10Flow";
// Existing screens
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
// New screens
import EncounterScreen from "./screens/EncounterScreen";
import EncounterResultScreen from "./screens/EncounterResultScreen";
import ExplorationScreen from "./screens/ExplorationScreen";
import DialogueDuelScreen from "./screens/DialogueDuelScreen";
import MemoryEchoScreen from "./screens/MemoryEchoScreen";
import DreamScreen from "./screens/DreamScreen";
import ProphecyDrawScreen from "./screens/ProphecyDrawScreen";
import ProphecyRevealScreen from "./screens/ProphecyRevealScreen";
import SacrificeScreen from "./screens/SacrificeScreen";
import PowerUnlockScreen from "./screens/PowerUnlockScreen";
import OathSwearScreen from "./screens/OathSwearScreen";
import PrologueScreen from "./screens/PrologueScreen";
import ChapterTitleScreen from "./screens/ChapterTitleScreen";
import prologue from "./data/prologue";
import { CHAPTER_THEMES } from "./styles";
import useAudio from "./hooks/useAudio";
import { initAudio } from "./engine/audio";

const SAVE_KEY = "hero-of-olympus-save";
const SAVE_VERSION = 2;
const MAX_CHAPTER = 10;

export default function App() {
  // ── Existing State ──
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
  const [forkChoice, setForkChoice] = useState(null);
  const [puzzleState, setPuzzleState] = useState(INITIAL_PUZZLE_STATE);
  const [pendingForkChoice, setPendingForkChoice] = useState(null);
  const [inventoryGained, setInventoryGained] = useState([]);

  // ── Chapter End Stats (expanded for all chapters) ──
  const [chapterEndStats, setChapterEndStats] = useState({});

  // ── New Systems State ──
  const [reputation, setReputation] = useState(INITIAL_REPUTATION);
  const [worldState, setWorldState] = useState(INITIAL_WORLD_STATE);
  const [oaths, setOaths] = useState([]);
  const [nemesis, setNemesis] = useState(null);
  const [drawnProphecies, setDrawnProphecies] = useState({});
  const [echoProgress, setEchoProgress] = useState(0);
  const [encounterResult, setEncounterResult] = useState(null);
  const [duelResult, setDuelResult] = useState(null);
  const [explorationState, setExplorationState] = useState(null);
  const [dreamBonus, setDreamBonus] = useState(0);
  const [sacrificesMade, setSacrificesMade] = useState([]);
  const [forgedItem, setForgedItem] = useState(null);
  const [pendingPowerUnlock, setPendingPowerUnlock] = useState(null);
  const [usedPowers, setUsedPowers] = useState({});
  const [postPhase, setPostPhase] = useState(null); // phase to go to after power unlock

  // ── Derived State ──
  const powers = useMemo(() => getUnlockedPowers(stats), [stats]);
  const oathBuffs = useMemo(() => getOathBuffs(oaths), [oaths]);
  const worldDCMod = useMemo(() => getEncounterDCModifier(worldState), [worldState]);

  // ── Set chapter theme on body for CSS variables ──
  useEffect(() => {
    document.body.setAttribute("data-chapter", String(chapter));
  }, [chapter]);

  const flow = useMemo(() => {
    if (chapter === 1) return getChapter1Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 2) return getChapter2Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 3) return getChapter3Flow(flags, inventory, forkChoice, reputation, worldState);
    if (chapter === 4) return getChapter4Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 5) return getChapter5Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 6) return getChapter6Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 7) return getChapter7Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 8) return getChapter8Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 9) return getChapter9Flow(flags, inventory, null, reputation, worldState);
    if (chapter === 10) return getChapter10Flow(flags, inventory, null, reputation, worldState);
    return [];
  }, [chapter, flags, inventory, forkChoice, reputation, worldState]);

  const currentStep = flow[stepIndex] || null;
  const totalScenes = getSceneCount(flow);
  const currentSceneNumber = getSceneNumber(flow, stepIndex);
  const figure = getMythFigure(stats);
  const identity = heroIdentity(stats);

  // ── Audio ──
  const sceneMood = currentStep?.scene?.mood || currentStep?.mood || null;
  const audio = useAudio(chapter, sceneMood);

  const resolvedScene = currentStep?.type === STEP_TYPES.SCENE
    ? resolveSceneText(currentStep.scene, flags, figure)
    : null;

  // ── Auto-save ──
  useEffect(() => {
    const cleanPhases = ["scene", "transition", "puzzle", "questFork", "end",
      "encounter", "exploration", "dialogueDuel", "memoryEcho", "dream", "prophecyDraw", "chapterTitle"];
    if (cleanPhases.includes(phase) && heroName) {
      const save = {
        version: SAVE_VERSION,
        heroName, chapter, stepIndex, stats, flags, inventory,
        forkChoice, chapterEndStats, phase,
        reputation, worldState, oaths, nemesis,
        drawnProphecies, echoProgress, sacrificesMade, forgedItem,
      };
      try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (_) {}
    }
  }, [phase, chapter, stepIndex, stats, flags, inventory, forkChoice, heroName,
    reputation, worldState, oaths, nemesis, drawnProphecies, echoProgress]);

  const loadSave = (save) => {
    setHeroName(save.heroName);
    setNameInput(save.heroName);
    setChapter(save.chapter);
    setStepIndex(save.stepIndex);
    setStats(save.stats);
    setFlags(save.flags);
    setInventory(save.inventory);
    setForkChoice(save.forkChoice || null);
    setChapterEndStats(save.chapterEndStats || {});
    setPuzzleState(INITIAL_PUZZLE_STATE);
    // New systems
    setReputation(save.reputation || INITIAL_REPUTATION);
    setWorldState(save.worldState || INITIAL_WORLD_STATE);
    setOaths(save.oaths || []);
    setNemesis(save.nemesis || null);
    setDrawnProphecies(save.drawnProphecies || {});
    setEchoProgress(save.echoProgress || 0);
    setSacrificesMade(save.sacrificesMade || []);
    setForgedItem(save.forgedItem || null);
    setUsedPowers({});
    setPhase(save.phase || "scene");
  };

  // ── Phase routing helper ──
  const setPhaseForStep = useCallback((step) => {
    if (!step) { setPhase("end"); return; }
    switch (step.type) {
      case STEP_TYPES.SCENE: {
        const resolved = resolveSceneText(step.scene, flags, figure);
        setPhase(resolved.transitionText ? "transition" : "scene");
        break;
      }
      case STEP_TYPES.PUZZLE:
        setPuzzleState(INITIAL_PUZZLE_STATE);
        setPhase("puzzle");
        break;
      case STEP_TYPES.QUEST_FORK:
        setPhase("questFork");
        break;
      case STEP_TYPES.ENCOUNTER:
        setPhase("encounter");
        break;
      case STEP_TYPES.EXPLORATION:
        setExplorationState({ visited: [], remainingPicks: step.picks || 2 });
        setPhase("exploration");
        break;
      case STEP_TYPES.DIALOGUE_DUEL:
        setPhase("dialogueDuel");
        break;
      case STEP_TYPES.MEMORY_ECHO:
        setPhase("memoryEcho");
        break;
      case STEP_TYPES.DREAM:
        setPhase("dream");
        break;
      case STEP_TYPES.PROPHECY:
        setPhase("prophecyDraw");
        break;
      case STEP_TYPES.SACRIFICE:
        setPhase("sacrifice");
        break;
      case STEP_TYPES.OATH_OPPORTUNITY:
        setPhase("oathOpportunity");
        break;
      default:
        setPhase("scene");
    }
  }, [flags, figure]);

  // ── Check for new power unlocks after stat changes ──
  const checkPowerUnlocks = useCallback((oldStats, newStats, nextPhase) => {
    const newPowers = getNewlyUnlocked(oldStats, newStats);
    if (newPowers.length > 0) {
      setPendingPowerUnlock(newPowers[0]);
      setPostPhase(nextPhase);
      setPhase("powerUnlock");
      return true;
    }
    return false;
  }, []);

  // ── Apply stat changes with clamping ──
  const applyStatChanges = useCallback((statChanges) => {
    if (!statChanges) return stats;
    const ns = { ...stats };
    Object.entries(statChanges).forEach(([k, v]) => {
      ns[k] = Math.max(0, Math.min(20, (ns[k] || 0) + v));
    });
    return ns;
  }, [stats]);

  // ── Step advancement ──
  const handleAdvanceStep = useCallback(() => {
    setShowLesson(false);
    setChoice(null);
    setLastChanges({});
    setInventoryGained([]);
    setEncounterResult(null);
    setDuelResult(null);
    const nextIndex = stepIndex + 1;

    if (nextIndex >= flow.length) {
      // Check if there are prophecies to reveal before chapter end
      const hasProph = chapter === 3
        ? (drawnProphecies[1]?.length || drawnProphecies[2]?.length || drawnProphecies[3]?.length)
        : drawnProphecies[chapter]?.length;
      if (hasProph) {
        setPhase("prophecyReveal");
      } else {
        setPhase("end");
      }
      return;
    }

    setStepIndex(nextIndex);
    setPhaseForStep(flow[nextIndex]);
  }, [stepIndex, flow, setPhaseForStep, chapter, drawnProphecies]);

  // ── Scene choice handler (existing) ──
  const handleChoice = useCallback((c) => {
    const oldStats = { ...stats };
    const ns = applyStatChanges(c.statChanges);
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
    // Apply reputation changes
    if (c.reputationChanges) {
      setReputation(prev => applyReputation(prev, c.reputationChanges));
    }
    // Apply world state changes
    if (c.worldStateChanges) {
      setWorldState(prev => applyWorldChanges(prev, c.worldStateChanges));
    }

    const resolvedChoice = resolveChoiceText(c, getMythFigure(ns));
    setChoice(resolvedChoice);
    setStats(ns);
    setFlags(nf);
    setInventory(ni);
    setInventoryGained(gained);
    setLastChanges(c.statChanges);
    setShowLesson(false);
    setPhase("result");
    setTimeout(() => setShowLesson(true), 700);

    // Check for power unlocks (deferred — will show after result)
  }, [stats, flags, inventory, applyStatChanges]);

  // ── Encounter handler ──
  const handleEncounterComplete = useCallback((result) => {
    const outcomeData = result.encounter.outcomes[result.overall];
    const oldStats = { ...stats };
    let ns = stats;
    if (outcomeData?.statChanges) {
      ns = applyStatChanges(outcomeData.statChanges);
      setStats(ns);
      setLastChanges(outcomeData.statChanges);
    }
    if (outcomeData?.flags) {
      setFlags(prev => applyFlags(prev, outcomeData.flags));
    }
    if (outcomeData?.reputation) {
      setReputation(prev => applyReputation(prev, outcomeData.reputation));
    }
    if (result.overall === "fail" && result.encounter.woundSource) {
      setFlags(prev => applyWound(prev, result.encounter.woundSource));
    }
    setEncounterResult(result);

    if (!checkPowerUnlocks(oldStats, ns, "encounterResult")) {
      setPhase("encounterResult");
    }
  }, [stats, applyStatChanges, checkPowerUnlocks]);

  // ── Dialogue Duel handler ──
  const handleDuelComplete = useCallback((result) => {
    const outcomeData = result.duel.outcomes[result.outcome];
    const oldStats = { ...stats };
    let ns = stats;
    if (outcomeData?.statChanges) {
      ns = applyStatChanges(outcomeData.statChanges);
      setStats(ns);
      setLastChanges(outcomeData.statChanges);
    }
    if (outcomeData?.flags) {
      setFlags(prev => applyFlags(prev, outcomeData.flags));
    }
    if (outcomeData?.reputation) {
      setReputation(prev => applyReputation(prev, outcomeData.reputation));
    }
    setDuelResult(result);

    if (!checkPowerUnlocks(oldStats, ns, "encounterResult")) {
      // Reuse encounterResult screen pattern for duel outcomes
      setEncounterResult({
        overall: result.outcome,
        rounds: result.history,
        encounter: {
          ...result.duel,
          outcomes: result.duel.outcomes,
        },
      });
      setPhase("encounterResult");
    }
  }, [stats, applyStatChanges, checkPowerUnlocks]);

  // ── Exploration handlers ──
  const handleSelectNode = useCallback((node) => {
    setExplorationState(prev => ({
      ...prev,
      visited: [...prev.visited, node.id],
      remainingPicks: prev.remainingPicks - 1,
      currentNode: node,
    }));

    // Apply effects from node content or selected choice
    const source = node.selectedChoice || node.content;
    if (!source) return;

    if (source.statChanges) {
      setStats(prev => {
        const ns = { ...prev };
        Object.entries(source.statChanges).forEach(([k, v]) => {
          ns[k] = Math.max(0, Math.min(20, (ns[k] || 0) + v));
        });
        return ns;
      });
    }
    if (source.reputationChanges) {
      setReputation(prev => applyReputation(prev, source.reputationChanges));
    }
    if (source.setsFlags) {
      setFlags(prev => applyFlags(prev, source.setsFlags));
    }
    if (source.worldStateChanges) {
      setWorldState(prev => applyWorldChanges(prev, source.worldStateChanges));
    }
    if (source.setsInventory) {
      setInventory(prev => applyInventoryChanges(prev, source.setsInventory));
    }
  }, []);

  const handleFinishExploration = useCallback(() => {
    handleAdvanceStep();
  }, [handleAdvanceStep]);

  // ── Memory Echo handler ──
  const handleEchoComplete = useCallback((result) => {
    setEchoProgress(prev => Math.min(10, prev + (result.echoGain || 0)));
    if (result.divineFavorGain) {
      setWorldState(prev => applyWorldChanges(prev, { divineFavor: result.divineFavorGain }));
    }
    setDreamBonus(0); // Reset dream bonus after use
    handleAdvanceStep();
  }, [handleAdvanceStep]);

  // ── Dream handler ──
  const handleDreamComplete = useCallback((result) => {
    if (result.echoBonus) setDreamBonus(result.echoBonus);
    if (result.restResult?.healedWound) {
      setFlags(prev => result.restResult.newFlags);
    }
    // Apply commune stat changes from dream data
    if (result.choice === "commune" && currentStep?.dreamData?.communeStatChanges) {
      setStats(prev => {
        const ns = { ...prev };
        Object.entries(currentStep.dreamData.communeStatChanges).forEach(([k, v]) => {
          ns[k] = Math.max(0, Math.min(20, (ns[k] || 0) + v));
        });
        return ns;
      });
    }
    handleAdvanceStep();
  }, [handleAdvanceStep, currentStep]);

  // ── Prophecy draw handler ──
  const handleProphecyDrawComplete = useCallback((result) => {
    setDrawnProphecies(prev => ({ ...prev, [chapter]: result.cards }));
    handleAdvanceStep();
  }, [chapter, handleAdvanceStep]);

  // ── Sacrifice handler ──
  const handleSacrificeConfirm = useCallback((sacrificeData) => {
    const result = applySacrifice(sacrificeData.type, sacrificeData.targetId, {
      stats, inventory, powers,
    });
    setStats(result.stats);
    setInventory(result.inventory);
    setSacrificesMade(prev => [...prev, { ...sacrificeData, chapter }]);
    if (sacrificeData.flags) {
      setFlags(prev => applyFlags(prev, sacrificeData.flags));
    }
    if (sacrificeData.worldStateChanges) {
      setWorldState(prev => applyWorldChanges(prev, sacrificeData.worldStateChanges));
    }
    handleAdvanceStep();
  }, [stats, inventory, powers, chapter, handleAdvanceStep]);

  const handleSacrificeDecline = useCallback(() => {
    handleAdvanceStep();
  }, [handleAdvanceStep]);

  // ── Oath swear/decline handlers ──
  const handleOathSwear = useCallback((oathId) => {
    setOaths(prev => swearOath(prev, oathId));
    handleAdvanceStep();
  }, [handleAdvanceStep]);

  const handleOathDecline = useCallback(() => {
    handleAdvanceStep();
  }, [handleAdvanceStep]);

  // ── Power unlock dismiss ──
  const handlePowerUnlockDismiss = useCallback(() => {
    setPendingPowerUnlock(null);
    if (postPhase) {
      setPhase(postPhase);
      setPostPhase(null);
    } else {
      handleAdvanceStep();
    }
  }, [postPhase, handleAdvanceStep]);

  // ── Puzzle handlers (existing) ──
  const handlePuzzleAnswer = (selectedIndex) => {
    const puzzle = currentStep.puzzle;
    const correct = checkAnswer(puzzle, selectedIndex);
    if (correct) {
      handlePuzzleSolve(puzzle);
    } else {
      const newAttempts = puzzleState.wrongAttempts + 1;
      const hintsAvailable = puzzle.hints.length - puzzleState.hintsUsed;
      if (hintsAvailable > 0) {
        setPuzzleState(ps => ({
          ...ps, selectedAnswer: selectedIndex,
          wrongAttempts: newAttempts, hintsUsed: ps.hintsUsed + 1,
        }));
      } else {
        handlePuzzleForce(puzzle);
      }
    }
  };

  const handlePuzzleSolve = (puzzle) => {
    const ns = applyStatChanges(puzzle.onSolve);
    setStats(ns);
    setFlags(prev => applyFlags(prev, { [puzzle.solveFlag]: true }));
    if (puzzle.setsInventory) setInventory(prev => applyInventoryChanges(prev, puzzle.setsInventory));
    setPuzzleState(ps => ({ ...ps, solved: true }));
    setPhase("puzzleResult");
  };

  const handlePuzzleSkip = (puzzle) => {
    const ns = applyStatChanges(puzzle.onSkip);
    setStats(ns);
    setFlags(prev => applyFlags(prev, { [puzzle.skipFlag]: true }));
    setPuzzleState(ps => ({ ...ps, skipped: true }));
    setPhase("puzzleResult");
  };

  const handlePuzzleForce = (puzzle) => {
    const ns = applyStatChanges(puzzle.onSkip);
    setStats(ns);
    setFlags(prev => applyFlags(prev, { [puzzle.skipFlag]: true }));
    setPuzzleState(ps => ({ ...ps, forced: true }));
    setPhase("puzzleResult");
  };

  // ── Quest Fork handlers (existing) ──
  const handleForkSelect = (pathId) => {
    setPendingForkChoice(pathId);
    setPhase("questForkConfirm");
  };

  const handleForkConfirm = () => {
    const chosen = pendingForkChoice;
    const notChosen = chosen === "messengerPath" ? "arenaPath" : "messengerPath";
    setFlags(prev => applyFlags(prev, {
      [`${chosen}_chosen`]: true,
      [`${notChosen}_notTaken`]: true,
    }));
    setForkChoice(chosen);
    setPendingForkChoice(null);
  };

  // After fork confirmation, flow recomputes — advance past the fork step
  useEffect(() => {
    if (phase === "questForkConfirm" && forkChoice) {
      // stepIndex still points at the questFork step — advance to the next step
      const nextIndex = stepIndex + 1;
      const nextStep = flow[nextIndex];
      if (nextStep) {
        setStepIndex(nextIndex);
        setPhaseForStep(nextStep);
      } else {
        setPhase("end");
      }
    }
  }, [flow, forkChoice]);

  // ── Chapter transition ──
  const handleContinueToNextChapter = useCallback(() => {
    const nextChapter = chapter + 1;
    setChapterEndStats(prev => ({ ...prev, [chapter]: { ...stats } }));
    setChapter(nextChapter);
    setStepIndex(0);
    setChoice(null);
    setLastChanges({});
    setForkChoice(null);
    setUsedPowers({});
    setDreamBonus(0);
    // Recalibrate nemesis at chapter boundary
    if (nemesis) setNemesis(prev => recalibrateNemesis(prev, stats));
    // Initialize nemesis if not yet created (Ch2+)
    if (!nemesis && nextChapter >= 2) setNemesis(generateNemesis(stats));

    // Show chapter title card before starting the chapter
    setPhase("chapterTitle");
  }, [chapter, stats, nemesis]);

  // ── Full reset ──
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
    setChapterEndStats({});
    setInventory(INITIAL_INVENTORY);
    setForkChoice(null);
    setPuzzleState(INITIAL_PUZZLE_STATE);
    setPendingForkChoice(null);
    setInventoryGained([]);
    // New systems
    setReputation(INITIAL_REPUTATION);
    setWorldState(INITIAL_WORLD_STATE);
    setOaths([]);
    setNemesis(null);
    setDrawnProphecies({});
    setEchoProgress(0);
    setEncounterResult(null);
    setDuelResult(null);
    setExplorationState(null);
    setDreamBonus(0);
    setSacrificesMade([]);
    setForgedItem(null);
    setPendingPowerUnlock(null);
    setUsedPowers({});
    setPostPhase(null);
    try { localStorage.removeItem(SAVE_KEY); } catch (_) {}
  };

  // ── Save file export/import ──
  const handleExportSave = () => {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const save = JSON.parse(raw);
      const blob = new Blob([JSON.stringify(save, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `hero-of-olympus-${(save.heroName || "save").toLowerCase().replace(/\s+/g, "-")}-ch${save.chapter}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (_) {}
  };

  const handleImportSave = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const save = JSON.parse(ev.target.result);
          if (!save.heroName || !save.stats) return;
          localStorage.setItem(SAVE_KEY, JSON.stringify(save));
          loadSave(save);
        } catch (_) {}
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // ── Ticker messages for transition screens ──
  const tickerMessages = useMemo(() => {
    const pool = currentStep?.tickerMessages || [];
    return getTickerMessages(pool, flags, worldState);
  }, [currentStep, flags, worldState]);

  // ── Floating mute button (imperative DOM to work with early returns) ──
  useEffect(() => {
    if (phase === "welcome") return;
    let btn = document.getElementById("hoo-mute-btn");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "hoo-mute-btn";
      Object.assign(btn.style, {
        position: "fixed", bottom: "16px", right: "16px", zIndex: "9999",
        width: "40px", height: "40px", borderRadius: "50%",
        background: "rgba(26,16,8,0.85)", border: "1px solid rgba(160,128,96,0.3)",
        fontSize: "18px", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s",
      });
      document.body.appendChild(btn);
    }
    btn.textContent = audio.muted ? "\uD83D\uDD07" : "\uD83D\uDD0A";
    btn.style.color = audio.muted ? "#706050" : "#d4a017";
    btn.onclick = audio.toggleMute;
    return () => {
      const el = document.getElementById("hoo-mute-btn");
      if (el) el.remove();
    };
  }, [phase, audio.muted, audio.toggleMute]);

  // ────────────────────────────────────────────
  //  PHASE ROUTING
  // ────────────────────────────────────────────

  if (phase === "welcome") {
    let savedGame = null;
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (raw) savedGame = JSON.parse(raw);
    } catch (_) {}
    return (
      <WelcomeScreen
        onBegin={() => { initAudio(); setPhase("name"); }}
        savedGame={savedGame}
        onContinue={() => { initAudio(); savedGame && loadSave(savedGame); }}
        onExportSave={handleExportSave}
        onImportSave={handleImportSave}
      />
    );
  }

  if (phase === "name") {
    return (
      <NameScreen
        nameInput={nameInput}
        onNameChange={setNameInput}
        onSubmitName={(name) => { setHeroName(name); setPhase("prologue"); }}
      />
    );
  }

  // ── Prologue (first playthrough only, before Ch1) ──
  if (phase === "prologue") {
    return (
      <PrologueScreen
        pages={prologue.pages}
        onComplete={() => setPhase("chapterTitle")}
      />
    );
  }

  // ── Chapter Title Card ──
  if (phase === "chapterTitle") {
    const chTitle = CHAPTER_THEMES[chapter]?.name || `Chapter ${chapter}`;
    return (
      <ChapterTitleScreen
        chapter={chapter}
        title={chTitle}
        onContinue={() => setPhaseForStep(flow[0])}
      />
    );
  }

  // ── Power Unlock (can appear between any phases) ──
  if (phase === "powerUnlock" && pendingPowerUnlock) {
    return (
      <PowerUnlockScreen
        power={pendingPowerUnlock}
        onContinue={handlePowerUnlockDismiss}
      />
    );
  }

  // ── Prophecy Draw ──
  if (phase === "prophecyDraw" && currentStep?.type === STEP_TYPES.PROPHECY) {
    return (
      <ProphecyDrawScreen
        prophecyPool={currentStep.prophecyPool}
        stats={stats}
        chapter={chapter}
        heroName={heroName}
        onProphecyDrawComplete={handleProphecyDrawComplete}
      />
    );
  }

  // ── Prophecy Reveal ──
  if (phase === "prophecyReveal") {
    const chaptersToReveal = chapter === 3 ? [1, 2, 3] : [chapter];
    return (
      <ProphecyRevealScreen
        drawnProphecies={drawnProphecies}
        chaptersToReveal={chaptersToReveal}
        onContinue={() => setPhase("end")}
      />
    );
  }

  // ── Transition ──
  if (phase === "transition" && currentStep?.type === STEP_TYPES.SCENE) {
    return (
      <TransitionScreen
        heroName={heroName}
        transitionText={resolvedScene.transitionText}
        inventory={inventory}
        stats={stats}
        chapter={chapter}
        onContinue={() => setPhase("scene")}
        tickerMessages={tickerMessages}
        oaths={oaths}
      />
    );
  }

  // ── Scene ──
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
        powers={powers}
        oaths={oaths}
      />
    );
  }

  // ── Result ──
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

  // ── Encounter ──
  if (phase === "encounter" && currentStep?.type === STEP_TYPES.ENCOUNTER) {
    return (
      <EncounterScreen
        encounter={currentStep.encounter}
        stats={stats}
        powers={powers}
        oaths={oaths}
        usedPowers={usedPowers}
        worldDCMod={worldDCMod}
        heroName={heroName}
        onEncounterComplete={handleEncounterComplete}
      />
    );
  }

  // ── Encounter Result ──
  if (phase === "encounterResult" && encounterResult) {
    return (
      <EncounterResultScreen
        encounterResult={encounterResult}
        stats={stats}
        lastChanges={lastChanges}
        heroName={heroName}
        onContinue={handleAdvanceStep}
      />
    );
  }

  // ── Exploration ──
  if (phase === "exploration" && currentStep?.type === STEP_TYPES.EXPLORATION) {
    return (
      <ExplorationScreen
        explorationData={currentStep}
        explorationState={explorationState}
        reputation={reputation}
        stats={stats}
        heroName={heroName}
        onSelectNode={handleSelectNode}
        onFinishExploration={handleFinishExploration}
      />
    );
  }

  // ── Dialogue Duel ──
  if (phase === "dialogueDuel" && currentStep?.type === STEP_TYPES.DIALOGUE_DUEL) {
    return (
      <DialogueDuelScreen
        duel={currentStep.duel}
        stats={stats}
        powers={powers}
        oaths={oaths}
        usedPowers={usedPowers}
        heroName={heroName}
        onDuelComplete={handleDuelComplete}
      />
    );
  }

  // ── Memory Echo ──
  if (phase === "memoryEcho" && currentStep?.type === STEP_TYPES.MEMORY_ECHO) {
    return (
      <MemoryEchoScreen
        echoData={currentStep.echo}
        stats={stats}
        worldState={worldState}
        echoProgress={echoProgress}
        dreamBonus={dreamBonus}
        heroName={heroName}
        onEchoComplete={handleEchoComplete}
      />
    );
  }

  // ── Dream / Camp ──
  if (phase === "dream" && currentStep?.type === STEP_TYPES.DREAM) {
    return (
      <DreamScreen
        dreamData={currentStep.dreamData}
        stats={stats}
        flags={flags}
        worldState={worldState}
        companion={nemesis?.relation === "allied" || nemesis?.relation === "respectful" ? nemesis : null}
        heroName={heroName}
        onDreamComplete={handleDreamComplete}
      />
    );
  }

  // ── Sacrifice ──
  if (phase === "sacrifice" && currentStep?.type === STEP_TYPES.SACRIFICE) {
    return (
      <SacrificeScreen
        sacrificeData={currentStep.sacrifice}
        stats={stats}
        inventory={inventory}
        powers={powers}
        heroName={heroName}
        onSacrificeConfirm={handleSacrificeConfirm}
        onSacrificeDecline={handleSacrificeDecline}
      />
    );
  }

  // ── Oath Opportunity ──
  if (phase === "oathOpportunity" && currentStep?.type === STEP_TYPES.OATH_OPPORTUNITY) {
    return (
      <OathSwearScreen
        oathData={currentStep.oathData}
        heroName={heroName}
        onSwear={handleOathSwear}
        onDecline={handleOathDecline}
      />
    );
  }

  // ── Puzzle (existing) ──
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

  // ── Quest Fork (existing) ──
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
    if (!fork) return null; // flow recomputed after confirm — useEffect will advance
    return (
      <QuestForkConfirmScreen
        fork={fork}
        selectedPath={pendingForkChoice}
        onConfirm={handleForkConfirm}
        onBack={() => { setPendingForkChoice(null); setPhase("questFork"); }}
      />
    );
  }

  // ── Chapter End ──
  if (phase === "end") {
    return (
      <ChapterEndScreen
        heroName={heroName}
        chapter={chapter}
        stats={stats}
        ch1EndStats={chapterEndStats[1] || null}
        ch2EndStats={chapterEndStats[2] || null}
        chapterEndStats={chapterEndStats}
        flags={flags}
        figure={figure}
        identity={identity}
        inventory={inventory}
        forkChoice={forkChoice}
        reputation={reputation}
        worldState={worldState}
        nemesis={nemesis}
        echoProgress={echoProgress}
        drawnProphecies={drawnProphecies}
        oaths={oaths}
        onContinue={chapter < MAX_CHAPTER ? handleContinueToNextChapter : null}
        onReset={reset}
      />
    );
  }

  // Fallback — no phase matched. Show debug info instead of blank screen.
  console.error("No phase matched:", phase, "step:", currentStep?.type, "stepIndex:", stepIndex);
  return (
    <div style={{ padding: 32, color: "#ff6b6b", background: "#1a1008", minHeight: "100vh", fontFamily: "monospace" }}>
      <h2 style={{ color: "#d4a017" }}>Phase not found</h2>
      <p style={{ color: "#e8d8b0", marginTop: 12 }}>Phase: <strong>{phase}</strong></p>
      <p style={{ color: "#e8d8b0" }}>Step type: <strong>{currentStep?.type || "none"}</strong></p>
      <p style={{ color: "#e8d8b0" }}>Step index: <strong>{stepIndex}</strong></p>
      <p style={{ color: "#e8d8b0" }}>Chapter: <strong>{chapter}</strong></p>
      <button onClick={() => { localStorage.removeItem("hero-of-olympus-save"); window.location.reload(); }}
        style={{ marginTop: 24, padding: "12px 24px", background: "#d4a017", border: "none", borderRadius: 8, color: "#1a1008", cursor: "pointer", fontWeight: "bold" }}>
        Clear Save & Restart
      </button>
    </div>
  );
}
