/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-1': "url('/image-1.jpg')",
        'image-2': "url('/image-2.jpg')"
      },
      colors: {
        "sun-yellow": "#ffd64a"
      }
    },
  },
  plugins: [],
}

