import React, { useState, useCallback } from "react";
import { bg, dreamCard, goldBtn } from "../styles";
import DiceRoll from "../components/DiceRoll";
import { CAMP_OPTION_DISPLAY, resolveDream, applyRest, getWoundCount } from "../engine/dreams";

/**
 * Dream/Camp Screen — Rest, Dream, or Commune.
 * Rest heals wounds. Dream gives D20 echo bonus. Commune builds companion loyalty.
 */
export default function DreamScreen({
  dreamData, stats, flags, worldState, companion,
  onDreamComplete, heroName,
}) {
  const [phase, setPhase] = useState("choose"); // choose | resting | dreaming | communing | result
  const [choice, setChoice] = useState(null);
  const [dreamResult, setDreamResult] = useState(null);
  const [restResult, setRestResult] = useState(null);

  const woundCount = getWoundCount(flags);
  const divineFavor = worldState?.divineFavor || 0;

  const handleRest = useCallback(() => {
    setChoice("rest");
    const result = applyRest(flags);
    setRestResult(result);
    setPhase("resting");
  }, [flags]);

  const handleDream = useCallback(() => {
    setChoice("dream");
    const result = resolveDream(stats.Wisdom || 3, stats.Empathy || 3, divineFavor);
    setDreamResult(result);
    setPhase("dreaming");
  }, [stats, divineFavor]);

  const handleCommune = useCallback(() => {
    setChoice("commune");
    setPhase("communing");
  }, []);

  const handleContinue = useCallback(() => {
    onDreamComplete?.({
      choice,
      dreamResult,
      restResult,
      echoBonus: dreamResult?.echoBonus || 0,
      healedWound: restResult?.healedWound || false,
    });
  }, [choice, dreamResult, restResult, onDreamComplete]);

  return (
    <div style={bg}>
      {/* Camp intro */}
      {phase === "choose" && (
        <div style={{ ...dreamCard, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🏕️</div>
          <div style={{
            fontSize: 18, fontWeight: "bold", color: "#4caf8a",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 8,
          }}>
            Night Falls
          </div>
          <div style={{
            fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.6, marginBottom: 20,
          }}>
            The fire crackles softly. The stars are thick tonight.
            {woundCount > 0 && ` You carry ${woundCount} wound${woundCount > 1 ? "s" : ""}.`}
            {" "}How will you spend the night?
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 400, margin: "0 auto" }}>
            {/* Rest */}
            <button onClick={handleRest} style={{
              ...dreamCard,
              cursor: "pointer",
              border: woundCount > 0
                ? "1px solid rgba(76,175,138,0.4)"
                : "1px solid rgba(76,175,138,0.15)",
              padding: "14px 16px", textAlign: "left",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 24 }}>🏕️</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8d8b0" }}>Rest</div>
                  <div style={{ fontSize: 13, color: "#a08060" }}>
                    {woundCount > 0 ? "Heal a wound. A quiet night." : "A quiet night. Nothing more."}
                  </div>
                </div>
              </div>
            </button>

            {/* Dream */}
            <button onClick={handleDream} style={{
              ...dreamCard,
              cursor: "pointer",
              border: "1px solid rgba(139,109,181,0.3)",
              padding: "14px 16px", textAlign: "left",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 24 }}>🌙</span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8d8b0" }}>Dream</div>
                  <div style={{ fontSize: 13, color: "#a08060" }}>
                    Close your eyes. Something waits in the dark.
                  </div>
                </div>
              </div>
            </button>

            {/* Commune (only if companion) */}
            {companion && (
              <button onClick={handleCommune} style={{
                ...dreamCard,
                cursor: "pointer",
                border: "1px solid rgba(212,160,23,0.3)",
                padding: "14px 16px", textAlign: "left",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 24 }}>🔥</span>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8d8b0" }}>Commune</div>
                    <div style={{ fontSize: 13, color: "#a08060" }}>
                      Sit by the fire with {companion.name || "your companion"}.
                    </div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Rest result */}
      {phase === "resting" && (
        <div style={{ ...dreamCard, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🏕️</div>
          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 16,
          }}>
            {restResult?.healedWound
              ? "You sleep deeply. When you wake, the pain has dulled. Your body is healing."
              : "You sleep soundly. The fire has burned to embers. You feel rested."}
          </div>
          {restResult?.healedWound && (
            <div style={{ fontSize: 13, color: "#4caf8a", marginBottom: 12 }}>
              Wound healed
            </div>
          )}
          <button onClick={handleContinue} style={goldBtn}>Dawn breaks</button>
        </div>
      )}

      {/* Dream result */}
      {phase === "dreaming" && dreamResult && (
        <div style={{ ...dreamCard, textAlign: "center",
          background: dreamResult.isNightmare ? "rgba(232,93,58,0.06)" : "rgba(139,109,181,0.06)",
          border: dreamResult.isNightmare ? "1px solid rgba(232,93,58,0.25)" : "1px solid rgba(139,109,181,0.25)",
        }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>
            {dreamResult.isNightmare ? "😰" : "🌙"}
          </div>
          <div style={{
            fontSize: 16, fontWeight: "bold",
            color: dreamResult.isNightmare ? "#e85d3a" : "#8b6db5",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12,
          }}>
            {dreamResult.isNightmare ? "Nightmare" : "A Dream of Thunder"}
          </div>

          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 16, fontStyle: "italic",
          }}>
            {dreamResult.isNightmare
              ? (dreamData?.nightmareText || "Shadows close in. Something chases you through corridors of smoke. You wake gasping.")
              : (dreamData?.dreamText || "You float above a mountain. Lightning strikes the peak but it doesn't burn. You hear a voice: 'Soon.'")}
          </div>

          {dreamResult.echoBonus > 0 && (
            <div style={{ fontSize: 13, color: "#8b6db5", marginBottom: 12 }}>
              Echo bonus +{dreamResult.echoBonus} for your next vision
            </div>
          )}

          <button onClick={handleContinue} style={goldBtn}>Wake up</button>
        </div>
      )}

      {/* Commune result */}
      {phase === "communing" && (
        <div style={{ ...dreamCard, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔥</div>
          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 16,
          }}>
            {dreamData?.communeText ||
              `You sit with ${companion?.name || "your companion"} by the fire. The conversation is easy and the silence comfortable. Something strengthens between you.`}
          </div>
          <div style={{ fontSize: 13, color: "#d4a017", marginBottom: 12 }}>
            Companion bond strengthened
          </div>
          <button onClick={handleContinue} style={goldBtn}>Dawn breaks</button>
        </div>
      )}
    </div>
  );
}
