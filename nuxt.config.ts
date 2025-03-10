// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://example.com/api',
    },
  },
  app: {
    baseURL: '/activity-front/',
  },
})
