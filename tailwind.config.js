/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Epilogue: "sans-serif",
      },
      colors: {
        "gray-500": "hsl(0, 0%, 41%)",
        "gray-100": "hsl(0, 0%, 98%)",
        "black-100": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
