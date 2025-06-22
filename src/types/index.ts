// Global type definitions
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
  category?: 'web' | 'mobile' | 'desktop' | 'api';
  status?: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: number;
  type: 'work' | 'education';
  title: string;
  company: string;
  date: string;
  description: string[];
  location?: string;
  technologies?: string[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'other';
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  status: number;
  text: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Utility types
export type Theme = 'light' | 'dark';
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Environment variables
export interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_DESCRIPTION: string;
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_HOTJAR_SITE_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}