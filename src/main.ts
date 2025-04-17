import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createWebHistory, createRouter } from 'vue-router'
import { createNotivue } from 'notivue'

import Main from './components/pages/Main.vue'
import VueVisibleClass from 'vue-visible-class'

import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations
import 'notivue/notification-progress.css'

const routes = [
  { path: '/', component: Main },
  { path: '/home', component: Main },
  { path: '/menu', component: () => import('./components/pages/Menu.vue') },
  { path: '/mitra', component: () => import('./components/pages/Kemitraan.vue') },
  { path: '/contact', component: () => import('./components/pages/ContactUs.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
const notivue = createNotivue({
  enqueue: false, // default
  limit: 5, // default
})

const app = createApp(App)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})

app.use(VueVisibleClass, {
  directiveName: 'visible-class', // String, optional, name for directive, default: 'visible-class'
  globalClass: 'animated', // String or String[], optional, class to add for all elements with directive when scrolled
})
app.use(notivue)
app.use(router)
app.mount('#app')
