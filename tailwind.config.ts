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
        "header": `linear-gradient(
          0deg, 
          var(--color-secondary-alpha) 0%, 
          var(--color-primary-alpha) 100%)`,
          "footer": `linear-gradient(
            0deg, 
            var(--color-primary-alpha) 0%, 
            var(--color-secondary-alpha) 100%)`,
      },
      colors: {
        "secondary": "var(--color-secondary)",
        "third": "var(--color-third)",
        "fourth": "var(--color-fourth)",
      },
    },
  },
  plugins: [],
};
export default config;