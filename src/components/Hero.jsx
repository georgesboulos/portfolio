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
          Expert in Adobe Illustrator and Photoshop, I design compelling visual
          solutions that seamlessly integrate creativity and technical
          excellence. Collaborative and detail-oriented, I readily adapt to
          varied project requirements.
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
