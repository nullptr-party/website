import type {Config} from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    animation: {
      'fade-in': 'fadeIn 1s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': {opacity: '0'},
        '100%': {opacity: '1'},
      },
    },
  },
  plugins: [],
} satisfies Config;
