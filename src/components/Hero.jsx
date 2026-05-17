const Hero = () => {
  return (
    <section className="hero" id="hero">
      <img src="/Asset 1.svg" alt="asset 1" className="asset1" />

      <img src="/Asset 2.svg" alt="asset 2" className="asset2" />

      <div className="hero__mesh"></div>

      <div className="container hero__content">
        <p className="hero__label">Visual Communicator · Lebanon</p>

        <h1 className="hero__name">
          <span className="green">Georges</span>
          <span className="purple">Boulos</span>
        </h1>

        <p className="hero__intro">
          Visual Communicator skilled in transforming ideas into refined visual
          experiences through thoughtful design, branding, and digital
          storytelling. Detail-oriented and adaptable, with a strong balance
          between creativity and technical precision, delivering impactful
          solutions across a wide range of visual communication projects.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="/Georges-Boulos-CV.pdf" className="btn btn--ghost" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
