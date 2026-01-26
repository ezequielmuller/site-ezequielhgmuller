import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  components: true,

  compatibilityDate: "2025-07-15",

  app: {
    head: {
      title: "Site Ezequiel Muller",
      htmlAttrs: {
        lang: "pt-BR",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo-title.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/logo-title.png",
          sizes: "192x192",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/logo-title.png",
          sizes: "512x512",
        },
      ],
    },
  },

  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: "static",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },
});
