"use client";

import { useMemo } from "react";

const keywords = [
  "Spatial Storytelling",
  "Immersive Audio",
  "Adaptive Parallax",
  "Zero-Latency",
  "Quantum Routing"
];

export function Hero() {
  const loops = useMemo(() => [...keywords, ...keywords.slice(0, 3)], []);

  return (
    <section aria-labelledby="hero-heading" style={{ padding: "6rem 0 5rem" }}>
      <div className="wrapper">
        <div className="grid hero-grid" style={{ gridTemplateColumns: "1.05fr 0.95fr", gap: "3rem" }}>
          <div>
            <span className="pill" aria-label="Visionary platform signature">
              Crafted for trailblazers
            </span>
            <h1
              id="hero-heading"
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                margin: "1.5rem 0 1rem",
                lineHeight: 1.05
              }}
            >
              Hggfg orchestrates multisensory journeys for the post-interface era.
            </h1>
            <p style={{ fontSize: "1.1rem", maxWidth: "42ch", marginBottom: "2.5rem" }}>
              Shape experiences that resonate beyond the screen. Hggfg fuses adaptive storytelling,
              procedural design systems, and ambient intelligence into a single, fluid canvas.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a className="button" href="#get-started">
                Begin the journey
                <span aria-hidden>→</span>
              </a>
              <a className="button secondary" href="#features">
                Explore the layers
              </a>
            </div>
            <div style={{ marginTop: "2.25rem" }}>
              <p style={{ textTransform: "uppercase", fontSize: "0.78rem", letterSpacing: "0.22em", color: "var(--text-muted)" }}>
                Powered by
              </p>
              <div className="chip-grid" style={{ marginTop: "0.9rem" }}>
                <span className="chip">Neural Flow Engine</span>
                <span className="chip">Spectral VJ Suite</span>
                <span className="chip">Polychrome Mapper</span>
                <span className="chip">Aural Bloom AI</span>
              </div>
            </div>
          </div>

          <div>
            <article className="surface" style={{ padding: "2.4rem", position: "relative", overflow: "hidden" }}>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "-40% -40%",
                  background: "radial-gradient(circle, rgba(124, 92, 255, 0.35), transparent 60%)",
                  filter: "blur(35px)"
                }}
              />
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h2 style={{ fontSize: "1.1rem" }}>Live experiential canvas</h2>
                <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Real-time</span>
              </header>
              <div style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ padding: "1.8rem", background: "rgba(8, 12, 24, 0.75)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <p style={{
                    fontSize: "0.95rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--accent-soft)",
                    marginBottom: "0.6rem"
                  }}>
                    Signal Threads
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gap: "0.9rem",
                      maxHeight: "13rem",
                      overflow: "hidden"
                    }}
                    aria-live="polite"
                  >
                    {loops.map((label, index) => (
                      <div
                        key={`${label}-${index}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          color: "var(--text-muted)",
                          fontSize: "0.92rem"
                        }}
                      >
                        <span
                          style={{
                            width: "0.75rem",
                            height: "0.75rem",
                            borderRadius: "999px",
                            background: index % 2 === 0 ? "var(--accent)" : "#60a5fa",
                            boxShadow: "0 0 16px rgba(124, 92, 255, 0.45)"
                          }}
                        />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "1.8rem", background: "rgba(8, 12, 24, 0.82)" }}>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>Cohesion map</h3>
                  <p style={{ fontSize: "0.95rem" }}>
                    Hggfg negotiates the resonant frequency between visual rhythm, tactile feedback, and sonic depth
                    for ultra-cohesive narratives.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
