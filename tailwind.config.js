/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-clay-dark': '#1A100B',
      },
      fontFamily: {
        'devanagari': ['"Rozha One"', 'serif'],
        'serif-title': ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
