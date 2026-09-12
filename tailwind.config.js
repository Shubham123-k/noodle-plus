/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { ink:'#0b0b0b', cream:'#f7f3ec', chili:'#d93b2b', jade:'#2fa89a', gold:'#d9a441' },
    fontFamily: { display:['Georgia','serif'], sans:['Inter','ui-sans-serif','system-ui','sans-serif'] },
    boxShadow: { glow:'0 0 40px rgba(217,59,43,.18)' }
  }},
  plugins: []
}
