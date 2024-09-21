import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'primary': '0 4px 6px rgba(0, 123, 255, 0.5), 0 1px 3px rgba(0, 123, 255, 0.3)', // Example using a blue color
      },
      colors: {
        primary: '#2c89f6',    // Button background color
        secondary: '#b0d9f1',  // Card background color
        accent: '#2e2463',     // Text color
        dark: '#000000',       // Optional dark mode background
        light: '#ffffff',      // Optional light mode background
      },
      fontFamily: {
        sans: ['"Quicksand"', 'system-ui', 'sans-serif'], // Quicksand as primary font
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


