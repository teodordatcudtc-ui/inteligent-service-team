import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1628',
          800: '#0d2847',
          700: '#12355a',
          600: '#1a4570',
          500: '#2a5a8a',
        },
        slate: {
          blue: '#4a6a8a',
          gray: '#6b8aa8',
          light: '#8fa4bc',
          pale: '#c5d4e4',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
