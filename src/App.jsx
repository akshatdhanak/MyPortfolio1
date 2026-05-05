import { useEffect, useRef, useCallback } from "react";
import Navbar from "./components/NavbarApple";
import Hero from "./sections/HeroApple";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Blog from "./sections/BlogPersonal";
import Achievements from "./sections/AchievementsApple";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Achievements />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
