/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        space: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        jetbrains: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        editorial: {
          bg: '#08080a',
          surface: '#111114',
          subtle: '#18181c',
          bone: '#f4f4f2',
          muted: '#8e8e93',
          faint: 'rgba(255, 255, 255, 0.08)',
          line: 'rgba(255, 255, 255, 0.14)',
          accent: '#ffffff',
        },
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.25em',
        mega: '0.35em',
      },
    },
  },
  plugins: [],
};
