export default function ChoiceButton({ index, choice, onClick }) {
  return (
    <button
      onClick={() => onClick(choice)}
      style={{
        background: "rgba(255,248,220,0.05)",
        border: "1px solid rgba(212,160,23,0.19)",
        borderRadius: 9,
        padding: "11px 13px",
        color: "#e8d8b0",
        fontSize: 13,
        fontFamily: "Georgia,serif",
        textAlign: "left",
        cursor: "pointer",
        lineHeight: 1.65,
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(212,160,23,0.12)";
        e.currentTarget.style.borderColor = "rgba(212,160,23,0.46)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,248,220,0.05)";
        e.currentTarget.style.borderColor = "rgba(212,160,23,0.19)";
      }}
    >
      <span style={{ color: "#d4a017", marginRight: 6, fontWeight: "bold" }}>
        {"ABCD"[index]}.
      </span>
      {choice.text}
    </button>
  );
}
