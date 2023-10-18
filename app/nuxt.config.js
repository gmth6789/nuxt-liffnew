export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  mode: "spa",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vant Nuxt Demo',
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap'},
      { rel: 'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ],
    script: [
      { src: 'https://static.line-scdn.net/liff/edge/2.1/sdk.js' }
    ]
  },
  plugins: ['~/plugins/vant'],
  build: {
    modules: [
      [
        "@nuxtjs/firebase",
        {
          config: {
            apiKey: "AIzaSyAKEvJuhqLeWCR2jOZsnu7gzwMetRRqw7M",
            authDomain: "liffcard.firebaseapp.com",
            databaseURL: "https://liffcard-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "liffcard",
            storageBucket: "liffcard.appspot.com",
            messagingSenderId: "597795203569",
            appId: "1:597795203569:web:3e78ba18ee5d55d8de3c50",
            measurementId: "G-MCQHNMX8JK",
          },
          services: {
            auth: {
              initialize: {
                onAuthStateChangedMutation: "ON_AUTH_STATE_CHANGED_MUTATION",
              },
            },
          },
        },
      ],
    ],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            // 目前在 nuxt 中无法按需引入样式，因此采用手动引入的方式
            style: false
          },
          'vant'
        ]
      ]
    }
  }
  
};