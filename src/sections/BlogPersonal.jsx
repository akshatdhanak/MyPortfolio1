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
    <section id="blog" className="sec bg-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="sec-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6">
            Thoughts & Ideas
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Raw thoughts on startups, code, and building things that matter
          </p>
        </motion.div>

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
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-white mb-8">Featured</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card p-8 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-600/30">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                      Read more →
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        {regularPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">More Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass-card p-6 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="pt-3 border-t border-gray-800">
                    <span className="text-xs text-gray-600">{post.date}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 glass-card p-12 text-center"
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Raw thoughts on building, startups, and life. No fluff, just real talk.
          </p>
          
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-gray-700 focus:border-blue-600 outline-none text-white placeholder-gray-500 transition-all"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                const input = e.target.previousElementSibling;
                if (input.value) {
                  alert('Thanks for subscribing! 🎉');
                  input.value = '';
                }
              }}
              className="btn-primary"
            >
              Subscribe
            </button>
          </div>
          
          <p className="text-xs text-gray-600 mt-4">
            Join the newsletter • Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
