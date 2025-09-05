/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2F4156',
        warm: '#FD7E14',
      },
    },
  },
  plugins: [react()],
}
