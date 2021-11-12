export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Asesorias Florez',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },,
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap'
      }
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  /*
 ** Auth module configuration
 ** See https://auth.nuxtjs.org/schemes/local.html#options
 */
  auth: {
    strategies: {
    local: {
    endpoints: {
    login: {
    url: 'auth/local',
    method: 'post',
    propertyName: 'jwt'
    },
    user: {
    url: 'users/me',
    method: 'get',
    propertyName: false
    },
    logout: false
    }
    }
    }
   },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://52.15.244.21:1337',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  //ssr:false
  loading: {
    color: 'blue',
    height: '5px',
    duration : 3000
  },

  server: {
    host: '0.0.0.0',
    port: 80
  }
}
