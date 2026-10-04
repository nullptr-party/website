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
        pixel: ['var(--font-press-start)', 'monospace'],
        body: ['Inter', 'var(--font-inter)', 'system-ui', 'sans-serif'],
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
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
      'md-decelerate': 'cubic-bezier(0.2, 0, 0, 1)',
    },
    transitionDuration: {
      DEFAULT: '150ms',
      '200': '200ms',
      'snap': '100ms',
    },
  },
  plugins: [],
} satisfies Config;
