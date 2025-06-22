# Kamal Kiran Polisetty - Portfolio Website

A modern, responsive, and production-ready portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, and projects as a Full Stack Developer.

## 🚀 Features

### Core Features
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Smooth Animations**: Framer Motion animations with reduced motion support
- **Contact Form**: EmailJS integration for form submissions
- **Resume Viewer**: In-browser PDF viewer with download functionality
- **SEO Optimized**: Meta tags, structured data, and sitemap ready

### Performance Features
- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: Optimized bundle sizes with manual chunks
- **Service Worker**: Offline support and caching strategies
- **Image Optimization**: Responsive images with lazy loading
- **Bundle Analysis**: Built-in bundle analyzer for optimization

### Developer Experience
- **TypeScript**: Full type safety and better development experience
- **ESLint**: Code quality and consistency
- **Modular Architecture**: Clean, maintainable code structure
- **Custom Hooks**: Reusable logic for common patterns
- **Error Boundaries**: Graceful error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Build Tools
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing with Autoprefixer
- **ESLint** - Code linting and formatting

### Services
- **EmailJS** - Contact form email delivery
- **Google Analytics** - Website analytics (optional)
- **Netlify** - Deployment and hosting

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ErrorBoundary.tsx
│   ├── SEO.tsx
│   └── ...
├── config/             # Configuration files
│   └── constants.ts    # App constants and settings
├── data/              # Static data
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── hooks/             # Custom React hooks
│   ├── useIntersectionObserver.ts
│   ├── useLocalStorage.ts
│   └── useScrollPosition.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions
│   ├── analytics.ts
│   ├── performance.ts
│   └── seo.ts
├── App.tsx           # Main app component
├── main.tsx          # App entry point
└── index.css         # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamalkiranpolisetty/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your actual values in the `.env` file:
   - EmailJS configuration
   - Analytics IDs
   - Social media URLs
   - Contact information

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create email templates:
   - Auto-reply template for users
   - Notification template for yourself
4. Get your Service ID, Template IDs, and Public Key
5. Update the configuration in `.env`

### Email Template Variables

**Auto-reply template:**
- `{{to_name}}` - User's name
- `{{to_email}}` - User's email
- `{{from_name}}` - Your name
- `{{subject}}` - Email subject
- `{{original_message}}` - User's message

**Notification template:**
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{subject}}` - Email subject
- `{{message}}` - User's message

## 🎨 Customization

### Personal Information
Update your information in `src/config/constants.ts`:
- Name, title, description
- Contact information
- Social media links
- Resume path

### Projects
Add your projects in `src/data/projects.ts`:
- Project details
- Technologies used
- Links to GitHub/live demos
- Project images

### Experience
Update your work experience in `src/data/experience.ts`:
- Job positions
- Company details
- Responsibilities
- Technologies used

### Skills
Modify your skills in `src/data/skills.ts`:
- Skill categories
- Individual skills
- Proficiency levels

### Styling
- Colors: Update Tailwind config in `tailwind.config.js`
- Fonts: Modify font imports in `index.html`
- Animations: Customize in `src/config/constants.ts`

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Configure domain** (optional)
   - Add custom domain in Netlify settings
   - Update `APP_CONFIG.url` in constants

### Other Platforms

The built files in the `dist` directory can be deployed to:
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📊 Performance Optimization

### Built-in Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Lazy loading and responsive images
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size
- **Service Worker**: Caching and offline support
- **Preloading**: Critical resources preloaded

### Performance Monitoring
- Lighthouse scores: 90+ across all metrics
- Core Web Vitals optimized
- Bundle size monitoring
- Runtime performance tracking

## 🔧 Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint errors
npm run type-check      # TypeScript type checking

# Utilities
npm run analyze         # Analyze bundle size
npm run clean           # Clean build artifacts
```

## 🌟 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px, 1536px
- Touch-friendly interactions
- Optimized for all screen sizes

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast mode support
- Focus management

### SEO Optimization
- Meta tags for social sharing
- Structured data (JSON-LD)
- Sitemap generation ready
- Open Graph tags
- Twitter Card support

### Performance
- Lighthouse score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help customizing this portfolio:

- **Email**: kamalkiranpolisetty@gmail.com
- **LinkedIn**: [linkedin.com/in/kamalkiranpolisetty](https://www.linkedin.com/in/kamalkiranpolisetty)
- **GitHub**: [github.com/kamalkiranpolisetty](https://github.com/kamalkiranpolisetty)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library
- [EmailJS](https://www.emailjs.com/) - Email service
- [Pexels](https://www.pexels.com/) - Stock photos

---

**Built with ❤️ by Kamal Kiran Polisetty**