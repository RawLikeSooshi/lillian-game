import React from "react";

const STAT_COLORS = {
  Courage: "#e85d3a",
  Wisdom: "#6b8fd4",
  Discipline: "#8b6db5",
  Empathy: "#4caf8a",
  Cunning: "#d4a017",
};

const STAT_ORDER = ["Courage", "Wisdom", "Discipline", "Empathy", "Cunning"];

function getDominantStat(stats) {
  let best = STAT_ORDER[0];
  for (const s of STAT_ORDER) {
    if ((stats[s] || 0) > (stats[best] || 0)) best = s;
  }
  return best;
}

function CornerDeco({ top, left, right, bottom }) {
  const size = 14;
  const base = {
    position: "absolute",
    width: size,
    height: size,
    borderColor: "rgba(var(--ch-accent-rgb, 180,160,120), 0.45)",
    borderStyle: "solid",
    borderWidth: 0,
    pointerEvents: "none",
  };
  const style = { ...base };
  if (top !== undefined) style.top = 8;
  if (bottom !== undefined) style.bottom = 8;
  if (left !== undefined) {
    style.left = 8;
    style.borderLeftWidth = 2;
  }
  if (right !== undefined) {
    style.right = 8;
    style.borderRightWidth = 2;
  }
  if (top !== undefined) style.borderTopWidth = 2;
  if (bottom !== undefined) style.borderBottomWidth = 2;
  return <span style={style} />;
}

function Divider() {
  return (
    <div
      style={{
        width: "40%",
        height: 1,
        margin: "12px auto",
        background:
          "linear-gradient(90deg, transparent, rgba(var(--ch-accent-rgb, 180,160,120), 0.5), transparent)",
      }}
    />
  );
}

export default function HeroPortrait({ identity, heroName, stats, chapter }) {
  const dominant = getDominantStat(stats);
  const dominantColor = STAT_COLORS[dominant];
  const font = "'Cormorant Garamond', Georgia, serif";

  return (
    <div
      style={{
        position: "relative",
        padding: 3,
        borderRadius: 14,
        background:
          "linear-gradient(135deg, rgba(var(--ch-accent-rgb, 180,160,120), 0.6), rgba(var(--ch-accent-rgb, 180,160,120), 0.15) 40%, rgba(var(--ch-accent-rgb, 180,160,120), 0.6))",
        maxWidth: 320,
        margin: "16px auto",
        fontFamily: font,
      }}
    >
      {/* Inner card */}
      <div
        style={{
          position: "relative",
          background:
            "linear-gradient(170deg, #1a1a24 0%, #12121a 60%, #1a1a24 100%)",
          borderRadius: 12,
          padding: "28px 24px 24px",
          overflow: "hidden",
        }}
      >
        {/* Corner decorations */}
        <CornerDeco top left />
        <CornerDeco top right />
        <CornerDeco bottom left />
        <CornerDeco bottom right />

        {/* Symbol area */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              width: 96,
              height: 96,
              lineHeight: "96px",
            }}
          >
            {/* Radial glow */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${dominantColor}33 0%, ${dominantColor}11 50%, transparent 72%)`,
              }}
            />
            <span
              style={{
                position: "relative",
                fontSize: 64,
                lineHeight: "96px",
                filter: `drop-shadow(0 0 12px ${dominantColor}66)`,
              }}
            >
              {identity.symbol}
            </span>
          </div>
        </div>

        <Divider />

        {/* Title area */}
        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <div
            style={{
              fontSize: 11,
              fontVariant: "small-caps",
              letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.4)",
              marginBottom: 4,
              fontFamily: font,
            }}
          >
            The Oracle Sees You As
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "rgba(var(--ch-accent-rgb, 180,160,120), 1)",
              lineHeight: 1.2,
              fontFamily: font,
            }}
          >
            {identity.title}
          </div>
        </div>

        <Divider />

        {/* Stat radar bars */}
        <div style={{ padding: "0 4px", marginBottom: 4 }}>
          {STAT_ORDER.map((name) => {
            const val = stats[name] || 0;
            const pct = Math.min((val / 20) * 100, 100);
            const color = STAT_COLORS[name];
            return (
              <div
                key={name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 6,
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 70,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.55)",
                    textAlign: "right",
                    fontVariant: "small-caps",
                    letterSpacing: "0.05em",
                    fontFamily: font,
                    flexShrink: 0,
                  }}
                >
                  {name}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: 4,
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: `${pct}%`,
                      height: "100%",
                      background: `linear-gradient(90deg, ${color}99, ${color})`,
                      borderRadius: 2,
                      boxShadow: `0 0 6px ${color}44`,
                      transition: "width 0.4s ease",
                    }}
                  />
                </div>
                <span
                  style={{
                    width: 20,
                    fontSize: 11,
                    color: color,
                    textAlign: "right",
                    fontFamily: font,
                    flexShrink: 0,
                    fontWeight: 600,
                  }}
                >
                  {val}
                </span>
              </div>
            );
          })}
        </div>

        <Divider />

        {/* Description */}
        <div
          style={{
            textAlign: "center",
            fontSize: 13,
            fontStyle: "italic",
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.5,
            padding: "0 8px",
            marginBottom: 4,
            fontFamily: font,
          }}
        >
          {identity.desc}
        </div>

        <Divider />

        {/* Hero name */}
        <div
          style={{
            textAlign: "center",
            fontSize: 15,
            fontVariant: "small-caps",
            letterSpacing: "0.15em",
            color: "rgba(var(--ch-accent-rgb, 180,160,120), 0.85)",
            fontFamily: font,
            fontWeight: 600,
          }}
        >
          {heroName}
        </div>
      </div>
    </div>
  );
}
