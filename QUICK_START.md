# 🚀 Quick Start Guide

Get your revolutionary portfolio up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:5173`

## Step 3: Customize Your Content

### 📝 Update Personal Info

**File**: `src/sections/Hero.jsx`

```javascript
// Line 85-86: Update your name
{"YourFirstName".split("").map((c, i) => (
  <motion.span key={`a-${i}`} variants={letter} className="inline-block text-white">
    {c}
  </motion.span>
))}
{"YourLastName".split("").map((c, i) => (
  <motion.span key={`d-${i}`} variants={letter} className="inline-block grad-text">
    {c}
  </motion.span>
))}

// Line 95: Update your titles
const titles = ["Your Title 1", "Your Title 2", "Your Title 3"];

// Line 110: Update your description
<motion.p>
  Your personal description here...
</motion.p>
```

### 📰 Add Blog Posts

**File**: `src/data/content.js`

```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Your Blog Post Title",
    excerpt: "A brief description of your post...",
    date: "2026-04-15",
    readTime: "8 min",
    category: "Engineering", // or "Design", "Reflection", etc.
    featured: true, // Shows in featured section
  },
  // Add more posts...
];
```

### 🏆 Add Achievements

**File**: `src/data/content.js`

```javascript
export const achievements = [
  {
    year: "2026",
    title: "Your Achievement Title",
    organization: "Organization Name",
    description: "Detailed description of what you achieved...",
    icon: "🏆", // Choose any emoji
    color: "from-[#fbbf24] to-[#f59e0b]", // Gradient colors
    stats: { 
      impact: "10K+ users", 
      reach: "Global" 
    }
  },
  // Add more achievements...
];
```

### 🎨 Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  accent: { 
    blue: "#4f7df5",    // Your primary color
    purple: "#8b5cf6",  // Your secondary color
    cyan: "#22d3ee",    // Your accent color
    pink: "#ec4899"     // Your highlight color
  },
}
```

### 🔗 Update Social Links

**File**: `src/data/content.js`

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "your.email@example.com",
  resume: "/resume.pdf"
};
```

## Step 4: Test Navigation

1. Click the **orbital hub button** (top-right corner)
2. Try the keyboard shortcut: `Ctrl + Space`
3. Click on different sections to see transitions
4. Test on mobile (responsive design)

## Step 5: Build for Production

```bash
npm run build
```

Your production-ready files will be in the `dist/` folder.

## 🎯 Navigation Guide

### Orbital Navigation System

- **Open Menu**: Click the hub button (top-right) or press `Ctrl + Space`
- **Select Section**: Click any orbital icon
- **Close Menu**: Click backdrop or press `Ctrl + Space` again

### Available Sections

1. **Home** (◆) - Landing page
2. **About** (◉) - About you
3. **Journey** (◈) - Experience timeline
4. **Wins** (★) - Achievements
5. **Work** (◊) - Projects showcase
6. **Thoughts** (◐) - Blog posts
7. **Arsenal** (◬) - Skills
8. **Connect** (◎) - Contact form

## 🎨 Customization Tips

### Add a New Section

1. Create component in `src/sections/YourSection.jsx`
2. Add to `App.jsx`:

```javascript
import YourSection from "./sections/YourSection";

const sections = [
  // ... existing sections
  { id: "yoursection", label: "Your Label", icon: "◆", component: YourSection },
];
```

### Change Section Icons

Edit the `sections` array in `src/App.jsx`:

```javascript
{ id: "hero", label: "Home", icon: "🏠", component: Hero },
```

**Icon Options**: Any emoji or Unicode symbol (◆, ◉, ◈, ★, ◊, ◐, ◬, ◎, 🏠, 💼, 📝, etc.)

### Modify Gradient Colors

Use Tailwind gradient classes:

```javascript
// In any component
className="bg-gradient-to-r from-[#4f7df5] to-[#8b5cf6]"

// Available gradients:
// Blue → Purple: from-[#4f7df5] to-[#8b5cf6]
// Purple → Pink: from-[#8b5cf6] to-[#ec4899]
// Cyan → Blue: from-[#22d3ee] to-[#4f7df5]
// Gold → Orange: from-[#fbbf24] to-[#f59e0b]
```

## 🐛 Troubleshooting

### Navigation not working?
- Check if `OrbitalNav` is imported in `App.jsx`
- Verify Framer Motion is installed: `npm install framer-motion`

### Styles not applying?
- Ensure Tailwind is configured correctly
- Check `tailwind.config.js` includes all source files
- Restart dev server: `npm run dev`

### Animations laggy?
- Check browser hardware acceleration is enabled
- Reduce particle density in `src/index.css`
- Disable blur effects for better performance

### Build errors?
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Update dependencies: `npm update`

## 📱 Mobile Testing

```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
ip addr show           # Linux

# Access from mobile device
http://YOUR_IP:5173
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Drag & drop the 'dist' folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push 'dist' folder to gh-pages branch
```

## 📚 Next Steps

1. ✅ Customize content
2. ✅ Add your projects
3. ✅ Write blog posts
4. ✅ Add achievements
5. ✅ Update social links
6. ✅ Test on mobile
7. ✅ Deploy to production

## 💡 Pro Tips

- **Content First**: Add all your content before tweaking design
- **Test Navigation**: Make sure orbital menu works smoothly
- **Mobile Experience**: Test on actual devices, not just browser DevTools
- **Performance**: Keep images optimized (use WebP format)
- **Accessibility**: Test keyboard navigation thoroughly

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)

## 🆘 Need Help?

- Check `DESIGN_SYSTEM.md` for detailed design documentation
- Review component files for implementation examples
- Open an issue on GitHub
- Contact: your.email@example.com

---

**Happy Building! 🚀**

Remember: This portfolio is designed to be **different**. Embrace the unconventional navigation and unique interactions!
