/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poopins: ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#011c5f',
        'blue-secondary': '#003378',
        'yellow-primary': '#ffdb00',
        'yellow-secondary': '#ffdb8a',
      },
      colors: {
        primary: '#011c5f',
        'yellow-primary': '#ffdb00',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
