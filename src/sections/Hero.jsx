import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Animated Canvas Background ─── */
function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c.getContext("2d");
    let id;
    let w, h;
    let particles = [];
    let connections = [];
    let mouse = { x: -999, y: -999 };

    const resize = () => { w = c.width = window.innerWidth; h = c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse = { x: e.clientX, y: e.clientY }; });

    // Create dots on a loose grid with randomization
    const cols = Math.ceil(w / 120);
    const rows = Math.ceil(h / 120);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (Math.random() > 0.5) continue;
        particles.push({
          x: i * 120 + (Math.random() - 0.5) * 60,
          y: j * 120 + (Math.random() - 0.5) * 60,
          baseX: i * 120 + (Math.random() - 0.5) * 60,
          baseY: j * 120 + (Math.random() - 0.5) * 60,
          r: Math.random() * 1.5 + 0.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.002 + Math.random() * 0.003,
        });
      }
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.x = p.baseX + Math.sin(t * p.speed + p.phase) * 15;
        p.y = p.baseY + Math.cos(t * p.speed * 0.7 + p.phase) * 10;

        // Mouse interaction — attract gently
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.15;
          p.x += dx * force;
          p.y += dy * force;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 125, 245, ${0.3 + (dist < 200 ? 0.4 : 0)})`;
        ctx.fill();
      });

      // Connect nearby dots
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - d / 180) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      id = requestAnimationFrame(() => draw(t + 16));
    };
    draw(0);

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0 opacity-60" />;
}

/* ─── Decorative Rings ─── */
function DecorativeShapes() {
  return (
    <>
      {/* Large rotating ring */}
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] animate-spin-slow opacity-[0.04] hidden lg:block">
        <svg viewBox="0 0 500 500" fill="none">
          <circle cx="250" cy="250" r="240" stroke="url(#g1)" strokeWidth="1" strokeDasharray="8 6" />
          <circle cx="250" cy="250" r="180" stroke="url(#g1)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="120" stroke="#4f7df5" strokeWidth="0.5" strokeDasharray="4 8" />
          <defs><linearGradient id="g1" x1="0" y1="0" x2="500" y2="500"><stop stopColor="#4f7df5"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient></defs>
        </svg>
      </div>

      {/* Floating geometric elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[15%] w-8 h-8 border border-accent-cyan/20 rotate-45 hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -15, 10], x: [-5, 5, -5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] right-[25%] w-3 h-3 rounded-full bg-accent-purple/30 hidden lg:block"
      />
      <motion.div
        animate={{ y: [-8, 12, -8] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[35%] left-[5%] w-16 h-16 border border-accent-blue/10 rounded-full hidden lg:block"
      />
      {/* Animated cross */}
      <motion.div
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[12%] hidden lg:block"
      >
        <div className="w-5 h-[1px] bg-accent-pink/20 absolute top-1/2 -translate-y-1/2" />
        <div className="w-[1px] h-5 bg-accent-pink/20 absolute left-1/2 -translate-x-1/2" />
      </motion.div>
    </>
  );
}

export default function Hero() {
  const titles = ["Full-Stack Developer", "AI/ML Engineer", "Data Science Explorer", "Software Engineer"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % titles.length), 3000);
    return () => clearInterval(id);
  }, []);

  const letterStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.03 } },
  };
  const letter = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroCanvas />
      <DecorativeShapes />

      <div className="sec-inner relative z-10 pt-28 md:pt-20 w-full px-6">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-zinc-400 font-mono">Open to Opportunities</span>
        </motion.div>

        {/* Name — letter by letter */}
        <motion.h1
          variants={letterStagger}
          initial="hidden"
          animate="visible"
          className="font-display text-[clamp(2rem,6vw,7rem)] font-extrabold tracking-[-0.04em] leading-[1] mb-4 whitespace-nowrap"
        >
          {"Akshat".split("").map((c, i) => (
            <motion.span key={`a-${i}`} variants={letter} className="inline-block text-white">
              {c}
            </motion.span>
          ))}
          <span className="inline-block w-[0.15em]" />
          {"Dhanak".split("").map((c, i) => (
            <motion.span key={`d-${i}`} variants={letter} className="inline-block grad-text">
              {c}
            </motion.span>
          ))}
        </motion.h1>

        {/* Role swap */}
        <div className="h-[clamp(2rem,4vw,3rem)] overflow-hidden mb-8">
          <motion.p
            key={idx}
            initial={{ y: 40, opacity: 0, filter: "blur(6px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1rem,3vw,2rem)] font-display font-medium text-zinc-500"
          >
            {titles[idx]}
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
        >
          Final-year Computer Engineering student at DDU. I build full-stack 
          applications, train ML models, and turn ideas into deployed products.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="group relative px-7 py-3.5 rounded-2xl text-sm font-semibold text-white overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-500 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent-purple to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">View Projects</span>
          </a>
          <a href="#contact" className="px-7 py-3.5 rounded-2xl text-sm font-medium text-zinc-300 border border-white/10 hover:border-accent-blue/40 hover:text-white hover:bg-white/[0.02] transition-all duration-400">
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-24 flex items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent-blue/40 to-transparent" />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
