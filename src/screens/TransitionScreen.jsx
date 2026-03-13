import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import WorldTicker from "../components/WorldTicker";
import OathBadge from "../components/OathBadge";
import { bg, transitionCard, goldBtn } from "../styles";

export default function TransitionScreen({
  heroName, transitionText, inventory, stats, chapter, onContinue,
  tickerMessages = [], oaths = [],
}) {
  const activeOaths = oaths.filter(o => !o.broken);

  return (
    <div style={bg}>
      <div className="fade-in" style={{ ...transitionCard, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "var(--ch-accent)", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#a08060", fontSize: 10 }}>Chapter {chapter}</span>
        </div>
        {inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
        {activeOaths.length > 0 && (
          <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {activeOaths.map(o => <OathBadge key={o.id} oathId={o.id} compact />)}
          </div>
        )}
      </div>
      <div className="fade-in-up" style={transitionCard}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 24 }}>🛤️</span>
          <p style={{ fontSize: 10, color: "rgba(var(--ch-accent-rgb),0.6)", letterSpacing: 2, fontVariant: "small-caps", margin: 0 }}>On the Road</p>
        </div>
        <div style={{ borderLeft: "2px solid rgba(var(--ch-accent-rgb),0.3)", paddingLeft: 14, marginBottom: 18 }}>
          {transitionText.split("\n").map((l, i) => (
            <p key={i} style={{
              margin: "0 0 10px", lineHeight: 1.85, color: "#c8b88a", fontSize: 18, fontStyle: "italic",
              animation: `fadeInUp 0.6s ease ${0.15 + i * 0.08}s both`,
            }}>{l}</p>
          ))}
        </div>

        {/* World Ticker */}
        {tickerMessages.length > 0 && (
          <div className="fade-in" style={{ marginBottom: 14 }}>
            <WorldTicker messages={tickerMessages} />
          </div>
        )}

        <button onClick={onContinue} style={{ ...goldBtn, width: "100%" }}>
          Continue →
        </button>
      </div>
    </div>
  );
}
