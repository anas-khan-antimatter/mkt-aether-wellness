/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#E8EDE6',
          100: '#D4DBD2',
          200: '#BFC9BC',
          300: '#A5B5A1',
          400: '#8BA18A',
          500: '#6F8B6D',
          600: '#5A7560',
          700: '#48604C',
          800: '#354838',
          900: '#243228',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FCF8EF',
          200: '#F5EDDC',
          300: '#EDE2CA',
          400: '#E0D2B0',
          500: '#D4C097',
          600: '#C4AA7B',
          700: '#A8905D',
          800: '#8C7542',
          900: '#6F5A2D',
        },
        spa: {
          light: '#F7F4EE',
          DEFAULT: '#6F8B6D',
          dark: '#48604C',
          accent: '#C4AA7B',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'slow-spin': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};