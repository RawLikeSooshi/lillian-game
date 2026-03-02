import { useState } from "react";
import { INITIAL_STATS, heroIdentity, getMythFigure } from "./engine/stats";
import { INITIAL_FLAGS, applyFlags } from "./engine/flags";
import { resolveSceneText, resolveChoiceText } from "./engine/sceneText";
import chapter1 from "./data/chapter1";
import chapter2 from "./data/chapter2";
import WelcomeScreen from "./screens/WelcomeScreen";
import NameScreen from "./screens/NameScreen";
import SceneScreen from "./screens/SceneScreen";
import ResultScreen from "./screens/ResultScreen";
import ChapterEndScreen from "./screens/ChapterEndScreen";

export default function App() {
  const [phase, setPhase] = useState("welcome");
  const [heroName, setHeroName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [chapter, setChapter] = useState(1);
  const [sceneIndex, setSceneIndex] = useState(0);
  const [stats, setStats] = useState(INITIAL_STATS);
  const [flags, setFlags] = useState(INITIAL_FLAGS);
  const [lastChanges, setLastChanges] = useState({});
  const [choice, setChoice] = useState(null);
  const [showLesson, setShowLesson] = useState(false);
  const [ch1EndStats, setCh1EndStats] = useState(null);

  const chapterScenes = chapter === 1 ? chapter1 : chapter2;
  const scene = chapterScenes[sceneIndex];
  const figure = getMythFigure(stats);
  const identity = heroIdentity(stats);
  const resolvedScene = scene ? resolveSceneText(scene, flags, figure) : null;

  const handleChoice = (c) => {
    const ns = { ...stats };
    Object.entries(c.statChanges).forEach(([k, v]) => {
      ns[k] = Math.max(0, Math.min(10, ns[k] + v));
    });
    const nf = applyFlags(flags, c.setsFlags);
    const resolvedChoice = resolveChoiceText(c, getMythFigure(ns));

    setChoice(resolvedChoice);
    setStats(ns);
    setFlags(nf);
    setLastChanges(c.statChanges);
    setPhase("result");
    setTimeout(() => setShowLesson(true), 700);
  };

  const handleNext = () => {
    setShowLesson(false);
    setChoice(null);
    setLastChanges({});
    if (sceneIndex < chapterScenes.length - 1) {
      setSceneIndex((i) => i + 1);
      setPhase("scene");
    } else {
      setPhase("end");
    }
  };

  const handleContinueToChapter2 = () => {
    setCh1EndStats({ ...stats });
    setChapter(2);
    setSceneIndex(0);
    setChoice(null);
    setLastChanges({});
    setPhase("scene");
  };

  const reset = () => {
    setPhase("welcome");
    setStats(INITIAL_STATS);
    setFlags(INITIAL_FLAGS);
    setSceneIndex(0);
    setChapter(1);
    setHeroName("");
    setNameInput("");
    setLastChanges({});
    setChoice(null);
    setShowLesson(false);
    setCh1EndStats(null);
  };

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

  if (phase === "scene" && resolvedScene) {
    return (
      <SceneScreen
        heroName={heroName}
        scene={resolvedScene}
        sceneIndex={sceneIndex}
        totalScenes={chapterScenes.length}
        stats={stats}
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
        lastChanges={lastChanges}
        choice={choice}
        showLesson={showLesson}
        onNext={handleNext}
        isLastScene={sceneIndex >= chapterScenes.length - 1}
        chapter={chapter}
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
        flags={flags}
        figure={figure}
        identity={identity}
        onContinue={chapter === 1 ? handleContinueToChapter2 : null}
        onReset={reset}
      />
    );
  }

  return null;
}
