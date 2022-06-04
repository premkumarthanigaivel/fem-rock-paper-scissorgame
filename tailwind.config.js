module.exports = {
  content: ["./pages/*.{js,ts,jsx,tsx}", "./components/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      barlow: "'Barlow Semi Condensed', sans-serif",
    },
    extend: {
      colors: {
        "header-outline": "hsl(217, 16%, 45%)",
        "paper-outline": "hsl(230, 89%, 65%)",
        "scissor-outline": "hsl(40, 84%, 53%)",
        "rock-outline": "hsl(349, 70%, 56%)",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(hsl(214, 47%, 23%),hsl(237, 49%, 15%))",
      },
    },
  },
  plugins: [],
}
