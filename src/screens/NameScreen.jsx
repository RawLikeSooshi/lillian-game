import { bg, card, goldBtn } from "../styles";

export default function NameScreen({ nameInput, onNameChange, onSubmitName }) {
  const canSubmit = nameInput.trim().length > 0;

  return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", marginTop: 54 }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>⚡</div>
        <h2 style={{ fontSize: 20, color: "#d4a017", marginBottom: 8 }}>Who are you, young hero?</h2>
        <p style={{ color: "#a08060", marginBottom: 18, lineHeight: 1.8, fontSize: 14 }}>Every hero has a name.<br/>Yours will be remembered in the halls of Olympus.</p>
        <input
          value={nameInput}
          onChange={(e) => onNameChange(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && canSubmit) onSubmitName(nameInput.trim()); }}
          placeholder="Enter your hero's name..."
          style={{
            background: "rgba(255,248,220,0.08)",
            border: "1px solid rgba(212,160,23,0.4)",
            borderRadius: 8,
            padding: "11px 14px",
            fontSize: 17,
            color: "#e8d8b0",
            fontFamily: "Georgia,serif",
            textAlign: "center",
            width: "100%",
            boxSizing: "border-box",
            marginBottom: 12,
            outline: "none",
          }}
          autoFocus
        />
        <button
          disabled={!canSubmit}
          onClick={() => onSubmitName(nameInput.trim())}
          style={{ ...goldBtn, opacity: canSubmit ? 1 : 0.4, cursor: canSubmit ? "pointer" : "default" }}
        >
          This is my name →
        </button>
      </div>
    </div>
  );
}
