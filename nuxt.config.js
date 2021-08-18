import pwa from './pwa.config'
import smConfig from './sm.json'

const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

export default {
  target: 'static',
  head: {
    title: 'NXT YOU',
    titleTemplate: '%s - Make Your Vision Come Reality.',
    htmlAttrs: {
      lang: 'de',
    },
    bodyAttrs: {
      class: 'bg-black text-white',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      /*
    { rel: 'manifest', href: '/site.webmanifest' },
    */
    ],
    script: [
      {
        src: 'https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js',
      },
    ],
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    dev: process.env.NODE_ENV !== 'production',
  },
  plugins: [
    '~/plugins/vue-awesome-swiper.client.js',
    '~/plugins/vue-check-view.js',
    '~/plugins/simple-parallax.client.js',
    '~/plugins/vue-range-component.client.js',
    '~/plugins/vuelidate.js',
    '~/plugins/jsonld.js',
    '~/plugins/vue-gtag.client.js',
  ],
  components: {
    dirs: ['~/components/home', '~/components/layout', '~/components/shared'],
  },

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/svg',
    'nuxt-gsap-module',
    '@nuxtjs/toast',
    '@nuxtjs/pwa',
    'cookie-universal-nuxt',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/prismic', 'nuxt-sm'],
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
  },
  toast: {
    position: 'bottom-right',
    duration: 3000,
  },
  pwa,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  prismic: {
    endpoint: smConfig.apiEndpoint,
    modern: true,
    apiOptions: {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      routes: [
        {
          type: 'page',
          path: '/:uid',
        },
      ],
    },
  },
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm'],
  },
  storybook: {
    stories: [...getStoriesPaths()],
  },
  ignore: ['**/*.stories.js'],
}
