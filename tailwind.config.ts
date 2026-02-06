import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F6F1E7",
        taupe: "#8B7E74",
        sage: "#8FAE9B",
        charcoal: "#1F1F1F",
        gold: "#C8A24A",
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(31, 31, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
