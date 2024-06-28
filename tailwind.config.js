/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0D2F3F",
        secondary: "#286F6C",
        secondaryWhite: "#E7E7E7",
        content: "#393C5A",
        mainBg: "#F8F7F1"
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
