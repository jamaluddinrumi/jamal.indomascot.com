module.exports = {
  important: true,
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {
      spacing: { 128: "32rem" },
      colors: {
        "rakarsa": "#206ee9",
        "whatsapp-teal-green": "#128C7E",
        "whatsapp-teal-green-dark": "#075E54",
        "whatsapp-light-green": "#25D366",
        "whatsapp-blue": "#34B7F1",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    purgeLayersByDefault: true,
  },
};
