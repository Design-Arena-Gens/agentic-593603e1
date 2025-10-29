export function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" style={{ padding: "4.5rem 0 5.5rem" }}>
      <div className="wrapper">
        <div className="surface" style={{ padding: "3.25rem clamp(1.75rem, 3vw, 3rem)", textAlign: "center" }}>
          <span className="pill">Ready when you are</span>
          <h2 id="cta-heading" style={{ fontSize: "clamp(2.4rem, 4vw, 3.2rem)", margin: "1.4rem 0" }}>
            Tune into the Hggfg frequency.
          </h2>
          <p style={{ maxWidth: "60ch", margin: "0 auto 2.5rem", fontSize: "1.05rem" }}>
            Schedule an exploration lab and receive a tailored prototype deck within 72 hours. Our team will craft an
            experiential map that translates your ambitions into a living, breathing narrative.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <a className="button" href="mailto:pulse@hggfg.io?subject=Hggfg%20Exploration%20Lab">
              Request an exploration lab
            </a>
            <a className="button secondary" href="#hero-heading">
              Review vision specs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
