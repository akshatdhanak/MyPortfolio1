import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 right-4 z-50"
      >
        <div className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-700 ${
          scrolled ? "bg-bg/60 backdrop-blur-2xl border border-white/[0.05] shadow-2xl shadow-black/30" : "bg-transparent"
        }`}>
          <a href="#" className="font-display text-lg font-bold text-white tracking-tight group">
            <span className="group-hover:text-accent-blue transition-colors duration-300">A</span>
            <span className="text-accent-purple">.</span>
            <span className="group-hover:text-accent-purple transition-colors duration-300">D</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className="relative px-4 py-2 text-[13px] text-zinc-400 hover:text-white transition-colors duration-300 group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-3/4 transition-all duration-500" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/akshatdhanak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-zinc-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="#contact"
              className="text-[13px] px-5 py-2 rounded-xl font-medium text-white bg-gradient-to-r from-accent-blue to-accent-purple hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300"
            >
              Let's Talk
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <div className="w-6 flex flex-col gap-1.5">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} className="h-[2px] bg-white block origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} className="h-[2px] bg-white block" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} className="h-[2px] bg-white block origin-center" />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 bg-bg/90 flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold text-white hover:text-accent-blue transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
