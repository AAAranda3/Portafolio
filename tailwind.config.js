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
      colors: {
        primary: '#845EC2',    // Button background color
        secondary: '#F5F0EA',  // Card background color
        accent: '#3F0E76',     // Text color
        dark: '#121212',       // Optional dark mode background
        light: '#F5F5F5',      // Optional light mode background
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
