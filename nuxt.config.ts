// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    newsApiKey: process.env.NEWS_API_KEY || 'your_default_api_key_here'
  },

  modules: ['@nuxtjs/tailwindcss']
})