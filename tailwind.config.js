/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // Rich blue
          dark: '#1e40af',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#1f2937', // Dark gray
          dark: '#111827',
          light: '#374151',
        }
      },
      fontFamily: {
        'sans': ['Playfair Display', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}