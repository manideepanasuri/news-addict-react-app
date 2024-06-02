/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.html","./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#D84C29",
        secondary:"#40690A",
        primaryOps:"#0D0E12",
        secondaryOps:"#120E0D",
        coustomDark:"##516291",
        coustomDarkOps:"#10120D"
      }
    },
  },
  plugins: [],
}

