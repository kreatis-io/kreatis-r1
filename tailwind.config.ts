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
        "0": "url('https://unsplash.com/photos/7XRcZ9fbkRQ/download?force=true')",
        "2": "url('https://unsplash.com/photos/eFbxYl9M_lc/download?force=true')",
        "1": "url('https://unsplash.com/photos/4ZFeOnVwoek/download?force=true')",
	"3": "url('https://unsplash.com/photos/6lQDFGOB1iw/download?force=true')"
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
