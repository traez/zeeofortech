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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        trebuchetMs: ['Trebuchet MS'],
      },
      animation: {
        'scroll-to-right': 'scrollToRight 10s linear infinite',
        'scroll-to-left': 'scrollToLeft 10s linear infinite',
      },
      keyframes: {
        scrollToRight: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(100%)' },
        },
        scrollToLeft: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
