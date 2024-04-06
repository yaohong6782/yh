/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree Variable", ...defaultTheme.fontFamily.sans],
        patrick: ["Patrick Hand", "cursive"],
      },
      screens: {
        lg: { min: "680px", max: "1980px" },
        md: { max: "680px" },
      },
    },
  },
  plugins: [Myclass],
};
