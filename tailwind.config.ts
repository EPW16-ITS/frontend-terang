import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        textCURegular: ["Crystal Universe Regular", "sans-serif"],
        textCUOblique: ["Crystal Universe Oblique", "sans-serif"],
        textHomica: ["Homica", "cursive"],
        textComic: ["Super Comic", "cursive"],
        text: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "10xl": ["152px", "144px"],
        "9xl": ["128px", "120px"],
        "8xl": ["96px", "90px"],
        "7xl": ["64px", "62px"],
        "6xl": ["48px", "58px"],
        "5xl": ["42px", "52px"],
        "4xl": ["36px", "44px"],
        "3xl": ["32px", "38px"],
        "2xl": ["24px", "30px"],
        xl: ["20px", "24px"],
        lg: ["18px", "22px"],
        base: ["16px", "18px"],
        sm: ["14px", "16px"],
        xs: ["12px", "14px"],
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",

        primary: {
          25: "#4B019F",
          50: "#341479",
          100: "#2F126D",
          200: "#2A1061",
          300: "#1F0C49",
          400: "#170936",
        },
        secondary: {
          25: "#EADEF7",
          50: "#E5CEFF",
          100: "#BA93E5",
          200: "#A784CE",
          300: "#8C6EAC",
          400: "#4D2C72",
        },
        third: {
          25: "#FEF9DE",
          50: "#FCEEA3",
          100: "#FBD921",
          200: "#DDBC06",
          300: "#BCA319",
          400: "#978214",
        },
        fourth: {
          25: "#FDCDD4",
          50: "#FCACB6",
          100: "#F85F73",
          200: "#C64C5C",
          300: "#953945",
          400: "#702B34",
        },
        fifth: {
          25: "#DDF3FF",
          50: "#B9E7FE",
          100: "#78D1FE",
          200: "#1DB2FD",
          300: "#037CB8",
          400: "#116B98",
        },

        accent: {
          disabled: {
            1: "#E0E0E0", // contoh warna background disabled
            2: "#BDBDBD", // contoh warna border/text disabled
          },
          neutral: {
            0: "#FFFFFF",
            25: "#FCFDFD",
            50: "#F9FAFB",
            100: "#F2F4F7",
            200: "#E4E7EC",
            300: "#D0D5DD",
            400: "#98A1B3",
            500: "#667085",
            600: "#475067",
            700: "#343C54",
            800: "#1D2339",
            900: "#101428",
          },
        },
      },
      screens: {
        "between-lg-xl": { min: "1024px", max: "1224px" },
        mn: { min: "1px", max: "639px" },
      },
    },
  },
  plugins: [],
};

export default config;
