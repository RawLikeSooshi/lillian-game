import StatBar from "../components/StatBar";
import ChoiceButton from "../components/ChoiceButton";
import InventoryBar from "../components/InventoryBar";
import { bg, card } from "../styles";

export default function SceneScreen({ heroName, scene, sceneIndex, totalScenes, stats, inventory, flags, onChoice, chapter }) {
  return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 10, padding: "11px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
          <span style={{ color: "#d4a017", fontSize: 12, fontVariant: "small-caps" }}>⚡ {heroName}</span>
          <span style={{ color: "#a08060", fontSize: 10 }}>Chapter {chapter} — Scene {sceneIndex + 1}/{totalScenes}</span>
        </div>
        {inventory && inventory.length > 0 && <InventoryBar inventory={inventory} />}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
          {Object.entries(stats).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
        </div>
      </div>
      <div style={card}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: 30 }}>{scene.image}</span>
          <div>
            <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 1 }}>{scene.atmosphere}</p>
            <h2 style={{ fontSize: 17, color: "#d4a017", margin: 0 }}>{scene.title}</h2>
          </div>
        </div>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 18 }}>
          {scene.text.split("\n").map((l, i) => (
            <p key={i} style={{ margin: "0 0 8px", lineHeight: 1.85, color: "#c8b88a", fontSize: 14 }}>{l}</p>
          ))}
        </div>
        {scene.inventoryBeat && inventory && inventory.some(item => item.id === scene.inventoryBeat.item) && (
          <div style={{
            background: "rgba(212,160,23,0.08)",
            border: "1px solid rgba(212,160,23,0.25)",
            borderRadius: 9,
            padding: "10px 13px",
            marginBottom: 14,
          }}>
            <p style={{ fontSize: 13, color: "#d4a017", margin: 0, fontStyle: "italic" }}>
              {scene.inventoryBeat.text}
            </p>
          </div>
        )}
        <p style={{ fontSize: 10, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>What do you do?</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {scene.choices.map((c, i) => (
            <ChoiceButton key={i} index={i} choice={c} onClick={onChoice} flags={flags} inventory={inventory} />
          ))}
        </div>
      </div>
    </div>
  );
}
