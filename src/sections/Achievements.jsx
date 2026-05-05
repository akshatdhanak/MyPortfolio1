import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    year: "2026",
    title: "Innovation Award Winner",
    organization: "Tech Excellence Summit",
    description: "Recognized for pioneering work in experimental UI/UX design patterns that challenge conventional web interactions.",
    icon: "🏆",
    color: "from-[#fbbf24] to-[#f59e0b]",
    stats: { impact: "10K+ developers inspired", reach: "Global" }
  },
  {
    year: "2025",
    title: "Open Source Contributor of the Year",
    organization: "GitHub Community",
    description: "Contributed to 50+ repositories with meaningful PRs, helping shape the future of web development tools.",
    icon: "⭐",
    color: "from-[#4f7df5] to-[#8b5cf6]",
    stats: { contributions: "500+ commits", projects: "50+ repos" }
  },
  {
    year: "2025",
    title: "Product Launch Success",
    organization: "Startup Accelerator",
    description: "Successfully launched and scaled a SaaS product from 0 to 10,000 users in 6 months.",
    icon: "🚀",
    color: "from-[#22d3ee] to-[#06b6d4]",
    stats: { users: "10K+", growth: "300% MoM" }
  },
  {
    year: "2024",
    title: "Hackathon Champion",
    organization: "Global Dev Challenge",
    description: "Led a team to victory by building an AI-powered accessibility tool in 48 hours.",
    icon: "💡",
    color: "from-[#8b5cf6] to-[#ec4899]",
    stats: { teams: "200+ competed", prize: "$10K" }
  },
  {
    year: "2024",
    title: "Speaker at DevCon",
    organization: "International Developer Conference",
    description: "Delivered keynote on 'The Future of Web Interactions' to an audience of 2000+ developers.",
    icon: "🎤",
    color: "from-[#ec4899] to-[#f97316]",
    stats: { audience: "2000+", rating: "4.9/5" }
  },
  {
    year: "2023",
    title: "Certification Master",
    organization: "Multiple Platforms",
    description: "Earned 15+ professional certifications in cloud architecture, security, and advanced development.",
    icon: "📜",
    color: "from-[#10b981] to-[#22d3ee]",
    stats: { certs: "15+", domains: "5 areas" }
  },
  {
    year: "2023",
    title: "Mentorship Impact",
    organization: "Code for Good Initiative",
    description: "Mentored 30+ junior developers, helping them land their first tech jobs.",
    icon: "🤝",
    color: "from-[#f97316] to-[#ef4444]",
    stats: { mentees: "30+", placements: "85%" }
  },
  {
    year: "2022",
    title: "Published Technical Author",
    organization: "Major Tech Publications",
    description: "Published 25+ technical articles reaching 100K+ readers across leading developer platforms.",
    icon: "✍️",
    color: "from-[#6366f1] to-[#8b5cf6]",
    stats: { articles: "25+", readers: "100K+" }
  }
];

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section id="achievements" ref={containerRef} className="sec min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-[#4f7df5]/5 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-[#8b5cf6]/5 blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-6xl">★</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="grad-text">Milestones & Wins</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A journey of growth, impact, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#4f7df5]/30 to-transparent" />

          {/* Achievement cards */}
          <div className="space-y-24">
            {achievements.map((achievement, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <motion.div
                    className="w-full md:w-[calc(50%-40px)] group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative overflow-hidden rounded-3xl">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* Card content */}
                      <div className="relative p-8 backdrop-blur-sm bg-[#0c0c1a]/60 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                        {/* Year badge */}
                        <motion.div
                          className={`inline-block px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${achievement.color} text-white mb-4`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          {achievement.year}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                          {achievement.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-[#4f7df5] font-medium mb-4">
                          {achievement.organization}
                        </p>

                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {achievement.description}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
                          {Object.entries(achievement.stats).map(([key, value]) => (
                            <div key={key} className="flex-1 min-w-[120px]">
                              <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                                {key}
                              </div>
                              <div className="text-lg font-bold text-white">
                                {value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                      />
                    </div>
                  </motion.div>

                  {/* Center icon */}
                  <motion.div
                    className="hidden md:flex w-20 h-20 rounded-full items-center justify-center text-4xl relative z-10 shrink-0"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: index * 0.1 + 0.2 
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} opacity-20 blur-xl`} />
                    <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl`}>
                      {achievement.icon}
                    </div>
                  </motion.div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Awards Won", value: "8+", icon: "🏆" },
            { label: "People Impacted", value: "50K+", icon: "👥" },
            { label: "Projects Delivered", value: "100+", icon: "✅" },
            { label: "Years Experience", value: "5+", icon: "📅" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-2xl p-6 text-center group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4f7df5]/10 to-[#8b5cf6]/10 group-hover:from-[#4f7df5]/20 group-hover:to-[#8b5cf6]/20 transition-all duration-300" />
              <div className="relative backdrop-blur-sm">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold grad-text mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
