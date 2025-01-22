import {heroui} from '@heroui/theme';

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|modal|navbar|ripple|spinner).js"
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
        bounceVertical: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bounceVertical: "bounceVertical 2s ease-in-out infinite",
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      boxShadow: {
        'blue-primary': '0px 0px 18px 9px #006aa0',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
