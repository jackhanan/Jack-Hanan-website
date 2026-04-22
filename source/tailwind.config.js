/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arch-charcoal': '#1a1a1a',
        'arch-offwhite': '#f5f5f5',
        'arch-concrete': '#8c8c8c',
        'arch-accent': '#c28b6d', // muted copper
        'arch-black': '#0a0a0a', // matte black
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      gridTemplateColumns: {
        'masonry': 'repeat(auto-fill, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
}
