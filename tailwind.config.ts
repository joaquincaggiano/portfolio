import {heroui} from '@heroui/theme';

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#006aa0",
        blueDark: "#00375b",
        blueLight: "#00a8ef",
        blueLight1: "#62d5ff",
        violetPrimary: "#ff58cd",
      },
      borderColor: {
        bluePrimary: "#006aa0",
        blueDark: "#00375b",
        blueLight: "#00a8ef",
        blueLight1: "#62d5ff",
        violetPrimary: "#ff58cd",
      },
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        customBounce: 'customBounce 2s infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
