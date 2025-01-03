/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488',
        accent: '#F97316',
        background: {
            DEFAULT: '#1F2937',
            dark: '#111827',
        },
    },
    },
  },
  plugins: [require('daisyui'),],
}

