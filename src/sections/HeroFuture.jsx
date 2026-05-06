import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Particle Grid Canvas ─── */
function HeroCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    let animId;
    let w, h, particles = [], mouse = { x: -9999, y: -9999 };

    const resize = () => {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      particles = [];
      const cols = Math.floor(w / 70);
      const rows = Math.floor(h / 70);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.55) continue;
          particles.push({
            x: i * 70 + 35,
            y: j * 70 + 35,
            baseX: i * 70 + 35,
            baseY: j * 70 + 35,
            r: Math.random() * 1.2 + 0.3,
            phase: Math.random() * Math.PI * 2,
            speed: 0.001 + Math.random() * 0.002,
            bright: Math.random(),
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => { mouse = { x: e.clientX, y: e.clientY }; });

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.5;

      // Grid lines
      ctx.strokeStyle = "rgba(61, 156, 245, 0.03)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 70) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 70) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        p.x = p.baseX + Math.sin(t * p.speed + p.phase) * 12;
        p.y = p.baseY + Math.cos(t * p.speed * 0.8 + p.phase) * 8;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = dist < 180;

        if (inRange) {
          const force = (180 - dist) / 180 * 0.2;
          p.x += dx * force;
          p.y += dy * force;
        }

        const alpha = inRange ? 0.8 + 0.2 * p.bright : 0.15 + 0.1 * p.bright;
        const color = inRange ? `rgba(255, 107, 53, ${alpha})` : `rgba(61, 156, 245, ${alpha})`;
        const size = inRange ? p.r * 2.5 : p.r;

        if (inRange) {
          ctx.beginPath();
          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 20);
          g.addColorStop(0, "rgba(255,107,53,0.3)");
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.arc(p.x, p.y, 20, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            const mx = (particles[i].x + particles[j].x) / 2;
            const my = (particles[i].y + particles[j].y) / 2;
            const mdx = mouse.x - mx;
            const mdy = mouse.y - my;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            const color = mdist < 200
              ? `rgba(255,107,53,${(1 - d / 100) * 0.25})`
              : `rgba(61,156,245,${(1 - d / 100) * 0.06})`;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Scanning line
      const scanY = ((t * 0.5) % (h + 40)) - 20;
      const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(255,107,53,0.04)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 10, w, 20);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 z-0" />;
}

/* ─── HUD Corner Decoration ─── */
function HUDCorner({ pos }) {
  const classes = {
    tl: "top-8 left-8",
    tr: "top-8 right-8",
    bl: "bottom-8 left-8",
    br: "bottom-8 right-8",
  };
  const borders = {
    tl: "border-t border-l",
    tr: "border-t border-r",
    bl: "border-b border-l",
    br: "border-b border-r",
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      className={`absolute ${classes[pos]} w-8 h-8 ${borders[pos]} border-accent-orange/40 hidden lg:block`}
    />
  );
}

