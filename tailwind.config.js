/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Important for your toggle
  theme: {
    extend: {
      colors: {
        brandBlue: '#0033ff', // The blue from your splash screen
        brandRed: '#ff0000',  // For live score pulses
        darkBg: '#0f172a',    // Dark mode background
        darkCard: '#1e293b',  // Dark mode card color
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
