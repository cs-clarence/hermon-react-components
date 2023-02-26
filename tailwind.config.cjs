const material3 = require("@rencedm112/tailwind-md");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    material3({
      theme: {
        color: {
          seed: "#0070C9",
        },
      },
    }),
  ],
};
