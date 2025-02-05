/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gris: "#737072",
        azulOscuro: "#5F95D7",
        azulClaro: "#A0C3EE",
        celesteClaro: "#C1DDFF",
        amarilloOscuro: "#FDB900",
        amarilloClaro: "#FFEEC1",
        amarilloLogo: "#F6E77C",
        cremaClaro: "#FFFAED",
        celesteBoton: "#F1F6FD",
        botonPresionado: "#2F75CA",
        celestePopup: "#E2EFFF",
        fondoCeleste: "#F1F6FD",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      backgroundImage: {
        "header-background": "url('/HeaderBackground.png')",
        "login-background": "url('/imagenFondo.png')",
      },
      fontFamily: {
        puritan: ["Puritan", "serif"], // Fuente normal
        puritanItalic: ["PuritanItalic", "serif"], // Fuente en itálica (si es una fuente separada)
      },
    },
  },
  plugins: [],
};
