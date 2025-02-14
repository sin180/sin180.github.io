import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./contents/**/*.md",
  ],
  theme: {},
  plugins: [],
};
export default config;
