import React, { useState, useCallback } from "react";
import { bg, duelCard, goldBtn } from "../styles";
import ResolveBar from "../components/ResolveBar";
import DiceRoll from "../components/DiceRoll";
import PowerIcon from "../components/PowerIcon";
import { resolveCombatRound, OUTCOME_LABELS, OUTCOME_COLORS } from "../engine/dice";
import { getPowerBonus, checkPowerAvailability } from "../engine/powers";
import { getOathBuffs } from "../engine/oaths";

const RESPONSE_STYLES = {
  Assert: { label: "Assert", icon: "⚔️", stat: "Courage", color: "#e85d3a" },
  Reason: { label: "Reason", icon: "📜", stat: "Wisdom", color: "#6b8fd4" },
  Empathize: { label: "Empathize", icon: "🫶", stat: "Empathy", color: "#4caf8a" },
  Deflect: { label: "Deflect", icon: "🦊", stat: "Cunning", color: "#d4a017" },
  Endure: { label: "Endure", icon: "🏛️", stat: "Discipline", color: "#8b6db5" },
};

/**
 * Dialogue Duel Screen — Multi-round social combat.
 * Pick response styles, roll D20 vs opponent's resolve DC.
 */
export default function DialogueDuelScreen({
  duel, stats, powers, oaths, usedPowers,
  onDuelComplete, heroName,
}) {
  const [round, setRound] = useState(0);
  const [resolve, setResolve] = useState(duel.baseResolve);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [phase, setPhase] = useState("choose"); // choose | rolling | roundResult | complete
  const [history, setHistory] = useState([]);

  const currentRoundData = duel.rounds[round];
  const oathBuffs = getOathBuffs(oaths);

  // Check for hidden choice reveal (Athena's Sight)
  const canSeeHidden = powers.some(p => p.effect?.revealHiddenDuelChoice);

  const handleResponse = useCallback((styleKey) => {
    if (phase !== "choose") return;

    const style = RESPONSE_STYLES[styleKey];
    const roundOption = currentRoundData.options[styleKey];
    if (!roundOption) return;

    const statValue = stats[style.stat] || 3;
    const powerBonus = getPowerBonus(powers, style.stat, "duel");
    const oathBonus = oathBuffs[style.stat] || 0;
    const dc = roundOption.dc || 12;

    const result = resolveCombatRound(style.stat, statValue, dc, powerBonus, oathBonus);

    // Calculate resolve damage
    let resolveDamage = 0;
    if (result.outcome === "crit") resolveDamage = 4;
    else if (result.outcome === "success") resolveDamage = 2;
    else if (result.outcome === "partial") resolveDamage = 1;
    // Apply resistances/vulnerabilities
    if (duel.resistances?.[styleKey]) resolveDamage = Math.max(0, resolveDamage - duel.resistances[styleKey]);
    if (duel.vulnerabilities?.[styleKey]) resolveDamage += Math.abs(duel.vulnerabilities[styleKey]);

    setCurrentRoll({ ...result, styleKey, resolveDamage, responseText: roundOption.text, dc });
    setPhase("rolling");
  }, [phase, stats, powers, oathBuffs, currentRoundData, duel]);

  const handleRollComplete = useCallback(() => {
    setPhase("roundResult");
  }, []);

  const handleNextRound = useCallback(() => {
    const newResolve = Math.max(0, resolve - (currentRoll?.resolveDamage || 0));
    setResolve(newResolve);

    const newHistory = [...history, {
      round: round + 1,
      style: currentRoll.styleKey,
      outcome: currentRoll.outcome,
      resolveDamage: currentRoll.resolveDamage,
    }];
    setHistory(newHistory);

    // Check win/lose/continue
    if (newResolve <= 0) {
      setPhase("complete");
      setTimeout(() => onDuelComplete?.({ outcome: "win", history: newHistory, duel }), 1000);
    } else if (round + 1 >= duel.maxRounds) {
      // Out of rounds — draw or lose based on how much resolve remains
      const result = newResolve <= duel.baseResolve * 0.3 ? "draw" : "lose";
      setPhase("complete");
      setTimeout(() => onDuelComplete?.({ outcome: result, history: newHistory, duel }), 1000);
    } else {
      setRound(round + 1);
      setCurrentRoll(null);
      setPhase("choose");
    }
  }, [resolve, currentRoll, history, round, duel, onDuelComplete]);

  if (!duel || !currentRoundData) return null;

  return (
    <div style={bg}>
      {/* NPC header */}
      <div style={{ ...duelCard, marginBottom: 16 }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 32, marginBottom: 4 }}>{duel.image}</div>
          <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {duel.title}
          </div>
          <div style={{ fontSize: 13, color: "#a08060", fontStyle: "italic", marginTop: 2 }}>
            {duel.npcName}
          </div>
        </div>

        <ResolveBar current={resolve} max={duel.baseResolve} npcName={duel.npcName} />

        {/* Resistance/vulnerability hints */}
        {(duel.resistances || duel.vulnerabilities) && (
          <div style={{ fontSize: 13, color: "#706050", textAlign: "center", marginBottom: 8 }}>
            {duel.resistances && Object.keys(duel.resistances).map(k =>
              <span key={k} style={{ marginRight: 8 }}>Resists: {k}</span>
            )}
            {canSeeHidden && duel.vulnerabilities && Object.keys(duel.vulnerabilities).map(k =>
              <span key={k} style={{ color: "#4caf8a", marginRight: 8 }}>Weak to: {k}</span>
            )}
          </div>
        )}

        {/* Round indicator */}
        <div style={{ fontSize: 13, color: "#706050", textAlign: "center" }}>
          Round {round + 1} of {duel.maxRounds}
        </div>
      </div>

      {/* NPC's line + response options */}
      {phase === "choose" && (
        <div style={{ ...duelCard, marginBottom: 16 }}>
          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.6, marginBottom: 16, fontStyle: "italic",
            padding: "10px 14px", borderLeft: "3px solid rgba(107,143,212,0.3)",
          }}>
            "{currentRoundData.npcLine}"
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {Object.entries(RESPONSE_STYLES).map(([key, style]) => {
              const option = currentRoundData.options[key];
              if (!option && !canSeeHidden) return null;
              if (!option) return null;

              return (
                <button
                  key={key}
                  onClick={() => handleResponse(key)}
                  style={{
                    background: `${style.color}11`,
                    border: `1px solid ${style.color}33`,
                    borderRadius: 10,
                    padding: "10px 14px",
                    color: "#e8d8b0",
                    fontSize: 16,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "all 0.15s",
                  }}
                >
                  <span style={{ fontSize: 18 }}>{style.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: style.color, fontWeight: "bold" }}>
                      {style.label} ({style.stat})
                    </div>
                    <div style={{ fontSize: 16, color: "#c8b88a", marginTop: 2 }}>
                      {option.text}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Rolling + result */}
      {(phase === "rolling" || phase === "roundResult") && currentRoll && (
        <div style={{ ...duelCard, marginBottom: 16 }}>
          <div style={{
            fontSize: 16, color: "#c8b88a", textAlign: "center", marginBottom: 4,
            fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic",
          }}>
            "{currentRoll.responseText}"
          </div>
          <DiceRoll
            roll={{ raw: currentRoll.raw, nat20: currentRoll.nat20, nat1: currentRoll.nat1 }}
            modifier={currentRoll.modifier}
            dc={currentRoll.dc}
            stat={currentRoll.stat}
            onComplete={handleRollComplete}
          />
          {phase === "roundResult" && (
            <div style={{ textAlign: "center", marginTop: 8 }}>
              {currentRoll.resolveDamage > 0 ? (
                <div style={{ fontSize: 16, color: "#4caf8a", marginBottom: 8, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  Resolve -{currentRoll.resolveDamage}
                </div>
              ) : (
                <div style={{ fontSize: 16, color: "#e85d3a", marginBottom: 8, fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
                  No effect.
                </div>
              )}
              <button onClick={handleNextRound} style={goldBtn}>
                {resolve - currentRoll.resolveDamage <= 0 ? "Victory" :
                  round + 1 >= duel.maxRounds ? "See Outcome" : "Continue"}
              </button>
            </div>
          )}
        </div>
      )}

      {phase === "complete" && (
        <div style={{ ...duelCard, textAlign: "center" }}>
          <div style={{ fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The conversation reaches its conclusion...
          </div>
        </div>
      )}
    </div>
  );
}
