/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(75%)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
