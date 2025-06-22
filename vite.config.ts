import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Path resolution
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@types': resolve(__dirname, 'src/types'),
      '@config': resolve(__dirname, 'src/config'),
      '@data': resolve(__dirname, 'src/data'),
    },
  },

  // Dependency optimization
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'framer-motion',
      'lucide-react',
      'react-scroll',
      'react-type-animation',
      'emailjs-com'
    ],
    exclude: []
  },

  // Build configuration
  build: {
    // Target modern browsers for better performance
    target: 'es2020',
    
    // Generate source maps for debugging (disable in production)
    sourcemap: process.env.NODE_ENV === 'development',
    
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    
    // Rollup options for advanced bundling
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'react-type-animation'],
          'ui-vendor': ['lucide-react', 'react-scroll'],
          'email-vendor': ['emailjs-com'],
        },
        
        // Optimize asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/css/i.test(ext || '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
          if (/woff2?|eot|ttf|otf/i.test(ext || '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production',
        drop_debugger: true,
        pure_funcs: process.env.NODE_ENV === 'production' ? ['console.log'] : [],
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },

    // Reduce bundle size
    reportCompressedSize: false,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
  },

  // Development server configuration
  server: {
    port: 5173,
    host: true,
    open: true,
    cors: true,
    
    // Proxy configuration (if needed for API calls)
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3001',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },

  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
    cors: true,
  },

  // CSS configuration
  css: {
    devSourcemap: process.env.NODE_ENV === 'development',
    postcss: './postcss.config.js',
  },

  // Environment variables
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },

  // Experimental features
  experimental: {
    renderBuiltUrl(filename, { hostType }) {
      if (hostType === 'js') {
        return { js: `/${filename}` };
      }
      return { relative: true };
    },
  },
});