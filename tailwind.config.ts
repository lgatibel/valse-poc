import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'profil-card': '0px 0px 10px 5px',
      },
      colors: {
        primary: "#151720",
        shadow: "#b3badb4d",
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
