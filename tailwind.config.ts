import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azul: '#005EFF',
        preto: '#0d121c'
      },
      backgroundImage: {
        'home': 'url("/bg-home.jpg")'
      },
      fontFamily: {
        'inter': 'var(--font-inter)'
      },
      fontSize: {
        md: "16px"
      }
    },
  },
  plugins: [],
};
export default config;
