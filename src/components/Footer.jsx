import { Link } from "react-router-dom";

const Footer = () => {
  const disciplines = [
    ["Branding", "branding"],
    ["Packaging", "packaging"],
    ["Typography", "typography"],
    ["Logo Design", "logos"],
    ["Illustration", "illustrations"],
    ["Print Design", "printing"],
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/portfolio#hero" className="footer__logo-link">
            <img src="/logo-png.svg" alt="Georges Boulos" />
          </Link>
          <p>
            Visual communicator creating purposeful brand identities, digital
            design, typography, and print-focused visual stories from Lebanon.
          </p>
        </div>

        <nav className="footer__group" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <Link to="/portfolio#hero">Home</Link>
          <Link to="/portfolio#projects">Portfolio</Link>
          <Link to="/portfolio#about">About</Link>
          <Link to="/portfolio#software">Software</Link>
          <Link to="/portfolio#contact">Contact</Link>
        </nav>

        <nav className="footer__group" aria-label="Creative areas">
          <h3>Creative Areas</h3>
          {disciplines.map(([label, category]) => (
            <Link
              key={category}
              to={`/portfolio?discipline=${category}#projects`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="footer__group">
          <h3>Get In Touch</h3>
          <a href="mailto:georgesboulos80@gmail.com">
            georgesboulos80@gmail.com
          </a>
          <a href="tel:+96171696471">+961 71 696 471</a>
          <a
            href="http://linkedin.com/in/georges-boulos-167695356"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© 2026 Georges Boulos. All rights reserved.</p>
        <p>Designed in Lebanon</p>
      </div>
    </footer>
  );
};

export default Footer;
