/** @type {import('tailwindcss').Config} */

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'black-primary': '#1E1E1E',
      'pink-primary': '#FF8F8F',
      'green-primary': '#9ADE7B',
      'yellow-primary': '#EEF296',
      'dark-green-primary': '#508D69',
      'red-primary': '#FF4545',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {},
  },
  plugins: [],
};
