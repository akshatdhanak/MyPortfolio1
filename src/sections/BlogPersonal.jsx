import { motion } from "framer-motion";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Development is Business, Not Just a Job",
    excerpt: "Why I see coding as entrepreneurship. Every line of code is a business decision. Every project is a potential company. Here's why this mindset changed everything for me.",
    date: "Coming Soon",
    readTime: "8 min",
    category: "Mindset",
    featured: true
  },
  {
    id: 2,
    title: "The Startup Myth: You Don't Need a Revolutionary Idea",
    excerpt: "Waiting for the 'perfect idea' is why most startups never start. The truth? Boring ideas executed well beat revolutionary ideas that never launch. Just start.",
    date: "Coming Soon",
    readTime: "10 min",
    category: "Startups",
    featured: true
  },
  {
    id: 3,
    title: "Why I Code at 2 AM (And You Shouldn't)",
    excerpt: "The romanticization of hustle culture in tech. Late-night coding sessions, energy drinks, and burnout. Here's what I learned about sustainable productivity.",
    date: "Coming Soon",
    readTime: "6 min",
    category: "Lifestyle",
    featured: false
  },
  {
    id: 4,
    title: "College Projects vs Real Products",
    excerpt: "The gap between academic projects and production software is massive. Here's what college doesn't teach you about building real applications.",
    date: "Coming Soon",
    readTime: "7 min",
    category: "Learning",
    featured: false
  },
  {
    id: 5,
    title: "The Side Project Graveyard",
    excerpt: "I have 20+ unfinished projects. Here's why that's okay and what I learned from each 'failure'. Spoiler: They weren't failures.",
    date: "Coming Soon",
    readTime: "5 min",
    category: "Reflection",
    featured: false
  },
  {
    id: 6,
    title: "Building in Public: Scary but Worth It",
    excerpt: "Sharing your work before it's perfect is terrifying. But it's the fastest way to learn, grow, and build an audience. Here's how I started.",
    date: "Coming Soon",
    readTime: "8 min",
    category: "Growth",
    featured: false
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Mindset", "Startups", "Lifestyle", "Learning", "Reflection", "Growth"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="sec relative overflow-hidden">
      <div className="sec-inner relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-2 w-2 bg-[#e5ff00]"></span>
            <span className="font-mono text-sm tracking-widest uppercase text-[#888888]">Journal</span>
            <span className="h-2 w-2 bg-[#e5ff00]"></span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Thoughts &amp; <span className="text-[#e5ff00] drop-shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">Ideas</span>
          </h2>
          <p className="font-body text-xl text-[#888888] font-medium max-w-2xl mx-auto">
            Raw thoughts on startups, code, and building things that matter
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-none font-mono text-sm uppercase transition-all duration-300 border-2 ${
                selectedCategory === category
                  ? 'bg-[#e5ff00] text-[#000000] border-[#e5ff00] shadow-[4px_4px_0px_#ffffff]'
                  : 'bg-transparent text-[#888888] hover:text-white border-[rgba(255,255,255,0.2)] hover:border-[#e5ff00]'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-8">Featured</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="fut-card group cursor-pointer"
                >
                  <div className="fut-card-inner h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono px-3 py-1 text-[10px] tracking-[0.2em] uppercase bg-[#e5ff00] text-[#000000] font-bold">
                        {post.category}
                      </span>
                      <span className="font-mono text-xs text-[#888888]">{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-3xl font-bold text-white mb-4 group-hover:text-[#e5ff00] transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="font-body text-[#aaaaaa] leading-relaxed mb-8 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.1)] mt-auto">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">{post.date}</span>
                      <span className="font-mono text-[#e5ff00] text-sm font-bold uppercase group-hover:translate-x-2 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <div>
            <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight mb-8">More Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="fut-card group cursor-pointer"
                >
                  <div className="fut-card-inner h-full flex flex-col p-6">
                    <div className="flex items-center gap-3 mb-4 font-mono text-[10px] tracking-widest uppercase text-[#888888]">
                      <span className="text-[#e5ff00] font-bold">{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#e5ff00] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="font-body text-[#888888] text-sm leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-[rgba(255,255,255,0.1)] mt-auto">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#888888]">{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
