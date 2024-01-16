/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundColor: {
        cream: "#fff5ea",
        // purple: "#8962f0",
        purple: "#8961f4",
        lesspurple: "#9a6de8",
        evenlesspurple: "#ab78dd",
        green: "#14de5e",
        whiter: "#f5f2f2",
        blacker: "#1b0b3b",
      },
      textColor: {
        cream: "#fff5ea",
        purple: "#8962f0",
        lesspurple: "#9a6de8",
        evenlesspurple: "#ab78dd",
        green: "#14de5e",
        whiter: "#f5f2f2",
        blacker: "#1b0b3b",
      },
      borderColor: {
        cream: "#fff5ea",
        purple: "#8962f0",
        lesspurple: "#9a6de8",
        evenlesspurple: "#ab78dd",
        green: "#14de5e",
        whiter: "#f5f2f2",
        blacker: "#1b0b3b",
      },
    },
  },
};
