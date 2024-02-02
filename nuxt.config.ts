// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/algolia', "@nuxt/image"],
  runtimeConfig: {
    ALGOLIA_APPID: process.env.ALGOLIA_APPID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
    CTP_PROJECT_KEY: process.env.CTP_PROJECT_KEY,
    CTP_CLIENT_SECRET: process.env.CTP_CLIENT_SECRET,
    CTP_CLIENT_ID: process.env.CTP_CLIENT_ID,
    CTP_AUTH_URL: process.env.CTP_AUTH_UR,
    CTP_API_URL: process.env.CTP_API_URL,
    CTP_SCOPES: process.env.CTP_SCOPES,
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
    public: {
      ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
    }
  },
  algolia: {
    applicationId: process.env.ALGOLIA_APPID,
    apiKey: process.env.ALGOLIA_API_KEY,
    instantSearch: {
      theme: 'algolia'
    },
  },
})