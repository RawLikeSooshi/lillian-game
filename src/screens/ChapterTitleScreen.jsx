import React from "react";
import { bg, goldBtn } from "../styles";

const ROMAN = {
  1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
  6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
};

const TAGLINES = {
  1: "Every journey begins with a single road.",
  2: "Not all who guide you will reveal themselves.",
  3: "The city holds more paths than its streets.",
  4: "The sea tests what the road taught you.",
  5: "At the edge of the world, truth grows wild.",
  6: "To find the light, descend into darkness.",
  7: "The forge shapes more than metal.",
  8: "Every labyrinth has a heart.",
  9: "When gods war, mortals choose.",
  10: "The mountain has always been waiting.",
};

const keyframes = `
@keyframes chTitleFadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes chTitleSlideUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes chTitleExpandLine {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes chTitleGlow {
  0%, 100% { text-shadow: 0 0 20px var(--ch-accent), 0 0 40px rgba(var(--ch-accent-rgb),0.3); }
  50%      { text-shadow: 0 0 35px var(--ch-accent), 0 0 70px rgba(var(--ch-accent-rgb),0.5); }
}
`;

export default function ChapterTitleScreen({ chapter, title, onContinue }) {
  const roman = ROMAN[chapter] || chapter;
  const tagline = TAGLINES[chapter] || "";
  const font = "'Cormorant Garamond', Georgia, serif";

  return (
    <div style={{
      ...bg,
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: 0,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Inject keyframes */}
      <style>{keyframes}</style>

      {/* Radial glow behind numeral */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -60%)",
        width: 340,
        height: 340,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(var(--ch-accent-rgb),0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        animation: "chTitleFadeIn 1.5s ease-out forwards",
      }} />

      {/* Content container */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}>
        {/* Chapter label */}
        <div style={{
          fontFamily: font,
          fontSize: 14,
          letterSpacing: "4px",
          textTransform: "uppercase",
          color: "rgba(232,216,176,0.5)",
          marginBottom: 8,
          opacity: 0,
          animation: "chTitleFadeIn 0.8s ease-out forwards",
          animationDelay: "0s",
        }}>
          Chapter
        </div>

        {/* Roman numeral */}
        <div style={{
          fontFamily: font,
          fontSize: 96,
          fontWeight: 700,
          color: "var(--ch-accent)",
          lineHeight: 1,
          letterSpacing: "6px",
          opacity: 0,
          animation: "chTitleFadeIn 1s ease-out forwards, chTitleGlow 3s ease-in-out infinite",
          animationDelay: "0s, 0.5s",
        }}>
          {roman}
        </div>

        {/* Decorative divider */}
        <div style={{
          width: 180,
          height: 1,
          background: "linear-gradient(90deg, transparent, var(--ch-accent), transparent)",
          margin: "20px 0",
          transformOrigin: "center",
          transform: "scaleX(0)",
          animation: "chTitleExpandLine 0.8s ease-out forwards",
          animationDelay: "0.5s",
        }} />

        {/* Chapter title */}
        <h1 style={{
          fontFamily: font,
          fontSize: 34,
          fontWeight: 400,
          color: "#e8d8b0",
          margin: "0 0 16px",
          letterSpacing: "1.5px",
          textAlign: "center",
          opacity: 0,
          animation: "chTitleSlideUp 0.9s ease-out forwards",
          animationDelay: "0.8s",
        }}>
          {title}
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: font,
          fontSize: 18,
          fontStyle: "italic",
          color: "rgba(232,216,176,0.55)",
          margin: "0 0 40px",
          textAlign: "center",
          maxWidth: 400,
          lineHeight: 1.6,
          opacity: 0,
          animation: "chTitleFadeIn 1s ease-out forwards",
          animationDelay: "1.2s",
        }}>
          {tagline}
        </p>

        {/* Begin Chapter button */}
        <button
          onClick={onContinue}
          style={{
            ...goldBtn,
            fontSize: 18,
            padding: "14px 36px",
            letterSpacing: "1px",
            opacity: 0,
            animation: "chTitleFadeIn 0.8s ease-out forwards",
            animationDelay: "1.8s",
          }}
        >
          Begin Chapter
        </button>
      </div>
    </div>
  );
}
