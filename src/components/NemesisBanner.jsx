import React, { useState, useEffect } from "react";
import { getNemesisRelationInfo } from "../engine/nemesis";

/**
 * Rival appearance notification banner.
 * Slides in from the side when the nemesis appears.
 */
export default function NemesisBanner({ nemesis, onDismiss }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (!nemesis) return null;

  const relationInfo = getNemesisRelationInfo(nemesis);

  return (
    <div
      style={{
        padding: "12px 16px",
        borderRadius: 12,
        border: `1px solid ${relationInfo?.color || "#c8b88a"}33`,
        background: `${relationInfo?.color || "#c8b88a"}11`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: 660,
        width: "100%",
        boxSizing: "border-box",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        transform: visible ? "translateX(0)" : "translateX(100%)",
        opacity: visible ? 1 : 0,
        transition: "all 0.5s ease-out",
        cursor: onDismiss ? "pointer" : "default",
      }}
      onClick={onDismiss}
    >
      <div style={{ fontSize: 24 }}>{nemesis.parentSymbol}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: "bold", color: "#e8d8b0" }}>
          {nemesis.name}
        </div>
        <div style={{ fontSize: 13, color: "#a08060" }}>
          {nemesis.knownToHero
            ? `${nemesis.parentDescription} — ${relationInfo?.label || "Unknown"}`
            : "A familiar shadow on the road."}
        </div>
      </div>
      <div
        style={{
          fontSize: 12,
          color: relationInfo?.color || "#c8b88a",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {relationInfo?.label}
      </div>
    </div>
  );
}
