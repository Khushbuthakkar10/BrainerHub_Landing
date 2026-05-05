/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#ff6b7a',
          500: '#bf4252',
          600: '#9b3542',
        },
        dark: {
          900: '#0b0b0d',
          800: '#111114',
          700: '#151518',
          600: '#222226',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(191, 66, 82, 0.4)',
        'glow-lg': '0 0 60px -15px rgba(191, 66, 82, 0.5)',
      }
    },
  },
  plugins: [],
}
