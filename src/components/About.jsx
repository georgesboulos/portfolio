const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <span className="section-label">01. About</span>
        <h2 className="section-title">
          Designing with <em>Rhythm & Precision</em>
        </h2>
        <div className="about__grid">
          <div>
            <div className="about__image">
              <img
                src="/headshot.png" // change path
                alt="Georges Boulos"
              />
            </div>
            <p className="about__text">
              Expert in Adobe Illustrator and Photoshop, I design compelling
              visual solutions that seamlessly integrate creativity and
              technical excellence. Collaborative and detail-oriented, I readily
              adapt to varied project requirements.
            </p>
            <p className="about__text">
              As a multi-instrumentalist (drummer for eight years and guitarist
              for five) my background brings a distinctive sense of rhythm and
              balance to every composition.
            </p>
            <div className="about__badges">
              <span className="badge">Collaborative</span>
              <span className="badge">Detail-Oriented</span>
              <span className="badge">Creative</span>
              <span className="badge">Multi-Instrumentalist</span>
            </div>
          </div>
          <div className="about__side">
            <div className="info-card">
              <h3>Education</h3>
              <p className="info-card__main">
                Bachelor of Arts (BA) in Graphic Design
              </p>
              <p>Notre Dame University, Lebanon</p>
              <p>2023 — 2027</p>
            </div>
            <div className="info-card">
              <h3>Experience</h3>
              <div className="timeline-item">
                <strong>Internship, Brandmint Design Agency</strong>
                <p>
                  Contributed to branding and graphic design projects for real
                  clients within a professional agency workflow.
                </p>
              </div>
              <div className="timeline-item">
                <strong>Freelance Graphic Designer</strong>
                <p>
                  Creating impactful visual solutions that combine creativity
                  with strategic thinking and strong design execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
