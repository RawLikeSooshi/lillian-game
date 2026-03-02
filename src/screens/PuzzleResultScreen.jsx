import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import { STAT_ICONS } from "../engine/stats";
import { bg, puzzleCard, goldBtn } from "../styles";

export default function PuzzleResultScreen({ puzzle, puzzleState, stats, inventory, onContinue }) {
  const solved = puzzleState.solved;
  const statChanges = solved ? (puzzle.onSolve || {}) : (puzzle.onSkip || {});
  const message = solved ? puzzle.solveMessage : puzzle.skipMessage;

  return (
    <div style={bg}>
      <div style={{ ...puzzleCard, marginBottom: 10, padding: "11px 16px" }}>
        {inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
      </div>

      <div style={puzzleCard}>
        <h3 style={{ color: "#6b8fd4", marginBottom: 10, fontSize: 12, fontVariant: "small-caps", letterSpacing: 1 }}>
          {puzzle.title} — {solved ? "Solved" : "Skipped"}
        </h3>

        <div style={{
          background: solved ? "rgba(76,175,138,0.08)" : "rgba(160,128,96,0.08)",
          border: `1px solid ${solved ? "rgba(76,175,138,0.25)" : "rgba(160,128,96,0.25)"}`,
          borderRadius: 9,
          padding: 13,
          marginBottom: 12,
        }}>
          <p style={{ lineHeight: 1.85, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>
            {message}
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {Object.entries(statChanges).map(([s, v]) => (
            <span key={s} style={{
              background: v > 0 ? "rgba(76,175,138,0.13)" : "rgba(232,93,58,0.13)",
              border: `1px solid ${v > 0 ? "rgba(76,175,138,0.36)" : "rgba(232,93,58,0.36)"}`,
              borderRadius: 5,
              padding: "3px 8px",
              fontSize: 11,
              color: v > 0 ? "#4caf8a" : "#e85d3a",
            }}>
              {STAT_ICONS[s]} {s} {v > 0 ? `+${v}` : v}
            </span>
          ))}
        </div>

        <button onClick={onContinue} style={{ ...goldBtn, width: "100%" }}>
          Continue →
        </button>
      </div>
    </div>
  );
}
