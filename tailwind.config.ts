import material3 from "@tailwind-md/plugin";

/** @type {import('tailwindcss').Config} */
export default {
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
