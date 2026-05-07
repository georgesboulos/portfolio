import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="landing">
      <img
        className="landing__logo"
        src="/logo-png.svg"
        alt="Georges Boulos Logo"
      />
      <Link className="btn btn--primary landing__button" to="/portfolio">
        View Portfolio
      </Link>
    </main>
  );
};

export default LandingPage;
