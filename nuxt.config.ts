import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  components: true,

  compatibilityDate: '2025-07-15',

  app: {
    baseURL: '/',
    head: {
      title: 'Site Ezequiel Muller',
      htmlAttrs: {
        lang: 'pt-BR',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo-title.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo-title.png',
          sizes: '192x192',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo-title.png',
          sizes: '512x512',
        },
      ],
    },
  },

  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: 'vercel',
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
    storage: {
      public: {
        driver: 'fs',
        base: './public',
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  typescript: {
    strict: true,
    typeCheck: true,
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  image: {
    provider: 'ipx',
    domains: ['site-ezequielhgmuller.vercel.app'],
  },
})
