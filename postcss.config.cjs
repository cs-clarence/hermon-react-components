const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const postcssNesting = require("postcss-nesting");
const tailwindcssNesting = require("tailwindcss/nesting");

const config = {
  plugins: [
    postcssImport(),
    tailwindcssNesting(postcssNesting),
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer(),
  ],
};

module.exports = config;
