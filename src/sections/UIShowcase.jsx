import { motion } from "framer-motion";
import { useState } from "react";

/**
 * UI Showcase Section
 * Demonstrates all the unique UI components and effects
 * This is optional - you can add it to your navigation or remove it
 */

export default function UIShowcase() {
  const [activeTab, setActiveTab] = useState("cards");

  return (
    <section className="sec min-h-screen">
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="grad-text">UI Components</span>
          </h1>
          <p className="text-xl text-gray-400">
            Signature design elements that make this portfolio unique
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {["cards", "buttons", "effects", "animations"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6] text-white"
                  : "bg-[#0c0c1a]/60 text-gray-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {activeTab === "cards" && <CardsShowcase />}
          {activeTab === "buttons" && <ButtonsShowcase />}
          {activeTab === "effects" && <EffectsShowcase />}
          {activeTab === "animations" && <AnimationsShowcase />}
        </div>
      </div>
    </section>
  );
}

function CardsShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Glow Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glow-card"
      >
        <div className="glow-card-inner">
          <h3 className="text-xl font-bold mb-3">Glow Card</h3>
          <p className="text-gray-400 text-sm">
            Hover to see the animated gradient border effect
          </p>
        </div>
      </motion.div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Glass Card</h3>
        <p className="text-gray-400 text-sm">
          Glassmorphism with backdrop blur
        </p>
      </motion.div>

      {/* Holographic Border */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="holo-border rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Holo Border</h3>
        <p className="text-gray-400 text-sm">
          Animated gradient border effect
        </p>
      </motion.div>

      {/* Gradient Background */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative overflow-hidden rounded-2xl p-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f7df5]/20 to-[#8b5cf6]/20" />
        <div className="relative">
          <h3 className="text-xl font-bold mb-3">Gradient BG</h3>
          <p className="text-gray-400 text-sm">
            Subtle gradient background
          </p>
        </div>
      </motion.div>

      {/* Bento Item */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bento-item bg-[#0c0c1a]/60 border border-white/5 p-8"
      >
        <h3 className="text-xl font-bold mb-3">Bento Item</h3>
        <p className="text-gray-400 text-sm">
          Modern grid layout component
        </p>
      </motion.div>

      {/* Neon Glow Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3 neon-glow">Neon Glow</h3>
        <p className="text-gray-400 text-sm">
          Text with neon glow effect
        </p>
      </motion.div>
    </div>
  );
}

function ButtonsShowcase() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Primary Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6] text-white font-medium shadow-lg shadow-[#4f7df5]/30"
      >
        Primary Button
      </motion.button>

      {/* Outline Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 rounded-full border border-[#4f7df5]/30 text-white hover:border-[#4f7df5] hover:bg-[#4f7df5]/10 transition-all"
      >
        Outline Button
      </motion.button>

      {/* Magnetic Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="magnetic-btn px-8 py-4 rounded-full bg-[#0c0c1a] border border-white/10 text-white"
      >
        Magnetic Button
      </motion.button>

      {/* Pill Button */}
      <button className="pill hoverable">
        <span>Pill Button</span>
      </button>

      {/* Icon Button */}
      <motion.button
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-[#4f7df5] to-[#8b5cf6] flex items-center justify-center text-2xl"
      >
        ◆
      </motion.button>

      {/* Shimmer Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="relative px-8 py-4 rounded-full bg-[#0c0c1a] border border-white/10 text-white overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 shimmer"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative z-10">Shimmer Button</span>
      </motion.button>
    </div>
  );
}

function EffectsShowcase() {
  return (
    <div className="space-y-12">
      {/* Gradient Text */}
      <div>
        <h2 className="text-4xl font-bold grad-text mb-4">
          Gradient Text Effect
        </h2>
        <p className="text-gray-400">
          Animated gradient that shifts colors
        </p>
      </div>

      {/* Floating Elements */}
      <div className="relative h-64 bg-[#0c0c1a]/40 rounded-2xl border border-white/5 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#4f7df5]/30 to-[#8b5cf6]/30 blur-xl"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#22d3ee]/30 to-[#4f7df5]/30 blur-xl"
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400">Floating Orb Effects</p>
        </div>
      </div>

      {/* Particle Field Demo */}
      <div className="relative h-64 bg-[#0c0c1a]/40 rounded-2xl border border-white/5 overflow-hidden">
        <div className="particle-field absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-400">Particle Field Background</p>
        </div>
      </div>
    </div>
  );
}

function AnimationsShowcase() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Fade In Up */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Fade In Up</h3>
        <p className="text-gray-400 text-sm">
          Scroll to see the animation
        </p>
      </motion.div>

      {/* Scale In */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Scale In</h3>
        <p className="text-gray-400 text-sm">
          Scroll to see the animation
        </p>
      </motion.div>

      {/* Rotate In */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: false }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Rotate In</h3>
        <p className="text-gray-400 text-sm">
          Scroll to see the animation
        </p>
      </motion.div>

      {/* Slide In */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Slide In</h3>
        <p className="text-gray-400 text-sm">
          Scroll to see the animation
        </p>
      </motion.div>

      {/* Stagger Children */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8"
      >
        <h3 className="text-xl font-bold mb-3">Stagger Children</h3>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
            className="h-2 bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6] rounded-full mb-2"
          />
        ))}
      </motion.div>

      {/* Continuous Rotation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="bg-[#0c0c1a]/60 border border-white/5 rounded-2xl p-8 flex items-center justify-center"
      >
        <div className="text-center">
          <div className="text-4xl mb-3">◈</div>
          <h3 className="text-xl font-bold">Continuous Spin</h3>
        </div>
      </motion.div>
    </div>
  );
}
