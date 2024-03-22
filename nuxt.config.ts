// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://static.cloud.coveo.com/atomic/v2/themes/coveo.css' },
      ],
      script: [{ src: 'https://static.cloud.coveo.com/atomic/v2/atomic.esm.js' }],
    },
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/algolia',
    "@nuxt/image",
    '@nuxtjs/apollo',
    'nuxt-auth-utils',
  ],
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
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENTID: process.env.AUTH0_CLIENTID,
    AUTH0_CLIENTSECRET: process.env.AUTH0_CLIENTSECRET,
    public: {
      ALGOLIA_INDEX: process.env.ALGOLIA_INDEX,
    },
    oauth: {
      auth0: {
        domain: process.env.AUTH0_DOMAIN,
        clientId: process.env.AUTH0_CLIENTID,
        clientSecret: process.env.AUTH0_CLIENTSECRET
      }
    }
  },
  algolia: {
    applicationId: process.env.ALGOLIA_APPID,
    apiKey: process.env.ALGOLIA_API_KEY,
    instantSearch: {
      theme: 'algolia'
    },
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE_ID}/environments/${process.env.CTF_ENVIRONMENT}`,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.CTF_CDA_ACCESS_TOKEN}`,
          },
        },
      }
    },
  },
  ssr: true
})