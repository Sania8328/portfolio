# Portfolio Website 🚀

A modern, high-performance portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🎨 Modern Bento Grid Layout
- 🌙 Dark Mode with Cyber-Blue Accents
- ✨ Smooth Animations & Hover Effects
- 📱 Fully Responsive Design
- ⚡ Lightning-Fast Performance
- 🎯 SEO Optimized
- 🚀 Deployment Ready (Vercel/Netlify)

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build Tool
- **React Icons** - Icon Library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Sania8328/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── TechStack.jsx
│   │   ├── Experience.jsx
│   │   ├── CodingStats.jsx
│   │   └── Contact.jsx
│   ├── constants/
│   │   └── projectData.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with location tag
2. **Featured Projects** - Detailed project cards with features & links
3. **Tech Stack** - Grid of technologies with icons
4. **Experience** - Virtual internships timeline
5. **Coding Stats** - LeetCode achievements & GitHub graph
6. **Contact** - Social links & resume download

## 🎨 Customization

### Colors

Update the colors in `tailwind.config.js`:

```javascript
colors: {
  'cyber-blue': '#00D9FF',
  'dark-bg': '#0A0E27',
  'dark-card': '#1A1F3A',
  'dark-border': '#2D3561',
}
```

### Content

Update content in `src/constants/projectData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description',
    // ...
  },
];
```

## 📄 License

MIT License - Feel free to use this template!

## 👤 Author

**Sania** - Full-Stack Engineer & AI Enthusiast
- GitHub: [@Sania8328](https://github.com/Sania8328)
- LinkedIn: [Sania](https://linkedin.com/in/sania8328)

---

**Built with ❤️ using React, Tailwind CSS & Framer Motion**