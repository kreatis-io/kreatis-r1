import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "0": "url(https://images.unsplash.com/photo-1620812097331-ff636155488f?auto=format&w=1280)",
        "1": "url(/images/bg-1.jpeg)",
        "2": "url('https://images.unsplash.com/photo-1566305977571-5666677c6e98?auto=format&w=1280&fit=crop&q=80&w=2145&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  safelist: [
    {
      pattern: /^(text|bg|to|via|from)-/,
    },
  ],
  darkMode: "class",
};
export default config;
