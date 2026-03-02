export default function ChoiceButton({ index, choice, onClick, flags, inventory }) {
  // Hide if requires a flag that isn't set
  if (choice.requiresFlag && (!flags || !flags[choice.requiresFlag])) return null;
  // Hide if requires an item the player doesn't have
  if (choice.requiresItem && (!inventory || !inventory.some(item => item.id === choice.requiresItem))) return null;

  const isItemUnlocked = choice.requiresItem || choice.requiresFlag;

  return (
    <button
      onClick={() => onClick(choice)}
      style={{
        background: "rgba(255,248,220,0.05)",
        border: isItemUnlocked ? "1px solid rgba(212,160,23,0.35)" : "1px solid rgba(212,160,23,0.19)",
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
        {isItemUnlocked && <span style={{ color: "rgba(212,160,23,0.6)", marginRight: 4 }}>✦</span>}
        {"ABCD"[index]}.
      </span>
      {choice.text}
    </button>
  );
}
