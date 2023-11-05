/** @type {import('tailwindcss').Config} */
/* eslint @typescript-eslint/no-var-requires: "off" */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      minHeight: {
        app: 'calc(100vh - 80px)',
      },
      fontSize: {
        'icon-1': '2rem',
        'icon-2': '2.2rem',
        'icon-3': '1.7rem',
      },
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
      boxShadow: {
        glow: '0 0 60px 30px #fff, 0 0 90px 60px #f0f, 0 0 120px 80px #0ff',
        glowMd: '0 0 30px 10px #fff, 0 0 30px 10px #f0f, 0 0 60px 40px #0ff',
        javaGlow: '0 0 11px 10px #fff, 0 0 21px 20px #f0f, 0 0 10px 20px #0ff',
        reactGlow: '0 0 11px 8px #fff, 0 0 5px 2px #f0f, 0 0 21px 20px #0ff',
        gitGlow: '0 0 11px 20px #fff, 0 0 20px 14px #f0f, 0 0 23px 20px #0ff',
      },
      keyframes: {
        fadeIn: {
          to: {
            opacity: '1',
          },
        },
        float: {
          to: {
            transform: 'translate(0, -20px)',
          },
        },
        floatReact: {
          to: {
            transform: 'translate(10px, 10px)',
          },
        },
        floatGit: {
          to: {
            transform: 'translate(4px, -10px)',
          },
        },
        floatJava: {
          to: {
            transform: 'translate(6px, -8px)',
          },
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards 0.1s',
        float: 'float 2s infinite ease-in-out alternate',
        floatGit: 'floatGit 2s infinite ease-in-out alternate',
        floatJava: 'floatJava 2s infinite ease-in-out alternate',
        floatReact: 'floatReact 2.5s infinite ease-in-out alternate',
        'waving-hand': 'wave 2.5s linear infinite',
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
