import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "./components/NavbarFuture";
import Hero from "./sections/HeroFunky";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Blog from "./sections/BlogPersonal";
import Achievements from "./sections/AchievementsApple";
import Footer from "./components/Footer";

/* Intersection Observer Component */
function ScrollSection({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div ref={ref} style={{ opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
}

/* Custom cursor */
function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const hoverOn = () => setIsHovering(true);
    const hoverOff = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, .cursor-pointer, .fut-card").forEach((el) => {
      el.addEventListener("mouseenter", hoverOn);
      el.addEventListener("mouseleave", hoverOff);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button, .cursor-pointer, .fut-card").forEach((el) => {
        el.removeEventListener("mouseenter", hoverOn);
        el.removeEventListener("mouseleave", hoverOff);
      });
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        style={{
          left: pos.x,
          top: pos.y,
          transform: isHovering ? "translate(-50%, -50%) scale(2)" : "translate(-50%, -50%) scale(1)",
          background: isHovering ? "#ffffff" : "#e5ff00"
        }}
      />
      <div
        id="cursor-ring"
        style={{
          left: pos.x,
          top: pos.y,
          transform: isHovering ? "translate(-50%, -50%) scale(1.5)" : "translate(-50%, -50%) scale(1)",
          borderColor: isHovering ? "#e5ff00" : "#ffffff"
        }}
      />
    </>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Cursor />

      {/* Scroll progress — brutalist accent */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] origin-left z-[60]"
        style={{
          scaleX,
          background: "#e5ff00",
          borderBottom: "1px solid #ffffff"
        }}
      />

      <Navbar />
      <div className="fixed inset-0 space-particles pointer-events-none z-0"></div>
      <main className="relative bg-[#0f0e13] z-10">
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
