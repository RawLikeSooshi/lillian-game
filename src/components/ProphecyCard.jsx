import React, { useState, useEffect } from "react";
import { prophecyCard } from "../styles";

/**
 * Single prophecy card display.
 * Dark background, italic gold text. Flip animation on reveal.
 */
export default function ProphecyCard({ text, revealText, revealed = false, delay = 0, onFlipComplete }) {
  const [flipped, setFlipped] = useState(revealed);
  const [visible, setVisible] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (revealed && !flipped) {
      const timer = setTimeout(() => {
        setFlipped(true);
        onFlipComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [revealed]);

  if (!visible) return <div style={{ ...prophecyCard, opacity: 0, minHeight: 80 }} />;

  return (
    <div
      style={{
        ...prophecyCard,
        border: flipped
          ? "1px solid rgba(76,175,138,0.3)"
          : "1px solid rgba(212,160,23,0.2)",
        transition: "all 0.6s",
        transform: flipped ? "rotateY(0deg)" : "rotateY(0deg)",
        opacity: visible ? 1 : 0,
      }}
    >
      {!flipped ? (
        <>
          <div style={{ fontSize: 12, color: "#706050", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
            Prophecy
          </div>
          <div
            style={{
              fontSize: 16,
              fontStyle: "italic",
              color: "#d4a017",
              lineHeight: 1.6,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            "{text}"
          </div>
        </>
      ) : (
        <>
          <div style={{ fontSize: 12, color: "#4caf8a", letterSpacing: 2, marginBottom: 10, textTransform: "uppercase" }}>
            Revealed
          </div>
          <div
            style={{
              fontSize: 16,
              fontStyle: "italic",
              color: "#706050",
              lineHeight: 1.4,
              marginBottom: 8,
              textDecoration: "line-through",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            "{text}"
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#c8b88a",
              lineHeight: 1.6,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}
          >
            {revealText}
          </div>
        </>
      )}
    </div>
  );
}
