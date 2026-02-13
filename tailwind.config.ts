import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        haze: {
          core: "#42069A", // Purple Haze Dominance
          cyan: "#00F0FF", // Omega Cyan
          magenta: "#FF00AA", // Spectral Magenta
          gold: "#FFD700", // Sovereign Gold
          void: "#05000A", // The Midnight Floor
        },
      },
      backgroundImage: {
        'haze-gradient': "linear-gradient(135deg, #42069A 0%, #05000A 100%)",
        'nebula-glass': "radial-gradient(circle at center, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
      },
      animation: {
        'haze-pulse': 'haze-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // 128 BPM feel
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
      },
      keyframes: {
        'haze-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '.7', transform: 'scale(1.02)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
    },
  },
  plugins: [],
};
export default config;
