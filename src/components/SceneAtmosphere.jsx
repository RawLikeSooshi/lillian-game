import React from "react";

const moodStyles = {
  road: {
    background: [
      "radial-gradient(ellipse at 50% 100%, rgba(194, 154, 76, 0.08) 0%, transparent 70%)",
      "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(194, 154, 76, 0.015) 40px, rgba(194, 154, 76, 0.015) 41px)",
    ].join(", "),
  },
  temple: {
    background: [
      "radial-gradient(ellipse at 50% 0%, rgba(180, 210, 240, 0.07) 0%, transparent 60%)",
      "repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(180, 210, 240, 0.02) 60px, rgba(180, 210, 240, 0.02) 62px)",
    ].join(", "),
  },
  sea: {
    background: [
      "radial-gradient(ellipse at 30% 60%, rgba(40, 100, 180, 0.06) 0%, transparent 50%)",
      "radial-gradient(ellipse at 70% 40%, rgba(60, 140, 200, 0.05) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 80%, rgba(30, 80, 160, 0.04) 0%, transparent 60%)",
      "linear-gradient(180deg, rgba(20, 60, 120, 0.03) 0%, rgba(40, 120, 180, 0.06) 100%)",
    ].join(", "),
    animation: "breathe 4s ease-in-out infinite",
  },
  garden: {
    background: [
      "radial-gradient(ellipse at 30% 30%, rgba(60, 160, 60, 0.05) 0%, transparent 40%)",
      "radial-gradient(ellipse at 70% 60%, rgba(80, 180, 80, 0.04) 0%, transparent 35%)",
      "radial-gradient(ellipse at 20% 70%, rgba(50, 140, 50, 0.04) 0%, transparent 30%)",
      "radial-gradient(ellipse at 50% 50%, rgba(220, 190, 80, 0.05) 0%, transparent 50%)",
    ].join(", "),
  },
  underworld: {
    background: [
      "radial-gradient(ellipse at 50% 100%, rgba(100, 40, 140, 0.06) 0%, transparent 50%)",
      "linear-gradient(180deg, rgba(10, 5, 20, 0.08) 0%, rgba(40, 15, 60, 0.05) 100%)",
    ].join(", "),
  },
  forge: {
    background: [
      "radial-gradient(ellipse at 50% 100%, rgba(220, 100, 20, 0.07) 0%, transparent 60%)",
      "radial-gradient(ellipse at 50% 90%, rgba(200, 50, 10, 0.04) 0%, transparent 40%)",
    ].join(", "),
    animation: "breathe 4s ease-in-out infinite",
  },
  labyrinth: {
    background: [
      "linear-gradient(180deg, rgba(140, 140, 140, 0.04) 0%, rgba(100, 100, 100, 0.03) 100%)",
      "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(120, 120, 120, 0.02) 30px, rgba(120, 120, 120, 0.02) 31px)",
      "repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(120, 120, 120, 0.02) 30px, rgba(120, 120, 120, 0.02) 31px)",
    ].join(", "),
  },
  battle: {
    background: [
      "radial-gradient(ellipse at 50% 50%, rgba(200, 30, 30, 0.06) 0%, transparent 60%)",
      "radial-gradient(ellipse at 50% 100%, rgba(180, 20, 20, 0.04) 0%, transparent 50%)",
    ].join(", "),
    animation: "breathe 4s ease-in-out infinite",
  },
  olympus: {
    background: [
      "radial-gradient(ellipse at 50% 0%, rgba(255, 230, 150, 0.08) 0%, transparent 50%)",
      "radial-gradient(ellipse at 50% 10%, rgba(255, 255, 240, 0.06) 0%, transparent 40%)",
      "radial-gradient(ellipse at 40% 20%, rgba(255, 220, 120, 0.04) 0%, transparent 35%)",
      "radial-gradient(ellipse at 60% 20%, rgba(255, 220, 120, 0.04) 0%, transparent 35%)",
    ].join(", "),
  },
  night: {
    background: [
      "radial-gradient(circle at 15% 20%, rgba(200, 200, 255, 0.06) 0%, rgba(200, 200, 255, 0.06) 1px, transparent 1px)",
      "radial-gradient(circle at 45% 10%, rgba(200, 200, 255, 0.05) 0%, rgba(200, 200, 255, 0.05) 1px, transparent 1px)",
      "radial-gradient(circle at 75% 35%, rgba(200, 200, 255, 0.06) 0%, rgba(200, 200, 255, 0.06) 1px, transparent 1px)",
      "radial-gradient(circle at 85% 15%, rgba(200, 200, 255, 0.04) 0%, rgba(200, 200, 255, 0.04) 1px, transparent 1px)",
      "radial-gradient(circle at 25% 55%, rgba(200, 200, 255, 0.05) 0%, rgba(200, 200, 255, 0.05) 1px, transparent 1px)",
      "radial-gradient(circle at 60% 70%, rgba(200, 200, 255, 0.04) 0%, rgba(200, 200, 255, 0.04) 1px, transparent 1px)",
      "radial-gradient(circle at 90% 60%, rgba(200, 200, 255, 0.05) 0%, rgba(200, 200, 255, 0.05) 1px, transparent 1px)",
      "radial-gradient(circle at 35% 85%, rgba(200, 200, 255, 0.06) 0%, rgba(200, 200, 255, 0.06) 1px, transparent 1px)",
      "radial-gradient(circle at 55% 45%, rgba(200, 200, 255, 0.04) 0%, rgba(200, 200, 255, 0.04) 1px, transparent 1px)",
      "radial-gradient(circle at 10% 75%, rgba(200, 200, 255, 0.05) 0%, rgba(200, 200, 255, 0.05) 1px, transparent 1px)",
      "linear-gradient(180deg, rgba(10, 10, 40, 0.07) 0%, rgba(5, 5, 20, 0.05) 100%)",
    ].join(", "),
  },
  default: {
    background:
      "radial-gradient(ellipse at 50% 50%, var(--ch-accent, rgba(150,150,150,0.05)) 0%, transparent 70%)",
    opacity: 0.05,
  },
};

export default function SceneAtmosphere({ mood = "default", chapter = 1 }) {
  const moodKey = moodStyles[mood] ? mood : "default";
  const moodStyle = moodStyles[moodKey];

  const baseStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 0,
  };

  return <div style={{ ...baseStyle, ...moodStyle }} />;
}
