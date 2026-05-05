import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="relative">
        <Hero />
        <ScrollSection><About /></ScrollSection>
        <ScrollSection><Experience /></ScrollSection>
        <ScrollSection><Achievements /></ScrollSection>
        <ScrollSection><Projects /></ScrollSection>
        <ScrollSection><Blog /></ScrollSection>
        <ScrollSection><Skills /></ScrollSection>
        <ScrollSection><Contact /></ScrollSection>
      </main>
      <Footer />
    </>
  );
}

// Wrapper component for scroll-triggered animations
function ScrollSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
}
