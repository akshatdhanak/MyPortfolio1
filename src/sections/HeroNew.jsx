import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const titles = ["Full-Stack Developer", "AI/ML Engineer", "Data Science Explorer", "Software Engineer"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % titles.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06060e] via-[#0a0a1a] to-[#06060e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,125,245,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent_50%)]" />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {/* Animated shapes */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-32 h-32 opacity-30"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#4f7df5] to-[#8b5cf6] blur-2xl" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 40, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-[15%] w-24 h-24 opacity-20"
        >
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#ec4899] blur-xl rotate-45" />
        </motion.div>

        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#4f7df5] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="sec-inner relative z-10 pt-28 md:pt-20 w-full px-6">
        {/* Status with live indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-lg shadow-emerald-400/50" />
          </span>
          <span className="text-sm text-zinc-400 font-mono">Available for Opportunities</span>
        </motion.div>

        {/* Name with premium animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(2rem,6vw,7rem)] font-extrabold tracking-[-0.04em] leading-[1] mb-4 whitespace-nowrap"
        >
          <span className="inline-block text-white">Akshat</span>
          <span className="inline-block w-[0.15em]" />
          <span className="inline-block grad-text">Dhanak</span>
        </motion.h1>

        {/* Animated role with glassmorphism */}
        <div className="h-[clamp(2rem,4vw,3rem)] overflow-hidden mb-8">
          <motion.div
            key={idx}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <p className="text-[clamp(1rem,3vw,2rem)] font-display font-medium bg-gradient-to-r from-[#4f7df5] via-[#8b5cf6] to-[#22d3ee] bg-clip-text text-transparent">
              {titles[idx]}
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl mb-10"
        >
          Final-year Computer Engineering student at DDU. I build full-stack 
          applications, train ML models, and turn ideas into deployed products.
        </motion.p>

        {/* Premium CTAs with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-wrap gap-4"
        >
          <motion.a 
            href="#projects" 
            className="group relative px-8 py-4 rounded-2xl text-sm font-semibold text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6]" />
            <span className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          <motion.a 
            href="#contact" 
            className="group px-8 py-4 rounded-2xl text-sm font-medium text-white border border-white/10 hover:border-[#4f7df5]/50 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        {/* Social proof badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <svg className="w-5 h-5 text-[#4f7df5]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>50+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <svg className="w-5 h-5 text-[#8b5cf6]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>5+ Years Experience</span>
          </div>
        </motion.div>

        {/* Scroll indicator with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-24 flex items-center gap-4"
        >
          <motion.div 
            className="w-[1px] h-16 bg-gradient-to-b from-[#4f7df5]/40 to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
