import { useState } from "react";

const MAX_SLOTS = 6;

export default function InventoryBar({ inventory }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 10 }}>
      {Array.from({ length: MAX_SLOTS }, (_, i) => {
        const item = inventory[i];
        return (
          <div
            key={i}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: item
                ? "1px solid rgba(212,160,23,0.4)"
                : "1px solid rgba(212,160,23,0.15)",
              background: item ? "rgba(212,160,23,0.08)" : "transparent",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              cursor: item ? "default" : "default",
              position: "relative",
            }}
            onMouseEnter={() => item && setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {item && item.icon}
            {item && hoveredIndex === i && (
              <div style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(30,20,10,0.95)",
                border: "1px solid rgba(212,160,23,0.4)",
                borderRadius: 8,
                padding: "8px 12px",
                whiteSpace: "nowrap",
                zIndex: 10,
                color: "#e8d8b0",
                fontSize: 16,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textAlign: "center",
              }}>
                <div style={{ color: "#d4a017", fontWeight: "bold", marginBottom: 3 }}>{item.name}</div>
                <div style={{ color: "#a08060" }}>{item.description}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
