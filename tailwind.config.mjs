/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass Variable", ...defaultTheme.fontFamily.sans],
        patrick: ["Patrick Hand", "cursive"],
      },
      screens: {
        lg: "1680px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
