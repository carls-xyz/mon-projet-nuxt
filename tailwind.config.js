/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts}", // Ajoute ce dossier pour scanner les composants internes à app/
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#EEF1FF',
        tertiary: '#463ADD',
        borderColor: '#F0F0F3',
        pcolor: '#81828C',
        background: '#F9F9FB',
        violet: '#FF00FB',

      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // utile si tu veux ajouter Inter
      },
      letterSpacing: {
        wide10: '0.1em', // si tu veux gérer ton 10% de letter-spacing depuis Figma
      },
    },
  },
  plugins: [],
}