export default {
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "Ticketr",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Ticketr"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js modules
   ** Doc: https://modules.nuxtjs.org
   */
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyA77SCrUyT-tasrTkG-v4crRskvmEiyUig",
          authDomain: "ticketr-app.firebaseapp.com",
          projectId: "ticketr-app",
          storageBucket: "ticketr-app.appspot.com",
          messagingSenderId: "755995675808",
          appId: "1:755995675808:web:094df394700774bd6c8dc5",
          measurementId: "G-00EWSBPVNJ"
        },
        services: {
          auth: true
        }
      }
    ]
  ],

  /*
   ** Global CSS
   ** Doc: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-css
   */
  css: ["@/static/assets/bootstrap.min.css", "@/static/assets/var.css"],

  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/docs/2.x/directory-structure/plugins
   */
  plugins: []
};
