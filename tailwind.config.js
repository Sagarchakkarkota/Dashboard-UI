/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      mxl: { max: "1390px" },
      // => @media (max-width: 1390px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      minsm: "640px",
      // => @media (min-width: 640px) { ... }

      minmd: "768px",
      // => @media (min-width: 768px) { ... }

      minlg: "1024px",
      // => @media (min-width: 1024px) { ... }

      minxl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      colors: {
        button_green: "#CDF465",
        primary_blue: "#1035BD",
        background_white: "#FFF5FF",
        primary_color: "#7A71A4",
        text_gray: "#3d3d3d",
      },
      gridTemplateColumns: {
        50: "repeat(8, 50px)",
      },
      boxShadow: {
        testShadow: " 0px 0px 20px 4px rgba(199,199,199,1)",
      },
    },
  },
  plugins: [],
};
