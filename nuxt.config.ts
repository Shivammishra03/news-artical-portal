// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      newsApiKey: process.env.NEWS_API_KEY
    }
  },

  modules: ['@nuxtjs/tailwindcss']
})