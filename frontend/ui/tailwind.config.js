module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#457B9D",
        secondary: "#E5E5E5",
        accent: "#E63946",
        dark: "#283845",
      },
      fontFamily: {
        "league-gothic": ["League Gothic", "sans-serif"],
        franklinGothic: ["Franklin Gothic Heavy", "sans-serif"],
        koulen: ["Koulen", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#457B9D",
          secondary: "#E5E5E5",
          accent: "#E63946",
          neutral: "#283845",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
