import StatBar from "../components/StatBar";
import OracleInsight from "../components/OracleInsight";
import { STAT_ICONS } from "../engine/stats";
import { bg, card, goldBtn } from "../styles";

export default function ResultScreen({ heroName, scene, stats, lastChanges, choice, showLesson, onNext, isLastScene, chapter }) {
  return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#4caf8a", fontSize: 10 }}>✦ Stats Updated</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={lastChanges[n] || 0} />)}
        </div>
      </div>
      <div style={card}>
        <h3 style={{ color: "#d4a017", marginBottom: 10, fontSize: 12, fontVariant: "small-caps", letterSpacing: 1 }}>{scene.title} — What Happened</h3>

        {choice.isRightChoiceHardOutcome && (
          <div style={{
            background: "rgba(212,160,23,0.12)",
            border: "1px solid rgba(212,160,23,0.4)",
            borderRadius: 9,
            padding: "10px 13px",
            marginBottom: 10,
            textAlign: "center",
          }}>
            <p style={{ fontSize: 12, color: "#d4a017", margin: 0, fontStyle: "italic" }}>
              This was the harder path. The Oracle is watching.
            </p>
          </div>
        )}

        <div style={{ background: "rgba(255,248,220,0.06)", borderRadius: 9, padding: 13, marginBottom: 10 }}>
          <p style={{ lineHeight: 1.85, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>"{choice.feedback}"</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {Object.entries(choice.statChanges).map(([s, v]) => (
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
        {showLesson && <OracleInsight lesson={choice.lesson} />}
        {showLesson && (
          <button onClick={onNext} style={{ ...goldBtn, width: "100%" }}>
            {isLastScene ? (chapter === 1 ? "See My Hero Portrait →" : "See Chapter End →") : "Continue the Journey →"}
          </button>
        )}
      </div>
    </div>
  );
}
