// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  modules: [
    'nuxt-icon',
    'nuxt-svgo',
    '@nuxt/image',
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
  css: ['@/assets/scss/base.scss']
})
