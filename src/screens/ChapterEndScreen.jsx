import StatBar from "../components/StatBar";
import DiscussionGuide from "../components/DiscussionGuide";
import { bg, card, goldBtn } from "../styles";

export default function ChapterEndScreen({ heroName, chapter, stats, ch1EndStats, flags, figure, identity, onContinue, onReset }) {
  if (chapter === 1) {
    return (
      <div style={bg}>
        <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
          <div style={{ fontSize: 50, marginBottom: 6 }}>{identity.symbol}</div>
          <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Sees You As</p>
          <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
          <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 14 }}>{identity.desc}</p>
          </div>
          <p style={{ fontSize: 12, color: "#a08060" }}>This is who <em>{heroName}</em> is becoming — after just one chapter.</p>
        </div>
        <div style={card}>
          <h3 style={{ color: "#d4a017", marginBottom: 10, fontSize: 11, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>{heroName}'s Stats — End of Chapter I</h3>
          {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([n, v]) => <StatBar key={n} name={n} value={v} change={0} />)}
          <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
            <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 5, fontVariant: "small-caps", letterSpacing: 1 }}>Remember</p>
            <p style={{ fontSize: 12, color: "#a08060", lineHeight: 1.85, margin: 0 }}>These stats show what you've practiced — not what you're worth. Every hero has a different balance. A hero strong in Empathy isn't weaker than one strong in Cunning. The most important thing: <em>you</em> chose, and <em>you</em> can see why.</p>
          </div>
          {onContinue && (
            <button onClick={onContinue} style={{ ...goldBtn, width: "100%", marginTop: 12 }}>
              Continue to Chapter 2 →
            </button>
          )}
          <button onClick={onReset} style={{
            marginTop: 8,
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
            Play Again with Different Choices ↩
          </button>
        </div>
      </div>
    );
  }

  // Chapter 2 end
  return (
    <div style={bg}>
      {/* Myth figure reveal */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 50, marginBottom: 6 }}>{figure.symbol}</div>
        <div style={{ borderLeft: "2px solid rgba(212,160,23,0.3)", paddingLeft: 12, marginBottom: 14, textAlign: "left" }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontStyle: "italic", fontSize: 14 }}>
            {figure.revealLine}
          </p>
        </div>
        <p style={{ fontSize: 10, color: "#a08060", letterSpacing: 2, fontVariant: "small-caps", marginBottom: 3 }}>
          Your guide was
        </p>
        <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{figure.name}</h2>
      </div>

      {/* Hero Portrait */}
      <div style={{ ...card, textAlign: "center", marginBottom: 10 }}>
        <div style={{ fontSize: 44, marginBottom: 6 }}>{identity.symbol}</div>
        <p style={{ fontSize: 9, color: "#a08060", letterSpacing: 3, fontVariant: "small-caps", marginBottom: 3 }}>The Oracle Now Sees You As</p>
        <h2 style={{ fontSize: 22, color: "#d4a017", margin: "0 0 10px" }}>{identity.title}</h2>
        <div style={{ background: "rgba(212,160,23,0.08)", borderRadius: 11, padding: "12px 14px", marginBottom: 10 }}>
          <p style={{ lineHeight: 1.9, color: "#c8b88a", margin: 0, fontSize: 14 }}>{identity.desc}</p>
        </div>
      </div>

      {/* Stats comparison */}
      <div style={card}>
        <h3 style={{ color: "#d4a017", marginBottom: 12, fontSize: 11, fontVariant: "small-caps", letterSpacing: 1, textAlign: "center" }}>
          {heroName}'s Growth — Chapter I vs Chapter II
        </h3>
        {Object.entries(stats).sort((a, b) => b[1] - a[1]).map(([name, value]) => {
          const ch1Val = ch1EndStats ? ch1EndStats[name] : value;
          const delta = value - ch1Val;
          return (
            <div key={name} style={{ marginBottom: 12 }}>
              <StatBar name={name} value={value} change={0} />
              {delta !== 0 && (
                <div style={{ textAlign: "right", marginTop: -4 }}>
                  <span style={{
                    fontSize: 10,
                    color: delta > 0 ? "#4caf8a" : "#e85d3a",
                    background: delta > 0 ? "rgba(76,175,138,0.1)" : "rgba(232,93,58,0.1)",
                    borderRadius: 4,
                    padding: "2px 6px",
                  }}>
                    Ch1: {ch1Val} → Ch2: {value} ({delta > 0 ? "+" : ""}{delta})
                  </span>
                </div>
              )}
            </div>
          );
        })}

        <div style={{ marginTop: 14, padding: 12, background: "rgba(255,248,220,0.04)", borderRadius: 9, border: "1px solid rgba(212,160,23,0.13)" }}>
          <p style={{ fontSize: 9, color: "#d4a017", marginBottom: 5, fontVariant: "small-caps", letterSpacing: 1 }}>Remember</p>
          <p style={{ fontSize: 12, color: "#a08060", lineHeight: 1.85, margin: 0 }}>
            Two chapters in, and your hero is taking shape. The choices are getting harder — and so is the person making them. That's not an accident. That's growth.
          </p>
        </div>

        <DiscussionGuide flags={flags} stats={stats} />

        <button onClick={onReset} style={{
          marginTop: 12,
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
          Play Again with Different Choices ↩
        </button>
      </div>
    </div>
  );
}
