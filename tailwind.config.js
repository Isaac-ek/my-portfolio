/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Fira Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        jetbrains: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        fun: ['Pacifico', 'cursive'],
        sans: ['system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        neonBlue: '#3b82f6',
        neonPurple: '#9333ea',
        darkSpace: '#020617',
        softGlow: '#60a5fa',
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #3b82f6' },
          '100%': { boxShadow: '0 0 20px #9333ea' },
        },
      },
      dropShadow: {
        neon: ['0 0 10px #3b82f6', '0 0 20px #9333ea'],
      },
    },
  },
  plugins: [],
};
