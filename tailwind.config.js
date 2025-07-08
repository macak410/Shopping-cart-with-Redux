/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        wiggle: {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '25%': { transform: 'rotate(-6deg)' },
            '75%': { transform: 'rotate(6deg)' },
          },
        softBounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },
          },
        bounceRotate: {
          '0%, 100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '30%': {
            transform: 'translateY(-6px) rotate(-4deg)',
          },
          '60%': {
            transform: 'translateY(-3px) rotate(4deg)',
          },
        },
      },
      animation: {
        pop: 'pop 0.3s ease-out',
        wiggle: 'wiggle 0.4s ease-in-out',
        softBounce: 'softBounce 0.5s ease-in-out',
        bounceRotate: 'bounceRotate 0.6s ease-in-out',
      },
      colors: {
        candy: '#FF90B3',
        sunshine: '#FFD93D',
        mint: '#A0F0C0',
      },

    },
  },
  plugins: [require('@tailwindcss/typography')],
};
