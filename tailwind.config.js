/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-magenta': '#E91E8C',
        'accent-mint': '#A8E6A1',
        'primary-blue': '#2F5FCB',
        'deep-maroon': '#7A1224',
        'accent-yellow': '#F4C430',
        'bg-cream': '#FAF6EC',
        'board-beige': '#E6D3B6',
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
