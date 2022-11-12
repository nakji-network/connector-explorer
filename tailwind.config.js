/** @type {import('tailwindcss').Config} */
// Default Tailwind configuration
// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ["active"],
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        black: {
          100: "#121212",
        },
        orange: {
          primary: "#FFAF3F",
          secondary: "#ED7039",
        },
      }),
      fontFamily: {
        ArcoSemi: ["ArcoPerpetuoPro-SemiBold"],
        ArcoLight: ["ArcoPerpetuoPro-Light"],
        ActionMedium: ["ActionSans-Medium"],
        ActionBold: ["ActionSans-Bold"],
      },

      colors: {
        black: {
          100: "#121212",
        },
        yellow: {
          500: "#FFAF3F",
        },

        orange: {
          primary: "#FFAF3F",
          secondary: "#ED7039",
        },
      },
      backgroundImage: (theme) => ({
        "gradiant-primary":
          "linear-gradient(86.45deg, #FFAF3F 0%, #E34F35 134.82%)",
        "gradiant-secondary":
          "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 10.42%)",
        blockchain:
          "linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 34.9%)",
        "gradiant-orange":
          "linear-gradient(211.37deg, #FFAF3F 44.82%, #E34F35 116.55%)",
        testimonial: "url(../images/bg-testimonial.png)",
      }),
      boxShadow: {
        'md': '0px 0px 2px 2px rgba(0, 0, 0, 0.10)',
        'lg': '0px 0px 4px 2px rgba(0, 0, 0, 0.15)',
      },
      width: {
        '7/10': '70%',
      },
      maxWidth: {
        '7/10': '70%',
        '8xl': '86rem',
      },
      minWidth: {
        '7/10': '70%',
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
  ],
};
