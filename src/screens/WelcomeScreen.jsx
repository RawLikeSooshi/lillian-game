import { INITIAL_STATS, STAT_COLORS, STAT_ICONS } from "../engine/stats";
import { bg, card, goldBtn } from "../styles";

const STAT_DESCRIPTIONS = {
  Courage: "Acting even when it's scary",
  Wisdom: "Thinking before you act",
  Discipline: "Staying focused",
  Empathy: "Understanding how others feel",
  Cunning: "Finding clever solutions",
};

export default function WelcomeScreen({ onBegin }) {
  return (
    <div style={bg}>
      <div style={{ ...card, textAlign: "center", marginTop: 24 }}>
        <div style={{ fontSize: 56, marginBottom: 8 }}>🏛️</div>
        <h1 style={{ fontSize: 24, color: "#d4a017", letterSpacing: 3, marginBottom: 5, fontVariant: "small-caps" }}>Hero of Olympus</h1>
        <p style={{ fontSize: 10, color: "#a08060", letterSpacing: 4, marginBottom: 18 }}>CHAPTER I — THE ROAD TO DELPHI</p>
        <p style={{ lineHeight: 1.9, color: "#c8b88a", marginBottom: 18, fontSize: 14 }}>In ancient Greece, every hero begins with a single choice.<br/>The gods don't judge you by your power — they judge you by your character.<br/><br/>The choices you make will shape who you become.<br/>There are no wrong answers. Only different kinds of heroes.</p>
        <div style={{ background: "rgba(212,160,23,0.08)", border: "1px solid rgba(212,160,23,0.16)", borderRadius: 12, padding: "12px 16px", marginBottom: 18, textAlign: "left" }}>
          <p style={{ fontSize: 10, color: "#d4a017", marginBottom: 8, fontVariant: "small-caps", letterSpacing: 1 }}>Your Five Hero Stats</p>
          {Object.keys(INITIAL_STATS).map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
              <span>{STAT_ICONS[s]}</span>
              <span style={{ fontSize: 13, color: STAT_COLORS[s], fontWeight: "bold", width: 82 }}>{s}</span>
              <span style={{ fontSize: 12, color: "#888070" }}>{STAT_DESCRIPTIONS[s]}</span>
            </div>
          ))}
        </div>
        <button onClick={onBegin} style={goldBtn}>Begin Your Journey →</button>
      </div>
    </div>
  );
}
