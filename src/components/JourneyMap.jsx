import React from "react";

const COLORS = {
  1: "#d4a017",
  2: "#c49a2e",
  3: "#c8884a",
  4: "#5a9ab5",
  5: "#7ab55a",
  6: "#8a7ab5",
  7: "#d4703a",
  8: "#a08860",
  9: "#b54a4a",
  10: "#e8c84a",
};

const CHAPTER_NAMES = {
  1: "Delphi",
  2: "Road",
  3: "Corinth",
  4: "Messina",
  5: "Garden",
  6: "Hades",
  7: "Forge",
  8: "Labyrinth",
  9: "Athens",
  10: "Olympus",
};

export default function JourneyMap({ currentChapter, chapterEndStats = {} }) {
  const chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "10px 12px 6px",
        background: "rgba(0,0,0,0.25)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          minWidth: "max-content",
          gap: 0,
        }}
      >
        {chapters.map((ch) => {
          const isCompleted = ch in chapterEndStats;
          const isCurrent = ch === currentChapter;
          const isFuture = !isCompleted && !isCurrent;
          const accent = COLORS[ch];
          const size = isCurrent ? 34 : 28;

          // Line segment before this node (skip for chapter 1)
          const lineBefore =
            ch > 1 ? (
              <div
                key={`line-${ch}`}
                style={{
                  width: 28,
                  height: 2,
                  flexShrink: 0,
                  borderTop:
                    ch <= currentChapter
                      ? `2px solid ${COLORS[ch - 1] || "#888"}`
                      : "2px dotted rgba(255,255,255,0.2)",
                }}
              />
            ) : null;

          const nodeStyle = {
            width: size,
            height: size,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: isCurrent ? 14 : 12,
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            lineHeight: 1,
            transition: "all 0.3s ease",
            position: "relative",
          };

          if (isCompleted) {
            Object.assign(nodeStyle, {
              background: accent,
              color: "#1a1a1a",
              border: `2px solid ${accent}`,
              boxShadow: `0 0 8px ${accent}66`,
            });
          } else if (isCurrent) {
            Object.assign(nodeStyle, {
              background: accent,
              color: "#1a1a1a",
              border: `2px solid ${accent}`,
              boxShadow: `0 0 12px ${accent}88`,
            });
          } else {
            // future
            Object.assign(nodeStyle, {
              background: "transparent",
              color: "rgba(255,255,255,0.3)",
              border: "2px solid rgba(255,255,255,0.15)",
            });
          }

          return (
            <React.Fragment key={ch}>
              {lineBefore}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: 0,
                  gap: 3,
                }}
              >
                <div
                  className={isCurrent ? "glow-pulse" : undefined}
                  style={nodeStyle}
                >
                  {ch}
                </div>
                <span
                  style={{
                    fontSize: 9,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    color:
                      isCompleted || isCurrent
                        ? "rgba(255,255,255,0.7)"
                        : "rgba(255,255,255,0.25)",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.03em",
                    fontWeight: isCurrent ? 700 : 400,
                  }}
                >
                  {CHAPTER_NAMES[ch]}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
