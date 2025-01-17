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
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
