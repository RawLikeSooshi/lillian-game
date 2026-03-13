import React from "react";
import { OATH_CATALOG } from "../engine/oaths";

/**
 * Active oath indicator. Subtle glow around oath name.
 * Shows buff bonus. Warning flash when a choice would break it.
 */
export default function OathBadge({ oathId, warning = false, compact = false }) {
  const oath = OATH_CATALOG[oathId];
  if (!oath) return null;

  if (compact) {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          fontSize: 13,
          color: warning ? "#e85d3a" : "#d4a017",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        <span>{oath.icon}</span>
        <span>{oath.name}</span>
        {warning && <span style={{ color: "#e85d3a" }}> !</span>}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 8,
        border: warning
          ? "1px solid rgba(232,93,58,0.5)"
          : "1px solid rgba(212,160,23,0.3)",
        background: warning
          ? "rgba(232,93,58,0.1)"
          : "rgba(212,160,23,0.06)",
        boxShadow: warning
          ? "0 0 8px rgba(232,93,58,0.3)"
          : "0 0 6px rgba(212,160,23,0.15)",
        fontSize: 13,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        transition: "all 0.3s",
      }}
    >
      <span style={{ fontSize: 16 }}>{oath.icon}</span>
      <div>
        <div style={{ color: warning ? "#e85d3a" : "#e8d8b0", fontWeight: "bold" }}>
          {oath.name}
        </div>
        {warning && (
          <div style={{ color: "#e85d3a", fontSize: 13 }}>
            This choice would break your oath!
          </div>
        )}
        {!warning && (
          <div style={{ color: "#a08060", fontSize: 13 }}>
            {Object.entries(oath.buff).map(([s, v]) => `+${v} ${s}`).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}
