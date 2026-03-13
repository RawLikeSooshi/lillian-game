import React, { useState, useEffect } from "react";

/**
 * One-line news scroll on transition screens.
 * Subtle, semi-transparent. Shows world state consequences.
 */
export default function WorldTicker({ messages }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    if (!messages || messages.length <= 1) return;

    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages]);

  if (!messages || messages.length === 0) return null;

  return (
    <div
      style={{
        padding: "8px 16px",
        borderRadius: 8,
        background: "rgba(255,248,220,0.03)",
        borderTop: "1px solid rgba(212,160,23,0.1)",
        maxWidth: 660,
        width: "100%",
        boxSizing: "border-box",
        textAlign: "center",
        marginTop: 12,
      }}
    >
      <div
        style={{
          fontSize: 12,
          color: "#706050",
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        Word on the road
      </div>
      <div
        style={{
          fontSize: 16,
          color: "#a08060",
          fontStyle: "italic",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          opacity: fadeIn ? 1 : 0,
          transition: "opacity 0.5s",
          minHeight: 20,
        }}
      >
        {messages[currentIndex]}
      </div>
    </div>
  );
}
