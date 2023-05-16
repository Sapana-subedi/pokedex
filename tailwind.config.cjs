/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
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