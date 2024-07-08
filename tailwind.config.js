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
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      fontSize: {
        "1.3rem": "1.3rem",
        "1.1rem": "1.1rem",
        "2.5xl": "2.5rem",
      },
      lineHeight: {
        "50px": "50px",
        "40px": "40px",
      },
      zIndex: {
        '99': '99',
      },
      colors: {
        primary: "#0D2F3F",
        secondary: "#286F6C",
        secondaryWhite: "#E7E7E7",
        content: "#393C5A",
        mainBg: "#F8F7F1",
        misys: "#7CC1B9",
        circleGreen: "#286F6C",
        circleRed: "#F2704E",
        circleYellow: "#EEC048",
      },
      backgroundImage: {
        hero: "url('./assets/hero.png')",
        dashedLine: 'linear-gradient(to bottom, transparent 50%, #393C5A 50%)'
      },
      backgroundSize: {
        dashedSize: '2px 30px', // 調整這裡改變虛線的間距
      },
    },
  },
  plugins: [],
};
