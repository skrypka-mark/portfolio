// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  modules: [
    'nuxt-icon',
    'nuxt-svgo',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  svgo: {
    autoImportPath: './assets/icons/',
    defaultImport: 'component'
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@/assets/scss/_variables.scss';
            @import '@/assets/scss/_main.scss';
          `
        }
      },
      modules: {
        generateScopedName: '[hash:base64:6]'
      }
    }
  },
  css: ['@/assets/scss/base.scss'],
  runtimeConfig: {
    public: {
      FB_AUTH_DOMAIN: 'portfolio-58bfe.firebaseapp.com',
      FB_PROJECT_ID: 'portfolio-58bfe',
      FB_STORAGE_BUCKET: 'portfolio-58bfe.appspot.com',
      FB_MESSAGING_SENDER_ID: '16345675056',
      FB_APP_ID: '1:16345675056:web:cfa5fe6ea92ef2301844f5',
      FB_MEASUREMENT_ID: 'G-1NBG7J8H2Q',
      EXCLUDED_IPS: ['89.64.68.39', '178.136.53.175']
    }
  }
})
