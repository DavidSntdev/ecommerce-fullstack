import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        rosa: "#FFE5EC",
        rosa01: "#FFC2D1",
        rosa02: "#FF8FAB",
        rosa03: "#FB6F92",
        rosa04: "#FF3D6F",
        rosa05: "#E50F40",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
