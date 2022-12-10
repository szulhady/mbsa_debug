import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4dc8c740 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _0337929a = () => interopDefault(import('..\\pages\\building.vue' /* webpackChunkName: "pages/building" */))
const _391380da = () => interopDefault(import('..\\pages\\details.vue' /* webpackChunkName: "pages/details" */))
const _7a3f94e8 = () => interopDefault(import('..\\pages\\landing.vue' /* webpackChunkName: "pages/landing" */))
const _7153eb7a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0cb9fdd7 = () => interopDefault(import('..\\pages\\main.js' /* webpackChunkName: "pages/main" */))
const _59ae79bc = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _b0a76f3a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _4dc8c740,
    name: "admin"
  }, {
    path: "/building",
    component: _0337929a,
    name: "building"
  }, {
    path: "/details",
    component: _391380da,
    name: "details"
  }, {
    path: "/landing",
    component: _7a3f94e8,
    name: "landing"
  }, {
    path: "/login",
    component: _7153eb7a,
    name: "login"
  }, {
    path: "/main",
    component: _0cb9fdd7,
    name: "main"
  }, {
    path: "/register",
    component: _59ae79bc,
    name: "register"
  }, {
    path: "/",
    component: _b0a76f3a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
