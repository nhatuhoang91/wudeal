import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        inter : ['var(--font-inter)']
      },
      colors:{
        'background' : '#fafafa',
        'foreground' : '#171717',
        'activated' : '#e5e5e5',
      }
    },
  },
  plugins: [],
}
export default config
