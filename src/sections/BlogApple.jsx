import { motion } from "framer-motion";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "From 99.16 Percentile to Full-Stack Developer",
    excerpt: "My journey from acing GUJCET with 40/40 in Maths to building production-ready applications. Here's what I learned along the way.",
    date: "Coming Soon",
    readTime: "8 min",
    category: "Journey",
    featured: true,
    content: `
# From 99.16 Percentile to Full-Stack Developer

When I scored 107/120 in GUJCET with a perfect 40/40 in Mathematics, I thought I had it all figured out. But the real learning began when I started building actual software.

## The Academic Foundation

Getting 99.16 percentile wasn't just about memorizing formulas. It taught me:
- **Problem-solving under pressure** - Essential for debugging production issues
- **Attention to detail** - One wrong calculation = wrong answer. Same in code.
- **Consistency** - Daily practice, whether it's math or coding

## The Transition to Code

My first project was a mess. But here's what I learned:
1. **Theory ≠ Practice** - DSA knowledge is great, but building real apps is different
2. **Start Small** - Don't try to build the next Facebook on day one
3. **Ship Fast** - Perfect is the enemy of done

## Key Takeaways

- Academic excellence gives you the foundation
- Real projects give you the skills
- Consistency beats talent every time

*Currently building at DDU | 2 Internships | 50+ Projects*
    `
  },
  {
    id: 2,
    title: "Building EduNexus: A Full-Stack Academic Platform",
    excerpt: "How I built a complete academic management system with Django, PostgreSQL, and Docker. From barcode attendance to AI-powered features.",
    date: "Coming Soon",
    readTime: "12 min",
    category: "Technical",
    featured: true,
    content: `
# Building EduNexus: A Full-Stack Academic Platform

EduNexus started as a college project. It ended up being a production-ready system with Docker, CI/CD, and AI features.

## The Problem

Traditional academic systems are clunky, slow, and outdated. I wanted to build something modern.

## Tech Stack

- **Backend**: Django + PostgreSQL
- **Features**: Barcode attendance, AI database assistant, fee management
- **DevOps**: Docker, CI/CD pipeline
- **Deployment**: Fully containerized

## Challenges Faced

1. **Database Design** - Normalizing complex academic relationships
2. **Real-time Updates** - WebSockets for live attendance
3. **AI Integration** - Gemini API for intelligent queries

## What I Learned

- Django ORM is powerful but can be tricky
- Docker makes deployment 10x easier
- AI features need careful prompt engineering

*Check it out on GitHub: [EduNexus](https://github.com/akshatdhanak/EduNexus)*
    `
  },
  {
    id: 3,
    title: "Lost 27kg: A Developer's Fitness Journey",
    excerpt: "How I lost 27 kilograms while coding full-time. Diet, gym, and consistency - the same principles that make you a better developer.",
    date: "Coming Soon",
    readTime: "10 min",
    category: "Lifestyle",
    featured: false,
    content: `
# Lost 27kg: A Developer's Fitness Journey

Developers are known for sitting 12 hours a day. I was no different. Until I decided to change.

## The Starting Point

- **Weight**: 27kg heavier than now
- **Lifestyle**: Sitting, coding, eating junk
- **Energy**: Always tired

## The Approach

Just like debugging code:
1. **Identify the problem** - Poor diet, no exercise
2. **Create a plan** - Calorie deficit + gym
3. **Execute consistently** - No shortcuts
4. **Track progress** - Weekly measurements

## Key Lessons

- **Consistency > Intensity** - Daily 1-hour gym beats random 3-hour sessions
- **Diet is 80%** - You can't out-exercise a bad diet
- **Track Everything** - Like version control for your body

## Developer Parallels

- Debugging = Finding what's wrong with your routine
- Refactoring = Adjusting your diet/workout
- Deployment = Showing results

*27kg down | 12+ months | Still coding*
    `
  },
  {
    id: 4,
    title: "My First Himalayan Trek: 15,000 Feet",
    excerpt: "Bhrigu Lake trek was my first-ever trek. Here's what climbing to 15,000 feet taught me about pushing limits and handling failure.",
    date: "Coming Soon",
    readTime: "7 min",
    category: "Adventure",
    featured: false,
    content: `
# My First Himalayan Trek: 15,000 Feet

Never trekked before. Decided to go straight to 15,000 feet. Here's what happened.

## The Challenge

- **Altitude**: 15,000 feet (Bhrigu Lake)
- **Experience**: Zero trekking experience
- **Preparation**: Gym training, but no altitude training

## What I Learned

1. **Start Before You're Ready** - I wasn't "ready" but I went anyway
2. **Embrace Discomfort** - Like learning a new framework
3. **One Step at a Time** - Literally and metaphorically

## The Parallels to Coding

- **Altitude sickness = Imposter syndrome** - Everyone feels it
- **Steep climbs = Learning curves** - They're temporary
- **Summit = Shipping** - The view is worth it

*First trek | 15,000 feet | No regrets*
    `
  },
  {
    id: 5,
    title: "Internship Lessons: From Sparks to Ideas to Fuzzy Cloud",
    excerpt: "What I learned from 2 internships in AI/ML and Full-Stack development. Real-world experience vs college projects.",
    date: "Coming Soon",
    readTime: "9 min",
    category: "Career",
    featured: false,
    content: `
# Internship Lessons: From Sparks to Ideas to Fuzzy Cloud

Two internships. Two different tech stacks. Tons of lessons.

## Sparks to Ideas (AI/ML)

**What I Did:**
- Built ML models with TensorFlow
- Data preprocessing pipelines
- Deployed AI solutions

**What I Learned:**
- Production ML ≠ Jupyter notebooks
- Data quality > Model complexity
- Deployment is the hardest part

## Fuzzy Cloud (Full-Stack)

**What I Did:**
- Built production features (MERN stack)
- REST API design
- CI/CD workflows

**What I Learned:**
- Startups move FAST
- Code reviews are brutal (and necessary)
- Git conflicts are inevitable

## Key Takeaways

1. **College projects prepare you, but real work is different**
2. **Communication > Code** - Explaining your work matters
3. **Ask questions** - Nobody expects you to know everything

*2 Internships | 2026 | Still learning*
    `
  },
  {
    id: 6,
    title: "500+ LeetCode Problems: Was It Worth It?",
    excerpt: "I solved 500+ problems on LeetCode. Here's what it taught me about problem-solving, patterns, and whether it's actually useful.",
    date: "Coming Soon",
    readTime: "6 min",
    category: "Technical",
    featured: false,
    content: `
# 500+ LeetCode Problems: Was It Worth It?

500+ problems solved. Countless hours. Was it worth it?

## The Journey

- **Started**: To prepare for interviews
- **Continued**: Because I enjoyed problem-solving
- **Result**: Better at thinking algorithmically

## What I Learned

1. **Patterns > Memorization** - Recognize patterns, not solutions
2. **Consistency Matters** - Daily practice beats weekend marathons
3. **It's Not Everything** - LeetCode ≠ Real development

## The Honest Truth

- **Good for**: Interviews, algorithmic thinking, DSA fundamentals
- **Not good for**: Learning to build actual products
- **Verdict**: Worth it, but not the only thing

## My Approach

- Focus on patterns (Sliding Window, Two Pointers, etc.)
- Solve daily, even if just one problem
- Don't get stuck - look at solutions and learn

*500+ problems | Still solving | Check my profile: [LeetCode](https://leetcode.com/u/Akshat_Dhanak/)*
    `
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Journey", "Technical", "Lifestyle", "Adventure", "Career"];

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="sec bg-black relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="sec-inner relative z-10">
        {/* Header */}
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
            Writing about code, life, and everything in between
          </p>
        </motion.div>

        {/* Category Filter */}
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

        {/* Featured Posts */}
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

        {/* Regular Posts */}
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

        {/* Newsletter CTA - Functional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 glass-card p-12 text-center"
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Stay in the Loop</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Get notified when I publish new articles. No spam, just quality content about code, life, and growth.
          </p>
          <form 
            action="https://dev.to/akshatdhanak" 
            target="_blank"
            className="flex gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-gray-700 focus:border-blue-600 outline-none text-white placeholder-gray-500 transition-all"
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-4">
            Articles will be published on <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Dev.to</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
