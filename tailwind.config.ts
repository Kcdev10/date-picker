import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: {
          primary: "#15181b",
        },
      },
      fontSize: {
        "8xl": ["8rem", "9.8rem"],
        "5xl": ["3.5625rem", "4rem"],
        "2xl": ["1.65rem", "2rem"],
        xl: ["1.5rem", "2rem"],
        lg: ["1.25rem", "3rem"],
        md: ["1rem", "1.5rem"],
        sm: ["0.8675rem", "0.88rem"],
      },

      fontFamily: {
        lexend: "var(--font-lexend)",
      },
    },
  },
  plugins: [],
};
export default config;
