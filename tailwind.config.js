/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#2ecc71",
        dark: "#2c3e50",
        light: "#ecf0f1",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
