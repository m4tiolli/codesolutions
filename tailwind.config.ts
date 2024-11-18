import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
} satisfies Config;
