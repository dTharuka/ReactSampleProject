/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        /* api dana colours apita one widiyata metana define karanna puluwan */
        'accents':{
          'abc':{
            300:'#000000',
            200:'#F7C04A',
            100:'#2C3E50'
          }
        }
      }
      // font-family: 'Playfair Display', serif;
      // font-family: 'PT Serif', serif;
      // fontFamily: {
      //   heading: ['Playfair Display', 'serif']
      //   // heading2: ['PT Serif', 'serif']
      // }
      
    },
  },
  plugins: [],
}
