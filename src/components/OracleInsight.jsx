export default function OracleInsight({ lesson }) {
  return (
    <div style={{
      background: "rgba(107,143,212,0.1)",
      border: "1px solid rgba(107,143,212,0.26)",
      borderRadius: 9,
      padding: 13,
      marginBottom: 14,
    }}>
      <p style={{ fontSize: 12, color: "#6b8fd4", marginBottom: 4, letterSpacing: 1, fontVariant: "small-caps" }}>
        🦉 The Oracle's Insight
      </p>
      <p style={{ lineHeight: 1.85, color: "#b0c4e8", margin: 0, fontSize: 16 }}>
        {lesson}
      </p>
    </div>
  );
}
