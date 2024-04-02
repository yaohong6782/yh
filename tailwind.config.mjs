/** @type {import('tailwindcss').Config} */
import { warn } from "node_modules/astro/dist/core/logger/core";
import defaultTheme from "tailwindcss/defaultTheme";
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
  plugins: [],
};
