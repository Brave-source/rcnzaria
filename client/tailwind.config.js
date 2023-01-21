/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "20% 1fr",
        adminSermon: "1fr 1fr auto auto auto",
      },
      gridTemplateRows: {
        layout: "auto 1fr",
      },
      boxShadow: {
        card: "0px 6px 12px rgba(0, 0, 0, 0.1)",
      },
      maxHeight: {
        cardHeight: "95%",
      },
    },
  },
  plugins: [require("daisyui")],
};
