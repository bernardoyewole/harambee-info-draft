/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,css}"],
  theme: {
    fontFamily: {
      'sans': 'Orbitron, sans-serif'
    },
    extend: {
      backgroundImage: {
        'hero': "url('/images/hero-harambee.jpg')",
      }
    },
    variants: {},
  },
  plugins: [
  ],
}