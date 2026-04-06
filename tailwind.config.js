/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Critical for your dark/white mode toggle
  theme: {
    extend: {
      colors: {
        brandBlue: "#0033ff", // MatchFlash Blue
        darkBg: "#0f172a",    // Deep Navy for dark mode
      },
    },
  },
  plugins: [],
};
