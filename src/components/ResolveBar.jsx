import React from "react";
import { resolveBarOuter } from "../styles";

/**
 * Opponent resolve meter for dialogue duels.
 * Shows remaining resolve as a horizontal bar that cracks as it drops.
 */
export default function ResolveBar({ current, max, npcName }) {
  const pct = Math.max(0, (current / max) * 100);
  const isLow = pct <= 30;
  const isCritical = pct <= 15;

  const barColor = isCritical
    ? "#e85d3a"
    : isLow
      ? "#d4a017"
      : "#6b8fd4";

  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          color: "#a08060",
          marginBottom: 4,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        <span>{npcName || "Opponent"} Resolve</span>
        <span>{current}/{max}</span>
      </div>
      <div style={resolveBarOuter}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: barColor,
            borderRadius: 5,
            transition: "width 0.5s ease-out, background 0.3s",
            boxShadow: isCritical ? `0 0 8px rgba(232,93,58,0.4)` : "none",
          }}
        />
      </div>
      {isLow && !isCritical && (
        <div style={{ fontSize: 13, color: "#d4a017", fontStyle: "italic", marginTop: 2 }}>
          Their resolve is weakening...
        </div>
      )}
      {isCritical && (
        <div style={{ fontSize: 13, color: "#e85d3a", fontStyle: "italic", marginTop: 2 }}>
          They're about to break.
        </div>
      )}
    </div>
  );
}
