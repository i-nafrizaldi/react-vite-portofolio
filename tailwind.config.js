/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        megrim: ["Megrim", "system-ui"],
        bodoni: ["Bodoni Moda", "serif"],
        chonburi: ["Chonburi", "serif"],
        limelight: ["Limelight", "sans-serif"],
        aboreto: ["Aboreto", "system-ui"],
        italiana: ["Italiana", "sans-serif"],
        gloock: ["Gloock", "serif"],
        montserrat:["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};
