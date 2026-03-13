import React, { useState, useCallback } from "react";
import { bg, echoCard, goldBtn } from "../styles";
import DiceRoll from "../components/DiceRoll";
import { resolveEcho, getEchoRevelation, generateEchoFragments, checkFragmentOrder } from "../engine/memoryEcho";
import { getEchoDCModifier } from "../engine/worldState";

/**
 * Memory Echo Screen — Vision fragment puzzle.
 * Player arranges scattered words, then D20 determines clarity.
 */
export default function MemoryEchoScreen({
  echoData, stats, worldState, echoProgress, dreamBonus = 0,
  onEchoComplete, heroName,
}) {
  const [phase, setPhase] = useState("intro"); // intro | arrange | rolling | revelation
  const [fragments, setFragments] = useState(null);
  const [selected, setSelected] = useState([]);
  const [roll, setRoll] = useState(null);
  const [revelation, setRevelation] = useState(null);

  const startArranging = useCallback(() => {
    const generated = generateEchoFragments(echoData);
    setFragments(generated);
    setSelected([]);
    setPhase("arrange");
  }, [echoData]);

  const toggleFragment = useCallback((index) => {
    setSelected(prev => {
      if (prev.includes(index)) return prev.filter(i => i !== index);
      return [...prev, index];
    });
  }, []);

  const submitArrangement = useCallback(() => {
    const echoDCMod = getEchoDCModifier(worldState);
    const result = resolveEcho(
      stats.Wisdom || 3,
      stats.Empathy || 3,
      echoData.baseDC || 14,
      echoDCMod,
      dreamBonus,
    );

    // Fragment order gives a bonus (but doesn't determine outcome — D20 does)
    const fragmentResult = checkFragmentOrder(selected, fragments?.correctSequence || []);
    if (fragmentResult.percentage > 0.5) {
      result.echoGain = Math.min(result.echoGain + 1, 3);
    }

    setRoll(result);
    const rev = getEchoRevelation(echoProgress, result.clarity);
    setRevelation(rev);
    setPhase("rolling");
  }, [stats, worldState, echoData, echoProgress, dreamBonus, selected, fragments]);

  const handleRollComplete = useCallback(() => {
    setPhase("revelation");
  }, []);

  const handleContinue = useCallback(() => {
    onEchoComplete?.({
      echoGain: roll?.echoGain || 0,
      clarity: roll?.clarity || "blocked",
      revelation,
      divineFavorGain: roll?.clarity === "blocked" ? 1 : 0,
    });
  }, [roll, revelation, onEchoComplete]);

  if (!echoData) return null;

  return (
    <div style={bg}>
      {/* Intro */}
      {phase === "intro" && (
        <div style={{ ...echoCard, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🌌</div>
          <div style={{
            fontSize: 18, fontWeight: "bold", color: "#8b6db5",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12,
          }}>
            A Vision Stirs
          </div>
          <div style={{
            fontSize: 16, color: "#c8b88a", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 20,
          }}>
            Something flickers at the edge of your mind — a memory that isn't yours,
            or maybe one that was always yours but hidden. Fragments of words and images
            swirl in the darkness behind your eyes.
          </div>
          <button onClick={startArranging} style={goldBtn}>
            Reach for the vision
          </button>
        </div>
      )}

      {/* Fragment arrangement */}
      {phase === "arrange" && fragments && (
        <div style={echoCard}>
          <div style={{
            fontSize: 13, color: "#8b6db5", textAlign: "center", marginBottom: 12,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            Arrange the fragments in the order that feels right
          </div>

          {/* Fragment pool */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center",
            marginBottom: 20, minHeight: 60,
          }}>
            {fragments.fragments.map((word, i) => {
              const isSelected = selected.includes(i);
              const orderNum = selected.indexOf(i) + 1;
              return (
                <button
                  key={i}
                  onClick={() => toggleFragment(i)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    border: isSelected
                      ? "1px solid rgba(139,109,181,0.6)"
                      : "1px solid rgba(139,109,181,0.2)",
                    background: isSelected
                      ? "rgba(139,109,181,0.2)"
                      : "rgba(139,109,181,0.05)",
                    color: isSelected ? "#c8b0e8" : "#a08060",
                    fontSize: 16,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontStyle: "italic",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    position: "relative",
                  }}
                >
                  {isSelected && (
                    <span style={{
                      position: "absolute", top: -6, left: -6,
                      width: 18, height: 18, borderRadius: "50%",
                      background: "#8b6db5", color: "#fff",
                      fontSize: 12, display: "flex", alignItems: "center",
                      justifyContent: "center", fontWeight: "bold",
                    }}>
                      {orderNum}
                    </span>
                  )}
                  {word}
                </button>
              );
            })}
          </div>

          {/* Selected sequence preview */}
          {selected.length > 0 && (
            <div style={{
              fontSize: 16, color: "#c8b0e8", textAlign: "center",
              fontStyle: "italic", fontFamily: "'Cormorant Garamond', Georgia, serif",
              marginBottom: 16, minHeight: 24,
            }}>
              {selected.map(i => fragments.fragments[i]).join(" ... ")}
            </div>
          )}

          <div style={{ textAlign: "center" }}>
            <button
              onClick={submitArrangement}
              style={{
                ...goldBtn,
                opacity: selected.length > 0 ? 1 : 0.4,
                pointerEvents: selected.length > 0 ? "auto" : "none",
              }}
            >
              Focus on the vision
            </button>
          </div>
        </div>
      )}

      {/* Rolling */}
      {(phase === "rolling" || phase === "revelation") && roll && (
        <div style={echoCard}>
          {phase === "rolling" && (
            <>
              <div style={{
                fontSize: 13, color: "#8b6db5", textAlign: "center", marginBottom: 8,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}>
                Your mind reaches through the darkness...
              </div>
              <DiceRoll
                roll={{ raw: roll.roll.raw, nat20: roll.roll.nat20, nat1: roll.roll.nat1 }}
                modifier={roll.modifier}
                dc={roll.dc}
                stat="Wisdom/Empathy"
                onComplete={handleRollComplete}
              />
            </>
          )}

          {phase === "revelation" && revelation && (
            <>
              <div style={{
                textAlign: "center", marginBottom: 16,
              }}>
                <div style={{
                  fontSize: 12, textTransform: "uppercase", letterSpacing: 2,
                  color: roll.clarity === "blocked" ? "#706050" : "#8b6db5",
                  marginBottom: 8,
                }}>
                  {roll.clarity === "blocked" ? "The vision fades" :
                    roll.clarity === "perfect" ? "Perfect clarity" :
                      roll.clarity === "high" ? "Clear vision" :
                        roll.clarity === "medium" ? "Fragments emerge" : "A faint glimpse"}
                </div>
              </div>

              <div style={{
                fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
                lineHeight: 1.8, textAlign: "center", fontStyle: "italic",
                padding: "16px", borderRadius: 12,
                background: roll.clarity === "blocked"
                  ? "rgba(80,60,40,0.2)"
                  : "rgba(139,109,181,0.1)",
                border: roll.clarity === "blocked"
                  ? "1px solid rgba(80,60,40,0.2)"
                  : "1px solid rgba(139,109,181,0.2)",
              }}>
                {revelation.full}
              </div>

              {roll.echoGain > 0 && (
                <div style={{
                  fontSize: 12, color: "#8b6db5", textAlign: "center",
                  marginTop: 12, fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}>
                  Memory progress +{roll.echoGain}
                </div>
              )}

              <div style={{ textAlign: "center", marginTop: 16 }}>
                <button onClick={handleContinue} style={goldBtn}>Continue</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
