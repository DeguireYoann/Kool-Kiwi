// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/algolia', "@nuxt/image"],
  algolia: {
    applicationId: 'YMETBLRZ62',
    apiKey: '330f01609f5c38ee5e895c1ff25e6e34',
    instantSearch: {
      theme: 'algolia'
    },
  },
  generate: {
    fallback: true // Activez la gestion de la page 404
  },
})