/* ─── Floating Stats HUD ─── */
function FloatingHUD() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
    >
      {[
        { label: "PROJECTS", value: "05+" },
        { label: "INTERNS", value: "02" },
        { label: "TECHS", value: "30+" },
        { label: "GRAD", value: "2027" },
      ].map((s) => (
        <div key={s.label} className="relative">
          <div className="border border-white/[0.04] bg-black/40 backdrop-blur-sm px-4 py-3 min-w-[100px]">
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-br" />
            <p className="font-mono text-[9px] text-zinc-600 tracking-[0.2em] uppercase mb-1">{s.label}</p>
            <p className="font-display text-xl font-bold text-white">{s.value}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ─── Orbit Ring ─── */
function OrbitRing() {
  return (
    <div className="absolute top-1/2 right-[28%] -translate-y-1/2 -translate-x-1/2 hidden xl:block pointer-events-none">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="w-[420px] h-[420px] border border-accent-blue/[0.07] rounded-full relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-orange/60 shadow-[0_0_8px_#ff6b35]" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[60px] border border-accent-orange/[0.06] rounded-full"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-blue/60 shadow-[0_0_6px_#3d9cf5]" />
      </motion.div>
      <div className="absolute inset-[120px] border border-white/[0.03] rounded-full" />
      <div className="absolute inset-[160px] bg-accent-orange/[0.02] rounded-full animate-pulse-ring" />
    </div>
  );
}

export default function Hero() {
  const roles = ["Full-Stack Developer", "AI/ML Engineer", "Data Scientist", "Software Engineer"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIdx];
    if (typing) {
      if (displayed.length < role.length) {
        const t = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const letterAnim = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.6 } },
  };
  const charAnim = {
    hidden: { y: 120, opacity: 0, rotateX: -90 },
    visible: {
      y: 0, opacity: 1, rotateX: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scanlines">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(255,107,53,0.04)] via-transparent to-transparent" style={{ background: "radial-gradient(ellipse 80% 60% at 20% 60%, rgba(255,107,53,0.04) 0%, transparent 60%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 75% 40%, rgba(61,156,245,0.04) 0%, transparent 60%)" }} />

      <HeroCanvas />
      <OrbitRing />

      {/* HUD Corners */}
      <HUDCorner pos="tl" />
      <HUDCorner pos="tr" />
      <HUDCorner pos="bl" />
      <HUDCorner pos="br" />

      <FloatingHUD />

      {/* Main content */}
      <div className="sec-inner relative z-10 pt-28 md:pt-0 w-full max-w-6xl mx-auto px-6 md:px-16">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-10 border border-accent-orange/20 bg-accent-orange/[0.04] px-4 py-2 relative"
        >
          <div className="bracket bracket-tl" />
          <div className="bracket bracket-br" />
          <span className="hud-dot" />
          <span className="font-mono text-[11px] text-zinc-400 tracking-[0.2em] uppercase">
            Available — Open to Opportunities
          </span>
        </motion.div>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="sec-label mb-6"
        >
          Portfolio v2.0 — 2026
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={letterAnim}
          initial="hidden"
          animate="visible"
          className="font-display font-extrabold tracking-[-0.04em] leading-[0.9] mb-8"
          style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)", perspective: "800px" }}
        >
          <div className="overflow-hidden pb-2">
            {"Akshat".split("").map((c, i) => (
              <motion.span key={`a${i}`} variants={charAnim} className="inline-block text-white">
                {c}
              </motion.span>
            ))}
          </div>
          <div className="overflow-hidden pb-2">
            {"Dhanak".split("").map((c, i) => (
              <motion.span key={`d${i}`} variants={charAnim} className="inline-block grad-text">
                {c}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="font-mono text-[11px] text-zinc-600 tracking-[0.25em] uppercase">// ROLE:</span>
          <span className="font-display text-xl md:text-2xl font-semibold text-accent-blue">
            {displayed}
            <span className="inline-block w-[2px] h-6 bg-accent-orange ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-lg mb-12 font-light"
        >
          Final-year CE student at{" "}
          <span className="text-zinc-300 font-medium">DDU</span>. Building full-stack apps,
          training ML models, and shipping real products. Interned at{" "}
          <span className="text-zinc-300 font-medium">Fuzzy Cloud</span> &{" "}
          <span className="text-zinc-300 font-medium">Sparks to Ideas</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <a href="#projects" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L14 8L8 14M2 8H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
          <a
            href="https://github.com/akshatdhanak"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20 flex items-center gap-4"
        >
          <div className="flex flex-col items-center gap-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1px] h-10 bg-gradient-to-b from-accent-orange to-transparent"
            />
          </div>
          <span className="font-mono text-[9px] tracking-[0.4em] text-zinc-700 uppercase">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Bottom HUD bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 px-10 flex items-center justify-between hidden md:flex"
      >
        <span className="font-mono text-[9px] text-zinc-800 tracking-[0.3em]">LAT: 22.7196° N</span>
        <span className="font-mono text-[9px] text-zinc-800 tracking-[0.3em]">INDIA — {new Date().getFullYear()}</span>
        <span className="font-mono text-[9px] text-zinc-800 tracking-[0.3em]">LON: 72.3632° E</span>
      </motion.div>
    </section>
  );
}
