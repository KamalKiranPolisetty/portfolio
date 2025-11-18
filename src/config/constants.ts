// Application constants and configuration
export const APP_CONFIG = {
  name: 'Kamal Kiran Polisetty',
  title: import.meta.env.VITE_APP_TITLE,
  description:import.meta.env.VITE_APP_DESCRIPTION,
  url: import.meta.env.VITE_APP_URL,
  email: import.meta.env.VITE_EMAIL,
  phone: import.meta.env.VITE_PHONE, // Update with actual phone
  location: import.meta.env.VITE_LOCATION,
  
  // Social links
  social: {
    github: import.meta.env.VITE_GITHUB_URL,
    instagram:import.meta.env.VITE_INSTAGRAM_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
    twitter: import.meta.env.VITE_TWITTER_URL, // Add if available
  },
  
  // Resume
  resume: {
    filename: 'Kamal_Kiran_Polisetty_Resume.pdf',
    path: '/kkp.pdf'
  },
  
  // Analytics (add your tracking IDs)
  analytics: {
    googleAnalytics: import.meta.env.VITE_GA_MEASUREMENT_ID, // GA4 Measurement ID
    hotjar: import.meta.env.VITE_HOTJAR_SITE_ID, // Hotjar Site ID
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
  {name:'Education', to:'education'},
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: "Certifications", to: "certifications" },
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