import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import ENL231 from "./components/ENL231";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ProjectPage from "./components/ProjectPage";
import Projects from "./components/Projects";

function HomePage() {
  return (
    <>
      <Cursor />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Projects />\
      <ENL231 />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:slug" element={<ProjectPage />} />
    </Routes>
  );
}

export default App;
