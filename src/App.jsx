import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/NavbarFuture";
import Hero from "./sections/HeroFuture";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Blog from "./sections/BlogPersonal";
import Achievements from "./sections/AchievementsApple";
import Footer from "./components/Footer";

/* Custom cursor */
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);

    let raf;
    const lerp = (a, b, t) => a + (b - a) * t;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    const grow = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(2)";
      if (ringRef.current) { ringRef.current.style.width = "60px"; ringRef.current.style.height = "60px"; }
    };
    const shrink = () => {
      if (dotRef.current) dotRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) { ringRef.current.style.width = "40px"; ringRef.current.style.height = "40px"; }
    };
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
}

function ScrollSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <Cursor />

      {/* Scroll progress — orange accent */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #ff6b35, #ff9a3c, #3d9cf5)",
          boxShadow: "0 0 10px #ff6b35",
        }}
      />

      <Navbar />
      <main className="relative bg-[#05050f]">
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
