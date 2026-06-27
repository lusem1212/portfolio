/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A96E',
          light: '#D4BC8A',
          dark: '#A88A4E',
        },
        surface: {
          DEFAULT: '#0A0A0A',
          raised: '#111111',
          overlay: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Noto Serif SC"', 'serif'],
        body: ['"DM Sans"', '"Noto Sans SC"', 'sans-serif'],
      },
      letterSpacing: {
        wide: '1.4px',
        wider: '2.3px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
