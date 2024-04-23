/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      cwhite: "#fff",
      cprimary: "#58016b",
      criplePrimary: "#58018b",
      cdark: "#000",
      cdanger: "#e61e1e",
      cgray: "#8f8c8c",
      cdarkPrimary: "#36033b",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
