import React, { useState } from "react";
import { STAT_COLORS } from "../engine/stats";

/**
 * Divine power display icon.
 * Stat-colored with tier indicator (I/II/III). Tooltip on hover.
 */
export default function PowerIcon({ power, size = "normal" }) {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!power) return null;

  const color = STAT_COLORS[power.stat] || "#d4a017";
  const tierLabel = ["I", "II", "III"][power.tier - 1] || "?";
  const iconSize = size === "small" ? 24 : 36;

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip((v) => !v)}
    >
      <div
        style={{
          width: iconSize,
          height: iconSize,
          borderRadius: "50%",
          border: `2px solid ${color}`,
          background: `${color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size === "small" ? 14 : 18,
          cursor: "pointer",
          boxShadow: `0 0 6px ${color}44`,
          position: "relative",
        }}
      >
        {power.icon}
        <span
          style={{
            position: "absolute",
            bottom: -2,
            right: -2,
            fontSize: 12,
            fontWeight: "bold",
            color,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          {tierLabel}
        </span>
      </div>

      {showTooltip && (
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: 6,
            padding: "8px 12px",
            borderRadius: 8,
            background: "rgba(10,8,6,0.95)",
            border: `1px solid ${color}44`,
            minWidth: 180,
            zIndex: 10,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: "bold", color, marginBottom: 4 }}>
            {power.name}
          </div>
          <div style={{ fontSize: 16, color: "#c8b88a", lineHeight: 1.4 }}>
            {power.description}
          </div>
        </div>
      )}
    </div>
  );
}
