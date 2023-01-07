/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            './*.html'
  ],
  theme: {
    screens: {
      'sm': '767px',
      // 'md': '480px',
      'md': '1024px',
      'lg': '1201px',
      'xl': '1440px'
      // '2xl': '1440px'
    },
    extend: {
      fontFamily: {
        'body': ['"Kumbh Sans"', 'sans-serif']
      },
      colors: {
        /**Primary Colors */
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
        /**Neutral Colors */
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        /**Black with 75% opacity for lightbox background */
        black: 'hsl(0, 0%, 0%)'
      },
      boxShadow: {
        'lg': '0 10px 10px - 4px rgba(255, 125, 26 / 1), 0 2px 4px - 2px rgba(255, 125, 26 / 0.1);'
      },
    },
  },
  plugins: [],
}
