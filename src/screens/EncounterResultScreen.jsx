import React, { useState, useEffect } from "react";
import { bg, encounterCard, goldBtn } from "../styles";
import StatBar from "../components/StatBar";
import OracleInsight from "../components/OracleInsight";
import { OUTCOME_LABELS, OUTCOME_COLORS } from "../engine/dice";

/**
 * Shows the outcome of an encounter: dice breakdown, stat changes, reputation changes.
 */
export default function EncounterResultScreen({
  encounterResult, stats, lastChanges, onContinue, heroName,
}) {
  const [showLesson, setShowLesson] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLesson(true), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!encounterResult) return null;

  const { overall, rounds, encounter } = encounterResult;
  const outcomeData = encounter.outcomes[overall];
  const outcomeColor = OUTCOME_COLORS[overall] || "#c8b88a";

  return (
    <div style={bg}>
      <div style={{ ...encounterCard, marginBottom: 16 }}>
        {/* Outcome header */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>{encounter.image}</div>
          <div style={{
            fontSize: 20, fontWeight: "bold", color: outcomeColor,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {OUTCOME_LABELS[overall]}
          </div>
        </div>

        {/* Round breakdown */}
        <div style={{
          display: "flex", gap: 8, justifyContent: "center", marginBottom: 16, flexWrap: "wrap",
        }}>
          {rounds.map((r, i) => (
            <div key={i} style={{
              padding: "4px 10px", borderRadius: 6,
              background: `${OUTCOME_COLORS[r.outcome]}22`,
              border: `1px solid ${OUTCOME_COLORS[r.outcome]}44`,
              fontSize: 13, color: OUTCOME_COLORS[r.outcome],
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}>
              R{i + 1}: {r.raw}{r.stat ? ` + ${r.modifier}` : ""} = {r.total}
              {r.nat20 && " NAT 20!"}
              {r.nat1 && " nat 1"}
            </div>
          ))}
        </div>

        {/* Narrative outcome */}
        {outcomeData?.text && (
          <div style={{
            fontSize: 16, color: "#e8d8b0", lineHeight: 1.7, marginBottom: 16,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {outcomeData.text}
          </div>
        )}

        {/* Stat changes */}
        {lastChanges && Object.keys(lastChanges).length > 0 && (
          <div style={{ marginBottom: 16 }}>
            {Object.entries(stats).map(([name, value]) => (
              <StatBar key={name} name={name} value={value} change={lastChanges[name]} />
            ))}
          </div>
        )}

        {/* Oracle's insight */}
        {showLesson && outcomeData?.lesson && (
          <OracleInsight lesson={outcomeData.lesson} />
        )}

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <button onClick={onContinue} style={goldBtn}>Continue</button>
        </div>
      </div>
    </div>
  );
}
