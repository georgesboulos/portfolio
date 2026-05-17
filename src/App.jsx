import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import MascotCursorEyes from "./components/MascotCursorEyes";
import ProjectPage from "./components/ProjectPage";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Software from "./components/Software";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const targetId =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace("#", "") : "");

    if (!targetId) {
      return;
    }

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, [location.hash, location.search, location.state]);

  return (
    <>
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Software />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
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
