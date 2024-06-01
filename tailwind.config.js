/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class' ,
  content:  [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    extend: {
      spacing: {
        'container': '1320px',
          '500': '500px',
          '330': '330px',
          '60': '60px',
          '50': '50%',
          '580': '580px',
          '150': '150px',
          'M10': '-10%',
          'M5': '-5%',
          '28': '28%',
          '673': '593px',
          '872': '872px',
          '58%': '58%',
          '40%': '40%',
          '110px': '110px',
          '190px': '190px',
          

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif',],
        'raleway': ['Raleway', 'sans-serif',],
        'oxanium': ['Oxanium', 'sans-serif',],
      },
      colors: {
        'navbg': '#FDF8EF',
        'btnbg': '#FFE4D9',
        'primary': '#F95C19',
        '4D4D4D': '#4D4D4D',
        'FFAF0F': '#FFAF0F',
        '222132': '#222132',
        '9291A1': '#9291A1',
        'C5C5D2': '#C5C5D2',
        'FEF5E3': '#FEF5E3',
        '5C5B6C': '#5C5B6C',
        '464558': '#464558',
        'EBEBF5': '#EBEBF5',
        '2F2E41': '#2F2E41',
      },
      lineHeight: {
        '110%': '110%',
        '120%': '120%',
        '145%': '145%',
      }
    },
    fontSize: {
      32: '32px',
      20: '20px',
      48: '48px',
      16: '16px',
      25: '25px',
      39: '39px',
      80: '80px',
      105: '105px',
    }
  },
  plugins: [],
}

