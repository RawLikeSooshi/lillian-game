import { INITIAL_STATS, STAT_COLORS, STAT_ICONS } from "../engine/stats";
import { bg, card, goldBtn } from "../styles";

const STAT_DESCRIPTIONS = {
  Courage: "Acting even when it's scary",
  Wisdom: "Thinking before you act",
  Discipline: "Staying focused",
  Empathy: "Understanding how others feel",
  Cunning: "Finding clever solutions",
};

export default function WelcomeScreen({ onBegin, savedGame, onContinue, onExportSave, onImportSave }) {
  return (
    <div style={{ ...bg, justifyContent: "center", minHeight: "100vh" }}>
      <div className="fade-in-up" style={{ ...card, textAlign: "center", maxWidth: 560 }}>
        <div style={{ fontSize: 56, marginBottom: 8 }}>{"\u{1F3DB}\uFE0F"}</div>
        <h1 style={{
          fontSize: 28, color: "var(--ch-accent)", letterSpacing: 4, marginBottom: 6,
          fontVariant: "small-caps", fontWeight: 700,
        }}>
          Hero of Olympus
        </h1>
        <p style={{
          fontSize: 13, color: "rgba(var(--ch-accent-rgb),0.5)", letterSpacing: 5, marginBottom: 22,
          textTransform: "uppercase",
        }}>
          A Journey in Ten Chapters
        </p>
        <p style={{
          lineHeight: 2, color: "#c8b88a", marginBottom: 22, fontSize: 16,
          fontStyle: "italic",
        }}>
          In ancient Greece, every hero begins with a single choice.<br/>
          The gods don't judge you by your power — they judge you by your character.<br/><br/>
          The choices you make will shape who you become.<br/>
          There are no wrong answers. Only different kinds of heroes.
        </p>
        <div className="stagger" style={{
          background: "rgba(var(--ch-accent-rgb),0.06)",
          border: "1px solid rgba(var(--ch-accent-rgb),0.14)",
          borderRadius: 12, padding: "14px 18px", marginBottom: 20, textAlign: "left",
        }}>
          <p style={{
            fontSize: 12, color: "var(--ch-accent)", marginBottom: 10,
            fontVariant: "small-caps", letterSpacing: 1.5,
          }}>
            Your Five Hero Stats
          </p>
          {Object.keys(INITIAL_STATS).map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <span style={{ fontSize: 16 }}>{STAT_ICONS[s]}</span>
              <span style={{ fontSize: 16, color: STAT_COLORS[s], fontWeight: 600, width: 90 }}>{s}</span>
              <span style={{ fontSize: 16, color: "#888070" }}>{STAT_DESCRIPTIONS[s]}</span>
            </div>
          ))}
        </div>
        {savedGame ? (
          <>
            <button onClick={onContinue} style={{ ...goldBtn, marginBottom: 8, width: "100%" }}>
              Continue {savedGame.heroName}'s Journey — Ch.{savedGame.chapter} →
            </button>
            <button onClick={onBegin} style={{
              background: "rgba(var(--ch-accent-rgb),0.08)",
              border: "1px solid rgba(var(--ch-accent-rgb),0.25)",
              borderRadius: 8,
              padding: "11px 16px",
              color: "var(--ch-accent)",
              fontSize: 16,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              cursor: "pointer",
              width: "100%",
            }}>
              Start a New Adventure
            </button>
          </>
        ) : (
          <button onClick={onBegin} style={{ ...goldBtn, width: "100%" }}>Begin Your Journey →</button>
        )}

        {/* Save file management */}
        <div style={{
          display: "flex", gap: 8, marginTop: 16,
          justifyContent: "center", flexWrap: "wrap",
        }}>
          {savedGame && (
            <button onClick={onExportSave} style={{
              background: "none", border: "1px solid rgba(160,128,96,0.25)",
              borderRadius: 6, padding: "6px 14px", color: "#a08060",
              fontSize: 16, fontFamily: "'Cormorant Garamond', Georgia, serif", cursor: "pointer",
            }}>
              Export Save File
            </button>
          )}
          <button onClick={onImportSave} style={{
            background: "none", border: "1px solid rgba(160,128,96,0.25)",
            borderRadius: 6, padding: "6px 14px", color: "#a08060",
            fontSize: 16, fontFamily: "'Cormorant Garamond', Georgia, serif", cursor: "pointer",
          }}>
            Import Save File
          </button>
        </div>
      </div>
    </div>
  );
}
