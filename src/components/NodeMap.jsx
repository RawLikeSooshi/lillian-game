import React from "react";
import { nodeCard, nodeCardVisited } from "../styles";

/**
 * Exploration node map.
 * Shows 3-4 locations as clickable cards. Visited nodes dim.
 * Player selects which nodes to visit (limited picks).
 */
export default function NodeMap({ nodes, visited = [], remainingPicks = 0, onSelectNode, lockedNodes = [] }) {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "#a08060",
          marginBottom: 16,
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}
      >
        Choose {remainingPicks} location{remainingPicks !== 1 ? "s" : ""} to explore
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 14,
          justifyContent: "center",
        }}
      >
        {nodes.map((node) => {
          const isVisited = visited.includes(node.id);
          const isLocked = lockedNodes.includes(node.id);
          const canSelect = !isVisited && !isLocked && remainingPicks > 0;

          return (
            <div
              key={node.id}
              onClick={() => canSelect && onSelectNode?.(node)}
              style={{
                ...(isVisited ? nodeCardVisited : nodeCard),
                cursor: canSelect ? "pointer" : "default",
                opacity: isLocked ? 0.3 : isVisited ? 0.5 : 1,
                border: canSelect
                  ? "1px solid rgba(212,160,23,0.5)"
                  : isVisited
                    ? "1px solid rgba(212,160,23,0.1)"
                    : "1px solid rgba(212,160,23,0.15)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 6 }}>{node.icon}</div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: isVisited ? "#706050" : "#e8d8b0",
                  marginBottom: 4,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {node.name}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: isVisited ? "#504030" : "#a08060",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                {isVisited ? "Explored" : isLocked ? "Locked" : node.hint}
              </div>
              {isLocked && node.lockReason && (
                <div style={{ fontSize: 13, color: "#705030", marginTop: 4 }}>
                  {node.lockReason}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
