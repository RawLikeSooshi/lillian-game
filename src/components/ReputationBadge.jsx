import React from "react";
import { FACTION_ICONS, FACTION_LABELS, getReputationTier } from "../engine/reputation";

/**
 * Small inline badge showing faction standing.
 * Shows icon + tier label. Used on transition screens and exploration gates.
 */
export default function ReputationBadge({ faction, value, compact = false }) {
  const tier = getReputationTier(value);
  const icon = FACTION_ICONS[faction] || "?";
  const label = FACTION_LABELS[faction] || faction;

  if (compact) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontSize: 13,
          color: tier.color,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        <span>{icon}</span>
        <span>{tier.label}</span>
      </span>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "4px 10px",
        borderRadius: 8,
        border: `1px solid ${tier.color}33`,
        background: `${tier.color}11`,
        fontSize: 13,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <span style={{ fontSize: 16 }}>{icon}</span>
      <div>
        <div style={{ color: "#e8d8b0", fontSize: 13 }}>{label}</div>
        <div style={{ color: tier.color, fontWeight: "bold" }}>{tier.label}</div>
      </div>
    </div>
  );
}
