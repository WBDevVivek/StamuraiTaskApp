import type { Config } from "tailwindcss";

const config: Config = {
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
        "clearSky":"url('https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/netFlixProject%2FThe%20Lucky%20One%2FThe%20Lucky%20OneShortPoster.jpg?alt=media&token=60868c77-7e3e-49b8-bf78-80596fdfbea0')",
          
      },
      backgroundSize: {
          'clearSky': '100% 100%',
      },
      screens: {
        'xsm': '480px',
        'xxsm': '400px',
        // => @media (min-width: 360px) { ... }
      },colors: {
        "darkBackColor":"var(--darkBackColor)",
        "darkContaintColor":"var(--darkContaintColor)",
        "cloudySkyBackColor":"var(--cloudySkyBackColor)",
        "rainySkyBackColor":"var(--rainySkyBackColor)",
        "clearSkyBackColor":"var(--clearSkyBackColor)",




        


        // --------------------------------------------------
        "lightBackColor":"var(--lightBackColor)",
        "lightButtonColor":"var(--lightButtonColor)",

      },

    },
  },
  plugins: [],
  darkMode : "class",
};
export default config;
