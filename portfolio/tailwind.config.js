/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    // custome theme


    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },


    // custome animation and shadow

    extend:
    {
      dropShadow: {
        'custom': '20px 20px 40px yellow',
        'custom-music': '1px 2px 6px white',
        'music-wave': '1px 1px 5px blue',
      },

      animation: {
        "hue-rotate": "hue-rotate 3s linear infinite",
        roll: 'roll 0.30s infinite',
        // man waking animation
        'move-left-to-right': 'moveLeftToRight 50s ease-in-out infinite',


      },


      keyframes: {
        "hue-rotate": {
          from: { filter: "hue-rotate(0deg)" },
          to: { filter: "hue-rotate(360deg)" },
        },
        roll: {
          '0%': { top: '0px' },
          '100%': { top: '-15px' },
        },

        // man waking animation

        moveLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },

          '49%': {
            transform: 'translateX(1000%)'
          },

          '50%': {
            transform: 'translateX(1000%) rotatey(180deg)'
          },

          '100%': {
            transform: 'translateX(-100%) rotatey(180deg)'
          },
        },

      },
    },
  },
  plugins: [],
};
