/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customrgba: "#ffffff30",
        lightBlack: "#0F0E12",
        delta: "#242526",
        sky: "#2563eb4d",
        dark: "#010725",
        dark2: "#101013",
        dark3: "#121212",
        grey: "#A1A1AA",
        darkBlue: "#221641",
        grey2: "#333",
        lightBlue: "#0328EE4D",
        blue: "#0328EE",
      },
      fontSize: {
        "2xl": "25px",
        "3xl": "33px",
        "4xl": "42px",
        "5xl": "45px",
        "6xl": "48px",
        "7xl": "50px",
        "8xl": "58px",
        "9xl": "72px",
      },
      backgroundImage: {
        "gray-gradient":
          "Linear-gradient(0deg, #24242A, #24242A),linear-gradient(76.21deg, #0E0E0E 49.05%, #292929 102.66%)",
        multicolor:
          "linear-gradient(-170deg,#ffffff 0%,#7e7bff 53.65%,#ff00df 100%)",
      },
    },
  },
  plugins: [],
};
