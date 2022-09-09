/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#201f2d",
        headline: "#fffffe",
        paragraph: "#a7a9be",
        button: "#ff8906",
        buttonText: "#fffffe",
        stroke: "#000",
        main: "#fffffe",
        highlight: "#ff8906",
        secondary: "#f25f4c",
        tertiary: "#e53170",
      },
      gridTemplateColumns: {
        catalog: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
