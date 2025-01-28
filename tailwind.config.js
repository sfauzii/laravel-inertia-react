import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.jsx',
        './resources/**/*.js'
    ],
    theme: {
        extend: {
            // fontFamily: {
            //     sans: ['Figtree', ...defaultTheme.fontFamily.sans]
            // }
            boxShadow: {
                custom: '0px 48px 100px 0px rgba(17, 12, 46, 0.15)', // Bayangan kustom
                hoverHighlight: '0 0 0 .25rem #0d6efd40'
            },
            colors: {
                coral: '#FF7F50',
                primary: '#2447f9' // Warna coral untuk hover background
            },
            transitionDuration: {
                400: '400ms' // Durasi transisi kustom
            }
        }
    },
    plugins: []
}
