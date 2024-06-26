/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "hsl(75, 94%, 57%)",
        customWhite: "hsl(0, 0%, 100%)",
        customGray: "hsl(0, 0%, 20%)",
        customDarkGray: "hsl(0, 0%, 12%)",
        customBlack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".button-hover": {
          backgroundColor: "hsl(75, 94%, 57%)",
          color: "black",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
