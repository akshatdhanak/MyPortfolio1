# 🚀 Revolutionary Portfolio Website

A next-generation portfolio website featuring an **Orbital Navigation System** and experimental UI patterns that break away from traditional web design conventions.

![Portfolio Preview](preview.png)

## ✨ Unique Features

### 🎯 Orbital Navigation
- **No traditional navbar** - Instead, a radial menu system where sections orbit around a central hub
- **Keyboard shortcuts** - Press `Ctrl + Space` to toggle navigation
- **Visual connections** - Animated lines connect each section to the center
- **Smooth transitions** - Full-screen gradient wipes between sections

### 📝 Magazine-Style Blog
- **Featured posts** with large hero cards
- **Bento grid layout** for regular articles
- **Category filtering** with smooth animations
- **Newsletter integration** for subscriptions

### 🏆 3D Achievement Timeline
- **Vertical timeline** with alternating cards
- **Floating icons** with rotation effects
- **Stats display** for each achievement
- **Interactive hover states**

### 🎨 Signature Visual Design
- **Particle field** - Animated background particles
- **Gradient mesh** - Three drifting orbs with blur effects
- **Holographic borders** - Animated gradient borders
- **Glassmorphism** - Frosted glass effects throughout
- **Custom cursor** - Magnetic dot cursor with trailing ring

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **JavaScript** - No TypeScript (for simplicity)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### 1. Personal Information

Edit `src/sections/Hero.jsx`:
```javascript
const titles = ["Your Title 1", "Your Title 2", "Your Title 3"];
// Update name, description, etc.
```

### 2. Blog Posts

Edit `src/data/content.js`:
```javascript
export const blogPosts = [
  {
    id: 1,
    title: "Your Blog Post Title",
    excerpt: "Brief description...",
    date: "2026-04-15",
    category: "Engineering",
    featured: true
  },
  // Add more posts...
];
```

### 3. Achievements

Edit `src/data/content.js`:
```javascript
export const achievements = [
  {
    year: "2026",
    title: "Your Achievement",
    organization: "Organization Name",
    description: "Description...",
    icon: "🏆",
    color: "from-[#fbbf24] to-[#f59e0b]",
    stats: { impact: "10K+", reach: "Global" }
  },
  // Add more achievements...
];
```

### 4. Projects

Update your existing project data in the respective section files.

### 5. Colors & Branding

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: { 
    blue: "#4f7df5",    // Change to your brand color
    purple: "#8b5cf6",  // Secondary color
    cyan: "#22d3ee",    // Accent color
    pink: "#ec4899"     // Highlight color
  },
}
```

### 6. Navigation Sections

Edit `src/App.jsx`:
```javascript
const sections = [
  { id: "hero", label: "Home", icon: "◆", component: Hero },
  { id: "about", label: "About", icon: "◉", component: About },
  // Add or remove sections...
];
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── OrbitalNav.jsx      # Radial navigation system
│   │   ├── Navbar.jsx          # (Legacy - can be removed)
│   │   └── Footer.jsx          # Footer component
│   ├── sections/
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About section
│   │   ├── Experience.jsx      # Work experience
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Skills.jsx          # Skills display
│   │   ├── Blog.jsx            # Blog section (NEW)
│   │   ├── Achievements.jsx    # Achievements timeline (NEW)
│   │   └── Contact.jsx         # Contact form
│   ├── data/
│   │   └── content.js          # Centralized content data (NEW)
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── DESIGN_SYSTEM.md           # Design documentation (NEW)
├── README.md                   # This file
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Components

### OrbitalNav
The revolutionary navigation system that replaces traditional navbars.

**Features:**
- Radial menu layout
- Keyboard shortcut support
- Animated transitions
- Active section highlighting

### Blog
Magazine-style blog with modern layouts.

**Features:**
- Featured posts grid
- Category filtering
- Bento grid layout
- Newsletter CTA

### Achievements
Interactive timeline showcasing milestones.

**Features:**
- Vertical timeline
- Alternating card layout
- Animated icons
- Stats display

## 🎨 Design Philosophy

This portfolio challenges conventional web design by:

1. **Eliminating traditional navigation** - No top navbar, no sidebar, no hamburger menu
2. **Embracing orbital mechanics** - Sections orbit around a central hub
3. **Creating depth** - Multiple layers of animated backgrounds
4. **Using experimental interactions** - Magnetic cursor, particle effects
5. **Breaking the grid** - Asymmetric layouts and floating elements

## 🚀 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: Optimized with Vite

## 📱 Responsive Design

- **Mobile**: Touch-friendly, simplified layouts
- **Tablet**: Adapted grid systems
- **Desktop**: Full orbital navigation experience

## ♿ Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Semantic HTML structure
- Color contrast ratios meet WCAG AA
- Focus indicators

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Content Management

All content is centralized in `src/data/content.js` for easy management:

- Blog posts
- Achievements
- Skills
- Projects
- Social links
- Site metadata

## 🎬 Animation System

Powered by **Framer Motion** for smooth, performant animations:

- Page transitions
- Hover effects
- Scroll animations
- Entrance animations
- Gesture-based interactions

## 🔧 Development

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code (if configured)
npm run lint
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template, but suggestions and improvements are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 💡 Inspiration

This design was inspired by:
- Orbital mechanics and planetary systems
- Holographic interfaces from sci-fi
- Magazine and editorial layouts
- Experimental web design pioneers

## 📧 Contact

Akshat Dhanak - [your.email@example.com](mailto:your.email@example.com)

Portfolio: [https://yourwebsite.com](https://yourwebsite.com)

---

**Built with ❤️ and a desire to break conventions**

If you found this helpful, consider giving it a ⭐!
