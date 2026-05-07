import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import BackgroundMotion from "./components/BackgroundMotion";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ENL231 from "./components/ENL231";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import MascotCursorEyes from "./components/MascotCursorEyes";
import Marquee from "./components/Marquee";
import ProjectPage from "./components/ProjectPage";
import Projects from "./components/Projects";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const shouldScrollToProjects =
      location.hash === "#projects" || location.state?.scrollTo === "projects";

    if (!shouldScrollToProjects) {
      return;
    }

    requestAnimationFrame(() => {
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash, location.state]);

  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <ENL231 />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BackgroundMotion />
      <Cursor />
      <MascotCursorEyes />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
