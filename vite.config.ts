import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

const nextPublic = path.resolve(__dirname, '../next/public');
const projectRoot = path.resolve(__dirname);

export default defineConfig({
  plugins: [react()],
  // Використовуємо абсолютний шлях, щоб уникнути проблем з доступом
  publicDir: nextPublic,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    // Дозволяємо доступ як до кореня SPA (src, інше), так і до next/public
    fs: { allow: [projectRoot, nextPublic] },
    // Дозволяємо доступ з локальної мережі
    host: true,
    // Дозволяємо Vite автоматично вибирати інший вільний порт, якщо 5173 зайнятий
    port: 5173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});
