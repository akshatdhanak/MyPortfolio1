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
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className={`flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(5,5,15,0.85)] backdrop-blur-2xl border-b border-white/[0.04]"
            : "bg-transparent"
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 border border-accent-orange/40 flex items-center justify-center">
              <div className="bracket bracket-tl" style={{ width: 6, height: 6 }} />
              <div className="bracket bracket-br" style={{ width: 6, height: 6 }} />
              <span className="font-display font-black text-sm text-white">A</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-sm">AKSHAT</span>
              <span className="font-mono text-[9px] text-accent-orange ml-1">.D</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-0">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="relative px-4 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-zinc-500 hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent-orange group-hover:w-full transition-all duration-400 shadow-[0_0_8px_#ff6b35]" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {/* Clock */}
            <span className="font-mono text-[10px] text-zinc-700 tabular-nums tracking-wider">{time}</span>
            {/* CTA */}
            <a
              href="#contact"
              className="relative px-5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-white border border-accent-orange/40 hover:border-accent-orange hover:bg-accent-orange/10 transition-all duration-300"
            >
              <span className="relative z-10">Let's Talk</span>
            </a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                className="h-[1px] bg-accent-orange block origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                className="h-[1px] bg-white block"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                className="h-[1px] bg-accent-orange block origin-center"
              />
            </div>
          </button>
        </div>

        {/* Top border accent */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent" />
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(5,5,15,0.97)] backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {/* Decorative lines */}
            <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-orange/10 to-transparent" />
            <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-blue/10 to-transparent" />

            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(false)}
                className="font-display text-4xl md:text-5xl font-extrabold text-zinc-700 hover:text-white transition-all duration-300 relative group"
              >
                <span className="absolute -left-6 top-1/2 -translate-y-1/2 font-mono text-[10px] text-accent-orange/50 group-hover:text-accent-orange transition-colors">
                  0{i + 1}
                </span>
                {l.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => setOpen(false)}
              className="mt-4 btn-primary"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
