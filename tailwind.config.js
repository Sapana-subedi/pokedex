/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        height: {
            'herobg': '600px',

        },
        width: {
            'search': '690px',
            'large': '30rem',

        },
        margin: {
            '5': '450px',
        }

    },
},
  plugins: [],
}