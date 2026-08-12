import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0C11",
          900: "#12141C",
          800: "#1A1D27",
          700: "#242835",
          600: "#343A4A",
        },
        line: "#2A2E3B",
        gold: {
          200: "#F3D9A4",
          300: "#EAC57E",
          400: "#DFA94F",
          500: "#C98F35",
        },
        teal: {
          300: "#8FD4C8",
          400: "#57B6A5",
          500: "#3D8F82",
        },
        paper: "#EDEDF1",
        muted: "#8B90A0",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "belt-stripe":
          "repeating-linear-gradient(90deg, #DFA94F 0px, #DFA94F 2px, transparent 2px, transparent 10px)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
