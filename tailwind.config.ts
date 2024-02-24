import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      content: {
        'search': 'url("/src/assets/icons/MagnifyingGlass.svg")'
      },
      colors: {
        grey: {
          100: '#ebeeef',
          200: '#cfd5d9',
          300: '#c1c1c4',
          500: '#50505c',
          700: '#313137',
          800: '#1c1c1f',
          900: '#121214',
        },
        cyan: {
          500: '#0ab9e3',
        }
      },
    },
  },
  plugins: [],
};
export default config;
