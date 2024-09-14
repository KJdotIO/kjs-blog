import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        serif: ["var(--font-dm-serif)", "serif"], // Use the CSS variable from next/font
        sans: ["var(--font-inter)", "sans-serif"],
        // sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
