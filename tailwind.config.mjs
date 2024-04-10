/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "selector",
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
};
