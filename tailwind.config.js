/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue-start': '#2000E2', // 0%
        'blue-mid1': '#200B9E', // 14%
        'blue-mid2': '#201759', // 26%
        'blue-mid3': '#0D0925', // 41%
        'black-end': '#000000', // 75%
      },
    },
  },
  plugins: [],
};
