/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rustic-cream': '#F5F1E8',
        'rustic-beige': '#E8DCC4',
        'rustic-tan': '#D4C5A9',
        'rustic-brown': '#8B7355',
        'rustic-dark': '#5C4A3A',
        'rustic-steel': '#6B7280',
      },
    },
  },
  plugins: [],
};
