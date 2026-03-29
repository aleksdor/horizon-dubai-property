/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          light: '#1a2d4a',
          dark: '#060e1a',
        },
        sand: {
          DEFAULT: '#f5f0e8',
          light: '#faf8f4',
          dark: '#e8dfd2',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b96a',
          dark: '#b0923d',
        },
        royal: {
          DEFAULT: '#1e3a5f',
          light: '#2a4d7a',
          dark: '#152a45',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
