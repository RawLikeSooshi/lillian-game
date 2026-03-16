import React, { useState, useCallback } from "react";
import { bg, encounterCard, goldBtn } from "../styles";
import TimedChoiceBar from "../components/TimedChoiceBar";
import DiceRoll from "../components/DiceRoll";
import StatBar from "../components/StatBar";
import PowerIcon from "../components/PowerIcon";
import { resolveCombatRound, resolveRawRoll, OUTCOME_LABELS } from "../engine/dice";
import { getPowerBonus, getTimerExtension, checkPowerAvailability } from "../engine/powers";
import { getOathBuffs, checkOathConstraints } from "../engine/oaths";
import { playHit, playMiss, playCrit, playClick } from "../engine/sounds";

/**
 * Encounter Screen — Timed choice combat.
 * 3-5 rounds of rapid choices with D20 rolls.
 */
export default function EncounterScreen({
  encounter, stats, powers, oaths, usedPowers, worldDCMod = 0,
  onEncounterComplete, heroName,
}) {
  const [round, setRound] = useState(0);
  const [roundResults, setRoundResults] = useState([]);
  const [currentRoll, setCurrentRoll] = useState(null);
  const [phase, setPhase] = useState("reading"); // reading | choose | rolling | result | complete
  const [timerKey, setTimerKey] = useState(0);

  const currentRoundData = encounter.choices[round];
  const dc = (encounter.baseDC || 12) + worldDCMod;
  const timerExtension = getTimerExtension(powers);
  const oathBuffs = getOathBuffs(oaths);

  // Can we see the DC? (Oracle's Whisper power)
  const canSeeDC = powers.some(p => p.effect?.revealDC);

  const handleChoice = useCallback((option) => {
    if (phase !== "choose") return;

    const statValue = stats[option.stat] || 3;
    const powerBonus = getPowerBonus(powers, option.stat, "encounter");
    const oathBonus = oathBuffs[option.stat] || 0;

    const result = resolveCombatRound(option.stat, statValue, dc, powerBonus, oathBonus);
    setCurrentRoll({ ...result, option });
    setPhase("rolling");
  }, [phase, stats, powers, oathBuffs, dc]);

  const handleTimerExpire = useCallback(() => {
    if (phase !== "choose") return;
    const result = resolveRawRoll(dc);
    setCurrentRoll({ ...result, option: { text: "You hesitated!", stat: null, statChanges: {} } });
    setPhase("rolling");
  }, [phase, dc]);

  const handleRollComplete = useCallback(() => {
    setPhase("result");
    if (currentRoll) {
      if (currentRoll.outcome === "crit") playCrit();
      else if (currentRoll.outcome === "success") playHit();
      else if (currentRoll.outcome === "partial") playHit();
      else playMiss();
    }
  }, [currentRoll]);

  const handleNextRound = useCallback(() => {
    const newResults = [...roundResults, currentRoll];
    setRoundResults(newResults);

    if (round + 1 >= encounter.choices.length) {
      // All rounds done — calculate overall outcome
      const outcomes = newResults.map(r => r.outcome);
      const crits = outcomes.filter(o => o === "crit").length;
      const successes = outcomes.filter(o => o === "success").length;
      const partials = outcomes.filter(o => o === "partial").length;

      let overall;
      if (crits > 0 && successes + crits >= outcomes.length / 2) overall = "crit";
      else if (successes + crits > outcomes.length / 2) overall = "success";
      else if (partials + successes + crits > outcomes.length / 2) overall = "partial";
      else overall = "fail";

      setPhase("complete");
      setTimeout(() => {
        onEncounterComplete?.({
          overall,
          rounds: newResults,
          encounter,
        });
      }, 1500);
    } else {
      setRound(round + 1);
      setCurrentRoll(null);
      setPhase("reading");
    }
  }, [round, roundResults, currentRoll, encounter, onEncounterComplete]);

  if (!encounter || !currentRoundData) return null;

  return (
    <div style={bg}>
      {/* Enemy header */}
      <div style={{ ...encounterCard, marginBottom: 16 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 4 }}>{encounter.image}</div>
          <div style={{ fontSize: 18, fontWeight: "bold", color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            {encounter.title}
          </div>
          <div style={{ fontSize: 16, color: "#a08060", fontStyle: "italic", marginTop: 4 }}>
            {encounter.atmosphere}
          </div>
          {canSeeDC && (
            <div style={{ fontSize: 13, color: "#6b8fd4", marginTop: 6 }}>
              Oracle's Whisper: DC {dc}
            </div>
          )}
        </div>

        {/* Round counter */}
        <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 12 }}>
          {encounter.choices.map((_, i) => (
            <div
              key={i}
              style={{
                width: 10, height: 10, borderRadius: "50%",
                background: i < round ? (roundResults[i]?.outcome === "fail" ? "#e85d3a" : "#4caf8a")
                  : i === round ? "#d4a017" : "rgba(255,248,220,0.15)",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Active powers */}
      {powers.length > 0 && (
        <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {powers.map(p => <PowerIcon key={p.id} power={p} size="small" />)}
        </div>
      )}

      {/* Reading phase — show prompt, let player read before timer starts */}
      {phase === "reading" && (
        <div style={{ ...encounterCard, marginBottom: 16 }}>
          <div style={{
            fontSize: 13, color: "#706050", letterSpacing: 2, textTransform: "uppercase",
            textAlign: "center", marginBottom: 12,
          }}>
            Round {round + 1} of {encounter.choices.length}
          </div>
          <div style={{
            fontSize: 17, color: "#e8d8b0", marginBottom: 20,
            fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.7, textAlign: "center",
          }}>
            {currentRoundData.prompt}
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => { playClick(); setPhase("choose"); setTimerKey(k => k + 1); }}
              style={{
                ...goldBtn,
                fontSize: 17,
                padding: "14px 36px",
                animation: "glowPulse 2s ease-in-out infinite",
              }}
            >
              Ready to Act
            </button>
          </div>
        </div>
      )}

      {/* Combat round — timer starts, choices visible */}
      {phase === "choose" && (
        <div style={{ ...encounterCard, marginBottom: 16 }}>
          <TimedChoiceBar
            key={timerKey}
            duration={currentRoundData.timer || 15}
            active={true}
            onExpire={handleTimerExpire}
            timerExtension={timerExtension}
          />
          <div style={{
            fontSize: 16, color: "#e8d8b0", marginBottom: 14,
            fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.5, textAlign: "center",
          }}>
            {currentRoundData.prompt}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {currentRoundData.options.map((opt, i) => {
              const label = String.fromCharCode(65 + i);
              return (
                <button
                  key={i}
                  onClick={() => handleChoice(opt)}
                  style={{
                    background: "rgba(255,248,220,0.06)",
                    border: "1px solid rgba(212,160,23,0.25)",
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
                  <span style={{
                    color: "#d4a017", fontWeight: "bold", fontSize: 13,
                    minWidth: 20, textAlign: "center",
                  }}>{label}</span>
                  <span style={{ flex: 1 }}>{opt.text}</span>
                  <span style={{ fontSize: 13, color: "#a08060" }}>{opt.stat}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Rolling */}
      {(phase === "rolling" || phase === "result") && currentRoll && (
        <div style={{ ...encounterCard, marginBottom: 16 }}>
          <div style={{
            fontSize: 16, color: "#c8b88a", textAlign: "center", marginBottom: 8,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {currentRoll.option.text}
          </div>
          <DiceRoll
            roll={{ raw: currentRoll.raw, nat20: currentRoll.nat20, nat1: currentRoll.nat1 }}
            modifier={currentRoll.modifier}
            dc={dc}
            stat={currentRoll.stat}
            onComplete={handleRollComplete}
          />
          {phase === "result" && (
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <button onClick={handleNextRound} style={goldBtn}>
                {round + 1 >= encounter.choices.length ? "See Outcome" : "Next Round"}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Complete */}
      {phase === "complete" && (
        <div style={{ ...encounterCard, textAlign: "center" }}>
          <div style={{ fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
            The encounter is decided...
          </div>
        </div>
      )}
    </div>
  );
}
