import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00FFFF',
          magenta: '#FF00FF',
          lime: '#39FF14',
          orange: '#FF9500',
        },
        cyber: {
          900: '#0a0a0a',
          800: '#1a0d1a',
          700: '#2a1a2a',
        }
      },
      animation: {
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        neonGlow: {
          '0%': { textShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 15px #00FFFF' },
          '100%': { textShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      fontFamily: {
        cyber: ['"Orbitron"', 'monospace'],
        neon: ['"Rajdhani"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config