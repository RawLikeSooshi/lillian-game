import React, { useState } from "react";
import { bg, card, goldBtn } from "../styles";
import OracleInsight from "../components/OracleInsight";
import { OATH_CATALOG } from "../engine/oaths";

/**
 * Oath Swearing Screen — Presented when an oath opportunity arises.
 * Shows the narrative setup, oath details, buff/constraint, and accept/decline.
 */
export default function OathSwearScreen({
  oathData, heroName, onSwear, onDecline,
}) {
  const [showOracle, setShowOracle] = useState(false);
  const [decided, setDecided] = useState(null); // null | "sworn" | "declined"

  const oath = OATH_CATALOG[oathData?.oathId];
  if (!oath) return null;

  const handleSwear = () => {
    setDecided("sworn");
    setShowOracle(true);
  };

  const handleDecline = () => {
    setDecided("declined");
  };

  // After decision, show result
  if (decided === "sworn") {
    return (
      <div style={bg}>
        <div style={{ ...card, maxWidth: 660, textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>{oath.icon}</div>
          <div style={{
            fontSize: 13, color: "#4caf8a", letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 8,
          }}>
            Oath Sworn
          </div>
          <div style={{
            fontSize: 20, fontWeight: "bold", color: "#d4a017",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12,
          }}>
            {oath.name}
          </div>

          {/* Buff display */}
          <div style={{
            background: "rgba(76,175,138,0.08)",
            border: "1px solid rgba(76,175,138,0.2)",
            borderRadius: 10, padding: "10px 14px", marginBottom: 14,
          }}>
            <div style={{ fontSize: 13, color: "#4caf8a", marginBottom: 4 }}>Blessing Gained</div>
            <div style={{ fontSize: 16, color: "#e8d8b0" }}>
              {Object.entries(oath.buff).map(([s, v]) => `+${v} ${s} to all rolls`).join(", ")}
            </div>
          </div>

          {/* Constraint */}
          <div style={{
            background: "rgba(212,160,23,0.06)",
            border: "1px solid rgba(212,160,23,0.15)",
            borderRadius: 10, padding: "10px 14px", marginBottom: 14,
          }}>
            <div style={{ fontSize: 13, color: "#d4a017", marginBottom: 4 }}>Bound By</div>
            <div style={{ fontSize: 16, color: "#a08060", fontStyle: "italic" }}>
              {oath.constraint}
            </div>
          </div>

          {/* Oracle */}
          {showOracle && oath.oracleExplanation && (
            <OracleInsight lesson={oath.oracleExplanation} />
          )}

          <button onClick={() => onSwear(oath.id)} style={{ ...goldBtn, marginTop: 12 }}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (decided === "declined") {
    return (
      <div style={bg}>
        <div style={{ ...card, maxWidth: 660, textAlign: "center" }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>{oath.icon}</div>
          <div style={{
            fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 16, fontStyle: "italic",
          }}>
            You don't take the oath. {oath.swornTo} watches you with understanding — not everyone binds themselves willingly, and that's a choice too.
          </div>
          <button onClick={onDecline} style={goldBtn}>
            Continue
          </button>
        </div>
      </div>
    );
  }

  // ── Initial presentation ──
  return (
    <div style={bg}>
      <div style={{ ...card, maxWidth: 660 }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 44, marginBottom: 8 }}>{oath.icon}</div>
          <div style={{
            fontSize: 13, color: "#706050", letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 6,
          }}>
            An Oath Is Offered
          </div>
          <div style={{
            fontSize: 20, fontWeight: "bold", color: "#d4a017",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {oath.name}
          </div>
        </div>

        {/* Narrative setup */}
        <div style={{
          fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
          lineHeight: 1.7, marginBottom: 20, whiteSpace: "pre-line",
          borderLeft: "3px solid rgba(212,160,23,0.2)", paddingLeft: 14,
        }}>
          {oathData.narrativeSetup}
        </div>

        {/* Oath details */}
        <div style={{
          background: "rgba(212,160,23,0.04)",
          border: "1px solid rgba(212,160,23,0.15)",
          borderRadius: 12, padding: 16, marginBottom: 16,
        }}>
          <div style={{ fontSize: 16, color: "#c8b88a", marginBottom: 10 }}>
            {oath.description}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 10 }}>
            <div style={{
              flex: 1, minWidth: 140, padding: "8px 12px",
              background: "rgba(76,175,138,0.08)",
              borderRadius: 8, border: "1px solid rgba(76,175,138,0.2)",
            }}>
              <div style={{ fontSize: 13, color: "#4caf8a", marginBottom: 4 }}>You Gain</div>
              <div style={{ fontSize: 16, color: "#e8d8b0" }}>
                {Object.entries(oath.buff).map(([s, v]) => `+${v} ${s}`).join(", ")}
              </div>
            </div>
            <div style={{
              flex: 1, minWidth: 140, padding: "8px 12px",
              background: "rgba(232,93,58,0.06)",
              borderRadius: 8, border: "1px solid rgba(232,93,58,0.15)",
            }}>
              <div style={{ fontSize: 13, color: "#e85d3a", marginBottom: 4 }}>You Accept</div>
              <div style={{ fontSize: 16, color: "#a08060", fontStyle: "italic" }}>
                {oath.constraint}
              </div>
            </div>
          </div>

          <div style={{ fontSize: 13, color: "#706050", fontStyle: "italic" }}>
            Sworn to: {oath.swornTo}
          </div>
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={handleSwear}
            style={{
              ...goldBtn, flex: 1,
              background: "rgba(76,175,138,0.15)",
              border: "1px solid rgba(76,175,138,0.4)",
              color: "#4caf8a",
            }}
          >
            Swear the Oath
          </button>
          <button
            onClick={handleDecline}
            style={{
              ...goldBtn, flex: 1,
              background: "rgba(160,128,96,0.1)",
              border: "1px solid rgba(160,128,96,0.3)",
              color: "#a08060",
            }}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
