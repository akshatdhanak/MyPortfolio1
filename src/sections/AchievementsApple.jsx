import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const milestones = [
  {
    year: "2015",
    title: "National Art Award",
    org: "National Level Competition",
    desc: "Won a national-level art award in 5th standard. Recognized for creativity and artistic excellence among participants from across the country.",
    stats: [{ k: "Level", v: "National" }, { k: "Grade", v: "5th Std" }, { k: "Category", v: "Art" }],
    icon: "🎨",
    accent: "#a855f7",
  },
  {
    year: "2023",
    title: "GUJCET Excellence",
    org: "Gujarat Common Entrance Test",
    desc: "Secured 107/120 marks with a perfect 40/40 in Mathematics. Achieved 99.16 percentile — top of the state.",
    stats: [{ k: "Score", v: "107/120" }, { k: "Percentile", v: "99.16%" }, { k: "Maths", v: "40/40" }],
    icon: "🏆",
    accent: "#ff6b35",
  },
  {
    year: "2024",
    title: "Bhrigu Lake Trek",
    org: "First Himalayan Trek",
    desc: "Completed my first-ever trek to Bhrigu Lake at 15,000 feet altitude in the Himalayas. Conquered challenging terrain and extreme weather.",
    stats: [{ k: "Altitude", v: "15,000 ft" }, { k: "Difficulty", v: "High" }, { k: "Experience", v: "First Trek" }],
    icon: "⛰️",
    accent: "#3d9cf5",
  },
  {
    year: "2024–25",
    title: "Fitness Transformation",
    org: "Personal Achievement",
    desc: "Lost 27 kg through consistent diet management and gym training. Transformed lifestyle with discipline and dedication over 12+ months.",
    stats: [{ k: "Lost", v: "27 kg" }, { k: "Method", v: "Diet + Gym" }, { k: "Duration", v: "12+ months" }],
    icon: "💪",
    accent: "#00d4ff",
  },
];

