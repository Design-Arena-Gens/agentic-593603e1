import { journeyStages } from "@/lib/data";

export function Journey() {
  return (
    <section id="get-started" aria-labelledby="journey-heading" style={{ padding: "4.5rem 0" }}>
      <div className="wrapper surface" style={{ padding: "3.25rem clamp(1.75rem, 3vw, 3rem)" }}>
        <div className="grid" style={{ gap: "2.5rem" }}>
          <div>
            <span className="pill">Immersion protocol</span>
            <h2 id="journey-heading" style={{ fontSize: "clamp(2.1rem, 4vw, 2.85rem)", margin: "1.25rem 0" }}>
              A curated activation in three harmonic steps.
            </h2>
            <p style={{ maxWidth: "55ch" }}>
              We guide your team through an orchestrated launch sequence, illuminating insight loops and calibrating
              sensorial layers until the Hggfg narrative is tuned to your signature frequency.
            </p>
          </div>
          <div className="grid" style={{ gap: "2rem" }}>
            {journeyStages.map((stage) => (
              <article key={stage.title} className="step">
                <span className="step-number">{stage.step}</span>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.65rem" }}>{stage.title}</h3>
                  <p style={{ marginBottom: "0.75rem" }}>{stage.summary}</p>
                  <div className="chip-grid">
                    {stage.signals.map((signal) => (
                      <span key={signal} className="chip">
                        {signal}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
