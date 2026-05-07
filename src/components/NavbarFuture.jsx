import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-700 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.1)]"
            : "bg-transparent"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group transition-transform">
            <div className="relative w-10 h-10 border border-[#e5ff00] flex items-center justify-center overflow-hidden bg-[#111111] shadow-[2px_2px_0px_rgba(255,255,255,0.2)]">
              <span className="font-display font-black text-xl text-[#ffffff]">A</span>
            </div>
            <div>
              <span className="font-display font-black text-white text-lg uppercase tracking-tight">Akshat</span>
              <span className="font-display font-black text-[#e5ff00] ml-1 text-lg uppercase">.D</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0 bg-[#111111] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="relative px-4 py-2 font-body font-bold text-xs uppercase text-[#888888] hover:text-[#e5ff00] transition-colors duration-300 group"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Clock */}
            <span className="font-mono text-xs font-bold text-[#ffffff] tabular-nums tracking-wider bg-[#111111] px-2 py-1 border border-[rgba(255,255,255,0.1)]">{time}</span>
            {/* CTA */}
            <a
              href="#contact"
              className="relative px-6 py-2 font-display font-bold text-sm uppercase text-[#000000] bg-[#e5ff00] border-2 border-[#e5ff00] hover:bg-[#ffffff] hover:border-[#ffffff] transition-all duration-300 shadow-[3px_3px_0px_rgba(255,255,255,0.2)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-8 flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 8 : 0 }}
                className="h-[2px] bg-[#ffffff] block origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                className="h-[2px] bg-[#e5ff00] block"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -8 : 0 }}
                className="h-[2px] bg-[#ffffff] block origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col items-center justify-center gap-8 border-x-[10px] border-[#e5ff00]"
          >
            {/* Decorative wild patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />

            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05, type: "spring" }}
                onClick={() => setOpen(false)}
                className="font-display text-4xl md:text-5xl font-black text-white hover:text-[#e5ff00] transition-all duration-300 uppercase group hover:-rotate-2"
              >
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setOpen(false)}
              className="mt-8 btn-primary text-xl"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
