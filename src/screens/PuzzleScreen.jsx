import { useState } from "react";
import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import { bg, puzzleCard, goldBtn } from "../styles";

export default function PuzzleScreen({ heroName, puzzle, puzzleState, stats, inventory, chapter, onAnswer, onSkip, onAskParent }) {
  const [selected, setSelected] = useState(null);
  const hasWrongAttempt = puzzleState.wrongAttempts > 0;
  const hintsExhausted = puzzleState.hintsUsed >= puzzle.hints.length;

  return (
    <div style={bg}>
      <div style={{ ...puzzleCard, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#6b8fd4", fontSize: 12, fontVariant: "small-caps" }}>{"\u{1F9E9}"} {heroName}</span>
          <span style={{ color: "#a08060", fontSize: 12 }}>Chapter {chapter} — Puzzle</span>
        </div>
        {inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
      </div>

      <div style={puzzleCard}>
        <h2 style={{ fontSize: 17, color: "#6b8fd4", margin: "0 0 10px" }}>{puzzle.title}</h2>
        <div style={{ background: "rgba(107,143,212,0.08)", borderRadius: 9, padding: 13, marginBottom: 12 }}>
          <p style={{ lineHeight: 1.85, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 16 }}>{puzzle.setup}</p>
        </div>

        <div style={{ borderLeft: "2px solid rgba(107,143,212,0.3)", paddingLeft: 12, marginBottom: 14 }}>
          {puzzle.question.split("\n").map((l, i) => (
            <p key={i} style={{ margin: "0 0 8px", lineHeight: 1.85, color: "#e8d8b0", fontSize: 16 }}>{l}</p>
          ))}
        </div>

        {/* Wrong answer feedback */}
        {hasWrongAttempt && !hintsExhausted && (
          <div style={{
            background: "rgba(232,93,58,0.08)",
            border: "1px solid rgba(232,93,58,0.25)",
            borderRadius: 8,
            padding: "8px 12px",
            marginBottom: 10,
            textAlign: "center",
          }}>
            <p style={{ margin: 0, fontSize: 16, color: "#e8a060", fontStyle: "italic" }}>
              Not quite right. Here's something to help you think about it...
            </p>
          </div>
        )}

        {hasWrongAttempt && hintsExhausted && (
          <div style={{
            background: "rgba(232,93,58,0.08)",
            border: "1px solid rgba(232,93,58,0.25)",
            borderRadius: 8,
            padding: "8px 12px",
            marginBottom: 10,
            textAlign: "center",
          }}>
            <p style={{ margin: 0, fontSize: 16, color: "#e8a060", fontStyle: "italic" }}>
              This is a tough one. Give it one more try — or you can move on.
            </p>
          </div>
        )}

        {/* Hints (auto-revealed on wrong answers) */}
        {puzzleState.hintsUsed > 0 && (
          <div style={{ marginBottom: 12 }}>
            {puzzle.hints.slice(0, puzzleState.hintsUsed).map((hint, i) => (
              <div key={i} style={{
                background: "rgba(107,143,212,0.08)",
                border: "1px solid rgba(107,143,212,0.2)",
                borderRadius: 8,
                padding: "8px 12px",
                marginBottom: 6,
              }}>
                <span style={{ color: "#6b8fd4", fontSize: 12, fontVariant: "small-caps" }}>Hint {i + 1}</span>
                <p style={{ margin: "4px 0 0", color: "#c8b88a", fontSize: 16, lineHeight: 1.7 }}>{hint}</p>
              </div>
            ))}
          </div>
        )}

        {/* Answer options */}
        <p style={{ fontSize: 12, color: "#6b8fd4", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>Choose your answer</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
          {puzzle.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              style={{
                background: selected === i ? "rgba(107,143,212,0.15)" : "rgba(255,248,220,0.05)",
                border: selected === i ? "1px solid rgba(107,143,212,0.5)" : "1px solid rgba(212,160,23,0.19)",
                borderRadius: 9,
                padding: "11px 13px",
                color: "#e8d8b0",
                fontSize: 16,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                textAlign: "left",
                cursor: "pointer",
                lineHeight: 1.65,
              }}
            >
              <span style={{ color: "#6b8fd4", marginRight: 6, fontWeight: "bold" }}>{"ABCD"[i]}.</span>
              {opt}
            </button>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          {puzzle.tier === 2 && onAskParent && (
            <button onClick={onAskParent} style={{
              background: "rgba(250,248,240,0.1)",
              border: "1px solid rgba(224,216,192,0.3)",
              borderRadius: 7,
              padding: "8px 14px",
              color: "#e0d8c0",
              fontSize: 16,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              cursor: "pointer",
            }}>
              Ask a Parent
            </button>
          )}
          <button onClick={onSkip} style={{
            background: "rgba(212,160,23,0.06)",
            border: "1px solid rgba(212,160,23,0.2)",
            borderRadius: 7,
            padding: "8px 14px",
            color: "#a08060",
            fontSize: 16,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            cursor: "pointer",
          }}>
            Skip This Puzzle
          </button>
        </div>

        {selected !== null && (
          <button onClick={() => { onAnswer(selected); setSelected(null); }} style={{ ...goldBtn, width: "100%" }}>
            Confirm Answer →
          </button>
        )}
      </div>
    </div>
  );
}
