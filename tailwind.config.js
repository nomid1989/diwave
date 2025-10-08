/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        iosGlass: 'rgba(255,255,255,0.06)',
        iosBorder: 'rgba(255,255,255,0.15)'
      },
      boxShadow: {
        glowCyan: '0 0 18px rgba(34,211,238,0.35)',
        glowEmerald: '0 0 20px rgba(16,185,129,0.6)'
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

