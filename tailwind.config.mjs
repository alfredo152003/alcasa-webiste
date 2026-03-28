/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        // Agregamos 'Archivo' como una familia de fuentes personalizada
        archivo: ['"Archivo Variable"', 'sans-serif'],
      },
      colors: {
        // Aprovecho para dejarte la paleta configurada aquí también
        alcasa: {
          green: '#78ab2c',
          orange: '#e67e00',
          dark: '#49494b',
          light: '#FAFAFA',
        }
      }
    },
  },
  plugins: [],
}