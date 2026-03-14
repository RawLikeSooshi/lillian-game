import { StrictMode, Component } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: 32, color: "#ff6b6b", background: "#1a1008", minHeight: "100vh", fontFamily: "monospace" }}>
          <h2 style={{ color: "#d4a017" }}>Something went wrong</h2>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: 16, fontSize: 14, color: "#e8d8b0" }}>
            {this.state.error.message}
          </pre>
          <pre style={{ whiteSpace: "pre-wrap", marginTop: 8, fontSize: 12, color: "#a08060" }}>
            {this.state.error.stack}
          </pre>
          <button onClick={() => { localStorage.removeItem("hero-of-olympus-save"); window.location.reload(); }}
            style={{ marginTop: 24, padding: "12px 24px", background: "#d4a017", border: "none", borderRadius: 8, color: "#1a1008", cursor: "pointer", fontWeight: "bold" }}>
            Clear Save & Restart
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
