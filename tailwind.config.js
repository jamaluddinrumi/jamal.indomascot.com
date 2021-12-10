const colors = require('tailwindcss/colors')

module.exports = {
  important: true,
  mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
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
        amber: colors.amber,
        orange: colors.orange,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
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
