/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/atoms/**/*.{js,ts,jsx,tsx,mdx}',
    './src/view/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        "toast-left": "toastInLeft 2.6s forwards",
        "toast-right": "toastSlideInRight .6s forwards",
        "toast-slide-out-left": "toastSlideOutLeft .6s",
        "toast-slide-out-right": "toastSlideOutRight .6s",
      },
      keyframes: {
        toastInLeft: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0.6,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        toastSlideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0.6,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        toastSlideOutRight: {
          "0%": {
            transform: "translateX(0)",
            opacity: 1
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
        },
        toastSlideOutLeft: {
          "0%": {
            transform: "translateX(0)",
            opacity: 1,
          },
          "100%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
