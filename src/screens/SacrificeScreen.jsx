import React from "react";
import { bg, sacrificeCard, goldBtn } from "../styles";
import SacrificeConfirm from "../components/SacrificeConfirm";
import { describeSacrifice, canSacrifice } from "../engine/sacrifice";
import { playSacrifice } from "../engine/sounds";

/**
 * Sacrifice Screen — Irreversible trade.
 * Shows what you can sacrifice and what it buys.
 */
export default function SacrificeScreen({
  sacrificeData, stats, inventory, powers,
  onSacrificeConfirm, onSacrificeDecline, heroName,
}) {
  if (!sacrificeData) return null;

  const context = { stats, inventory, powers };
  const validation = canSacrifice(sacrificeData.type, sacrificeData.targetId, context);
  const description = describeSacrifice(sacrificeData.type, sacrificeData.targetId, context);

  return (
    <div style={bg}>
      <div style={{ maxWidth: 660, width: "100%" }}>
        {/* Narrative context */}
        <div style={{
          ...sacrificeCard,
          marginBottom: 16,
          background: "rgba(139,109,181,0.06)",
          border: "1px solid rgba(139,109,181,0.2)",
        }}>
          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, textAlign: "center",
          }}>
            {sacrificeData.narrative || "A moment of profound choice stands before you."}
          </div>
          {sacrificeData.oracleText && (
            <div style={{
              fontSize: 16, color: "#8b6db5", fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif", textAlign: "center",
              marginTop: 12,
            }}>
              The Oracle whispers: "{sacrificeData.oracleText}"
            </div>
          )}
        </div>

        {/* Sacrifice confirmation */}
        {validation.valid ? (
          <SacrificeConfirm
            sacrifice={{
              ...description,
              gain: sacrificeData.gainText,
            }}
            onConfirm={() => { playSacrifice(); onSacrificeConfirm?.(sacrificeData); }}
            onCancel={onSacrificeDecline}
          />
        ) : (
          <div style={{ ...sacrificeCard, textAlign: "center" }}>
            <div style={{ fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 12 }}>
              {validation.reason || "This sacrifice is not possible."}
            </div>
            <button onClick={onSacrificeDecline} style={goldBtn}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}
