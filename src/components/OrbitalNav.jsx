import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function OrbitalNav({ sections, activeSection, onSectionChange }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === " " && e.ctrlKey) {
        e.preventDefault();
        setIsExpanded(!isExpanded);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isExpanded]);

  const radius = 180;
  const centerX = 50;
  const centerY = 50;

  return (
    <>
      {/* Central Hub Button */}
      <motion.button
        className="fixed top-8 right-8 z-[200] w-16 h-16 rounded-full bg-gradient-to-br from-[#4f7df5] via-[#8b5cf6] to-[#22d3ee] shadow-2xl flex items-center justify-center group overflow-hidden"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-white text-2xl font-bold"
        >
          {isExpanded ? "×" : "◈"}
        </motion.div>
        
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>

      {/* Orbital Menu Items */}
      {isExpanded && (
        <div className="fixed inset-0 z-[150] pointer-events-none">
          {sections.map((section, index) => {
            const angle = (index / sections.length) * 2 * Math.PI - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = section.id === activeSection;

            return (
              <motion.div
                key={section.id}
                className="absolute pointer-events-auto"
                initial={{ scale: 0, x: "50vw", y: "50vh" }}
                animate={{ 
                  scale: 1, 
                  x: `${x}vw`, 
                  y: `${y}vh`,
                  rotate: hoveredIndex === index ? 360 : 0
                }}
                exit={{ scale: 0, x: "50vw", y: "50vh" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20,
                  delay: index * 0.05 
                }}
                style={{ translateX: "-50%", translateY: "-50%" }}
              >
                <motion.button
                  className={`relative group ${isActive ? 'scale-125' : ''}`}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsExpanded(false);
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Orbital ring */}
                  <motion.div
                    className={`w-20 h-20 rounded-full border-2 flex items-center justify-center backdrop-blur-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-br from-[#4f7df5]/90 via-[#8b5cf6]/90 to-[#22d3ee]/90 border-white/50 shadow-2xl' 
                        : 'bg-[#0c0c1a]/80 border-[#4f7df5]/30 hover:border-[#8b5cf6]/60'
                    }`}
                    animate={isActive ? { 
                      boxShadow: [
                        "0 0 20px rgba(79,125,245,0.3)",
                        "0 0 40px rgba(139,92,246,0.5)",
                        "0 0 20px rgba(79,125,245,0.3)"
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-3xl">{section.icon}</span>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: hoveredIndex === index || isActive ? 1 : 0.7, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md ${
                      isActive 
                        ? 'bg-gradient-to-r from-[#4f7df5]/90 to-[#8b5cf6]/90 text-white' 
                        : 'bg-[#0c0c1a]/70 text-gray-300'
                    }`}>
                      {section.label}
                    </div>
                  </motion.div>

                  {/* Connection line to center */}
                  <svg 
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{ 
                      width: `${radius * 2}px`, 
                      height: `${radius * 2}px`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.line
                      x1={radius}
                      y1={radius}
                      x2={radius - radius * Math.cos(angle)}
                      y2={radius - radius * Math.sin(angle)}
                      stroke={isActive ? "rgba(79,125,245,0.4)" : "rgba(139,92,246,0.15)"}
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    />
                  </svg>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Backdrop */}
      {isExpanded && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[140]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Keyboard hint */}
      <motion.div
        className="fixed bottom-8 right-8 z-[200] text-xs text-gray-500 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Press <kbd className="px-2 py-1 bg-[#0c0c1a]/80 rounded border border-[#4f7df5]/30">Ctrl+Space</kbd> to navigate
      </motion.div>
    </>
  );
}
