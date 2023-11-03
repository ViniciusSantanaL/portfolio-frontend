/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          850: '#202024',
          925: '#121214',
        },
        purple: {
          750: '#483285',
        },
        blue: {
          550: '#4863f7',
          975: '#182049',
        },
      },
      textShadow: {
        principal:
          '-1px 0 #483285, 0 2px #483285, 4px 0 #483285, 0 -1px #483285',
      },
      keyframes: {
        fadeIn: {
          opacity: '0',
          transform: 'translateY(-2px)',
        },
        to: {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      animation: {
        fadeIn: '0.5s ease-in-out forwards 0.1s',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
