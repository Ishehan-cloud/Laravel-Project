import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';



export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.js',
        'resources/js/dashboard.js'
      ],
      refresh: true,
    }),
    react({
      // React-specific settings
      jsxImportSource: 'react',
      babel: {
        plugins: ['@babel/plugin-transform-react-jsx'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': '/resources/js',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons'],
  },
});