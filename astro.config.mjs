// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  site: 'https://eduardoconstrucciones.com', 
  base: '/',
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  prefetch: {
    prefetchAll: true
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': [
              'react',
              'react-dom'
            ]
          }
        }
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      exclude: []
    },
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    ssr: {
      noExternal: ['@shadcn/ui']
    }
  }
});
