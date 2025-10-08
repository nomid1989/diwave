import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iosGlass: 'rgba(255,255,255,0.06)',
        iosBorder: 'rgba(255,255,255,0.15)',
        // Light theme colors
        light: {
          bg: '#f5f7fa',
          card: '#ffffff',
          text: '#1a1a1a',
          border: 'rgba(0,0,0,0.1)'
        }
      },
      boxShadow: {
        glowCyan: '0 0 18px rgba(34,211,238,0.35)',
        glowEmerald: '0 0 20px rgba(16,185,129,0.6)',
        lightCard: '0 2px 8px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1)'
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
