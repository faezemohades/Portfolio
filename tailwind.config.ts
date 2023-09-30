import type { Config } from 'tailwindcss'
const colors = require("tailwindcss/colors");
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...colors,
      primary: {
        ...colors.cyan,
        DEFAULT: colors.purple[500], // Use the desired shade of purple
      },
      secondary: {
        ...colors.pink,
        DEFAULT: colors.pink[500], // Use the desired shade of pink
      },
    },
  },
  plugins: [],
}
export default config
