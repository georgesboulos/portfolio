const Header = () => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#hero" className="nav__logo" aria-label="Go to top">
          <img alt="Georges Boulos Logo" src="/logo-png.svg" />
        </a>
        <ul className="nav__links">
          <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#enl231" className="nav__link">
              ENL231
            </a>
          </li>
          <li>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li>
        </ul>
        <a href="/Georges-Boulos-CV.pdf" className="btn btn--ghost" download>
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
