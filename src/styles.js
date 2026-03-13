// ── Fonts ──
const serif = "'Cormorant Garamond', Georgia, serif";
const sansSerif = "system-ui, -apple-system, sans-serif";

// ── Theme-aware background (reads CSS vars set by data-chapter) ──
export const bg = {
  minHeight: "100vh",
  background: "linear-gradient(160deg, var(--ch-bg-from) 0%, var(--ch-bg-via) 40%, var(--ch-bg-to) 100%)",
  fontFamily: serif,
  color: "#e8d8b0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "18px 14px 36px",
};

export const card = {
  background: "rgba(255,248,220,0.05)",
  border: "1px solid rgba(var(--ch-accent-rgb),0.28)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const goldBtn = {
  background: "linear-gradient(135deg, var(--ch-accent), color-mix(in srgb, var(--ch-accent) 70%, #000))",
  border: "none",
  borderRadius: 8,
  padding: "12px 26px",
  color: "#1a0f00",
  fontSize: 16,
  fontFamily: serif,
  fontWeight: 600,
  cursor: "pointer",
  letterSpacing: "0.5px",
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
};

export const puzzleCard = {
  background: "rgba(255,248,220,0.05)",
  border: "1px solid rgba(107,143,212,0.28)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const transitionCard = {
  background: "rgba(255,248,220,0.05)",
  border: "1px solid rgba(var(--ch-accent-rgb),0.28)",
  borderLeft: "3px solid rgba(var(--ch-accent-rgb),0.4)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const forkPathCard = {
  background: "rgba(255,248,220,0.06)",
  border: "1px solid rgba(var(--ch-accent-rgb),0.25)",
  borderRadius: 14,
  padding: "20px 18px",
  flex: 1,
  minWidth: 240,
  cursor: "pointer",
  textAlign: "center",
  transition: "all 0.2s",
};

export const parentCard = {
  background: "#faf8f0",
  border: "1px solid #e0d8c0",
  borderRadius: 12,
  padding: "18px 20px",
  color: "#3a3020",
  fontFamily: serif,
};

export const prophecyCard = {
  background: "#0a0806",
  borderRadius: 16,
  padding: "32px 24px",
  textAlign: "center",
};

export const encounterCard = {
  background: "rgba(232,93,58,0.08)",
  border: "1px solid rgba(232,93,58,0.3)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const duelCard = {
  background: "rgba(107,143,212,0.08)",
  border: "1px solid rgba(107,143,212,0.3)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const echoCard = {
  background: "rgba(139,109,181,0.08)",
  border: "1px solid rgba(139,109,181,0.3)",
  borderRadius: 16,
  padding: 24,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const dreamCard = {
  background: "rgba(76,175,138,0.06)",
  border: "1px solid rgba(76,175,138,0.25)",
  borderRadius: 16,
  padding: 20,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const sacrificeCard = {
  background: "rgba(180,40,40,0.08)",
  border: "1px solid rgba(180,40,40,0.35)",
  borderRadius: 16,
  padding: 24,
  maxWidth: 660,
  width: "100%",
  boxSizing: "border-box",
};

export const nodeCard = {
  background: "rgba(255,248,220,0.06)",
  border: "1px solid rgba(var(--ch-accent-rgb),0.25)",
  borderRadius: 14,
  padding: "16px 14px",
  cursor: "pointer",
  textAlign: "center",
  transition: "all 0.2s",
  minWidth: 140,
};

export const nodeCardVisited = {
  background: "rgba(255,248,220,0.02)",
  border: "1px solid rgba(var(--ch-accent-rgb),0.1)",
  borderRadius: 14,
  padding: "16px 14px",
  textAlign: "center",
  opacity: 0.5,
  minWidth: 140,
};

export const timerBar = {
  height: 6,
  borderRadius: 3,
  background: "rgba(255,248,220,0.1)",
  overflow: "hidden",
  marginBottom: 12,
};

export const resolveBarOuter = {
  height: 10,
  borderRadius: 5,
  background: "rgba(255,248,220,0.1)",
  overflow: "hidden",
  marginBottom: 8,
};

// ── Typography helpers ──
export const heading = {
  fontFamily: serif,
  fontWeight: 700,
  letterSpacing: "1px",
  color: "var(--ch-accent)",
};

export const bodyText = {
  fontFamily: serif,
  fontSize: 19,
  lineHeight: 1.85,
  color: "#e8d8b0",
};

export const label = {
  fontFamily: sansSerif,
  fontSize: 13,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "rgba(var(--ch-accent-rgb),0.6)",
};

// ── Chapter theme colors (for JS access when CSS vars aren't enough) ──
export const CHAPTER_THEMES = {
  1:  { accent: "#d4a017", name: "The Road to Delphi" },
  2:  { accent: "#c49a2e", name: "The Road from Delphi" },
  3:  { accent: "#c8884a", name: "The City of Corinth" },
  4:  { accent: "#5a9ab5", name: "The Straits of Messina" },
  5:  { accent: "#7ab55a", name: "The Garden of the Hesperides" },
  6:  { accent: "#8a7ab5", name: "The Halls of Hades" },
  7:  { accent: "#d4703a", name: "The Forge of Hephaestus" },
  8:  { accent: "#a08860", name: "The Labyrinth of Crete" },
  9:  { accent: "#b54a4a", name: "The Siege of Athens" },
  10: { accent: "#e8c84a", name: "The Daughter of Thunder" },
};
