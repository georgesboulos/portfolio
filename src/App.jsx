import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import BackgroundMotion from "./components/BackgroundMotion";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
