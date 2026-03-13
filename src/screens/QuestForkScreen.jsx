import StatBar from "../components/StatBar";
import InventoryBar from "../components/InventoryBar";
import { STAT_ICONS } from "../engine/stats";
import { bg, card, forkPathCard } from "../styles";

export default function QuestForkScreen({ fork, heroName, stats, inventory, onSelect }) {
  return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#d4a017", fontSize: 12 }}>Choose Your Path</span>
        </div>
        {inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
      </div>

      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <h2 style={{ fontSize: 18, color: "#d4a017", margin: "0 0 12px" }}>{fork.title}</h2>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 14, textAlign: "left" }}>
          {fork.description.split("\n").map((l, i) => (
            <p key={i} style={{ margin: "0 0 8px", lineHeight: 1.85, color: "#c8b88a", fontSize: 16 }}>{l}</p>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, maxWidth: 660, width: "100%", flexWrap: "wrap" }}>
        {fork.paths.map(path => (
          <button
            key={path.id}
            onClick={() => onSelect(path.id)}
            style={forkPathCard}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(212,160,23,0.5)";
              e.currentTarget.style.background = "rgba(255,248,220,0.1)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(212,160,23,0.25)";
              e.currentTarget.style.background = "rgba(255,248,220,0.06)";
            }}
          >
            <div style={{ fontSize: 36, marginBottom: 8 }}>{path.icon}</div>
            <h3 style={{ fontSize: 16, color: "#d4a017", margin: "0 0 8px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{path.label}</h3>
            <p style={{ fontSize: 16, color: "#c8b88a", lineHeight: 1.7, margin: "0 0 10px", fontFamily: "'Cormorant Garamond', Georgia, serif" }}>{path.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
              {Object.entries(path.statBias).map(([stat, hint]) => (
                <span key={stat} style={{
                  fontSize: 12,
                  color: "#a08060",
                  background: "rgba(212,160,23,0.08)",
                  borderRadius: 4,
                  padding: "2px 6px",
                }}>
                  {STAT_ICONS[stat]} {hint}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
