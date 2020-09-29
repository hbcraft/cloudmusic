import VueRouter from 'vue-router'
declare module 'vue-router/types/router' {
  interface VueRouter {
    history: {
      current: {
        name: string
      }
    }
  }
}