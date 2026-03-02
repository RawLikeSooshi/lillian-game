import { bg, parentCard, goldBtn } from "../styles";

export default function AskParentScreen({ puzzle, onBack }) {
  return (
    <div style={bg}>
      <div style={{ ...parentCard, maxWidth: 660, width: "100%", boxSizing: "border-box", textAlign: "center" }}>
        <p style={{ fontSize: 10, color: "#8a7a60", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 8 }}>
          Ask Someone You Trust
        </p>
        <h2 style={{ fontSize: 18, color: "#3a3020", margin: "0 0 14px" }}>{puzzle.title}</h2>
        <div style={{
          background: "rgba(58,48,32,0.06)",
          borderRadius: 10,
          padding: "14px 16px",
          marginBottom: 14,
          textAlign: "left",
        }}>
          <p style={{ lineHeight: 1.85, color: "#3a3020", margin: 0, fontSize: 14 }}>
            {puzzle.askParentPrompt}
          </p>
        </div>
        <p style={{ fontSize: 12, color: "#8a7a60", lineHeight: 1.8, marginBottom: 16 }}>
          Talk it through together. There's no timer and no penalty for being here. When you're ready, go back to the puzzle.
        </p>
        <button onClick={onBack} style={{
          ...goldBtn,
          width: "100%",
          background: "linear-gradient(135deg, #8a7a60, #6a5a40)",
        }}>
          Go Back to the Puzzle
        </button>
      </div>
    </div>
  );
}
