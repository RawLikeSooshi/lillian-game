import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import { bg, transitionCard, goldBtn } from "../styles";

export default function TransitionScreen({ heroName, transitionText, inventory, stats, chapter, onContinue }) {
  return (
    <div style={bg}>
      <div style={{ ...transitionCard, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#a08060", fontSize: 10 }}>Chapter {chapter}</span>
        </div>
        {inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
      </div>
      <div style={transitionCard}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 24 }}>🛤️</span>
          <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", margin: 0 }}>On the Road</p>
        </div>
        <div style={{ borderLeft: "2px solid rgba(160,128,96,0.3)", paddingLeft: 12, marginBottom: 18 }}>
          {transitionText.split("\n").map((l, i) => (
            <p key={i} style={{ margin: "0 0 8px", lineHeight: 1.85, color: "#c8b88a", fontSize: 14, fontStyle: "italic" }}>{l}</p>
          ))}
        </div>
        <button onClick={onContinue} style={{ ...goldBtn, width: "100%" }}>
          Continue →
        </button>
      </div>
    </div>
  );
}
