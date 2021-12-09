export default {
  // https://nuxtjs.org/docs/features/loading
  loadingIndicator: {
    name: "wandering-cubes",
    color: "#003399",
    background: "#000000",
  },

  loading: {
    color: "#000000",
    height: "2px",
    throttle: 0,
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Ngoding Manusiawi - Ngoding Untuk Bermanfaat Seluas-Luasnya.",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/app"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv",
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
  ],

  image: {

  },

  // https://tailwindcss.nuxtjs.org/options
  tailwindcss: {
    viewer: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://i18n.nuxtjs.org/setup
    "@nuxtjs/i18n",
    // https://oruga.io/documentation/#setup
    "@oruga-ui/oruga/nuxt",
  ],

  // https://i18n.nuxtjs.org/setup
  i18n: {},

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "Ngoding Manusiawi",
      author: "Jamaluddin Rumi",
      description: "Website Ngoding Manusiawi",
      theme_color: "#0033cc",
      lang: "id",
      ogHost: process.env.BASE_URL,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
