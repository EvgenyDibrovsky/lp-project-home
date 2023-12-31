/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.js", "./src/**/*.html"],
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    screens: {
      lg: '768px',
      xl: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        xl: '0px',
      },
      screens: {
        lg: '768px',
        xl: '1170px',
      },
    },
    fontSize: {
      base: ['16px', '25px'],
      navMenu: ['12px', '12px'],
      textBtn: ['12px', '12px'],
    },
    extend: {
      colors: {
        textBase: '#333',
        titleH2: '#BDBDBD',
        titleH3: '#fff',
        titleH4: '#fff',
        bgHeader: '#00183C',
        bgHeaderFixed: '#F9F9F9',
        navHeader: '#333',
        bgFooter: '#2C2C2C',
        borderFooter: 'rgba(255, 255, 255, 0.10)',
        colorTextBtn: '#333',
        colorText: '#333',
        bgBtnDark: '#333',
        bgHoverBtn: '#F9F9F9',
        bgAboutBox: '#FBFBFB',
        listNuber: '#F2F2F2',
        portfolioBg: '#333',
        bgInput: '#F3F3F3;',
        focusInput: '#ccd7e1',
        iconDark: '#333',
        iconLight: '#fff',
      },
      animation: {
        'animate-1': 'fade-in-el 1s ease-out',
        'animate-2': 'slide-up-el 1s ease-out',
        'animate-3': 'slide-down-el 1s ease-out',
        'animate-4': 'slide-left-el 1s ease-out',
        'animate-5': 'slide-right-el 1s ease-out',
      },
      keyframes: {
        'fade-in-el': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up-el': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down-el': {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-left-el': {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-right-el': {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
