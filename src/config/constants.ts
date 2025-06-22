// Application constants and configuration
export const APP_CONFIG = {
  name: 'Kamal Kiran Polisetty',
  title: 'Full Stack Developer',
  description: 'Passionate Full Stack Developer with 5+ years of experience building scalable web applications',
  url: 'https://kamalkiranpolisetty.com',
  email: 'kamalkiranpolisetty@gmail.com',
  phone: '+1 (555) 123-4567', // Update with actual phone
  location: 'Austin, TX',
  
  // Social links
  social: {
    github: 'https://github.com/kamalkiranpolisetty',
    linkedin: 'https://www.linkedin.com/in/kamalkiranpolisetty',
    twitter: 'https://twitter.com/kamalkiranp', // Add if available
  },
  
  // Resume
  resume: {
    filename: 'Kamal_Kiran_Polisetty_Resume.pdf',
    path: '/kamal-resume.pdf'
  },
  
  // Analytics (add your tracking IDs)
  analytics: {
    googleAnalytics: '', // GA4 Measurement ID
    hotjar: '', // Hotjar Site ID
  },
  
  // Performance settings
  performance: {
    lazyLoadOffset: '100px',
    imageQuality: 85,
    enableServiceWorker: true,
  },
  
  // Feature flags
  features: {
    darkMode: true,
    animations: true,
    contactForm: true,
    newsletter: false, // Disable until implemented
    blog: false, // Future feature
  }
} as const;

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' }
] as const;

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  },
  slideIn: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  }
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

// Error messages
export const ERROR_MESSAGES = {
  emailSend: 'Failed to send message. Please try again later.',
  imageLoad: 'Image failed to load',
  networkError: 'Network error. Please check your connection.',
  genericError: 'Something went wrong. Please try again.'
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  emailSent: 'Thank you for your message! I\'ll get back to you soon.',
  subscribed: 'Successfully subscribed to newsletter!'
} as const;