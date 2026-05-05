import { motion } from "framer-motion";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Minimalist Code",
    excerpt: "Why less is more when it comes to writing maintainable software. Exploring the philosophy behind clean architecture.",
    date: "2026-04-15",
    readTime: "8 min",
    category: "Engineering",
    color: "from-[#4f7df5] to-[#8b5cf6]",
    featured: true
  },
  {
    id: 2,
    title: "Building in Public: Year One",
    excerpt: "Lessons learned from sharing my journey openly. The good, the bad, and the unexpected connections.",
    date: "2026-03-22",
    readTime: "12 min",
    category: "Reflection",
    color: "from-[#8b5cf6] to-[#ec4899]",
    featured: true
  },
  {
    id: 3,
    title: "Design Systems That Scale",
    excerpt: "Creating component libraries that grow with your product without becoming a maintenance nightmare.",
    date: "2026-03-08",
    readTime: "10 min",
    category: "Design",
    color: "from-[#22d3ee] to-[#4f7df5]",
    featured: false
  },
  {
    id: 4,
    title: "The Future of Web Interactions",
    excerpt: "Exploring experimental UI patterns that challenge traditional navigation paradigms.",
    date: "2026-02-18",
    readTime: "6 min",
    category: "Innovation",
    color: "from-[#ec4899] to-[#f97316]",
    featured: false
  },
  {
    id: 5,
    title: "Performance Obsession",
    excerpt: "How I shaved 2 seconds off load time and why it mattered more than I thought.",
    date: "2026-01-30",
    readTime: "7 min",
    category: "Performance",
    color: "from-[#10b981] to-[#22d3ee]",
    featured: false
  },
  {
    id: 6,
    title: "Debugging the Impossible",
    excerpt: "A deep dive into the most challenging bug I've ever encountered and how I finally cracked it.",
    date: "2026-01-12",
    readTime: "15 min",
    category: "Engineering",
    color: "from-[#f97316] to-[#ef4444]",
    featured: false
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Engineering", "Design", "Reflection", "Innovation", "Performance"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="sec min-h-screen relative">
      {/* Animated background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#4f7df5]/10 to-[#8b5cf6]/10 rounded-full blur-3xl -z-10" />
      
      <div className="sec-inner">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <span className="text-6xl">◐</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="grad-text">Thoughts & Ideas</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of code, design, and human experience
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6] text-white shadow-lg shadow-[#4f7df5]/30'
                  : 'bg-[#0c0c1a]/60 text-gray-400 hover:text-white border border-[#4f7df5]/20 hover:border-[#4f7df5]/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Posts - Magazine Layout */}
        {selectedCategory === "All" && featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-300">Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-3xl cursor-pointer"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative p-10 h-full min-h-[400px] flex flex-col justify-between backdrop-blur-sm bg-[#0c0c1a]/40 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r ${post.color} text-white`}>
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>

                    {/* Title & excerpt */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <motion.span
                        className="text-[#4f7df5] font-medium flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        Read more →
                      </motion.span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  />
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Posts - Bento Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-300">
            {selectedCategory === "All" ? "More Stories" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="relative p-8 h-full min-h-[320px] flex flex-col backdrop-blur-sm bg-[#0c0c1a]/60 border border-white/5 group-hover:border-white/10 transition-all duration-300">
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center mb-6 text-2xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    ◊
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-mono text-gray-500">{post.category}</span>
                      <span className="text-xs text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#4f7df5] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-600">{post.date}</span>
                  </div>
                </div>

                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${post.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-24 relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#4f7df5] via-[#8b5cf6] to-[#22d3ee] opacity-10" />
          <div className="relative p-12 text-center backdrop-blur-sm bg-[#0c0c1a]/40 border border-white/10">
            <h3 className="text-3xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Get notified when I publish new articles. No spam, just quality content.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full bg-[#0c0c1a]/60 border border-[#4f7df5]/30 focus:border-[#4f7df5] outline-none text-white placeholder-gray-500 transition-all duration-300"
              />
              <motion.button
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6] text-white font-medium shadow-lg shadow-[#4f7df5]/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
