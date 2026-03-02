import { bg, card, goldBtn } from "../styles";

export default function QuestForkConfirmScreen({ fork, selectedPath, onConfirm, onBack }) {
  const path = fork.paths.find(p => p.id === selectedPath);
  const otherPath = fork.paths.find(p => p.id !== selectedPath);

  return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", maxWidth: 500 }}>
        <div style={{ fontSize: 48, marginBottom: 10 }}>{path.icon}</div>
        <h2 style={{ fontSize: 18, color: "#d4a017", margin: "0 0 12px" }}>{path.label}</h2>
        <p style={{ fontSize: 14, color: "#c8b88a", lineHeight: 1.85, marginBottom: 14 }}>
          {path.description}
        </p>
        <div style={{
          background: "rgba(212,160,23,0.08)",
          borderRadius: 9,
          padding: "12px 14px",
          marginBottom: 16,
        }}>
          <p style={{ fontSize: 13, color: "#d4a017", margin: 0, fontStyle: "italic" }}>
            Are you sure? "{otherPath.label}" will remain untraveled.
          </p>
        </div>
        <button onClick={onConfirm} style={{ ...goldBtn, width: "100%", marginBottom: 8 }}>
          Yes, I choose this path
        </button>
        <button onClick={onBack} style={{
          background: "rgba(212,160,23,0.1)",
          border: "1px solid rgba(212,160,23,0.3)",
          borderRadius: 7,
          padding: "10px 16px",
          color: "#d4a017",
          fontSize: 13,
          fontFamily: "Georgia,serif",
          cursor: "pointer",
          width: "100%",
        }}>
          Go back
        </button>
      </div>
    </div>
  );
}