/* ── Futuristic Race-Car SVG ── */
function RaceCar({ progress }) {
  return (
    <motion.div style={{ y: progress }} className="relative z-20">
      {/* Glow behind car */}
      <div className="absolute inset-0 blur-xl opacity-60 scale-150" style={{ background: "radial-gradient(circle, #ff6b35 0%, transparent 70%)" }} />

      <div className="rotate-90 relative">
        <svg width="56" height="28" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-[0_0_12px_#ff6b35]">
          {/* Body */}
          <path d="M6 20 Q8 12 16 10 L34 8 Q44 7 50 12 L54 16 Q56 18 54 22 L6 22 Q4 22 6 20Z" fill="#1a1a2e" stroke="#ff6b35" strokeWidth="1.2"/>
          {/* Cockpit */}
          <path d="M20 10 Q24 4 30 4 L36 4 Q40 4 42 8 L20 10Z" fill="#ff6b35" opacity="0.9"/>
          {/* Wheels */}
          <circle cx="14" cy="22" r="5" fill="#0a0a1a" stroke="#ff9a3c" strokeWidth="1.5"/>
          <circle cx="14" cy="22" r="2.5" fill="#ff6b35"/>
          <circle cx="42" cy="22" r="5" fill="#0a0a1a" stroke="#ff9a3c" strokeWidth="1.5"/>
          <circle cx="42" cy="22" r="2.5" fill="#ff6b35"/>
          {/* Front wing */}
          <path d="M50 14 L56 12 L56 16 L50 16Z" fill="#ff6b35"/>
          {/* Rear wing */}
          <path d="M6 12 L0 10 L0 16 L6 16Z" fill="#ff6b35"/>
          {/* Exhaust glow */}
          <path d="M4 18 L-4 16 L-8 18 L-4 20 L4 20Z" fill="url(#exhaust)" opacity="0.8"/>
          <defs>
            <linearGradient id="exhaust" x1="4" y1="18" x2="-8" y2="18">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.9"/>
              <stop offset="60%" stopColor="#ff9a3c" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#ff6b35" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Speed lines */}
        <motion.div
          animate={{ opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 0.4, repeat: Infinity }}
          className="absolute right-full top-1/2 -translate-y-1/2 flex flex-col gap-1 pr-1"
        >
          {[14, 10, 6].map((w, i) => (
            <div key={i} className="h-[1px] bg-gradient-to-l from-accent-orange to-transparent" style={{ width: w }} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Track Lane SVG ── */
function TrackSVG({ totalHeight }) {
  const W = 80;
  return (
    <svg
      width={W}
      height={totalHeight}
      viewBox={`0 0 ${W} ${totalHeight}`}
      fill="none"
      className="absolute left-1/2 -translate-x-1/2 top-0"
    >
      {/* Outer track border — left */}
      <line x1="12" y1="0" x2="12" y2={totalHeight} stroke="rgba(255,107,53,0.3)" strokeWidth="2" strokeDasharray="8 6" />
      {/* Outer track border — right */}
      <line x1={W - 12} y1="0" x2={W - 12} y2={totalHeight} stroke="rgba(255,107,53,0.3)" strokeWidth="2" strokeDasharray="8 6" />
      {/* Center dashed line */}
      <line x1={W / 2} y1="0" x2={W / 2} y2={totalHeight} stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="12 10" />
      {/* Track fill */}
      <rect x="12" y="0" width={W - 24} height={totalHeight} fill="rgba(255,107,53,0.02)" />

      {/* Checkpoint lines at each milestone */}
      {milestones.map((_, i) => {
        const y = (i + 0.5) * (totalHeight / milestones.length);
        return (
          <g key={i}>
            <line x1="12" y1={y} x2={W - 12} y2={y} stroke="rgba(255,107,53,0.25)" strokeWidth="1" />
            <text x={W / 2} y={y - 6} textAnchor="middle" fontSize="7" fill="rgba(255,107,53,0.4)" fontFamily="Space Mono">
              CP-{i + 1}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ── Single Milestone Card ── */
function MilestoneCard({ item, index, totalCards }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative flex items-start gap-0 ${isLeft ? "flex-row" : "flex-row-reverse"} w-full`}
    >
      {/* Card */}
      <div className={`w-[calc(50%-64px)] ${isLeft ? "mr-auto" : "ml-auto"}`}>
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fut-card group relative overflow-hidden cursor-default"
        >
          {/* Accent top bar */}
          <div
            className="h-[2px] w-full"
            style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
          />
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l" style={{ borderColor: `${item.accent}80` }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r" style={{ borderColor: `${item.accent}80` }} />

          {/* Hover glow bg */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse at center, ${item.accent}06 0%, transparent 70%)` }}
          />

          <div className="fut-card-inner">
            {/* Year + icon row */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 border"
                style={{ color: item.accent, borderColor: `${item.accent}40`, background: `${item.accent}08` }}
              >
                {item.year}
              </span>
              <span className="text-2xl">{item.icon}</span>
            </div>

            <h3 className="font-display text-xl font-bold text-white mb-1 group-hover:text-accent-orange transition-colors duration-300">
              {item.title}
            </h3>
            <p className="font-mono text-[11px] mb-4" style={{ color: item.accent }}>
              {item.org}
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed mb-5">{item.desc}</p>

            {/* Stats */}
            <div className="flex gap-4 pt-4 border-t border-white/[0.04]">
              {item.stats.map((s) => (
                <div key={s.k}>
                  <p className="font-mono text-[9px] text-zinc-700 uppercase tracking-widest mb-0.5">{s.k}</p>
                  <p className="font-mono text-xs text-zinc-300">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center spacer — track is here */}
      <div className="w-32 shrink-0" />
    </motion.div>
  );
}

export default function Achievements() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const CARD_HEIGHT = 240; // approx px per card
  const TRACK_HEIGHT = milestones.length * CARD_HEIGHT + 120;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.3"],
  });

  // Smooth the scroll
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Car travels from -28 (above first card) to trackHeight - 28 (below last)
  const carY = useTransform(smooth, [0, 1], [-28, TRACK_HEIGHT - 56]);

  return (
    <section id="achievements" ref={sectionRef} className="sec relative overflow-hidden">
      {/* BG radial blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-orange/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-20"
        >
          <div className="sec-label">Milestones &amp; Wins</div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
            className="line-h flex-1 origin-left"
          />
          <span className="font-mono text-[10px] text-zinc-800 tracking-widest">04 / 07</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2.2rem,5vw,5.5rem)] font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          Beyond the{" "}
          <span className="grad-text">code</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-600 font-light max-w-lg mb-24"
        >
          Moments, achievements, and transformations that shaped who I am — on and off the keyboard.
        </motion.p>

        {/* Race track container */}
        <div ref={trackRef} className="relative" style={{ minHeight: TRACK_HEIGHT }}>
          {/* ── The track SVG ── */}
          <TrackSVG totalHeight={TRACK_HEIGHT} />

          {/* ── The racing car ── */}
          <div className="absolute left-1/2 -translate-x-1/2" style={{ top: 0, height: TRACK_HEIGHT, pointerEvents: "none" }}>
            <RaceCar progress={carY} />
          </div>

          {/* ── Start flag ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -top-8 flex flex-col items-center gap-1"
          >
            <span className="font-mono text-[9px] text-accent-orange tracking-[0.3em] uppercase">START</span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent" />
          </motion.div>

          {/* ── Milestone cards ── */}
          <div
            className="relative z-10 flex flex-col"
            style={{ gap: `${CARD_HEIGHT - 120}px`, paddingTop: 40, paddingBottom: 40 }}
          >
            {milestones.map((item, i) => (
              <MilestoneCard
                key={item.title}
                item={item}
                index={i}
                totalCards={milestones.length}
              />
            ))}
          </div>

          {/* ── Finish flag ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-8 flex flex-col items-center gap-1"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
            <span className="font-mono text-[9px] text-accent-blue tracking-[0.3em] uppercase">FINISH</span>
          </motion.div>
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { v: "99.16%", l: "GUJCET Percentile", a: "#ff6b35", e: "🏆" },
            { v: "15K ft", l: "Trek Altitude", a: "#3d9cf5", e: "⛰️" },
            { v: "27 kg", l: "Weight Lost", a: "#00d4ff", e: "💪" },
            { v: "National", l: "Art Award Level", a: "#a855f7", e: "🎨" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="fut-card"
            >
              <div className="bracket bracket-tl" style={{ borderColor: `${s.a}60` }} />
              <div className="bracket bracket-br" style={{ borderColor: `${s.a}60` }} />
              <div className="h-[1px] w-full" style={{ background: `linear-gradient(90deg, ${s.a}60, transparent)` }} />
              <div className="fut-card-inner text-center py-8">
                <div className="text-3xl mb-3">{s.e}</div>
                <p className="font-display text-2xl font-extrabold mb-1" style={{ color: s.a }}>{s.v}</p>
                <p className="font-mono text-[10px] text-zinc-700 uppercase tracking-[0.2em]">{s.l}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
