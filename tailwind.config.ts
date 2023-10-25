import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#151720",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // font-family: Roboto, Helvetica, Arial, sans-serif
      },
      aspectRatio: {
        mobile: '9 / 18',
      },
      icon: {
        white: "fill: white;"
      },
    },
  },
  plugins: [],
}
export default config
