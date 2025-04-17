import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { createWebHistory, createRouter } from 'vue-router'
import { createNotivue } from 'notivue'

import Main from './components/pages/Main.vue'

import 'notivue/notification.css' // Only needed if using built-in notifications
import 'notivue/animations.css' // Only needed if using built-in animations
import 'notivue/notification-progress.css'
import Menu from './components/pages/Menu.vue'
import Kemitraan from './components/pages/Kemitraan.vue'
import ContactUs from './components/pages/ContactUs.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/home', component: Main },
  { path: '/menu', component: Menu },
  { path: '/mitra', component: Kemitraan },
  { path: '/contact', component: ContactUs },
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

app.use(notivue)
app.use(router)
app.mount('#app')
