import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const projectRoot = path.resolve(__dirname);

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    fs: { allow: [projectRoot] },
    // Дозволяємо доступ з локальної мережі
    host: true,
    // Дозволяємо Vite автоматично вибирати інший вільний порт, якщо 5173 зайнятий
    port: 5173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-i18n': ['react-i18next', 'i18next']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
