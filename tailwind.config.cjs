const material3 = require("@rencedm112/tailwind-md");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
      },
    },
  },
  plugins: [
    material3({
      theme: {
        color: {
          seed: "#0070C9",
          custom: {
            orange: "#F7821B",
            red: "#F23D44",
          },
        },
      },
    }),
  ],
};
