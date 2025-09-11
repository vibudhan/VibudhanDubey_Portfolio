/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './assets/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#B71C1C',
        'dark-red': '#7A0F0F',
        'accent-gold': '#D4AF37',
        'base-dark': '#0F0F10',
        'base-light': '#F5F5F5',
        'text-dark': '#EAEAEA',
        'text-light': '#1A1A1A',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'typewriter': 'typewriter 3.5s steps(44, end), blink .75s step-end infinite',
      },
      keyframes: {
        fadeInDown: { 'from': { opacity: 0, transform: 'translateY(-20px)' }, 'to': { opacity: 1, transform: 'translateY(0)' }, },
        fadeInUp: { 'from': { opacity: 0, transform: 'translateY(20px)' }, 'to': { opacity: 1, transform: 'translateY(0)' }, },
        typewriter: { 'from': { width: '0' }, 'to': { width: '100%' }, },
        blink: { 'from, to': { borderColor: 'transparent' }, '50%': { borderColor: '#D4AF37' }, },
      },
      boxShadow: { 'gold-glow': '0 0 25px rgba(212, 175, 55, 0.4)', },
    },
  },
  plugins: [],
}