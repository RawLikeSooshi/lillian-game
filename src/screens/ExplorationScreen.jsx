import React, { useState } from "react";
import { bg, card, goldBtn } from "../styles";
import NodeMap from "../components/NodeMap";
import StatBar from "../components/StatBar";
import OracleInsight from "../components/OracleInsight";
import { checkReputationGate } from "../engine/reputation";

/**
 * Exploration node map screen.
 * Shows 3-4 locations to visit. Player picks a limited number.
 * When a node is selected, shows its content inline before returning to map.
 */
export default function ExplorationScreen({
  explorationData, explorationState, reputation, stats,
  onSelectNode, onFinishExploration, heroName,
}) {
  if (!explorationData) return null;

  const [viewingNode, setViewingNode] = useState(null);
  const [nodePhase, setNodePhase] = useState("text"); // text | choices | feedback
  const [nodeFeedback, setNodeFeedback] = useState(null);
  const [nodeLesson, setNodeLesson] = useState(null);
  const [showLesson, setShowLesson] = useState(false);

  const { nodes, picks, title, description } = explorationData;
  const visited = explorationState?.visited || [];
  const remainingPicks = explorationState?.remainingPicks ?? picks;

  // Determine locked nodes (reputation gates)
  const lockedNodes = nodes
    .filter(n => n.reputationGate && !checkReputationGate(reputation, n.reputationGate))
    .map(n => n.id);

  const nodesWithLockReasons = nodes.map(n => {
    if (n.reputationGate && !checkReputationGate(reputation, n.reputationGate)) {
      const { faction, min } = n.reputationGate;
      return { ...n, lockReason: `Requires ${faction} reputation ${min}+` };
    }
    return n;
  });

  const allPicksUsed = remainingPicks <= 0;

  // Handle node click from map
  const handleNodeClick = (node) => {
    setViewingNode(node);
    setNodePhase("text");
    setNodeFeedback(null);
    setNodeLesson(null);
    setShowLesson(false);
  };

  // Handle choosing an option within a node that has choices
  const handleNodeChoice = (choice) => {
    setNodeFeedback(choice.feedback);
    setNodeLesson(choice.lesson || null);
    setNodePhase("feedback");
    setTimeout(() => setShowLesson(true), 700);

    // Pass choice data up — let App apply stat/reputation/flag changes
    onSelectNode({
      ...viewingNode,
      selectedChoice: choice,
    });
  };

  // Handle continuing from a simple node (no choices)
  const handleSimpleNodeContinue = () => {
    onSelectNode(viewingNode);
    setNodeFeedback(viewingNode.content.feedback);
    setNodeLesson(viewingNode.content.lesson || null);
    setNodePhase("feedback");
    setTimeout(() => setShowLesson(true), 700);
  };

  // Return to map after viewing node content
  const handleBackToMap = () => {
    setViewingNode(null);
    setNodePhase("text");
    setNodeFeedback(null);
    setNodeLesson(null);
    setShowLesson(false);
  };

  // ── Viewing Node Content ──
  if (viewingNode) {
    const content = viewingNode.content;

    // Feedback phase
    if (nodePhase === "feedback" && nodeFeedback) {
      return (
        <div style={bg}>
          <div style={{ ...card, maxWidth: 660 }}>
            <div style={{
              fontSize: 12, color: "#706050", letterSpacing: 2,
              textTransform: "uppercase", marginBottom: 8,
            }}>
              {viewingNode.icon} {viewingNode.name}
            </div>

            <div style={{
              fontSize: 16, color: "#c8b88a", fontFamily: "'Cormorant Garamond', Georgia, serif",
              lineHeight: 1.7, marginBottom: 16,
              borderLeft: "3px solid rgba(212,160,23,0.2)",
              paddingLeft: 14,
            }}>
              {nodeFeedback}
            </div>

            {showLesson && nodeLesson && (
              <OracleInsight lesson={nodeLesson} />
            )}

            <div style={{ textAlign: "center", marginTop: 16 }}>
              <button onClick={handleBackToMap} style={goldBtn}>
                {allPicksUsed ? "Continue your journey" : "Back to the road"}
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Text phase — showing node content
    return (
      <div style={bg}>
        <div style={{ ...card, maxWidth: 660 }}>
          <div style={{
            fontSize: 12, color: "#706050", letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 8,
          }}>
            {viewingNode.icon} {viewingNode.name}
          </div>

          <div style={{
            fontSize: 16, color: "#e8d8b0", fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: 1.7, marginBottom: 20,
            whiteSpace: "pre-line",
          }}>
            {content.text}
          </div>

          {/* Node with choices */}
          {content.choices ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {content.choices.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleNodeChoice(c)}
                  style={{
                    background: "rgba(212,160,23,0.07)",
                    border: "1px solid rgba(212,160,23,0.2)",
                    borderRadius: 10,
                    padding: "12px 16px",
                    color: "#e8d8b0",
                    fontSize: 16,
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "rgba(212,160,23,0.14)";
                    e.currentTarget.style.borderColor = "rgba(212,160,23,0.4)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = "rgba(212,160,23,0.07)";
                    e.currentTarget.style.borderColor = "rgba(212,160,23,0.2)";
                  }}
                >
                  {c.text}
                </button>
              ))}
            </div>
          ) : (
            /* Simple node — just text + continue */
            <div style={{ textAlign: "center" }}>
              <button onClick={handleSimpleNodeContinue} style={goldBtn}>Continue</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ── Map View ──
  return (
    <div style={bg}>
      <div style={{ ...card, marginBottom: 16 }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{
            fontSize: 12, color: "#706050", letterSpacing: 2,
            textTransform: "uppercase", marginBottom: 6,
          }}>
            Exploration
          </div>
          <div style={{
            fontSize: 18, fontWeight: "bold", color: "#e8d8b0",
            fontFamily: "'Cormorant Garamond', Georgia, serif", marginBottom: 8,
          }}>
            {title || "The road opens before you"}
          </div>
          <div style={{
            fontSize: 16, color: "#a08060", fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.5,
          }}>
            {description || `Several paths branch from here. You have time to explore ${picks} of them before moving on.`}
          </div>
        </div>

        <NodeMap
          nodes={nodesWithLockReasons}
          visited={visited}
          remainingPicks={remainingPicks}
          onSelectNode={handleNodeClick}
          lockedNodes={lockedNodes}
        />

        {/* Visited summary */}
        {visited.length > 0 && (
          <div style={{ marginTop: 16, padding: "10px 0", borderTop: "1px solid rgba(212,160,23,0.1)" }}>
            <div style={{ fontSize: 12, color: "#706050", marginBottom: 6 }}>Explored:</div>
            {visited.map(id => {
              const node = nodes.find(n => n.id === id);
              return (
                <div key={id} style={{ fontSize: 13, color: "#a08060", marginBottom: 2 }}>
                  {node?.icon} {node?.name}
                </div>
              );
            })}
          </div>
        )}

        {allPicksUsed && (
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <button onClick={onFinishExploration} style={goldBtn}>
              Continue your journey
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
